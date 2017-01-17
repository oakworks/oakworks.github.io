---
title: Shopify Sections
subtitle: 
layout: post
modal-id: 6
date: 2017-01-17
img: tourstore.png
thumbnail: tourstore-thumbnail.png
alt: image-alt
category: technical
intro: Shopify rolled out a shiny new feature that makes it easy to modularize your shop's homepage. But what about the rest of the site? Learn how we developed a highly functional workaround.

---


Shopify Sections Editor - Take advantage of blocks to modularize your entire shop
==============

Until recently, one of Shopify's major pitfalls has been the lack of drag and drop page editing.
That is, there was no easy way to quickly rearrange bits of content on a given page. 

<blockquote class="right-block">
<i class="fa fa-quote-left"></i>
Essentially, Shopify sections allow a user to add or move content on your shop's homepage with just a few clicks.
</blockquote>

In October 2016, however, Shopify rolled out a shiny new feature - "sections". Essentially,
Shopify sections allow a user to add or move content on your shop with just a few clicks.
Within just a few minutes of research, we were able to migrate our homepage elements to sections. The advantage was immediately clear.
Our client would be able to login and make otherwise complex stylistic changes with no assistance from our team - a powerful
addition to an already robust CMS.

Here's how it works:

- Build a [section](https://help.shopify.com/manual/using-themes/sections).

- Add those sections to your theme:

![Add sections]( /img/portfolio/insert-shopify-sections.gif "Add sections to your theme" ){: .img-responsive}

- Reorder sections as you like:

![Move sections around]( /img/portfolio/move-around-shopify-sections.gif "Reorder sections as you like" ){: .img-responsive}

Now, this was all well and good, but in just a few more minutes - we realized that the drag and drop editor was built for the homepage only.
We couldn't bring this functionality, as designed, to the rest of the shop. 

What to do? It seemed unreasonable to offer such a robust new feature to our client only to have it limited to a single page.

After a few inspired but ultimately unsuccessful attempts at circumventing the limitation, we found a glint of promise in the sections documentation:

![Use blocks to extend functionality]( /img/portfolio/blocks.png "Blocks are the answer!" ){: .img-responsive}

We found out that in much the same way Shopify allows a user to reorder sections on the homepage, blocks can be reordered within sections.

To take advantage of this we did the following:

1. Created a file in /sections directory for each main page. These markup in these files was basically a long switch-case statement. Like this:

{% highlight liquid %}
<div>
  {% for block in section.blocks %}
  <div class="grid-item" {{ block.shopify_attributes }}>
    {% case block.type %}

    {% when 'hero' %}

    {% include 'snippet_hero-banner' %}

    {% when 'program' %}

    {% include 'snippet_module-program' %}

    {% when 'coaching' %}

    {% include 'snippet_coaching' %}

    {% when 'shop' %}

    {% include 'snippet_shop-now' %}

    {% when 'promo' %}

    {% include 'snippet_promo' %}

    {% when 'comparison' %}

    {% include 'snippet_comparison' %}

    {% endcase %}
  </div>
{% endfor %}
</div>
{% endhighlight %} 
