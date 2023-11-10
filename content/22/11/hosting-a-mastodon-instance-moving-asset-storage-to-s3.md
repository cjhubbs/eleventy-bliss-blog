---
title: "Hosting a Mastodon instance: moving asset storage to S3"
date: 2022-11-19T18:46:06.000
tags: ['mastodon','tech','social-media']
---

I've had my Mastodon instance ([iowadon.org](https://iowadon.org)) up and running for about a week and a half now. It's not grown very large - 10 users or so last time I checked - but it's been a great project to learn some more server admin type stuff.

Ten days and ten users in, my Linode instance seems to quite adequate from a processing standpoint. (I'm using the lowest-level Linode offering, which provides 1 CPU core and 2 GB of RAM.) However, the disk space usage is growing. The database itself isn't overly large, but the cache directory (which stores profile pictures, preview cards for images) is up over 15 GB. I could work to get really aggressive about cache management, but realistically a larger cache is a reasonable thing. Mastodon provisions for this by providing easy hooks to use S3 buckets for the cache, so I figured I'd give that a shot.

I found [Nolan Lawson's excellent step-by-step instructions](https://github.com/cybrespace/cybrespace-meta/blob/master/s3.md) and followed them to a T. Well, almost to a T. I first went to set up an S3 bucket, kicked off the script to copy the cache over from Linode to S3, then went to bed. The next morning I did some more reading and decided that Linode's very similar Object Storage service (it's just their S3 clone) might be a better deal cost-wise. Amazon S3 charges a small amount per GB for storage and then a different rate for data access. Linode does it slightly differently - you pay a flat fee per month for a given bucket size, and then you get a large amount of transfer every month for free. Since my server is already on Linode, it was easier and simpler to just use the Linode buckets, so I tried again there.

One gotcha that's not obvious when creating the bucket at Linode: if you're going to put a custom domain name in front of the bucket, you need to name the bucket that domain name if you want their TLS/SSL stuff to work. In my case, I setup a CNAME record to point _assets.iowadon.org_ at my bucket, so I needed to name my bucket _assets.iowadon.org_. There's no renaming buckets, so I had to empty and delete my old one and then create a new one with the correct name. After that the certificate generation went smoothly enough and I once again kicked off the copy job. Then I went to the gym.

A couple hours and 68,000 file copies later, my cache is in the bucket and a quick restart of Mastodon via docker-compose pulled in the configuration updates that now point out to the cloud. It went amazingly smoothly.

## _Edit: I posted this a little too soon..._

All the existing assets were working fine, but new assets weren't loading properly. Commence some more googling. The correct answer was that in addition to the `.env.production` settings listed in the instructions above, you also need this one:

```
S3_ENDPOINT=https://<linode_region>.linodeobjects.com
```

In my instance, that looked like this:

```
S3_ENDPOINT=https://us-southeast-1.linodeobjects.com/
```

_Now_ it seems to be fully working.
