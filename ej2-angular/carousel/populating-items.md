---
layout: post
title: Populating items in Angular Carousel component | Syncfusion
description: Learn here all about Populating items in Syncfusion Angular Carousel component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Carousel 
documentation: ug
domainurl: ##DomainURL##
---

# Populating items in Angular Carousel component

The Carousel component supports two distinct approaches for rendering slides, each suited to different use cases and data scenarios:

* Populating items using carousel item
* Populating items using data source

## Populating items using carousel item

When rendering the Carousel component using items binding, you can assign individual templates for each item or apply a common template across all items. This approach also allows customization of slide transition intervals for each item individually. The following example demonstrates item property binding functionality.

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

When rendering the Carousel component using data binding, you can assign a common template for all items through the [`itemTemplate`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#itemtemplate) property. Individual item intervals cannot be configured in this approach. The following example demonstrates data binding functionality.

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

Carousel items populate starting from the first index by default. You can customize the initial slide selection through the following approaches:

* Select an item using the property.
* Select an item using the method.

### Select an item using the property

The [`selectedIndex`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#selectedindex) property allows you to specify which slide displays during initial rendering or programmatically switch to a particular slide item.

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

The [`prev`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#prev) and [`next`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#next) public methods allow you to programmatically navigate the currently displayed slide to the previous or next slide.

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

The Carousel component can display one complete slide alongside partial views of adjacent (previous and next) slides simultaneously. Enable or disable this feature using the [`partialVisible`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#partialVisible) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/partial-visible-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/partial-visible-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/partial-visible-cs1" %}

> Slide animation only applies when `partialVisible` is enabled.

When both [`loop`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#loop) and [`partialVisible`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#partialVisible) properties are enabled, the last slide displays as a partial slide during initial rendering.

When `loop` is disabled, the previous slide does not appear during initial rendering.

The following example demonstrates `partialVisible` functionality without `loop` enabled.

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

* [Customizing partial slides size](./styles-and-appearance#customizing-partial-slides-size)