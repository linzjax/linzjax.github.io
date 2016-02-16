---
layout: post
title:  "Research, Rethink, and Redesign"
date:   2015-12-24 13:33:09
author: Lindsey Jacks
categories: outreachy
excerpt: <p>It's week three of my internship with Cadasta, and I have been working on a complete redesign of the UI for <a href="http://fieldpapers.org/">Field Papers</a>. This is a complete breakdown of my research and wireframing phase.</p>
---

**"Avoid pixel-pushing at all costs – your job is to solve problems. View your work through that lens at all times. [...] Accurately defining the problem goes a long way towards solving it." - [J.P. Onori](http://somerandomdude.com/2012/01/10/transition-from-development-to-design/)**

<br />

## __Getting started__

It's week three of my internship with Cadasta, and I have been working on a complete redesign of the UI for [Field Papers](http://fieldpapers.org/). Field Papers is an open source mapping tool that allows users to select areas on an atlas grid to be printed out, taken into the field, and then loaded back onto Field Papers. The concept of Field Papers is simple in theory, and it wasn't until I started actually trying to improve it that I realized how complicated it was, but I'll talk more about that in the next blog post (teasers!). 

__As I started digging into Field Papers there were a few _seemingly_ simple issues that stood out to me:__

1) The map was way too small to actually be able to successfully navigate the atlas grid positioning.

2) The atlas grid movement was completely disconnected from the map movement, which was confusing.

3) The process was broken down into three separate steps, and could be consolidated into a single page site.

4) Adding rows and columns was complicated by the fact that the buttons ran away from you as you clicked on them.


Following the suggestion of my mentor Ian, I focused on three ways to solve most of these problems: __"demodalisation"__, __"big map"__ and __"better UI interaction model"__. 

Demodalization involves combining all three map composition steps onto a single page, and doing away with the "wizard" mode. Big map, rather unsurprisingly, consists of turning the current tiny map view port into a full screen map view. This will give the user much more flexibility and room to maneuver. Creating a better UI interaction model has turned out to be much more complicated and less straight forward than anticipated. But, again, I will discuss this in more detail in my next post.

Addressing these issues needed to start with creating a full screen map display that could incorporate all possible map interactions onto a single page. Rather than jumping straight into building, I started with research, sketches and wireframes.

## __Research__


