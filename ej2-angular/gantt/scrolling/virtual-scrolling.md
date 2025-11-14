---
layout: post
title: Virtual scroll in Angular Gantt component | Syncfusion
description: Learn how to configure virtual scrolling in the Syncfusion Angular Gantt component for high-performance rendering of large datasets and wide timelines.
platform: ej2-angular
control: Virtual scroll
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scroll in Angular Gantt component

Virtual scrolling in the Angular Gantt component enhances performance by rendering only visible tasks and timeline segments, minimizing DOM operations for large datasets or extensive timelines. It includes row virtualization for handling thousands of tasks (e.g., 10,000 tasks in a project) and timeline virtualization for wide timelines (e.g., multi-year projects), both requiring [VirtualScrollService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#virtualscrollmodule) injection. Row virtualization renders tasks within the viewport, while timeline virtualization loads timeline cells on-demand during horizontal scrolling, ensuring efficient rendering for complex project management.

## Configure row virtualization

Row virtualization, enabled by setting [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablevirtualization) to **true**, renders only tasks visible in the Gantt’s viewport, determined by the `height` property in pixels (e.g., "600px"). All tasks are fetched initially but rendered on-demand during vertical scrolling, reducing load times for large datasets. For example, a project with 10,000 tasks renders only the 50 visible tasks, improving performance. Inject [VirtualScrollService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#virtualscrollmodule) in the component’s providers to enable this feature. Ensure the `height` property is set explicitly to control the viewport size.

The following example enables row virtualization for a large dataset:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/virtual-scroll-cs1" %}

## Configure timeline virtualization

Timeline virtualization, enabled by setting [enableTimelineVirtualization](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enabletimelinevirtualization) to **true**, renders three times the Gantt’s width initially, loading additional timeline cells during horizontal scrolling. This optimizes performance for wide timelines, such as multi-year projects, by rendering only visible segments. It depends on [timelineSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettings/) for scale (e.g., monthly or daily tiers). Inject [VirtualScrollService](https://ej2.syncfusion.com/angular/documentation/api/gantt/#virtualscrollmodule) to enable this feature.

The following example enables timeline virtualization for a wide timeline:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/virtual-scroll-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/virtual-scroll-cs3" %}

## Virtual scroll limitations

Virtual scrolling has the following constraints:
- Incompatible with [enableImmutableMode](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enableimmutablemode), as both use different rendering optimizations.
- Cell selection is not persisted due to on-demand rendering.
- Browser height limits restrict the maximum number of records in row virtualization.
- The [height](https://ej2.syncfusion.com/angular/documentation/api/gantt/#height) property must be set in pixels for row virtualization to define the viewport size.
- Set a static height for the Gantt chart or its parent container; 100% height only works if both the component and its parent have explicit static heights.
- With virtualization enabled, data is rendered in pages. When scrolling to load the next set of records, only the current page's data is available to Gantt's public methods. If a record is selected during this process, only the visible page records are returned. This behavior occurs because the Gantt chart does not retain data from all pages in memory, optimizing performance by loading only the required set.

## See also
- [How to configure timeline settings?](https://ej2.syncfusion.com/angular/documentation/gantt/timeline)
- [How to manage large datasets?](https://ej2.syncfusion.com/angular/documentation/gantt/data-binding)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)