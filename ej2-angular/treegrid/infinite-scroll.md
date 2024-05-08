---
layout: post
title: Infinite scroll in Angular Treegrid component | Syncfusion
description: Learn here all about Infinite scroll in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Infinite scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Infinite scroll in Angular Treegrid component

Infinite scrolling is used to load a huge amount of data without degrading the Tree Grid performance. This feature works like the lazy loading concept, which means the buffer data is loaded only when the scrollbar reaches the end of the scroller.

To use Infinite scrolling, set `enableInfiniteScrolling` property as true and inject the `InfiniteScroll` module in the treegrid.

> * In this feature, Tree Grid will not make a new data request when you visit the same page again.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/infinite-scroll-cs1" %}

## InitialBlocks

You can define the initial loading pages count by using `infiniteScrollSettings.initialBlocks` property. By default, this feature loads three pages in initial rendering.

In the below demo, we have changed this property value to load five page records instead of three.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/infinite-scroll-cs2" %}

## Cache Mode

Cache is used to store the loaded rows object in the Tree Grid instance which can be reused for creating the row elements whenever you scroll to already visited page. Also, this mode maintains row elements based on the `infiniteScrollSettings.maxBlocks` count value, once this limit exceeds then it will remove row elements from DOM for new rows.

To enable the cache mode in Infinite scrolling, set `infiniteScrollSettings.enableCache` property as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/infinite-scroll-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/infinite-scroll-cs3" %}

## Limitations for Virtualization

* Due to the element height limitation in browsers, the maximum number of records loaded by the tree grid is limited due to the browser capability.
* Initial loading rows total height must be greater than the viewport height.
* Cell selection will not be persisted in cache mode.
* Infinite scrolling is not compatible with batch editing, cell editing, detail template and hierarchy features.
* The aggregated information and total group items are displayed based on the current view items. To get these information regardless of the view items, refer to the
* Programmatic selection using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectrows) and [`selectRow`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectrow) method is not supported in infinite scrolling.

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
