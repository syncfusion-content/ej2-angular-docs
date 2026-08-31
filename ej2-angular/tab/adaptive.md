---
layout: post
title: Responsive Modes in Angular Tab | Syncfusion
description: Handle overflow in the Angular Tab with Scrollable navigation arrows and touch swipes, or a Popup mode that groups items in a dropdown.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Responsive Modes in Angular Tab

The following section explains how the Tab component renders when its width exceeds the visible area, or when a specific [`width`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#width) is set.

The available overflow modes are as follows:

* Scrollable
* Popup

## Scrollable

The default overflow mode is Scrollable. In this mode, Tab header items are displayed in a single line with horizontal scrolling enabled when items overflow beyond the available space.

* Navigation arrows appear at the start and end of the Tab header, allowing users to navigate through overflow items.
* Overflow items can also be accessed using touch and swipe actions on both the header and content sections.
* The left navigation arrow is disabled by default; users can view overflow items by navigating to the right.
* Clicking the arrow, or holding it continuously, reveals the overflow items.

![Scrollable Tab](./images/tabscroll.gif)

* On touch devices, navigation icons are not available. Users can touch and swipe to view overflow Tab header items.

* In RTL (right-to-left) layouts, the navigation arrows are mirrored: the right arrow is disabled by default and items overflow to the left.

![Touch Scroll](./images/touchscroll.gif)

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/basic-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs2" %}

## Popup

Popup is another type of [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#overflowmode) where the Tab container displays items that fit within the available space. Items that cannot fit within the viewing area are moved to an overflow popup container.

* Items in the popup can be accessed by clicking the drop-down icon at the end of the Tab header.

* If the popup height exceeds the visible area height, users can scroll through the popup items to make selections. Popup dimensions can be customized using the [`popupWidth`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#popupwidth) and related properties.

![Tab With Popup](./images/popup.gif)

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/basic-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs3" %}

> When `overflowMode` is set to `Popup`, configure the [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#overflowmode) property in the Tab component as shown in the `app.component.ts` snippet above.

## Events

The following events are triggered when switching between overflow modes or interacting with overflow items:

| Event | Description |
|-------|-------------|
| [`selecting`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#selecting) | Triggered before a tab item is selected. |
| [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#selected) | Triggered after a tab item is selected. |
| [`created`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#created) | Triggered once the Tab component is created. |

## Modes Comparison

| Behavior | Scrollable | Popup |
|----------|------------|-------|
| Default overflow handling | Horizontal scrolling with navigation arrows | Overflow items moved to a drop-down popup |
| Touch device support | Touch and swipe supported | Touch and swipe supported on the popup |
| Item access when overflowed | Click or hold navigation arrows | Click the drop-down icon at the end of the header |
| Best suited for | A small number of overflow items | Many overflow items that need grouped access |

## See Also

* [How to prevent content swipe selection](./how-to/prevent-content-swipe-selection)
* [Collapsible Tab](./how-to/create-collapsible-tabs)