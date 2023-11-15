---
title: "Sometimes knowing too much is a bad thing"
date: "2010-01-22T13:29:12.000"
tags: 
  - "nerdy"
  - "rants"
  - "video"
---

Last night Becky and I sat down to watch the second episode ( titled ["Rewind"](http://www.hulu.com/watch/121425/human-target-rewind)) of the Fox show _Human Target_. The first episode was fun in a cheesy action-thriller sort of way, so we decided to give it a continued try.

Back in high school, I had some friends whose dad was a submarine officer in the US Navy. They said it was unbearable to watch _The Hunt for Red October_ around him because he spent the whole moving groaning at the inaccuracies it portrayed in the submarine. After watching this episode of Human Target, I think I now know how he felt. As an avionics systems engineer, the details of this in-air plot just drove me batty. Allow me to elaborate.

**First,** the plane is going down for no apparent reason. Yes, there's a fire down in the fuselage, but that shouldn't cause complete loss of control.

**Second,** they've gotta put the fire out, and apparently there is more wind flow over the top of the aircraft than the bottom (???? Totally bogus) so the solution is to _fly upside down_ until the increased airflow puts the fire out. Are you kidding me?!? We're not talking a fighter jet here, we're talking a large airliner. While there is this rather famous video of Boeing test pilot Tex Johnston doing a barrel roll in a 707, look at how much altitude he loses just turning the thing over! There's no way the airplane could stay airborne and upside down for long, much less the **_fifteen minutes or so_** that it does in this episode.

**Third,** while they're flying along upside down, suddenly they can't flip it back around to right-side-up because the on-board computer locked up. We'll ignore the detail that they say the "flight management" computer locked up when, in reality, it's the flight _control_ computer that would help them fly the plane. Once the pilot diagnoses that it's locked up, somebody asks if they can't just reboot it. And of course the answer is no, they can't. By this point I'm yelling at the tv screen. "OF COURSE YOU CAN REBOOT IT YOU IDIOTS! POP THE FREAKING BREAKER AND RESET IT AND YOU'LL REBOOT IN JUST A FEW SECONDS!!!" (Becky is not appreciating me too much at this point.) But apparently NONE OF THEM REALIZE THAT, since they then have to go on to...

**Fourth,** the amazing computer hacker on board decides she can somehow download the flight management software onto her laptop, patch the laptop into the aircraft system, and use it to control the plane. About the only thing that whole sequence gets right is that there are ethernet-based networks on modern aircraft. But it would be next thing to impossible to hack into the system to download the software, and COMPLETELY IMPOSSIBLE to then patch that laptop into the system. And why was she able to download the software right there in the (upside-down) cabin, but to patch it into the aircraft system, they had to go down to the avionics bay?

**Fifth,** once they got down to the amazingly-spacious avionics bay, they apparently were able to just unplug a standard RJ45 ethernet jack (and normal-looking ethernet cable) from the aircraft wiring and plug it into the laptop, and SHAZAM! it worked! What they ignore is that standard ethernet wiring and a plastic RJ45 jack would never pass aircraft environmental and vibration testing. All ethernet connections in an avionics system are routed through stout metal screw-on connectors, not secured with wimpy plastic clips.

![](http://www.precisionhermetic.com/images/sealed_aluminum_interconnect.jpg)

Well, it's the world of TV, which means that yes, everything worked out fine inside of an hour, the bad guys were caught, the good guys survived to fight another day, and the hero got in his wisecracks just before the credits rolled. (Oh, and fun side-note: two episodes of Human Target, two appearances by actors who had major roles in _Battlestar Galactica_. For whatever that's worth in your geek scoring system.) Next time, I hope they just stay off the airplanes so I don't have to deal with knowing too much about reality for my hour of entertainment.
