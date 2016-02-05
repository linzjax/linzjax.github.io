---
layout: post
title:  "First Major PR for Outreachy"
author: Lindsey Jacks
date:   2016-2-5 12:12:09
categories: outreachy
comments: True
excerpt: "<p>It's done! Well, sort of. This week I submitted my first major pull request for all of the work I've been doing on Field Paper's UI. After two months of drawing up mocks, working through experiments, and putting together a working product, Ian and I finished putting all the pieces into something that's actually functional. Is it any good? We'll see, but at least it works!</p>"
---

#__It's done!__

<div class='blog-image'><img src='https://camo.githubusercontent.com/106be48a5af95926193a9f17d5af81889a1d0ea6/687474703a2f2f692e696d6775722e636f6d2f6771305646444e2e706e67'></div>
<br />

Well, sort of. This week I submitted my first major pull request for all of the work I've been doing on Field Paper's UI. After two months of [drawing up mocks](http://linzjax.github.io/outreachy/2015/12/24/research-rethink-redesign.html), [working through experiments](http://linzjax.github.io/outreachy/2016/01/08/outreachy-and-the-messy-reality-of-ui.html), and putting together a working product, Ian and I finished putting all the pieces into something that's actually functional. Is it any good? We'll see, but at least it works!

During this last chunk of the process I've been learning enough Rails to get by. I've worked with Node and Flask in the past, so I have a solid understanding of the basic model view controller structure. I understand what routing is, and how to use template languages such as Jade and Handlebars. When I initially started going through the Rails tutorial, it seemed like familiar territory. But imagine setting out on a cross-country hike, and expecting to come across some challenges: a forest to stumble through, a mountain to scale. However, when you get there, someone's already cut a clear path through the forest and put up a nice fence with a few benches along the way in case you get tired. They've also installed an elevator at the bottom of the mountain, so all that climbing gear you've been caring around now seems silly and useless. That's how I felt learning Rails. I've implemented user accounts in the past using Passport, and all of the other libraries that are required to create secure user accounts, and along comes Rails with it's magical User model generator and `has_secure_password`. It's very disorienting and makes you almost feel like you're no longer involved in the process. It's not that the elevator to the top of the mountain isn't nice, you're just vaguely suspicious because you can't tell how it works and can't see who's operating it...

<div class='blog-image-small'><img src='http://cdn02.wallpapersonweb.com/media/w1920x1080/cartoons2/27941-suspicious-fry-futurama-cartoon-desktop-wallpaper-1920x1080.jpg'></div>

In the end I slogged (or strolled) through, and learned just enough Rails to be able to reconfigure my static Field Papers experiment into the original Field Papers ecosystem. Once it was up and running, it was time to re-write basically all of the CSS I had previously written. If I was going to fully integrate my changes into the original project, I needed to work with the asset pipeline, rather than try and shoehorn my !important changes in. After fiddling with a full-length menu, at the recommendation of both Chandra and Ian, I switched to an accordion menu. One of my favorite things to do in my spare time is learn how to build fancy things in CSS from other people on [CodePen](http://codepen.io/). I ended up not only learning how to build an accordion menu, but also re-learned how to create triangles and arrows in pure css. (Sometimes, I think CSS is really cool. But don't tell anyone.)

<p data-height="429" data-theme-id="0" data-slug-hash="jWZrwq" data-default-tab="result" data-user="linzjax" class='codepen'>See the Pen <a href='http://codepen.io/linzjax/pen/jWZrwq/'>Accordion Menu</a> by Lindsey Jacks (<a href='http://codepen.io/linzjax'>@linzjax</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

There's still plenty of room for improvement, which is why we're currently conducting a survey to get feedback from the community. We're hosting a [demo platform](http://fieldpapers-demo.cadasta.org/) where you can checkout the [options for the side menu](https://github.com/Cadasta/fieldpapers/wiki/Field-Papers-Menu-Mock-ups), as well as try out the UI experiments I rambled about in the [last blog post](http://linzjax.github.io/outreachy/2016/01/08/outreachy-and-the-messy-reality-of-ui.html). Though the process is nowhere near complete, I'm really excited about the progress that I've made so far. This project has ended up being a really exciting challenge and a great way to solidify my skills and confidence. It feels really good to be able to point to something and say "I built that, and it's actually helpful to other people".

Until next time!