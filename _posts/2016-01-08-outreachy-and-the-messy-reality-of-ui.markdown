---
layout: post
title:  "Outreachy and the messy reality of UI"
author: Lindsey Jacks
date:   2016-1-8 12:12:09
categories: outreachy
comments: True
excerpt: "<p>There's nothing quite like that sinking, humbling feeling of reality setting in. It turns out creating the perfect UI for Field Papers is a complicated, messy ordeal. It's a nice reminder that I am, in fact, still learning.</p>"
---

I had set aside my sketchbook, put the finishing touches on my wireframes, settled on one of them, and sat down to build a stand alone version of Field Papers. All my brilliant ideas for an improved UI were dancing around in my mind, excited to be turned into a reality that users would be thanking me for for years to come. Then, like a kid who's finally discovered that Santa's not real, I realized that nothing was as simple and glittery as I had hoped.

Okay, so I'm being a bit over-dramatic. Still, there's nothing quite like that sinking, humbling feeling of reality setting in. It turns out creating the perfect UI for Field Papers is a messy ordeal. It's a nice reminder that I am, in fact, still learning. However, the perfectionist in me was none too pleased with this situation.

Let's take a journey together on my train of thought, to see what happened as the project went along:

__Grid stays centered.__

My biggest beef with the old Field Papers was that the grid didn't move with you as you panned around, so let's fix that! Everything is nice and centered, and when you go to add more rows and columns the map politely zooms out to let you cover the area you're trying to access... oh wait, what if that's not the are you wanted to cover? What if you zoomed in to the exact area you wanted to cover and now you're frustrated that it's zooming and jumping all over the place? Hm... ok...

__Grid stays front and centered the entire time.__

This is perfect. It's like looking through the lens of a camera. You find the area you want to cover, add rows and columns to fit your desires, and voila! All done. It's only covering the area that you're looking at, no obnoxious jumping around, the grid and the map are now two totally separate things. Simple, easy, no bells and whistles. But wait... the zoom on Leaflet is really aggressive, so it's really hard to get just the area that I want to cover.

Ok...

__Grid stays front and centered the entire time with a resize scaling button in the corner.__

Alright, the grid stays in the view your looking at, and now you can adjust the size of the grid to exactly what you needed it to be. Just one whistle, that's fine, nothing too complicated. Wait... What if because of how far you had to zoom out to keep it centered, you have no idea what you're actually looking at? You now can't tell what details are in each individual square!

.... okaaay.....

__Grid stays front and centered the entire time with a resize scaling button in the corner and ability to lock it in place.__

Ok, this time I've got it. The grid stays in place unless you lock it in place, which gives you the ability to pan and zoom without the grid moving at all. Wait, this is just the old UI with less mobility! Ugh, and now all of my calculations are wrong, and things aren't able to update the way that they should, and what if...

__What if situation [x, y, z, fish, etc]??__

There are so many caveats. So many! This spiral went on for quite some time. Something I had pictured so perfectly in my mind was slowly falling apart in front of me. After a nice cup of warm tea and a chat with my mentor Ian, he helped me come to the realization that it doesn't have to be perfect. In fact, it doesn't even have to be great. It just has to be better than what's already there. Besides, how are we going to know what works best without other people messing around with it and pointing out all of its flaws? We can worry about fine tuning and nitpicking in future iterations, but there's no need to start pulling hair out just yet. It would be unreasonable to expect a perfect UI first go around, without any user input or research. This is a process with many steps involved, and I shouldn't (read "can't") skip any of them.

After taking a few slow, deep breaths, I've started winding up my initial ui-experiments into something not perfect, but good enough. I'll hopefully be passing them off for other people to debate about in the near future. In the mean time, Ian suggested that we work together to learn a little bit of Ruby on Rails, and I'm super excited! Full-stack here I come!

Until next time!
