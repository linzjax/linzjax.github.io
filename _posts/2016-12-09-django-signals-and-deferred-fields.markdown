---
title:  "Django Signals and Deferred Fields"
date:   2016-12-09 11:00:00
categories: how-to
excerpt: "<p>Last week I discovered that django signals and deferred fields don't play well together, but there's a solution.</p>"
---

Django Signals and Deferred Fields

A little while ago I had implemented a bug fix using Django signals to detach an object before any object it was attached to was deleted. It was a `Resource` object that contained `ContentObject`s that connected it to various other objects (we'll say it was a `Record`). If a `Record` was deleted, that `ContentObject` stuck around, so when you tried to view the `Resource`, the `ContentObject` ran a query for a `record` that was no longer there and it threw an error. For a solution I turned to Django's `signals`:

```python
from django.db.models.signals import pre_delete

@receiver(pre_delete, sender='Record')
def detach_object_resources(sender, instance, **kwargs):
    for resource in instance.resources:
        content_object = resource.content_objects.get(
            object_id=instance.id)
        content_object.delete()
```

The sender (an object with a `Record` class), notified the signal that it was about to be deleted, so it looked through that particular record `instance` to see what `resources` were attached to it. It made sure to look through all of those connections and  delete their corresponding `content_objects`. The `resource` stuck around, but nothing associated with that `record` would. And thus I happily moved along with my life.

Until the view changed.

For one of our Django views, `get_queryset()` retrieved a list of `Record` objects, but we decided we didn't need _all_ of the fields associated with it, so we added `defer()`:

```python
class RecordList(generic.DetailView):
    ...
    def get_queryset(self, *args, **kwargs):
        return Record.objects.all().defer('attributes')
```

Seems harmless enough: now you get `Record` objects, just without their `attributes`, which we didn't need for this view. The problem is this no longer triggered the signal receiver. Turns out, if you use `.defer()` or `.only()`, the object that returned is no longer `<class record.objects.Record>`

Instead you get `<class record.objects.Record_Deferred_Attributes>`.

So the `pre_delete` signal is no longer being triggered because it's not getting a `Record` class. It's getting a `Record_Deferred_Attributes` class.

So in order to fix this, you need to check if your sender has been deferred:

```python
@receiver(pre_delete)
def detach_object_resources(sender, instance, **kwargs):
    sender = sender.__base__ if sender._deferred else sender

    if sender.__name__ == 'Record':
        for resource in instance.resources:
            content_object = resource.content_objects.get(
                object_id=instance.id,
                resource__project__slug=instance.project.slug)
            content_object.delete()
```

Calling `.__base__` checks the original object associated with the deferred object. Since you can no longer check it outside the function, you'll have to double check if the sender is a `Record`, and after that everything runs as expected.

Aren't Django's quirks fun?