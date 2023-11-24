---
title: "A first look at Shaun Inman's \"Fever\""
date: 2009-06-18T02:37:39.000
tags: ['tech']
---

Twitter and the blogs have been abuzz today over [Shaun Inman](http://www.shauninman.com)'s newest creation, called [Fever](http://www.feedafever.com). Some of you may be familiar with Shaun's previous creation, [Mint](http://haveamint.com/), a really nifty blog stats package that you host yourself. Inman is on familiar ground this time with Fever, creating a spiffy feed reader, full of AJAX-y goodness, suitable for hosting on your own website.

I've been a regular Google Reader user for years now, occasionally trying out other readers... there was that fling with Feedlounge, before it went under, and occasional dalliances with NewsGator's line of readers... but I've always gone back to Google Reader. I took a look at Inman's demo of Fever, though, over on [feedafever.com](http://www.feedafever.com), and knew it was time to give it a try.

**Does the world really need another feed reader, anyway?**

Creating a new RSS feed reader is no simple task. Taking accepted existing designs and improving on them requires creativity and good ideas about usability. Inman is on the right track here. But aside from the UI design, Inman has created a dual-purpose tool. On one hand, Fever is a traditional feed reader. You subscribe, it updates the feeds, you read. On the other hand, though, Fever is something like your own personal Digg. You can subscribe to all those noisy feeds, those linkdump feeds that occasionally have something interesting in them, and identify them as "Sparks". Then Fever will aggregate them, pick out the hot topics, and present them to you in a "Hot" category, grouping them around a specific topic or link. This, to me, looks like the really slick part of Fever.

After the jump: my experience with installing Fever, importing my feed list, and some thoughts on usability and performance.

**Purchase and Installation**

Like Mint before it, Inman's pricing model is similar to that of off-the-shelf software: pay once, install on your own machine. In this case, your own webhost. $30 buys you a license which is tied to a specific domain name.

Installation is ridiculously easy. You download a little "tester" zip file, unzip it and upload it to your domain, and visit the one page that it creates. The tester does some cursory checks to ensure that adequate versions/settings of PHP and SQL are present, and then does a database check to ensure your database is set up with adequate permissions. **A word of warning here:** pay attention: the database settings you use to test here will be used to install Fever should you choose to purchase it. This wasn't clear to me when I did the install. Fortunately it didn't become an issue.

Once your server has passed all the tests, you are given a link that will take you back to feedafever.com, where you can drop your $30 via Paypal for the license. Once you pay up, you are given a license key which you can then copy and paste back into Fever. Normally, at this point, you'd be expecting to have to download a full install, upload it, do some manual configuration, and so on, right? Not with Fever, though. Once you give it the license key, Fever silently installs the full setup (about 900 KB of files) and you're up and running. Brilliant.

**Importing Feeds**

Next I went over to Google Reader and dumped my OPML file. I'm a heavy user, probably not quite in the 'power user' category yet, but the OPML had 454 feeds, about 100KB worth of XML. It took about two clicks to suck it into fever, and the import went very smoothly. Compared to the import times when I've tried using FeedDemon, FeedLounge, or (shudder) Bloglines, Fever screamed through the import.

You have the option of keeping all your categories from the OPML or choosing not to when you import. I did keep my categories, but found a small issue with that choice later on - there is a bug (design choice?) that keeps the category list from scrolling. So, I can only see about half of my lists. Not a fatal issue, but something that needs fixed.

Once the feeds were imported, Fever started kicking off updates of all the feeds. This just takes a little while. If you want to set up a cron job on your server, you can have Fever pull in updates every 15 minutes 'round the clock. If not, Fever will update every 15 minutes when you have it open in a browser. I have yet to set up the cron job - we'll see how it goes.

**General Usage**

Fever is set up with the power user in mind. Keyboard shortcuts are built-in and intuitive; they allow you to do navigation, switch between two-pane and three-pane views (shown below), and the space bar lets you jump one article at a time, or, if it's a long article, one page at a time. Slick.

Fever looks great, too. The overall layout feels a lot like Google Reader, even more like its Greasemonkey-enhanced alter ego Helvetireader. Group and feed lists are on the side, and you have the choice of showing or hiding unread counts.

When you go to the Hot category, Fever assigns "temperatures" to the topics and presents the links in grouped form. For example, in the shot below, "Sojurn Community Church" is a hot topic among my feeds, and the half-dozen links discussing it are listed below. Clicking on any of them opens the actual blog article in a new tab. The "temperatures" are the one thing I'm actually a little unsure about. While they are a nice way of showing "hot" topics, having the temperature listed there in a BIG font seems a little big cheesy. We'll have to see how it stands the test of time.

**Performance**

I have yet to hear from my webhost and friend Geof complaining that the server's taking a beating, so I'm hoping Fever has a smart backend that won't tie up the server. Right now the SQL database is taking about 13 MB of space. I'm a bit curious to see at what point Fever starts pruning old feed items and how large my database might grow to be.

**Bugs and Quirks**

I do have a few gripes with Fever that I hope will get ironed out in short order. (Note: Fever automatically checks the server for updates to itself! Awesome!) The first is the feed editing dialog. (Click on the image to see it full-sized.) Maybe it's just because I have a lot of groups defined, but when I bring up the feed editing dialog, the bottom of the box is off-screen, with no way to scroll to it. (This is running 1280x800 resolution with Firefox fully maximized.) Fortunately, if I F11 to full screen view, the whole thing just barely fits on the screen. Otherwise, I'd be stuck.

The other general gripe is the mechanism for sorting feeds into groups. As I said earlier, I had a _lot_ (50?) of categories defined in my OPML file, so I decided I'd consolidate things a bit. Creating a new group is easy; picking the feeds for it is less so. Once you decide to edit a group, you are given a scroll box with your entire list of feeds. It's a multi-select box, which means you better make sure you hold down the Control key while you scroll through and select the ones you want - otherwise you'll be starting over. Ugh. Suggestion for Mr. Inman: use check boxes. Or even better, figure out a way to drag-and-drop. 

As a general note, there is an iPhone/iPod Touch interface built in for Fever. To this point, though, it's not liking my Fever login... not sure why. Gotta keep trying.

**Summary**

All in all, Fever is a welcome addition to the world of feed readers. For a tool I'm gonna use every day, I'm willing to spend a few bucks, and I think in this case Fever is $30 well spent. I'm looking forward to having a few days to get things organized, and for a few bugs to get sorted out, and I may well have a new favorite feed reader. Time will tell.
