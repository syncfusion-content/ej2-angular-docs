---
layout: post
title: Resizing in Angular Ribbon component | Syncfusion
description:  Learn here all about Resizing in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
--- 

# Resizing in Angular Ribbon Component

The Syncfusion Angular Ribbon component automatically adjusts the layout of its elements when the available space changes. It expands when the container size increases and collapses when it decreases. This resizing behavior is available in both Classic and Simplified modes.Also, we have an option to resize the ribbon elements in the custom order.

*   **Classic Mode**: As the available width decreases, items transition from `Large` to `Medium` to `Small`. The reverse occurs as the width increases.
*   **Simplified Mode**: Items transition between `Medium` and `Small` sizes based on the available space.


## Define Constant Item Size

You can use the [allowedSizes](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#allowedsizes) property to maintain a constant size for a specific item. If `allowedSizes` is set, the item will retain its specified size and will not be affected by the Ribbon resizing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/AllowedSize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/AllowedSize/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/AllowedSize/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/ribbon/AllowedSize/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/AllowedSize" %}

## Define Initial Item Size

The [activeSize](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#activesize) property specifies the initial size of a Ribbon item before any resizing occurs. Its default value is `Medium`. During resizing, the component updates this property based on the `allowedSizes` configuration and the available container space.