---
layout: post
title:  "Node Scraping: console.log()-ing so you don't have to."
date:   2015-09-03 15:52:09
categories: projects
---

So thanks to the persistence of some awesome people, a while ago I learned to scrape in python for the (Open States)[https://openstates.org] project. During my time at Recurse Center, I want(ed) to focus on javascript, but sadly this meant no more web scraping. Or so I thought!

Then along came NodeJS. Oh how I had avoided it (because scary server side is scary). I reached a point in my project where scraping a website for information would make my life infinitely simpler, so after clawing my way through several tutorials, I developed a level of competency that meant I could comprehend what this node scraping **[tutorial](https://scotch.io/tutorials/scraping-the-web-with-node-js)** was talking about.

The tutorial is really well laid out and will walk you through the basics of setting up a scraper, but I felt compelled to follow the Recurse model and dig deeper. After setting up a minimal express app, I was able to send use **[Request](https://github.com/request/request)** to get the **ENTIRE** HTML body of **[Chain of Good](http://www.chainofgood.co.uk/passiton)**, which I then loaded into **[Cheerio](https://github.com/cheeriojs/cheerio)** to transform this huge unwieldy chuck of HTML into an object.


	request('http://www.chainofgood.co.uk/passiton', function(err, status, html){
			if(!err){
				var $ = cheerio.load(html);


But what the heck does any of this actually mean?

**var html** is the html data string returned by request.  


	<li>
		<div class="compliment" style="color: #63af54; 
		border-color: #63af54" data-colour="#63af54" 
		data-tweet="I just wanted to say… " 
		data-tweet-url="http://www.chainofgood.co.uk/passiton/b9f4e44b0518274ae785" 
		data-track="/passiton/b9f4e44b0518274ae785" 
		data-url="http://www.chainofgood.co.uk/passiton/b9f4e44b0518274ae785">
			<p class="large">You&#039;re attractive, even when you&#039;re ill.</p>
			<div style="border-color: #63af54">
				<span class="icon-innocent-dude">
				</span>
			</div>
		</div>
	</li>
 

for example.

**var $** is then assigned to represent the object that is produced from cheerio. **$** now allows you to select any html element like you would in jquery.

We'll select the div with the class "compliment" from the above html.

**$('.compliment')** produces something like this (though much longer):

	next: 
	      { data: '\n',
	        type: 'text',
	        next: null,
	        prev: [Circular],
	        parent: [Object] },
	prev: null,
	parent: 
	      { type: 'tag',
	        name: 'li',
	        attribs: {},
	        children: [Object],
	        next: [Object],
	        prev: [Object],
	        parent: [Object] } },
	'95': 
	   { type: 'tag',
	     name: 'div',
	     attribs: 
	      { class: 'compliment',
	        style: 'color: #63af54; border-color: #63af54',
	        'data-colour': '#63af54',
	        'data-tweet': 'I just wanted to say… ',
	        'data-tweet-url': 'http://www.chainofgood.co.uk/passiton/4b326caf3236bf8a6dba',
	        'data-track': '/passiton/4b326caf3236bf8a6dba',
	        'data-url': 'http://www.chainofgood.co.uk/passiton/4b326caf3236bf8a6dba' },
	children: [ [Object], [Object], [Object], [Object], [Object] ]

So what's fun about this is that it's just an object with key values that match your average everyday dom traversal methods in jquery, which means we can do awesome stuff like this:

**$('.compliment').children();**

The reason you put **.children()** rather than **.children** like you would when you're calling an object key is because Cheerio has been designed to behave as close to jquery as possible, and has assigned each object key to a function, like so:


	exports.children = function(selector) {

		var elems = _.reduce(this, function(memo, elem) {
			return memo.concat(_.filter(elem.children, isTag));
		}, []);

		if (selector === undefined) return this._make(elems);

		return exports.filter.call(elems, selector, this);
	};




**console.log($('.compliment').children())** will get us:

	],
	     next: 
	      { data: '\n',
	        type: 'text',
	        next: null,
	        prev: [Circular],
	        parent: [Object] },
	     prev: null,
	     parent: 
	      { type: 'tag',
	        name: 'li',
	        attribs: {},
	        children: [Object],
	        next: [Object],
	        prev: [Object],
	        parent: [Object] } },
	  '101': 
	   { type: 'tag',
	     name: 'div',
	     attribs: 
	      { class: 'compliment',
	        style: 'color: #f8b800; border-color: #f8b800',
	        'data-colour': '#f8b800',
	        'data-tweet': 'I just wanted to say… ',
	        'data-tweet-url': 'http://www.chainofgood.co.uk/passiton/e32bbaa1c93e93db9546',
	        'data-track': '/passiton/e32bbaa1c93e93db9546',
	        'data-url': 'http://www.chainofgood.co.uk/passiton/e32bbaa1c93e93db9546' },
	     children: [ [Object], [Object], [Object], [Object], [Object] ],

So we could keep going into the div and the span listed within .compliments, but I want the actual compliment text, which is happily stored at this level.

**.compliment -> children == p**

So now all we have to do is call:  
**$('.compliment').children().text()**

and voila! This returns the string "You're attractive, even when you're ill".

Now, I skipped a few steps because in fact there are multiple **.compliment div**s, but this just means you have to filter through each instance of **$('.compliment')**.

So neat. Turns out scraping with Node is not as terrifying as I had initially anticipated.