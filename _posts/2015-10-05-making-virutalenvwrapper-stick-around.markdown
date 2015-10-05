---
layout: post
title:  "Getting virtualenvwrapper to stick around"
date:   2015-09-03 15:52:09
categories: how-to
excerpt_separator: <!--more-->
---
**Virtual environments are awesome.** 

They allow you to install all of your required packages for one project without overriding your globally installed packages. If you want package version 3.0.3 for one project, and package version 2.7.4 for another, virtual environments are your friend.

[virtualenv](http://virtualenv.readthedocs.org/en/latest/) does this for your python environments. It creates an environment with its own installation directories, separate from that of your usr/local/bin, so anything that you `pip install` inside of a virtualenv, will only affect that project.

To install virtualenv, open up your terminal and type in:

` $ pip install virtualenv `

To create a virutalenv instance, switch into your project director:

` $ cd my_project_folder `

and make a new virtual environment:

` $ virtualenv what_you_want_to_call_it `

Now, in order to start your virtualenv, you'll need to start it up using `source`. [Source](http://bash.cyberciti.biz/guide/Source_command) activates a series of commands that only apply to that one terminal shell instance, and will end as soon as you close that shell. Which means that if you want to work in a virtualenv, you'll need to run:

` $ source what_you_want_to_call_it/bin/activate `

**every**
**single**
**time.**

<!--more-->

Now, I found this tedious. [virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/) enables more human-readable commands... Sort of.
After you've installed virtualenv, you can:


	$ pip install virtualenvwrapper  
	$ export WORKON_HOME=~/Envs  
	$ source /usr/local/bin/virtualenvwrapper.sh  


Ok, cool, now all you need to do is create a virtual environment:

` $ mkvirtualenv your_virtual_env `

and then open it up to work on:

` $ workon your_virtual_env `

To end your virtual environment session, all you have to do is deactivate:

`$ deactivate`

I find this much more memorable, which is nice. But remember what I just said about `source` ? How it only exists in that one shell instance? Yeah. That.

This means when you open a new terminal window, you have to run this command:


	$ export WORKON_HOME=~/Envs  
	$ source /usr/local/bin/virtualenvwrapper.sh

**every**
**single**
**time.**

Otherwise virtualenvwrapper disappears and none of the commands will work.

So while, sure it's more readable once you get things set up, you still have to constantly set things up.

**But there's a solution.**

**NOTE:** If you already use virtualenvwrapper, this will change where virtualenvwrapper looks for your virtual environments, so they won't be accessible anymore, and you'll need to recreate them.

Open up your .bashrc file (or create one if you don't have it.) [.bashrc](http://hacktux.com/bash/bashrc/bash_profile) contains a list of commands that are executed every time you open up a new terminal window.

.bashrc will be located in your root ~/ directory.
In your terminal, type:

` $ ls -a `

to see hidden files (ones that start with a .dot). Hopefully you'll see it there. 

If not, type:

` $ echo 'hello' >> .bashrc `

Now, regardless of it if already existed or you just created it, type:

` $ open .bashrc -a "Text Editor of Your Choice" ` (capital letters in the application name matter. So I would type "Sublime Text 2".)

Delete the "hello" text and add the three following lines of code:


	export WORKON_HOME=$HOME/.virtualenvs  
	export PROJECT_HOME=$HOME/Devel

	source /usr/local/bin/virtualenvwrapper.sh

Save your .bashrc file, and restart your terminal.

**Now!**

Every time you open a new terminal shell, .bashrc will run those three lines of code for you, and the only thing you'll have remember is:

` $ workon your_virtual_env `

and you're ready to go!

