# Writing invent

### What:

Recently, I've been wanting to get more involved with open source, more accurately, start actually contributing to it. My initial idea was to build a tool that could be quickly cloned via git and used as a base setup for someone who _doesn't_ know how to use Vagrant. This was initially something I called [angry-hobo](http://www.github.com/zahid/angry-hobo), it worked for a little while, but was a great mess. It didn't work quite right in my opinion:
* cloning a scaffold vs using a program to generate a scaffold
* it left .git artifacts after cloning which required to be cleaned
* it included the Chef cookbooks in the repo which I later oped against

I re-_invent_-ed everything by developing [invent](http://www.github.com/zahid/invent), which is now a tool to help build this magical setup that I wanted. There are a million others out there, but this was my stab at my own. I wanted a tool that was simple enough for people to just specify what they needed without really knowing all that much Chef. I built invent as a command line npm tool which could be downloaded and serve its full purpose of being reusable in providing a simple base project setup with Vagrant. We predominantly used Nodejs and MongoDB (hello MEAN stack) so my setup installed those on the virtual machine.

### Why:

While working at a consultancy, we can across an issue: we use Vagrant and Chef to virtualize everyone's development environment, but on each new project, a new developer was given insufficient time to build a new Vagrant setup, and each time it was not the best it could be.

I hit this issue myself- I had no experience with Vagrant and as a novice engineer, I had a box up and running, but it wasn't the best I could do.

### How:

I simply used a Nodejs script to copy a Vagrantfile and Berksfile into a project directory. I require the user to download two things (on top of Vagrant and VirtualBox, naturally): 
* vagrant-bershelf plugin
* vagrant-omnibus plugin

These two plugins are used to ease a ton of things; vagrant-berkshelf manages your cookbooks and vagrant-omnibus preinstalls Chef on your virtual machine if necessary. I published it to [npm](http://www.npmjs.org/package/invent) and now it's readily available for anyone to use and play around with. I chose npm because I used Nodejs to write invent and npm's relatively simple publishing process.

### Reflections:

One of my main goals was to make invent as good as I could to attract users, or at the very least to be helpful to a person or two. One thing I really learned is that while we participate in exhaustive code review at my current job, I need to reflect the same if not more care in the quality of my code that I release to the open public.

Invent was my first venture into the open source world aside from some dozen or so projects on my Github account that were the products of weekend long hackathons or small personal projects- it's something I want people to use to make their lives easier.

As a final note, invent is not a tool an engineer versed with Vagrant and Chef would use, it's a starting point for someone who _isn't_.
