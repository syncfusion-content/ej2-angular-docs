---
layout: post
title: Populating items in Angular Carousel component | Syncfusion
description: Learn here all about Populating items in Syncfusion Angular Carousel component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Populating items 
documentation: ug
domainurl: ##DomainURL##
---

# Populating items in Angular Carousel component

The Carousel component offers two ways to render slides:

* [Populating items using carousel item](#populating-items-using-carousel-item)
* [Populating items using data source](#populating-items-using-data-source)

## Populating items using carousel item

When rendering the Carousel component using items binding, you can assign templates for each item separately or assign a common template to each item. You can also customize the slide transition [interval](./animations-and-transitions/#intervals-between-slides) for each item separately. The following example code depicts the functionality as item property binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs14" %}

## Populating items using data source

When rendering the Carousel component using data binding, you can assign a common template only for all items using the [`itemTemplate`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#itemtemplate) property. You cannot set the interval for each item. The following example code depicts the functionality as data binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs15" %}

## Selection

The Carousel items are populated starting from the first index and can be customized in the following ways:

* [Select an item using the property](#select-an-item-using-the-property)
* [Select an item using the method](#select-an-item-using-the-method)

### Select an item using the property

Using the [`selectedIndex`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#selectedindex) property of the Carousel component, you can set the slide to be populated at the time of initial rendering else you can switch to the particular slide item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs16" %}

### Select an item using the method

Using the [`prev`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#prev) or [`next`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#next) public method of the Carousel component, you can switch the current populating slide to a previous or next slide.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs17" %}

## Partial visible slides

The Carousel component supports showing one complete slide and partial views of adjacent (previous and next) slides simultaneously. You can enable or disable the partial slides using the [`partialVisible`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#partialVisible) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/partial-visible-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/partial-visible-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/partial-visible-cs1" %}

> Slide animation only applicable if the `partialVisible` is enabled.

The last slide will be displayed as a partial slide at the initial rendering when the [`loop`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#loop) and [`partialVisible`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#partialVisible) properties are enabled.

The previous slide is not displayed at the initial rendering when the `loop` is disabled.

The following example demonstrates the functionality of `partialVisible` and without `loop` feature.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/partial-visible-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/partial-visible-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/partial-visible-cs2" %}

## See Also

* [Customizing partial slides size](./styles-and-appearance/#customizing-partial-slides-size)