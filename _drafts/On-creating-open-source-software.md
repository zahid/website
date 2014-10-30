# On creating open source software

### What:

Recently, I've been wanting to get more involved with open source, more accurately, start actually contributing to open source. My initial idea was to build a tool that could be quickly cloned via git and used as a base setup for someone who _doesn't_ know how to use Vagrant. This was initially something I called [angry-hobo](http://www.github.com/zahid/angry-hobo), it worked for a little while, but was a great mess.

I _reinvent_ everything by developing [invent](http://www.github.com/zahid/invent), which is now a tool to help build this magical setup that I wanted. There are a million others out there, but this was my stab at my own. I built it into a command line npm tool which could be downloaded and serve its full purpose of being reusable in providing a simple base project setup with Vagrant. We predominantly used Nodejs and MongoDB (hello MEAN stack) so my setup installs those on the VM.

### Why:

While working at a consultancy once, we can across an issue. In our development pipeline, we use Vagrant + Chef to virtualize everyone's development environment. Although this was great, it was only great when it worked properly. On each new project, a new developer was given insufficient time to build a new Vagrant setup, and eachtime it was not the best it could be. 

I myself hit this issue, I had no experience with Vagrant and as a novice engineer, not the best at finding resources. In the end, I had a box up and running, but it wasn't the best I could do.


### How:

I simply used a Nodejs script to copy a Vagrantfile and Berksfile into a project directory. I require the user to download two things (ontop of Vagrant and VirtualBox, naturally): 
* vagrant-bershelf plugin
* vagrant-omnibus plugin

These two plugins are used to ease a ton of things, berkshelf manages your cookbooks and omnibus ensures you have Chef ready to go on your virtual machine.

