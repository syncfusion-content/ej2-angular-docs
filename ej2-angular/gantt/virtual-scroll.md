---
layout: post
title: Virtual scroll in Angular Gantt component | Syncfusion
description: Learn here all about Virtual scroll in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtual scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scroll in Angular Gantt component

Virtual Scroll support in Gantt allows you to load large amount of data without performance degradation. To enable Virtual Scrolling, you need to inject `VirtualScroll` module in Gantt.

## Row virtualization

Row virtualization allows you to load and render a large number of tasks in Gantt with effective performance. In this mode, all tasks are fetched initially from the datasource and rendered in the DOM within a compact viewport area.

The number of records displayed in the Gantt is determined by the height.

This mode can be enable by setting the `enableVirtualization` property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/virtual-scroll-cs1" %}

## Timeline virtualization

Timeline virtualization allows you to load a data source having large timespan with high performance. Initially, it renders the timeline with thrice the width of the gantt element, while other timeline cells render on-demand during horizontal scrolling.

This mode can be enable by setting the [enableTimelineVirtualization](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enabletimelinevirtualization) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/virtual-scroll-cs3" %}

## Limitations for virtual scroll

* Due to the element height limitation in browsers, the maximum number of records loaded is limited by the browser capacity.
* Cell selection will not be persisted.
* The number of records rendered will be determined by the `height` property.
* It is necessary to mention the height of the Gantt in pixels when enabling Virtual Scrolling.
