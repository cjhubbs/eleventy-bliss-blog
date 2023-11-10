---
title: "Setting up a Mastodon instance on Linode"
date: 2022-11-11T01:06:12.000
tags: ['tech','mastodon','social-media']
---

With the Muskian shenanigans happening over at Twitter, I’ve been looking into Mastodon as an alternative social media site. It’s an interesting concept - a distributed network of servers that all talk to each other through an open protocol. So, being the nerdy sort, I decided to try setting up my own server. Here’s how it went:

## Registering a Domain Name

Just deciding on the domain name was the hardest part, I think. But once I settled on iowadon.org, I went over to [Hover](HTTPS://hover.com) and registered it. Easy peasy.

## SMTP email service

Mastodon needs an SMTP mail service to send notification emails. Not wanting to tie it to my personal Fastmail account, I looked around and determined that [Amazon AWS Simple Email Service (SES)](https://aws.amazon.com/ses/) was a reasonable fit. The pricing is scalable and pretty cheap ($1 / 1000 emails at this time). It took a little bit of time to get configured, but the AWS website walked me through the steps pretty clearly. Basically, AWS will give you three pieces of info: an SMTP server name (available on the SMTP settings page, will be something like `email-smtp.us-east-2.amazonaws.com`) and then a username and password. For the latter two it generates a pair that look like guacamole, and it warns you it will only ever show you them once, so copy and paste them to a useful location. If you lose them you'll have to regenerate a new pair.

Also note: if you’re a new AWS account, AWS will put you in a restricted mode until you request a review and a move into production. Once you verify a domain identity you can also verify individual emails. You need to do this before you setup Mastodon because Mastodon will want to send you an email or two.)

## Linode

I decided I didn’t want to go with a hosted setup - most of the custom hosting providers are all slammed right now, too - so it felt like my best options were either [DigitalOcean](https://www.digitalocean.com/) or [Linode](https://linode.com). DigitalOcean advertises a [pre-configured “droplet”](https://marketplace.digitalocean.com/apps/mastodon) that will give you a Mastodon instance with a minimum of configuration; Linode provides [instructions for installing Mastodon on Ubuntu 20.04](https://www.linode.com/docs/guides/install-mastodon-on-ubuntu-2004/). I went with Linode.

I started out with a 1 CPU core, 2 GB of RAM, 50 GB disk space Linode. Once I get past the initial credit they give you (go find a referral link... my account is still too new to be able to give you one of my own), I think they'll charge me $10/mo for it. We'll see how well it performs if I get more than a few users.

The instructions were good as far as they went, but a few key things seemed to be missing. I'm going to walk through the instruction sections here and comment on them.

### "Before You Begin"

This section was pretty straightforward. I followed the instructions for Creating a Compute Instance, Setting up and Securing a Compute Instance, and Adding DNS Records.

### "Install Docker and Docker Compose"

Followed the instructions for installing Docker, then for installing Docker Compose. When you clone the Mastodon git repository in the next step, it includes a docker-compose file. It took me a few minutes to realize that the docker-compose also includes the Postgres database, so there's no separate database installation required on the Linode server.

### "Download Mastodon"

OK, this bit was simple. It's just a git clone command.

### "Configure Docker Compose"

Editing the docker-compose file is a little bit of a pain. Pay attention to the details. For step #3, setting up the Postgres password, db, and user, you can set the password to whatever you want it to be. Write it down because you will need it down in the next section.

Now, step 6, generating SECRET\_KEY\_BASE and OTP\_SECRET. There are 4 separate commands in the instruction box: 2 echos to create the values and two 'sed' lines that I mistakenly assumed would write the value into the config file. Don't assume that! Follow the instructions directly and copy/paste the values for SECRET\_KEY\_BASE and OTP\_SECRET into the .env.production file. Same story with the VAPID\_PRIVATE\_KEY and VAPID\_PUBLIC\_KEY.

### "Complete the Docker Compose Setup"

The involved command here is the _rake_ command that does the initial database setup. It will ask you a bunch of questions here, many of them duplicate info to what you just put into .env.production. Such is life.

### "Initiate the Docker Compose Services"

Two commands. Easy peasy.

### "Setup an HTTP/HTTPS Proxy"

Here we install nginx. There's an nginx.conf file in the Mastodon distro that is a good start, but **there are changes you will need to make to it**.

There are two lines that say `root /home/mastodon/live/public;`. You have to change these lines. Having followed the instructions thus far, the actual location of my /public folder was `/home/chris/mastodon/public`. Update the root lines to point to the actual location of your public folder.

Next edit, and I don't remember where I found it, but it seems to work: every instance in that file that says `try_files $uri =404;` needs to be updated to say `try_files $uri @proxy;`

I think that's all I had to do to the nginx config.

### "Get an SSL/TLS Certificate"

I followed the steps to install Certbot, but when I got to step #4 where you run certbot to generate a certificate, I got an error saying that there was no ssl in a listen section of my nginx configuration. It turns out there is a "snake oil" certificate you set up first to get things moving, then you can get and install the real certificate. For the snake oil thing, use the steps described [here](https://community.letsencrypt.org/t/error-while-running-nginx-c-etc-nginx-nginx-conf-t/170408/6). I then had to cleanup a broken renewal with steps listed [here](https://community.letsencrypt.org/t/certstorageerror-renewal-config-file-is-missing-a-required-file-reference/94243), but that may have been because I was messing around w/ certificate stuff before I found out about the snake oil. If your renewal dry run works ok, you can ignore that second link.

### "Using Mastodon"

The instructions would lead you to believe at this point that the site is ready to use. However, when I went to iowadon.org, I just got an nginx configuration error. After a bunch of debugging, the key issue I found was this: I had never run any command that did a bundle install, that step where ruby installs and builds all the gems listed in Mastodon's gem file. Of course it's not gonna work that way!

The command you will want to run is `bundle exec rails assets:precompile`.

When I ran that it then sent me through several searches to install other libraries on the linux server. To save yourself some time, run this:

`sudo apt install ruby-bundler ruby-dev ruby-full build-essential libicu-dev zlib1g-dev openssl libgmp-dev libxml2-dev libssl-dev libpq-dev`

That should give you all the libraries you need to complete the bundle install.

### It works!

After all that, sure enough, it worked! My Linode CPU usage had been sitting solidly between 10% and 15% the whole time, apparently because it was in a loop continuously trying to restart my misconfigured Rails app. Once Rails started up cleanly, the CPU usage went down to about 2%.

### Adding another admin user

I originally set up an admin account for [iowadon.org](https://iowadon.org) during the setup steps. Then I realized I would want my own account ([@cjhubbs@iowadon.org](https://iowadon.org/web/@cjhubbs)) to be an admin once I moved it over. How to do that, I wondered? Turns out Mastodon has a command-line tool called tootctl just for this purpose. But to run tootctl and get it to talk to the database running in Docker, you need to run a special version of the command. What you're looking for is this:

`docker-compose run --rm web bin/tootctl <tootctl command>`

Magic!

## Impressions

First off: it's amazing how much snappier Mastodon is on this server than back on mastodon.social. The account migration process went smoothly enough, too. I will advertise it to a few friends once I get the Amazon AWS SES account moved to production so it can send emails to people other than me. Then we'll see if it gets any traction. I'll follow up later.
