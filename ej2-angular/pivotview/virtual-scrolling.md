---
layout: post
title: Virtual Scrolling in Angular Pivot Table | Syncfusion
description: Learn how the Angular Pivot Table loads large datasets on demand using virtual scrolling for rows and columns.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in Angular Pivot Table

## Virtual scrolling

Virtual scrolling enables efficient handling of large datasets by rendering only the rows and columns visible in the current viewport. Content refreshes dynamically as the user scrolls vertically or horizontally. This feature is enabled by setting the [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#enablevirtualization) property to **true** (default `false`).

> Virtualization and [Paging](./paging) cannot be enabled at the same time. Use one or the other; they are designed to handle data rendering differently and may conflict when combined.

To use the virtual scrolling feature, inject the `VirtualScrollService` module in the `@NgModule.providers` section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs300/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs300/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs300" %}

> The `height` and `width` properties should be set for virtual scrolling. If they are not defined, the Pivot Table defaults to `300px` height and `800px` width.

## Virtual scrolling with single page mode

When virtual scrolling is enabled, the Pivot Table renders not only the current view page but also the adjacent previous and next pages by default. While this approach supports smooth navigation, it can increase computational load and reduce performance when working with extensive datasets, as additional rows and columns from surrounding pages are processed.

To optimize performance, set the [`allowSinglePage`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/virtualscrollsettings#allowSinglePage) property to **true** within the [`virtualScrollSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/virtualscrollsettings). Enabling this property ensures that only the rows and columns for the current view page are rendered during virtual scrolling. This significantly enhances the performance of the Pivot Table, especially during initial rendering and user actions such as drilling up, drilling down, sorting, and filtering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/single-page-mode/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/single-page-mode/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/single-page-mode" %}

### Static field list

Virtual scrolling works automatically with **Popup** field lists when you set the [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#enablevirtualization) property in the Pivot Table to **true**. However, when using a static field list (displayed as a separate component), you need to connect both components manually.

To make virtual scrolling work with a static field list:

1. Enable virtual scrolling in the Pivot Table component by setting the [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#enablevirtualization) property to **true**.
2. Connect the PivotFieldList component to the Pivot Table component using the [`load`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#load) event.
3. Synchronize the Pivot Table and field list by updating the Pivot Table's report configuration with the field list's report configuration inside the `load` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs302/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs302/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs302" %}

## Limitations

* In virtual scrolling, the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridsettings#columnwidth) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridsettings) must be in pixels; percentage values are not accepted.
* Features such as auto fit, column resizing, text wrapping, and setting column widths through events can dynamically affect the row height and column width at runtime. These changes are not considered in the scroller calculations, particularly with large datasets, which can cause performance issues. It is not recommended to use these features alongside virtualization.
* Grouping, which takes additional time to split raw items into the provided format.
* Date formatting, which takes additional time to convert date format.
* Date formatting with sorting requires the full date-time format to perform sorting along with the provided date format, which lags performance.
* When using OLAP data, subtotals and grand totals are only displayed when measures are bound at the last position in the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#row) or [`columns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#columns) axis. Otherwise, the Pivot Table will show data without summary totals.
* Even with virtual scrolling, the current viewport data plus the immediate previous and next pages are all retrieved. As a result, when the user scrolls slightly ahead or behind, the next or previous page data is shown immediately. **Note:** Large `width` and `height` values increase the loading count across the current, previous, and next viewport, which can affect performance.

## See Also

* [Paging](./paging)
* [Data Compression](./data-compression)
* [Performance best practices](./performance-best-practices)