My first task was to see [what other people were doing](http://linzjax.github.io/fieldpapers/notes-page/).

<div width='100%'>
<div class='gallery-box'>
		<div class='gallery-images'>
			<div class='image'>
				<img src='http://i.imgur.com/FogukeV.png'>
			</div>
			<div class='image'>
				<img src='http://i.imgur.com/d4BSjNQ.png'>
			</div>
			<div class='image'>
				<img src='http://i.imgur.com/fIX7Fz3.png'>
			</div>
			<div class='image'>
				<img src='http://i.imgur.com/NIIn93o.png'>
			</div>
			<div class='image'>
				<img src='http://i.imgur.com/p3ICXGH.png'>
			</div>
			<div class='image'>
				<img src='http://i.imgur.com/aWzWT2l.png'>
			</div>
		</div>
	</div>
</div>
<div class='gallery-lightbox hidden'>
	<div class='gallery-lightbox-image'>
		<img src=''>
	</div>
</div>

* [_Examples of other websites with large scale maps. Most of them include a large side menu._]

Turns out that there's not a whole lot of variation in the world of full screen maps. Unfortunately, there can't be. If the goals is to allow the user to interact with the map, layouts and menus should be as unobtrusive as possible. There's no need to be clever and cute. Just get out of the way.

__After examining what the current trends are, I came to a few conclusions:__

Only use lightbox menus for specific purposes. <br />
	There were a few sites that used them for every action. It turned out to be distracting and frustrating. Not only were they in the way of the map view, they didn't allow me to quickly flip back and forth between actions.

Icons without explanation can be more confusing that they're worth. <br />
	I've run across this in a few apps, where in attempt to be as clean and streamlined as possible they turn all of their buttons into icons. This is all well and good, but only if it's _extremely clear_ exactly what each icon represents. (I'm looking at you viscocam....)

Placement of menus should be simple and consistent. <br />
	Having menus along all four walls of the browser window feels cluttered, and doesn't allow your eyes to rest. Try to keep it limited to two walls.

Having the option to toggle whether or not the menu is visible is nice. <br />
	However, and this goes along with the icon point, it should be clear how to trigger this interaction.

Separate actions into different menus only if it makes sense. <br />
	You want to make sure the separations make sense and are organized in a manner that's not confusing to the user.

If you're ever uncertain, include a help section. <br />
	If you think any of the interaction or icons might be confusing, include a help section. Heck, even if you don't think it's confusing, _include a help section_.

## __Rethink__


After my initial research and with these notes in mind, I settled down to do a quick 20 minute sketch session. The purpose of this exercise was to get as many ideas as I could in the allotted time, and to not stop until the timer was done.


<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="6" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:60%; width:-webkit-calc(60% - 2px); width:calc(60% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:47.4074074074% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/_FByZCy9GR/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Sketchy sketch is sketchy. #outreachy #noideawhatimdoing</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Linz Jax (@linzjaxx) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2015-12-09T16:56:40+00:00">Dec 9, 2015 at 8:56am PST</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

<br />

This exercise prevented me from spending much time focusing on any one idea, which prevented me from becoming attached and letting that influence all of my subsequent decisions. It also prevented me from worrying about _completing_ each design idea. That way, when I started building wireframes I could choose the best options out of a pile of ideas and _then_ allow myself to finish them. A lot of the sketches ended up looking the same, but they still fed ideas once I actually started building out the models. There aren't many options when it comes to being unobtrusive, and that's ok.

During this process, I also brainstormed different ways each interaction could be designed. When does a dropdown vs. buttons make sense? Are there ways that tasks can be separated into different actions (map adjustment actions vs. saving and note-taking actions). 

![interactions](https://rippedshakespear.mybalsamiq.com/projects/testing/zoom%20one.jpeg?version=3&etag=Z.sD2JZ1pxArJw4Q9iBMzMSqTlptAQHg)

## __Redesign__

Once I was done with that I moved onto wireframes. I used [Balsamiq](https://balsamiq.com/) to build my [wireframes](https://rippedshakespear.mybalsamiq.com/projects/testing/prototype/large%20left%20menue?key=a58b5f9011225b47db50f4fcf34c7cffdd2941cc), and oh my gosh it was magical. Incredibly easy to use, and little to no learning curve. Since this was the first time I had really worked with a wireframing tool, I started with the initially suggested design (with a few tweaks of my own). After that, I tried to implement as many different designs as I could, and ended up with about eight. I tried to make several that were very different, as well as a few I knew just straight up wouldn't work. I wanted to build these anyway just to see _why_ it wouldn't work and what it was about these designs that made me uncomfortable.

__These are a few examples of uncomfortable designs:__

<div class='gallery-box'>
	<div class='gallery-images'>
		<div class='image'>
			<img src='https://rippedshakespear.mybalsamiq.com/projects/testing/round%20the%20outside%20menus.jpeg?version=2&etag=BeCO0B5dMODWGAMxwP9YXg_Gv5hIe5fm&key=a58b5f9011225b47db50f4fcf34c7cffdd2941cc'>
		</div>
		<div class='image'>
			<img src='https://rippedshakespear.mybalsamiq.com/projects/testing/weird%20top%20menu.jpeg?version=4&etag=qp3WHKbUxv50L.Fy1vIjOgxBAyOiW.CN&key=a58b5f9011225b47db50f4fcf34c7cffdd2941cc'>
		</div>
		<div class='image'>
			<img src='https://rippedshakespear.mybalsamiq.com/projects/testing/Top%20banner%20and%20%5Blightbox%5D.jpeg?version=8&etag=.cmR5zy86tMTcZVMEWUMU9hHFpLSE.tF&key=a58b5f9011225b47db50f4fcf34c7cffdd2941cc'>
		</div>
	</div>
</div>

__Image one__: You can't see anything because the text lacks a background. Also, by placing the menu all the way around the edges your eyes are never given the chance to rest.

__Image two__: The design just feels old, and while the positioning of the options are similar to the original Field Papers, it doesn't feel like an improvement.

__Image three__: While initially I liked this design, it still presents the problem of tasks being separated a bit too harshly. It also doesn't allow the user to write notes until they're _done_ with the map, which is not ideal.

After pushing myself to come up with as many ideas as possible, I was then able to narrow down my selection to three, and have a much better idea of _why_ I preferred these designs over others. These were my final three:

This first one combines all of the task into one side menu. Everything is in one place, easily found, and always present. 
<img width="100%" src='https://rippedshakespear.mybalsamiq.com/projects/testing/large%20left%20menue.jpeg?version=7&etag=NIJfjEYtJfOwh0jkwcmrRA_p04lKOc.A&key=a58b5f9011225b47db50f4fcf34c7cffdd2941cc'>

This second one separates all of the actions into their own icon, allowing the user to think of them as different components to be tweaked on at a time. Stays as unobtrusive as possible.
<img width="100%" src='https://rippedshakespear.mybalsamiq.com/projects/testing/umap%20esqu%20%5Bpaper%5D.jpeg?version=3&etag=KSrrkEWdLWvb368g6.7NMTpzL7VUwKdn&key=a58b5f9011225b47db50f4fcf34c7cffdd2941cc'>

This third one combines the first two ideas. It separates the actions into two categories, and provides a more solid menu to navigate. 
<img width="100%" src='https://rippedshakespear.mybalsamiq.com/projects/testing/Left%20button%20right%20menu%20%5Bgrid%5D.jpeg?version=4&etag=hwonxcPIL_sIkJgerw8MkR3msBQ3iWrk&key=a58b5f9011225b47db50f4fcf34c7cffdd2941cc'>

After talking it over with the Cadasta team, we ended up deciding on the first one. It ensures that all of the options are present, and completely removes the issue of modalization that was so problematic with the initial Field Papers.

## __Final thoughts__

I was glad that I had the time to spend on going through this process. It allowed me to really think through all of the decisions I was making, rather than just running with whatever idea popped into my head first. Also, designing out in the open was valuable because it prevented me from developing this idea that these designs were _mine_ and _precious_ and _private_. It allowed me to get comfortable with other people's thoughts and opinions, and my designs only improved as a result.

So on to the next step! I am currently working on building a stand alone version of the tool to see how it actually behaves. Up next: The messy reality of UI.

Until next time,

Cheers!


