---
title: Shopify Sections Editor
subtitle: Take advantage of blocks to modularize your entire shop
layout: post
modal-id: 6
date: 2017-01-17
category: technical
intro: Shopify rolled out a shiny new feature that makes it easy to modularize your shop's homepage. But what about the rest of the site? Learn how we developed a highly functional workaround.

---

#Shopify Sections Editor

##*Take advantage of blocks to modularize your entire shop*

___

One of Shopify's major pitfalls was the lack of drag and drop page editing. There wasn't an easy way to quickly rearrange bits of content on a given page. 
This was until October 2016, when Shopify rolled out a shiny new feature--*Sections*--which allows users to add or move content within their shop with just a few clicks.

>  <i class="fa fa-quote-left"></i>
>  Essentially, Shopify sections allow a user to add or move content on your shop's homepage with just a few clicks.

In a few minutes of research, we were able to migrate our homepage elements to sections.
Our client would be able to login and make otherwise complex stylistic changes with no assistance from our team - a powerful
addition to an already robust CMS.

___

###How it works

In order to use sections, [first you need to build some](https://help.shopify.com/manual/using-themes/sections).
Then you can add those sections to your theme: 

![Add sections](/img/portfolio/insert-shopify-sections.gif){: .img-responsive.centered-img}

Once you've added them, you can reorder the sections as you like: 

![Move sections around](/img/portfolio/move-around-shopify-sections.gif){: .img-responsive.centered-img}

Great! We've reduced the amount of development time to reorganizing to 0. However, we soon realized that the drag and drop editor was only built for the homepage.
As designed, we couldn't bring this functionality to the rest of the shop. What to do? It seemed unreasonable to offer such a robust new feature to our client only to have it limited to a single page.

___

###Expanding applications

After a few inspired but ultimately unsuccessful attempts at circumventing the limitation, we found a glint of promise in the sections documentation:

![Use blocks to extend functionality]( /img/portfolio/blocks.png "Blocks are the answer!" ){: .img-responsive.bordered-img}

It turns out that in much the same way Shopify allows a user to reorder sections on the homepage, blocks can be reordered within sections.

___

###Implementation

To take advantage of this we did the following:

**1. Create a file in `/sections` directory for each main page.** The markup in these files is, for the most part, a long switch statement. Like this:

{% highlight liquid %}
{% raw %}
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
{% endraw %}
{% endhighlight %} 
The code above says "when a certain block's type is to be displayed, include a piece of markup from the `/snippets` directory."
Therefore, modules exist in that folder. 

In the `/templates` directory, replace the existing markup in each page template with this: `{% raw %}{% section 'sectionname' %}{% endraw %}`
This will include the module container created in step 1.

**2. Customize the page.** When in the theme editor, you'll see that the page has only one section--the one that was included within the template file.
![Use blocks to extend functionality]( /img/portfolio/editblocks.jpg "Blocks are the answer!" ){: .img-responsive.centered-img}

Click to edit this section, and we find that we are able to add any of the blocks we built--as long as we wrote the possibility into the switch statement.

**3. Make an element of a block customizable.** This can be done by defining the settings in the section's `{% raw %}{% schema %}{% endraw %}` and use the  `{% raw %}{{ block.settings.yoursetting }}{% endraw %}` liquid tag to render the content.
Depending on the setting type, you can customize everything from images, to plain text, to URLs.


___

###Results

Congratulations! If you've been following along then you've brought sections functionality to your entire shop.

![Reorder your blocks]( /img/portfolio/reorder.gif "Problem Solved!" ){: .img-responsive.tall.centered-img}
