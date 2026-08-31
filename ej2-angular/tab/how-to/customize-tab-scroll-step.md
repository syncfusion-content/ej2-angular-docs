---
layout: post
title: How to customize tab scroll step in Angular Tab | Syncfusion
description: Set the Angular Tab scrollStep property to control how far header items scroll when clicking the left or right navigation icons.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to customize tab scroll step in Angular Tab

The Tab component supports customizing the scrolling distance applied when clicking the left or right navigation icons. Set the [`scrollStep`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#scrollstep) property (in pixels) to control how far the header scrolls per click.

## Steps

1. Set the `scrollStep` property to a numeric value representing the number of pixels to scroll per arrow click.
2. The value takes effect only when `overflowMode` is `Scrollable`. See [Responsive Modes](../adaptive).

> **Best practice:** choose a `scrollStep` value that aligns with the average tab item width to keep scrolling behavior predictable.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/scrollstep-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/scrollstep-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/scrollstep-cs1" %}

## See Also

* [Responsive Modes](../adaptive)
* [Header configuration](../header)