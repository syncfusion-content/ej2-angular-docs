---
layout: post
title: Rows in Angular Gantt component | Syncfusion
description: Learn here all about Rows in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Rows 
documentation: ug
domainurl: ##DomainURL##
---

# Rows in Angular Gantt component

Row represents a task information from the data source, and it is possible to perform the following actions in Gantt rows.

## Row height

It is possible to change the height of the row in Gantt by setting row height in pixels to the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowheight) property. The following code example explains how to change the row height in the Gantt at load time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowheight-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowheight-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowheight-cs1" %}

## Expand/Collapse Row

In Gantt parent tasks are expanded/collapsed by using expand/collapse icons, expand all/collapse all toolbar items and by using public methods. By default all tasks in Gantt was rendered in expanded state but you can change this status in Gantt.

### Collapse all tasks at Gantt load

All tasks available in Gantt was rendered in collapsed state by setting [`collapseAllParentTasks`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapseallparenttasks) property as `true`. The following code example shows how to use [`collapseAllParentTasks`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapseallparenttasks) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/collapseall-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/collapseall-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/collapseall-cs1" %}

### Define expand/collapse status of tasks

In Gantt, you can render some tasks in collapsed state and some tasks in expanded state, this can done by defining expand status of the task in data source. This value was mapped to Gantt component by using [`expandState`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#expandstate) property. The following code example shows how to use this property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/expand-status-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/expand-status-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/expand-status-cs1" %}

### Customize expand/collapse action

On expand action [`expanding`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expanding) and [`expanded`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expanded) event will be triggered with current expanding row’s information. Similarly on collapse action [`collapsing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsing) and [`collapsed`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsed) event will be triggered. Using this events and it’s arguments you can customize the expand/collapse action. The following code example shows how to prevent the particular row from expand/collapse action using [`expanding`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#expanding) and [`collapsing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#collapsing) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/expand-customize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/expand-customize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/expand-customize-cs1" %}

## Customize rows and cells

While rendering the TreeGrid part in Gantt, the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) and [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) events trigger for every row and cell. Using these events, you can customize the rows and cells. The following code example shows how to customize the cell and row elements using these events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/customize-row-cells-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/customize-row-cells-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/customize-row-cells-cs1" %}

## Customize rows

You can customize the appearance of a row in grid side, by using the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) event and in chart side by using [`queryTaskbarInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querytaskbarinfo) event

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/customizeRows-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/customizeRows-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/customizeRows-cs1" %}

## Styling alternate rows

You can change the background colour of alternative rows in Gantt chart, by overriding the class as shown below.

```css
.e-altrow, tr.e-chart-row:nth-child(even)  {
    background-color: #f2f2f2;
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/alternateRows-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/alternateRows-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/alternateRows-cs1" %}

## Row spanning

Gantt chart has an option to span row cells. You can achieve this using [`rowSpan`](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [`QueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs) event.

In the following demo, **Soil test approval** cell is spanned to two rows in the **TaskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/rowSpanning-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/rowSpanning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/rowSpanning-cs1" %}

## Clip mode

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#clipmode) property.

The following are three types of `clipMode`:

* `Clip`: Truncates the cell content when it overflows its area.
* `Ellipsis`: Displays ellipsis when content of the cell overflows its area.
* `EllipsisWithTooltip`: Displays ellipsis when content of the cell overflows its area; it displays the tooltip content when hover over ellipsis.

> NOTE
> By default, all the column's [`clipMode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#clipmode) property is defined as `EllipsisWithTooltip`.

### Cell tooltip

You can enable or disable the Grid cell tooltip using the [`columns.clipMode`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#clipmode) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/cell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/cell-cs1" %}