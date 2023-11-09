---
title: 'Auto-loading Bluesky posts in the web app using Chrome and an Auto Click extension'
date: 2023-09-19
tags: ['tech', 'bluesky', 'web']
---

## Update: Try out Deck.Blue

_Not more than one day after writing this post, someone on Bluesky recommended [deck.blue](https://deck.blue), a Chromium-based website/Chrome app for Bluesky that is built to mimic the old Tweetdeck. It's still got some rough edges, but on the whole it's just as usable (and a lot simpler) than the solution I describe below. I'd recommend giving it a shot before configuring the auto-clicker._

## Original Post Below

So, I want to use Bluesky web version on my PC, but I want it in a single column that auto-loads new posts the way Tweetdeck (RIP) used to. Here's how I'm accomplishing that:

## \[Optional\] Chromeless Window

This gets rid of all the buttons and address bar and stuff in the Chrome window. Create a new shortcut on your desktop and fill in these two fields accordingly:

**Target:** "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --profile-directory="Profile 1" --app=https://bsky.app  
**Start in:** "C:\\Program Files\\Google\\Chrome\\Application"

## Autoclicker Extension

Get the [Auto Clicker extension](https://getautoclicker.com/). I have no reason to think it's unsafe, but for safety's sake, restrict it (Extensions -> Manage Extensions -> Autoclicker -> Details -> Site access) to only have access to https://bsky.app.

## Configure Autoclicker

Once you've installed the extension, reload your Bluesky window. Then right-click in that window and from the right-click menu choose Autoclicker - AutoFill -> Open Configuration Page. That'll get you to a page that you should fill in to look like this:

![](/images/2023/autoclick_config.png)

Those settings should auto-save.

**Update:** It turns out that the button that loads new posts also scrolls back to the top after you've scrolled down. The only difference is the presence of a little blue dot on the button that indicates new posts are available. As such, the Element Finder needs to be updated to only click when the blue dot is present:

```
//button[contains(@aria-label,'Load new posts')]/div
```

## Reload Bluesky window

Once the extension is configured, reload the Bluesky window. From that point forward, when the autoclicker extension detects the Load More button, it automatically sends a click event which loads the new posts. Nice!
