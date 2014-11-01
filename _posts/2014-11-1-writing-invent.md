---
layout: post
title: Writing Invent
---

# Writing invent

### What:

Recently, I've been wanting to get more involved with open source, or more accurately, start actually contributing to it. My initial idea was to build a tool that could be quickly cloned via git and used as a base setup for someone who _doesn't_ know how to use Vagrant. This was initially something I called [angry-hobo](http://www.github.com/zahid/angry-hobo), it worked for a little while, but was a great mess. It didn't work quite right in my opinion. 

Here's a list of things that needed improvement:

* angry-hobo cloned a scaffold vs generated a scaffold
* angry-hobo left .git artifacts after cloning which required to be cleaned
* angry-hobo included the Chef cookbooks in the repo, which I later opted against

I later began developing [invent](http://www.github.com/zahid/invent), which is now a tool to help build the simple setup that I wanted. There are a million other tools out there, but this was a stab at building my own. I wanted a tool that was simple enough for people to just specify what they needed without really knowing Chef. I built invent as a command line npm tool. Invent's purpose was to provide a simple base project setup with Vagrant. I predominantly used Nodejs and MongoDB, so my setup installed those on the virtual machine.

### Why:

While working at a consultancy, we came across an issue using Vagrant and Chef to virtualize everyone's development environment. However, on each new project, a new developer was given insufficient time to build the Vagrant setup, and everytime it was done, we had several recurring issues:

* they were written by a differently by a new person each time, causing it to be hard to reuse, hard to maintain
* they were written with the skill of a novice each time

I hit this issue myself- I had no experience with Vagrant and as a novice engineer, I had a box up and running, but it wasn't the best I could do.

### How:

For Invent, I simply used a Nodejs script to copy a Vagrantfile and Berksfile into a project directory. I require the user to download two things (on top of Vagrant and VirtualBox, naturally): 

* vagrant-bershelf plugin
* vagrant-omnibus plugin

These two plugins are used to ease a ton of things; vagrant-berkshelf manages your cookbooks and vagrant-omnibus preinstalls Chef on your virtual machine if necessary. I published it to [npm](http://www.npmjs.org/package/invent) and now it's readily available for anyone to use and play around with. I chose npm because I used Nodejs to write invent and npm's relatively simple publishing process.

### Reflections:

One of my main goals was to make invent as good as I could to attract users, or at the very least to be helpful to a person or two. One thing I really learned is that while we participate in exhaustive code review at my current job, I need to reflect the same if not more care in the quality of my code that I release to the open public.

Invent was my first venture into the open source world aside from some dozen or so projects on my Github account that were the products of weekend long hackathons or small personal projects- it's something I want people to use to make their lives easier.

As a final note, invent is not a tool an engineer versed with Vagrant and Chef would use, it's a starting point for someone who _isn't_.

If you'd like to check it out, Invent is available on [npm](http://www.npmjs.org.package.invent) and [github](http://www.github.com/zahid/invent).
