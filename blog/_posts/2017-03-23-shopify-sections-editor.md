---
title: Shopify Sections Editor
subtitle: Take advantage of blocks to modularize your entire shop
layout: post
modal-id: 6
date: 2017-03-23
category: technical
by: Bradley Wilkerson
pic: https://avatars3.githubusercontent.com/u/15271677?v=3&s=134
intro: Shopify rolled out a shiny new feature that makes it easy to modularize your shop's homepage. But what about the rest of the site? Learn how we developed a highly functional workaround that enables sections on all of your page templates.

---

# Shopify Sections Editor

## *Use blocks to modularize your entire shop*

___

One of Shopify's most requested features was drag and drop page editing. There wasn't an easy way to quickly rearrange content on a given page, or re-use components across pages. Then in October of 2016, Shopify rolled out a shiny new feature called *Sections* that allows users to add and move content on shop *homepages* with just a few clicks.

>  <i class="fa fa-quote-left"></i>
>  Shopify sections allow users to add and move content on shop homepage with just a few clicks.

Using the Shopify tutorials, we were able to migrate our homepage elements to sections.
Our clients would now be able to make otherwise complex changes with no assistance from our team - a powerful
addition to an already robust CMS, and a great way to save our customers' time and money.

### How it works

In order to use sections, [first you need to build some](https://help.shopify.com/manual/using-themes/sections). :stuck_out_tongue_winking_eye:
Then add those sections to your theme: 

![Add sections](/img/portfolio/insert-shopify-sections.gif){: .img-responsive.centered-img}

Once you've added them, you can reorder the sections as you like: 

![Move sections around](/img/portfolio/move-around-shopify-sections.gif){: .img-responsive.centered-img}

Great! We've reduced development time for reorganizing to 0 minutes. But we quickly realized that the drag and drop editor was only built for the homepage.
As designed, we couldn't bring this functionality to the rest of the shop, landing pages, or other Shopify `Page` templates. What to do? Customers wanted to use sections throughout their store, and we wanted to let them.

###Bringing sections to other pages

After a few inspired but ultimately unsuccessful attempts at circumventing this limitation, we found a glint of promise in the [sections documentation](https://help.shopify.com/themes/development/theme-editor/sections#blocks). It turns out that in much the same way that Shopify allows a user to reorder sections on the homepage, blocks can be reordered within sections.

###The solution

Here's how we were able to use this. No plugins required.

**1. Create a file in the theme's `/sections` directory for each page we'll add sections to.** For example, we might create `/sections/about.liquid` to be used with the About template. The markup in these files is, for the most part, a long switch statement. Like this:

{% highlight liquid linenos %}
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

The code above includes markup from the `/snippets` directory based on the block's `type`.
We create snippets for each page element page that will be editable as a section.

In the `/templates` directory, replace the markup in your page (for example, "About") with something like this: `{% raw %}{% section 'about' %}{% endraw %}`
This will include the `/sections/about.liquid` file that we created in the previous step.

**2. Customize the page.** When in the theme editor, you'll see that the page has only one section--the one that was included within the template file. Unlike on the home page, you'll need to "drill down" to see the available sections for the page.
![Use blocks to extend functionality]( /img/portfolio/editblocks.jpg "Blocks are the answer!" ){: .img-responsive.centered-img}

Click to edit this section, and we find that we are able to add any of the blocks we built--as long as we wrote the possibility into the `case` statement.

**3. Make an element of a block customizable.** This can be done by defining the settings in the section's `{% raw %}{% schema %}{% endraw %}` and using the  `{% raw %}{{ block.settings.yoursetting }}{% endraw %}` liquid tag to render the content.
Now you can customize images, plain text, URLs, and more.

### Results

Congratulations! If you've been following along then you've brought sections functionality to your entire shop.

![Reorder your blocks]( /img/portfolio/reorder.gif "Problem Solved!" ){: .img-responsive.tall.centered-img}

Need help getting started? [Get in touch!](/#contact)