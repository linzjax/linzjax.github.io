---
title:  "Rails, Turbolinks, and Event Listeners"
date:   2016-2-24 12:12:10
excerpt: "<p>A few weeks ago, I was happily puttering along making my accordion menu for the new Field Papers UI (cue "oohs and aaahs"), when Ian pointed out that it sporadically wasn't working. After a bit more investigating, I discovered the culprit: Turbolinks.</p>"
---

I finally learned to spell a-c-c-o-r-d-i-o-n. A few weeks ago, I was happily puttering along making my accordion menu for the new Field Papers UI (cue "oohs and aaahs"), when Ian pointed out that it sporadically wasn't working. The menu items wouldn't allow you to click on them, but refreshing the page seemed to fix it. After determining that this was indeed a bit odd, I set about to find a solution.

After a bit more investigating, I determined that it only occurred when you started from a different page and then clicked on a link to the compose page. For example, I enter through the home url, click "Make an atlas", and click forlornly on non-responsive accordion menus. Refresh the page, and triumphantly click on beautifully responsive accordion menus. This was a less than ideal situation, so after gathering evidence I discovered the culprit: [Turbolinks](https://github.com/turbolinks/turbolinks).

Turbolinks is a Rails plugin that allows your rails app to behave like a single page application, and only loads the JavaScript and CSS once, instead of between each page change. In most circumstances, this would be fantastic. Faster load times, happier visitors, everyone wins.

__BUT__

The problem that I was running into is that since Turbolinks runs all of the JavaScript files once, and only once, my poor event listeners were trying to find objects that didn't exist and giving up hope after the first page load. This explains why it worked when you refreshed the page, but didn't work when you started somewhere else.

```
$(document).on("ready", function(){
   //sad code that never happens :(
});
```

Thankfully, once the culprit was identified, the fix was rather simple. Turbolinks has its own events, so instead of _ready_ we listen for _page:change_:

```
$(document).on("page:change", function(){
   //happy code that's executed every time you go to a new page :D
});
```

Another option is to disable Turbolinks in all of the connecting ``<a>`` tags.

```
<a data-no-turbolink="true" href="<%= compose_path %>">
```

And voila! Your JavaScript and CSS are reloaded only on the important pages.