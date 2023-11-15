---
title: 'Using HDHomeRun Plus to record H.264 video with Windows Media Center'
date: 2014-08-05T13:47:51.000
tags: ['tech']
---

Yeah, this is a nerdy post. I'm not expecting it's of huge interest for my usual readers but might be helpful to others searching for more information on this configuration.

In my quest to use my home-built DVR to capture video that can be easily played via my Roku, I ended up purchasing a used [HDHomeRun Plus (HDTC-2US)](http://www.silicondust.com/products/hdhomerun/hdhomerun/). (This replaced an old original-model HDHomeRun that was still working beautifully.)

The HDHomeRun Plus has integrated hardware to do H.264 video transcoding, so if you want to stream live TV across your network you can do it at less than full HD quality, and you can also record video at lower bit rates.

### Hardware Setup

This is the easy part. The HDHomeRun has three plugs on the back, and you simply plug in each of them as the QuickStart instructions show you.

![](/images/2014/hdhr.png)

The coaxial cable coming from the antenna in my attic connects to the antenna port; the ethernet jack connects to my router, and the power plug, well, you can figure that out. The power adapter is different than the original HDHomeRun (the Plus takes 12 volts; the original takes 5). A nice improvement here is that even though it's a dual tuner, it only requires one antenna input. The original model required splitting the antenna signal and plugging it in twice. Getting the extra cable and splitter out of the signal path improved my signal strength on a couple of channels.

You'll also want to make sure you have the latest firmware installed. The HDHomeRun client software might do this for you automatically; if not, the firmware is rather unintuitively available on [the Linux Downloads page](http://www.silicondust.com/support/downloads/linux/) of the SiliconDust website.

### Software Setup

First, assuming you're running Windows 7 like I am, install the Windows HDHomeRun software. This will include the configuration app and the QuickTV app. You can run the configuration app to scan for channels and watch them directly from the configuration app.

Then you can bring up Windows Media Center and configure it using the steps on the [HDHomeRun Instructions page](http://www.silicondust.com/support/instructions/hdhomerun-plus/). That should get you to the point where you can record video using the HDHomeRun and WMC.

### The Video

Recording with the default HD settings, this setup will record full high-def TV signals in MPEG2 video format (using the .wtv file extension), with file sizes at about 6 GB per hour.

But that's a huge file and doesn't stream well, so I wanted the HDHomeRun to record as H.264. With the latest (June 2014) firmware update, there is the ability, using the HDHomeRun Config application, to select a default transcoding profile. Click on the HDHomeRun device in the left column of the app, and then choose the transcoding level you'd like on the drop-down that becomes available.

That seemed too easy, to the point where at first it didn't seem like it was doing anything different. Indeed, WMC continues to record .wtv files. However, the .wtv video container now becomes a lot smaller - on the order of 1 GB / hour. It turns out that the .wtv format is just a wrapper around various formats, so if you record the transcoded video, the .wtv container holds H.264 video.

### Preparing for Playback on the Roku

Interestingly enough, the .wtv file played pretty directly on the Roku - apparently it managed to recognize the transcoded video format. However, to get the file into the typical .mp4 format so that it can playback on various devices, one more conversion step is necessary.

For that step I'm using [MCEBuddy 2.X](https://mcebuddy2x.codeplex.com/). MCEBuddy is pretty slick for a free app. It has the ability to sit and monitor for new recordings, convert them, rename them and move them around on the disk based on show and episode information, and do transcoding. It'll do serious transcoding if you need it to, but since my .wtv files are already H.264 on the inside, there's a transcoding profile called **MP4 Unprocessed**. This is a quick operation (about 10 minutes for a 1 hour program) that transforms the .wtv file into an .mp4 file. Quick and easy.

The end result of that process is H.264 encoded .mp4 files, all ready to stream to my Roku within 10 minutes of the recordings being completed from my over-the-air antenna. Pretty slick.
