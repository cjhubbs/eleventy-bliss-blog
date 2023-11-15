---
title: 'OK, so I bailed on Octopress'
date: 2014-03-14T12:41:15.000
tags: ['blogging']
---

A few months back I tried a great blog migration - moving from Wordpress to Octopress, a Ruby-based static site generator. Octopress had the virtue of being static, of having posts in Markdown files instead of HTML in a database, and of generally being slimmer than Wordpress.

What I found after a few months of use is that the friction to use Octopress was just higher than I was willing to accept:

- Write post content.
- rake generate new_post
- Paste in the new post.
- rake generate
- rake preview - make sure the post looks OK
- svn add the new post file + new static files
- svn commit to push them up to the server
- log in to my webserver
- svn update

All that for a single post. And if I wanted to post from a different machine, I had to remember to do an svn update first to make sure I was current everywhere. It wasn't a fatal issue, but just more of a pain than I had anticipated.

Wordpress also allows nice things like posting from other apps, from my phone, etc. Not that I do much of that at the moment... but my intentions are good.

So my apologies to the half-dozen of you who subscribe to my RSS feed and saw it burp a dozen old posts last night. I got everything moved back into Wordpress and I think things are good to go.

The one thing I actually will miss is the ability to write my posts in Markdown. I know there's a WP Markdown plugin but I'm not real thrilled with it. Oh well, I can manage HTML.
