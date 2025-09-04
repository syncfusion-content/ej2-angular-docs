---
layout: post
title: Overflow in Angular Breadcrumb component | Syncfusion
description: Learn here all about Overflow in Syncfusion Angular Breadcrumb component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Breadcrumb 
documentation: ug
domainurl: ##DomainURL##
---

# Overflow in Angular Breadcrumb component

## Overflow Mode

The Breadcrumb component uses the [`maxItems`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#maxitems) and [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#overflowmode) properties to control how breadcrumb items are displayed when they exceed the available container space. The `maxItems` property sets the maximum number of items to display, while  [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#overflowmode) determines the behavior for handling additional items.

In the following example, maxItems is set to 3 with overflowMode as Menu (default). To prevent breadcrumb item navigation, the [`enableNavigation`](https://ej2.syncfusion.com/angular/documentation/api/breadcrumb/#enablenavigation) property has been set to false in the Breadcrumb component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs5" %}

The following overflow modes are available in the Breadcrumb component to handle items that exceed the container space:

* Collapsed
* Menu
* Wrap
* Scroll
* Hidden
* None

## Collapsed

Collapsed mode displays the first and last breadcrumb items while hiding intermediate items behind a collapsed icon (ellipsis). When the collapsed icon is clicked, all hidden items become visible and navigable, providing a compact view that maintains access to all navigation levels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs6" %}

## Menu

Menu mode displays the maximum number of breadcrumb items that fit within the container space and organizes the remaining items into a dropdown submenu. This mode provides efficient space utilization while keeping all items accessible through the overflow menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs7" %}

## Wrap

Wrap mode automatically wraps breadcrumb items to multiple lines when the total width exceeds the container space.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs8" %}

## Scroll

Scroll mode displays an HTML scroll bar when the breadcrumb width exceeds the container space, allowing users to horizontally scroll to view hidden items. This mode maintains the single-line layout while providing access to all items through scrolling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs9" %}

## Hidden

Hidden mode displays the maximum number of items that fit within the container space and completely hides the remaining items. Hidden items become visible when users navigate to previous levels by clicking on visible breadcrumb items, creating a dynamic navigation experience.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs10" %}

## None

None mode shows all the items on a single line.
