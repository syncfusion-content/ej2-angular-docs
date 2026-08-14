---
layout: post
title: Image and Divider in Angular Card | Syncfusion
description: Add images, captions, and dividers to the Angular Card component using the e-card-image, e-card-title, and e-card-separator CSS classes.
platform: ej2-angular
control: Card
documentation: ug
domainurl: ##DomainURL##
---

# Image and Divider in Angular Card

## Images

The Card component supports including images within its elements. Images are added by applying the `e-card-image` class to a `div` element anywhere inside the card root. Using this class, write CSS styles to load images into that element.

> By default, card images occupy the full width of their parent element.

```html
    <div class = "e-card">
        <div class="e-card-image">
        </div>
    </div>
```

### Title

Card images support including a title or caption for the image. By default, the title is placed over the image in the left-bottom position with an overlay effect.

```html
    <div class = "e-card">
        <div class="e-card-image">
            <div class="e-card-title"></div>
        </div>
    </div>
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/card/card-img-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/card/card-img-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/card/card-img-cs1" %}

## Divider

Dividers provide visual separation between different sections within the card. Add a divider inside the card elements to create visual separation between different sections.

* Place a `div` element with the `e-card-separator` class inside the card element to add a divider.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/card/card-header-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/card/card-header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/card/card-header-cs1" %}

## See Also

* [How to customize the card image title position](./how-to/customize-the-card-image-title-position)