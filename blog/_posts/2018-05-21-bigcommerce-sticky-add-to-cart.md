---
title: Adding a Sticky Add To Cart Panel in BigCommerce
layout: post
modal-id: 6
date: 2018-05-22
category: technical
keywords: bigcommerce,ecommerce,mobile,savannahbee,jquery,tutorial,guide
author: Marius Stankevicius
description: Fitting all of your product content on mobile can be tricky. The more you add, the further your customers have to potentially scroll in order to add the product to their cart. Adding a "sticky" panel that stays with the user as they scroll can solve this problem, keeping the Add to Cart button visible at all times, even on longer pages. See how we implemented a sticky add to cart panel for Savannah Bee Company.

---

# Adding a Sticky Add To Cart Panel in BigCommerce
Building a product page for mobile means coming to terms with certain tradeoffs. You want to provide product details, photos, reviews, related products, and more in order to make the right impression on the customer. On the other hand, you want the “Add to Cart” button to be in reach at all times. Limited screen space is simply a reality of mobile, so this means that the more content you add, the further your customers have to scroll back up to be able to order. Luckily, this a compromise you don’t necessarily have to make.


![](/img/portfolio/sticky-panel-overview.gif){: .img-responsive.tall.img-centered}


The “sticky” add to cart panel we built for Savannah Bee Company’s website appears on the bottom of the screen and stays with the user as they scroll through the page, meaning products can be added to their cart at any position on the page. In our implementation, we keep the standard BigCommerce add to cart form at the top of the page in order to showcase product options individually. When this form is no longer in sight, however, the panel appears and remains until the user navigates back up to the form. This ensures that the two forms are never both taking up valuable screen space at the same time.


# Building the Panel

Our panel mirrors the functionality of our standard add to cart component, so we need the ability for the user to select a product quantity, option, and add their selection to the cart. We use dropdowns for quantity and options, and a simple button for adding to cart. For ease of styling, we hide the dropdowns and use <span> elements to display their current state. Since we’re sharing the same data between the two components, both are wrapped in the same form element. This also means we don’t need to write any additional handlers for the submit button.

{% gist 94fa4964de556f1612146896bace6aec %}
<br />

# Populating the Panel

### Quantity
Although the standard ‘add to cart’ form uses a text input element for specifying the desired quantity, we decided using a dropdown on the sticky panel made more sense on mobile. To do this, we define an integer representing the maximum quantity we’ll allow the customer to select. We then append a dropdown option for every quantity up to that integer. 

{% gist 6970cc2aa723e820e87d268b7d74d3b1 %}
<br />

### Options
To populate the product options dropdown, we use the option data already present in the standard form. We iterate through the product options, grabbing the name and ID of each one, and append a dropdown option with those values. Since our standard form has a default option selected on page load, we want this same option to be selected by default in the sticky panel as well, so we make sure to add a ‘selected’ attribute to the current dropdown option when we come across the ‘selected’ class name. We also use the name of the selected option to populate the selected option <span>, which is what actually displays our currently selected option. 

{% gist 98dc438ea4020c46940a9a6181da89f3 %}

As not all of Savannah Bee Company’s products have options, we include a condition for this case that will add a ‘single-product’ class to the options container. We then add some CSS for this class to hide all but the price of the product in the options container.

{% gist 700e3b2345bfeb891c2cd1c2ca43a764 %}

<div class="two-images">
<img src="/img/portfolio/sticky-panel-product-options.png" class="half-width"><img src="/img/portfolio/sticky-panel-product-no-options.png" class="half-width">
</div>

<div class="image-caption">
Product with options vs. product without options
</div>
<br />
# Adding Functionality
### Scroll Behavior

To fully utilize our limited screen space, we want our new add to cart form to only appear once the standard form is no longer in sight. We also want it to get out of the way once the user scrolls back up again. To do this, we add a scroll handler to the window that compares the current scroll position to the position of the bottom of the standard form, and then toggles accordingly. 

{% gist 71708cdb340b0470efabc337f13ca9d6 %}

Notice that the toggle function is wrapped in a [Lodash debounce](https://lodash.com/docs/4.17.10#debounce). Adding a debounce to the handler will cause it to only fire once the user has finished scrolling. This limits the excessive scroll handler calls that would be made otherwise, and minimizes the corresponding toll on performance.

![](/img/portfolio/sticky-panel-scroll.gif){: .img-responsive.tall.centered-img}
<br />

### Updating Display Text

Since we chose to display the current state of the quantity and option dropdowns with separate elements for ease of styling, we need to add some handlers to update the display text when selected values change. 

{% gist b19e49f21598cad5447bfa8d104b9fa1 %}

![](/img/portfolio/sticky-panel-update.gif){: .img-responsive.tall.centered-img}



### Syncing State

At this point, we have two separate pieces of UI on the same page that specify product quantity, options, and then add the product to cart. Since they both serve the same function, both the standard form and our new sticky form should display the same selected data at any given moment. If a user selects a product option on the standard form, scrolls down to read more details, and then looks to the sticky form, they’ll likely expect to see the price of the option they chose at the top of the page. In order to prevent any confusion that may arise from differences in the state of the forms, we want to make to sure their data is synced. 

To do this, we modify the onChange event handlers of the quantity/option inputs of the standard form to update the inputs of the sticky form, and vice versa.  

{% gist 95a695886973058bfab96508c1c0ee5d %}
{% gist ec2487a78e97d03f653f9a6d4c87986a %}

![](/img/portfolio/sticky-panel-overview.gif){: .img-responsive.tall.centered-img}


We now have a persistent form that functions on its own, and also in tandem with our standard form. Whether they’re swiping through product images or reading reviews, customers will now be able to easily add the product to the cart without having to to scroll up and down the page. 🎉
