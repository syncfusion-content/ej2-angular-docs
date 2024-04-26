---
layout: post
title: Column resizing in Angular Gantt component | Syncfusion
description: Learn here all about Column resizing in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column resizing
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in Angular Gantt component

Gantt chart component provides an intuitive user interface for resizing columns to fit their content. This feature allows users to easily adjust the width of the columns to improve readability and aesthetics of the data presented. To enable column resizing, set the [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowresizing) property of the gantt to **true**.

Once column resizing is enabled, columns width can be resized by clicking and dragging at the right edge of the column header. While dragging the column, the width of the respective column will be resized immediately.

To use the column resize, inject **ResizeService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnresize-cs1" %}

>* You can disable resizing for a particular column, by specifying [columns.allowResizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnDirective/#allowresizing) to **false**.
>* In RTL mode, you can click and drag the left edge of header cell to resize the column.
>* The [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnDirective/#width) property of the column can be set initially to define the default width of the column. However, when column resizing is enabled, you can override the default width by manually resizing the columns.

## Restrict the resizing based on minimum and maximum width

The Gantt chart component allows you to restrict the column width resizing between a minimum and maximum width. This can be useful when you want to ensure that your gantt chart's columns stay within a certain range of sizes.

To enable this feature, you can define the [columns.minWidth](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnDirective/#minwidth) and [columns.maxWidth](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnDirective/#maxwidth) properties of the columns directive for the respective column.

In the below code, **TaskID** and **TaskName** columns are defined with minimum and maximum width. The **TaskID** column is set to have a minimum width of 100 pixels and a maximum width of 200 pixels. Similarly, the **TaskName** column is set to have a minimum width of 150 pixels and a maximum width of 300 pixels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnresize-cs2" %}

## Prevent resizing for particular column

The Gantt chart component provides the ability to prevent resizing for a particular column. This can be useful if you want to maintain a consistent column width or prevent users from changing the width of a column.

You can disable resizing for a particular column by setting the [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnDirective/#allowresizing) property of the column to **false**. The following example demonstrates, how to disable resize for **TaskID** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnresize-cs3" %}

> You can also prevent resizing by setting `args.cancel` to **true** in the [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizestart) event.

## Resizing modes

You can resize the column with different mode in gantt chart by using the [mode](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeSettings/#mode) property of grid. Grid component have a [ResizeSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeSettingsModel/#resizesettingsmodel) interface for configuring the resizing behavior of grid columns. The interface includes a property named `mode` which is of the type [ResizeMode](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeMode). The `ResizeMode` is an enum that determines the available resizing modes for the grid columns. There are two resizing modes available for gantt columns in Grid:

1. `Normal Mode`: This mode does not adjust the columns to fit the remaining space. When the sum of column width is less than the gantt's width, empty space will be present to the right of the last column. When the sum of column width is greater than the gantt's width, columns will overflow, and a horizontal scrollbar will appear.

2. `Auto Mode`: This mode automatically resizes the columns to fill the remaining space. When the sum of column width is less than the gantt's width, the columns will be automatically expanded to fill the empty space. Conversely, when the sum of column width is greater than the gantt's width, the columns will be automatically contracted to fit within the available space.

You can use this feature through `grid` property object of gantt instance in load event.

The following example demonstrates how to set the `resizeSettings.mode` property of grid object in gantt instance to **Normal** and **Auto** on changing the dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the DropDownList component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnresize-cs6" %}

> When the [autoFit](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofit) property of grid object in gantt instance is set to **true**, the gantt will automatically adjust its column width based on the content inside them. In `normal` resize mode, if the `autoFit` property is set to **true**, the gantt will maintain any empty space that is left over after resizing the columns. However, in `auto` resize mode, the gantt will ignore any empty space.

## Touch interation

Gantt chart component provides support for touch interactions to enable users to interact with the gantt chart using their mobile devices. Users can resize columns in the gantt by tapping and dragging the floating handler, and can also use the column menu to autofit columns.

**Resizing Columns on Touch Devices**

To resize columns on a touch device:

1.Tap on the right edge of the header cell of the column that you want to resize.

2.A floating handler will appear over the right border of the column.

3.Tap and drag the floating handler to resize the column to the desired width.

The following screenshot represents the column resizing on the touch device.

![Column resize](../images/column-resize.png)

## Resizing column externally

Gantt chart component provides the ability to resize columns using an external button click. This can be achieved by changing the [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnDirective/#width) property of the column and refreshing the gantt using the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#refreshcolumns) method of treegrid object in gantt instance in the external button click function.

The following example demonstrates how to resize the columns in a gantt chart. This is done by using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the DropDownList component by change the `width` property of the selected column. This is accomplished using the  [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyfield) method of treegrid object in gantt instance on external button click. Then, the `refreshColumns` method is called on the gantt chart component to update the displayed columns based on user interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnresize-cs4" %}

>  The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#refreshcolumns) method of treegrid object in gantt instance is used to refresh the gantt after the column widths are updated. Column resizing externally is useful when you want to provide a custom interface to the user for resizing columns.

## Resizing events

During the resizing action, the gantt chart component triggers the below three events.

1.The [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizestart) event triggers when column resize starts. This event can be used to perform actions when the user begins to resize a column. 

2.The [resizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizing) event triggers when column header element is dragged (moved) continuously. This event is useful when you want to perform certain actions during the column resize process.

3.The [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizestop) event triggers when column resize ends. This event can be used to perform actions after the column is resized.

The following is an example of using the resizing events, the `resizeStart` event is used to cancel the resizing of the **TaskID** column. The `resizeStop` event is used to apply custom CSS attributes to the resized column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnresize-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnresize-cs5" %}

>The ResizeArgs object passed to the events contains information such as the current column width, new column width, column index, and the original event. The [resizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resizing) event is triggered multiple times during a single resize operation, so be careful when performing heavy operations in this event.