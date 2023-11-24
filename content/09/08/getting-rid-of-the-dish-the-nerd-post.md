---
title: "Getting rid of the Dish: The Nerd Post"
date: 2009-08-14T17:45:07.000
tags: ['tv','tech']
---

So we're getting rid of our Dish. We've had cable or satellite TV pretty much ever since we moved into town seven years ago, but now we're cutting the cable. Now, we're not giving up television altogether; we're just switching to a setup that will let us record and playback over-the-air TV, and giving up the paid stuff. There are a couple of sides to this, so I'll make it a couple of posts. This is the nerd post. You have been forewarned.

**The Goal** The Dish DVR we are replacing allowed us to record shows and watch them on either of our two TV locations, one downstairs in the family room, the other our little 13" standard-def TV in our bedroom. We don't watch the upstairs one _that_ much, but it is very handy to keep around for times when the girls want to watch a show, and for in the mornings when they're awake but we want to sleep in some. :-) We didn't have HD through Dish Network; I really wanted HD. Oh, and I'd really like to still be able to watch some Cubs games. That's about it.

**What We Ended Up With: Downstairs**

To go with the 42" Vizio LCD TV downstairs we invested in a relatively-inexpensive tower PC. It's got a dual-core Pentium processor, 4GB of RAM (I know, I know, the 32-bit OS won't use all 4, but that was the stock configuration), a 1TB hard drive, and lots of room to expand. It came with Windows Vista Basic (ick); I upgraded it to Windows 7 RC, and have preordered a regular Win 7 license for it. Add a Windows Media Center remote, and it works pretty smoothly. A little noisier than I'd like, but tolerable. This machine is our primary recording unit.

For an OTA tuner, I got a [HDHomeRun networked tuner](http://www.silicondust.com/products/hdhomerun). If there's one piece of this system that I'm most happy with, it's the HDHomeRun. It's got dual tuners in it. Basically, you plug in your OTA antenna and your ethernet to the back of the tuner, and you're done. There's a small piece of software to install, but then Windows Media Center (and EyeTV on the Mac) pick it up with no trouble whatsoever. (Supposedly XBMC in Windows will handle the HDHomeRun, too, but I haven't been able to get it to work.)

The final component downstairs is an old tower (I forget the specs) running Ubuntu. I mostly use it as a place to save backups; there is just north of 1TB of disk space in it. I've also got some recorded TV stored on it which gets served up to the other computers on the network.

**What We Ended Up With: Upstairs**

Our little friend the Mac Mini moved upstairs. To go with it, I found a Dell 22" 1920x1080 LCD display on sale cheap. While we do have [EyeTV](http://www.elgato.com) installed, and could record from upstairs, the limited HDD space on the Mini (100GB) has me recording downstairs instead. (Yeah, I could do some fun AppleScripting to move files to a different machine once they are done recording... but that's more work than I wanted right now.) The Mini is running XBMC for playback, and in the event we want to watch something live upstairs, we switch over to EyeTV. Not as elegant as I'd like, but it works pretty well.

**What We Ended Up With: The Headaches**

The biggest challenge in this setup is that I'm the idiot who's running three different OSs among my three computers. Oh, and also running a beta OS on the Windows box. So Windows 7 Media Center records OTA TV into a new file format (.wtv). WTV files aren't yet supported by the FFmpeg codec, which means XBMC won't play them. Fortunately, W7 provides a WTV-to-DVRMS converter, and FFmpeg _does_ support DVRMS. So, I've got a little nightly batch file that runs to convert all of the day's WTV recordings to DVRMS and file them off in appropriate directories in the shared library area.

Sooner or later the available toolset will catch up with the Windows 7 WTV format, at which point things like commercial skipping and direct playback in XBMC will be available, smoothing things out a bit. For now, though, we've got a workable solution that records the shows we want to watch and lets us watch them in either of our two desired locations, and the ability to get rid of a monthly bill from Dish for a bunch of channels we never watch.
