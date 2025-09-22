---
layout: post
title: Adaptive in Angular Tab component | Syncfusion
description: Learn here all about Adaptive in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Adaptive in Angular Tab component

The following section explains how the Tab component renders when its width exceeds the viewable area or when constrained within a specified [`width`](https://ej2.syncfusion.com/angular/documentation/api/tab/#width).

The available overflow modes are as follows:

* Scrollable
* Popup

## Scrollable

The default overflow mode is Scrollable. In this mode, Tab header items are displayed in a single line with horizontal scrolling enabled when items overflow beyond the available space.

* Navigation arrows appear at the start and end of the Tab header, allowing users to navigate through overflowed items.
* Overflowed items can also be accessed using touch and swipe actions on both header and content sections.
* By default, the left navigation arrow is disabled. Users can view overflowed items by navigating in the right direction.
* Clicking the arrow or holding it continuously reveals the overflowed items.

![Scrollable tab](./images/tabscroll.gif)

* On touch devices, navigation icons are not available. Users can touch and swipe to view overflowed Tab header items.

![Touch scroll](./images/touchscroll.gif)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/basic-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs2" %}

## Popup

Popup is another type of [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/#overflowmode) where the Tab container displays items that fit within the available space. Overflowing items that cannot fit within the viewing area are moved to an overflow popup container.

* Items in the popup can be accessed by clicking the drop-down icon at the end of the Tab header.

* If the popup height exceeds the visible area height, users can scroll through the popup items to make selections.

![Tab with popup](images/popup.gif)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/basic-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs3" %}

## See Also

* [How to prevent content swipe selection](./how-to/prevent-content-swipe-selection)
* [Collapsible Tab](./how-to/create-collapsible-tabs)