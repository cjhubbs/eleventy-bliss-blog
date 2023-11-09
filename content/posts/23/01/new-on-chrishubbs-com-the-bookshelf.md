---
title: "New on ChrisHubbs.com: The Bookshelf"
date: 2023-01-18
imgSrc: ""
imgAlt: ""
---

I've tracked my reading in one way or another here on this site and then using Goodreads since 2007 or so. At some point Goodreads got bought by Amazon and its functionality stagnated; I'm still logging books there but not interested in investing in it as my continued long-term logging. I was casting around for ideas on book logging back during the holidays and ran across some spiffy static site generator ideas, which lead me to rolling out [The Bookshelf](https://books.chrishubbs.com) at [books.chrishubbs.com](https://books.chrishubbs.com) today.

![](https://chrishubbs.com/wp-content/uploads/2023/01/bookshelf.png)

The vast bulk of the functionality driving The Bookshelf was written by Tobias (aka Rixx), who maintains his own book logging site at [books.rixx.de](https://books.rixx.de/). He provides the source on Github. It was designed to scrape Goodreads for data, assuming that the user would have Goodreads Developer API keys. Goodreads no longer issues new developer API keys (stagnating, remember?) so that path wasn't available. I ended up writing some Python to parse the Goodreads export CSV file (which contained all of my reading logs since 2007) and process it into a whole structure of Markdown files with associated metadata. Those are then the master data that Rixx's site generator tools use to generate static HTML.

I love the layout and organization of The Bookshelf. You can look at reading [by year](https://books.chrishubbs.com/reviews/), [by author](https://books.chrishubbs.com/reviews/by-author/), [by title](https://books.chrishubbs.com/reviews/by-title/), and [by series](https://books.chrishubbs.com/reviews/by-series/). You can also look at [statistics](https://books.chrishubbs.com/stats/) on titles and pages read. There is "to be read" functionality that is a bit raggedy-looking yet; I have plans to add my existing to-read bookshelf (above my dresser in my bedroom!) to The Bookshelf as To Read, but I haven't gotten that done yet.

If history serves, The Bookshelf will be the most actively updated part of my website. I haven't done a great job over the years at writing short book reviews, but I think this site and the workflow to update it will encourage me to do that. I'm sure a decade from now it'll be time for a change to something else, but as an organizer and cataloger, I'm excited to have 15 years worth of reading data here.
