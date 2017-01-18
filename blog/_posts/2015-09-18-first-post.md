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

Now, this was great, but after just a few more minutes - we realized that the drag and drop editor was built for the homepage only.
We couldn't bring this functionality, as designed, to the rest of the shop. 

What to do? It seemed unreasonable to offer such a robust new feature to our client only to have it limited to a single page.

After a few inspired but ultimately unsuccessful attempts at circumventing the limitation, we found a glint of promise in the sections documentation:

![Use blocks to extend functionality]( /img/portfolio/blocks.png "Blocks are the answer!" ){: .img-responsive}

It turns out that in much the same way Shopify allows a user to reorder sections on the homepage, blocks can be reordered within sections.

To take advantage of this we did the following:

1) Create a file in `/sections` directory for each main page. The markup in these files is, for the most part, a long switch statement. Like this:

{% highlight liquid %}
<div>
{% raw %}
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
{% endraw %}
</div>
{% endhighlight %} 
The code above says "when a certain block's type is to be displayed, include a piece of markup from the `/snippets` directory."
Therefore, modules exist in that folder. 

2) In the `/templates` directory, replace the existing markup in each page template with this: `{% raw %}{% section 'sectionname' %}{% endraw %}`

This will include the module container created in step 1.

3) Customize the page.

- When in the theme editor, you'll see that the page has only one section - the one that was included within the template file.
![Use blocks to extend functionality]( /img/portfolio/editblocks.jpg "Blocks are the answer!" ){: .img-responsive}

- Click to edit this section, and we find that we are able to add any of the blocks we built - as long as we wrote the possibility into the switch statement.

4) To make an element of a block customizable, define settings in the section's `{% raw %}{% schema %}{% endraw %} and use the  `{% raw %}{{ block.settings.yoursetting }}{% endraw %}` liquid tag to render the content.
Depending on the setting type, you can customize everything from images, to plain text, to URLs.


If you followed along, congratulations! You've brought sections functionality to your entire shop. 
![Reorder your blocks]( /img/portfolio/reorder.gif "Problem Solved!" ){: .img-responsive}
