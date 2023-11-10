---
title: "Moving my Mastodon Instance to a New Server"
date: 2022-12-20T14:50:16.000
tags: ['mastodon','tech','social-media']
---

Continuing my adventures hosting [IowaDon.org](https://iowadon.org), a very small Mastodon instance.

When I started hosting IowaDon.org back in early November, I set it up on Linode. I'd heard lots of advertisements for their services, and they offered $100 of free credits to try them out for a couple months, so hey, why not? There was also a guide for setting up Mastodon on Linode that [turned out to be not quite as smooth as it claimed](/22/11/setting-up-a-mastodon-instance-on-linode/). (Linode has since [created a one-click install package](https://www.linode.com/blog/devops/mastodon-server-linode-marketplace/), so life may be easier if you tried to start now.) I was not only using Linode's basic server instance ($10/mo for 1 CPU, 2 GB of RAM, 50 GB of storage) but also their object storage ($5/mo for 250 GB of storage, lots of data transfer allowance).

Six weeks later, the object storage continues to seem like a very good deal. Some basic math with the AWS calculator tells me that if I was hosting this same data with this much transfer on Amazon S3, I'd be in the $30/month neighborhood. Maybe there would be ways to optimize that, but a flat $5/mo seems like a solid choice going forward.

On the server side, though, $10/mo for the server + $2.50/mo for backups wasn't _awful_, but I felt like I could do better. I found a recommendation for RackNerd.com, whose ["Black Friday" deal is still up](https://www.racknerd.com/BlackFriday/) and provides a 3 CPU, 4.5 GB RAM, 100 GB SSD storage for $49/year. (I think it was $45/year when I signed up...) I went ahead and signed up, and within minutes had an IP address and a username and password to login and start working. I had some limited experience with Linux server administration already, but there was still some learning curve here. Fortunately I didn't have a pressing need to move my Mastodon instance, so I could take my time and make sure I was comfortable with how everything was going.

## My basic setup steps:

- Secure the instance using [Linode's recommended steps](https://www.linode.com/docs/guides/set-up-and-secure/). This includes things like setting up SSH keys and disabling password logon, setting up a firewall, etc.

- I'm using [Tailscale](https://tailscale.com/) for VPN connections between my servers and my personal computers and Synology. This has been the most useful piece of the whole puzzle. Again free for my use case, it provides secure WireGuard VPN connections directly between my devices, making login and secure copy very easy. Highly recommended.

- I installed [Netdata](https://www.netdata.cloud/) for performance monitoring. It's free for the tier I'm using, but it gives me plenty of info on CPU and RAM usage, etc, and will email me if anything goes too wrong.

- I played a little bit with setting up a web server (using nginx) and database using Docker images, but that felt like it got complicated fairly quickly without significant benefit. So I jettisoned Docker and natively installed Nginx and Mariadb, and set up [Adminer](https://www.adminer.org/) as a single-page database admin interface.

## Migrating Mastodon

The [Mastodon documentation on this](https://docs.joinmastodon.org/admin/migrating/) is very good. Basically you do a fresh server install per the [Mastodon production guide](https://docs.joinmastodon.org/admin/install/) but then stop short of doing the `mastodon:setup` step. The two key things that need to come over from the old server are the `.env.production` file (which includes the secret keys) and the database. (This is where using Linode Object Storage helped - I didn't need to move ~100 GB of media files over! They just stayed where they were in object storage.) I dumped the database (ended up about 1.4 GB), copied the dump file over, and imported it on the new server. The .env.production file needed minor updates for the new database connection parameters, but otherwise was good to go.

Everything seemed pretty functional, so then it was time to get DNS pointed over to the new server. I had been pointing at Linode nameservers and managing my DNS settings within Linode, so I had some work to recreate all the DNS entries back over at Hover (my domain registrar of choice). I belatedly realized that I could've edited the /etc/hosts file on my MacBook to point to the new server to allow me to start testing the site out before DNS resolved... Next time.

## It's never _quite_ that easy

At this point, I could see the Mastodon services were up and running, the server looked like it was happily doing work, and my phone app was connecting up fine. But when I tried to load the web interface it was failing. I asked for help on the Mastodon Discord server and was reminded to look at Nginx configuration. Nginx was indeed throwing errors:

```
2022/12/17 10:39:30 [crit] 411144#411144: *1966 stat() "/home/mastodon/live/public/inbox" failed (13: Permission denied), client: 128.199.9.49, server: iowadon.org, request: "POST /inbox HTTP/2.0", host: "iowadon.org"
```

The helpful person on Discord immediately told me that Nginx wasn't proxying the request to the puma socket... that gave me someplace to start looking. Puma was running fine, and Nginx was configured to pass the requests along to it.

After about 90 minutes of head-scratching and increasingly-focused googling, [I found the answer on Stack Overflow (of course)](https://stackoverflow.com/questions/70028324/nginx-permission-denied-accessing-puma-socket-that-does-exist-in-the-correct-loc). Turns out when I had done the very first step, creating the mastodon user on the server, the /home/mastodon folder was set up with 750 permissions (no visibility for basic users). That lack of visibility into the folder for non-mastodon users was causing the problem. A quick `chmod o=rx /home/mastodon` solved _that_, and voila! The web interface was up and running.

## Backups

One bit that was left hanging at that point was backups. I had been paying Linode to do nightly backups, which appear to be just a snapshot of the full server instance. But I see now that for the Mastodon server, the only things that are critical to backup (again, since all the media is out in the cloud) are the .env.production file and the database dump.

It turns out I have a Synology NAS in my basement with sufficient empty space on it for backups, and Tailscale made it very easy to just rsync the database dump file to my Synology every night. So, I set up a quick cron job to run a database dump and rsync at 2 AM every day. Miracle of miracles, it worked the first time. (It worked the second, third, and fourth times, too...)

## The aftermath

Several days into the new server I'm happy with the performance. Mastodon is enjoying the extra RAM, the CPU load is quite reasonable (~25% average, maybe), and I have a server instance that I can use for more hosting. I will slowly be moving the several Wordpress sites I run over to this server, which will eventually let me get rid of the hosted service I've been paying for for a decade. It feels like a good upgrade to me.
