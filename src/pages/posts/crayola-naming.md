---
published: true
title: 'Crayola Naming Convention for SCSS/SASS Variables'
path: crayola-naming
date: '2018-04-04'
category: 'Conventions, SCSS/SASS'
---

I worked for an agency once and they were fans of [bike shedding](http://bikeshed.com/).  We argued over several trivial things over my brief stint there. One of the things we frequently debated over was how to name things.   Don't get me wrong, I loved it there and I believe this is a pretty common debate amongst passionate people revolving around a central concept.  Humans love categorizing, naming and placing things in metaphorical buckets.  

One thing I was particularly passionate about was not _how to_ name color variables in SCSS but _how not to_ name them.  I've seen and participated in some pretty terrible naming conventions.  I'm sure most of you reading this article can relate to things like `brand_color` and `primary_color`.  I really dislike these because they don't tell me much about the color in question.  The names only tell me one piece of information (that I've already gleamed from this project).  They tell me that they relate to this specific app/site/widget.  That isn't helpful information that I didn't already know.

I know what some of you readers are thinking.  Well you could just name things `header_color` or `font_color`.  The thing I dislike about these names is that then we are becoming to specific.  What if I want to use `header_color` as my `footer_color` also?  Then I have to think up some meaningful name that's generic enough for both places.  Still not a fan.  

This led me to the hunt for the _perfect naming convention_ for SCSS/SASS variables, as if there were such a thing.  I scoured the top 3 or 4 _Google_ search results and landed on an article by David Walsh, [here](https://davidwalsh.name/sass-color-variables-dont-suck).  In fact, most of this article itself is probably just a rehash of the concepts explored in that article.  I can't help it though.  David made me passionate about this topic.

The approach for naming things mentioned in this article using the [Name That Color Tool](http://chir.ag/projects/name-that-color) is honestly exactly what I was looking for.  The color variables had meaning because I could look at the variable name and know what kind of color it was.  They were unique because there are 100s of naming combinations for various hexadecmial values.  This was a great choice.  However, it was lacking a couple of things.

If my palette ended up being something like `cherry`, `fire-engine` and `lime` then I could have a couple of problems.

  1. I could easily have a variable, method, or just plain text word in my code base that matched some of those criteria.
  2. Is the lime color I chose more on the green side of lime or more on the yellow side of lime?

So I had to dig a bit deeper.  And the solution I came up with is this.

 1. Add a prefix to your variables to symbolize what they are (this goes really for all SCSS/SASS variables)
 2. Add another prefix that matches what color family this variable is in.

This is what I came up with.

  - `$color-red-cherry`
  - `$color-red-fire-engine`
  - `$color-green-lime`

This solves my specific issues.  I'm able to search because things are specific and unique.  The variables describe what they are and help me narrow down which one to use.  Most IDEs will help me with auto completion the moment I type `$color...`.  Sometimes I'm not sure all the variables I defined so hopefully my IDE can help me a bit further if I type `$color-red...`.  VSCode will show me all the variables that start with that.

>'Oh yeah, this is going to be a flashing marquee so I need dat Fire Engine Red to let everyone know it's going to be HOT!!!'

If the client comes back to me and says man we really hate that red (`$color-red-fire-engine`), all I have to do is change it's declaration to the hexadecimal that it gets changed for then find and replace all (something like `cmd`+`shift`+`R`) in my project from `$color-red-cherry` to `$color-[family]-[name]`.  It only takes seconds to safely replace all references and its declaration in my codebase.
