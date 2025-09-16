---
layout: post
title: Column resizing in Angular Grid component | Syncfusion
description: Learn here all about Column resizing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column resizing 
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in Angular Grid component

The Grid component supports column resizing to fit content, enhancing readability and layout. This feature can be enabled by setting the [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowresizing) property of the grid to **true**.

Once column resizing is enabled, column width can be resized by clicking and dragging at the right edge of the column header. While dragging the column, the width of the respective column will be resized immediately.

To use the column resize feature, inject **ResizeService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs2" %}

>* Resizing can be disabled for a particular column by specifying [columns.allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#allowresizing) to **false**.
>* In RTL mode, click and drag the left edge of header cell to resize the column.
>* The `width` property of the column can be set initially to define the default width of the column. However, when column resizing is enabled, the default width can be overridden by manually resizing the columns.

## Restrict the resizing based on minimum and maximum width

The Grid component allows restriction of column width resizing between a minimum and maximum width. This can be useful when ensuring that the grid's columns stay within a certain range of sizes.

To enable this feature, define the [columns.minWidth](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#minwidth) and [columns.maxWidth](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#maxwidth) properties of the columns directive for the respective column.

In the following code, **OrderID**, **Ship Name** and **Ship Country** columns are defined with minimum and maximum width. The **OrderID** column is set to have a minimum width of 100 pixels and a maximum width of 200 pixels. Similarly, the **ShipName** column is set to have a minimum width of 150 pixels and a maximum width of 300 pixels. The **ShipCountry** column is set to have a minimum width of 120 pixels and a maximum width of 280 pixels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs3" %}

>* The [columns.minWidth](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#minwidth) and [columns.maxWidth](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#maxwidth) properties are applied only during column resizing. They are not considered when resizing the window, as columns cannot be re-rendered dynamically during that process.
>* When setting the `minWidth` and `maxWidth` properties, ensure that the values are appropriate for the data and layout requirements.
>* The specified `minWidth` and `maxWidth` values take precedence over any user-initiated resizing attempts that fall outside the defined range.

## Prevent resizing for particular column

The Grid component provides the ability to prevent resizing for specific columns, which helps maintain consistent column widths and preserve the overall layout.

Resizing can be disabled for a particular column by setting the [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#allowresizing) property of the column to **false**. The following example demonstrates how to disable resizing for the **Customer ID** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs7" %}

> Resizing can also be prevented by setting `args.cancel` to **true** in the [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizestart) event.

## Resize stacked header column

The Grid component allows resizing of stacked columns by clicking and dragging the right edge of the stacked column header. During the resizing action, the width of the child columns is resized at the same time. Resizing can be disabled for any particular stacked column by setting [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#allowresizing) as **false** to its columns.

In the following code, resizing is disabled for the **Ship City** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs4" %}

## Resizing modes

The Syncfusion Grid component provides a [ResizeSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeSettingsModel/#resizesettingsmodel) interface for configuring the resizing behavior of grid columns. The interface includes a property named [mode](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeSettings/#mode) which is of the type [ResizeMode](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeMode). The `ResizeMode` is an enum that determines the available resizing modes for the grid columns. There are two resizing modes available for grid columns:

1. `Normal Mode`: This mode does not adjust the columns to fit the remaining space. When the sum of column width is less than the grid's width, empty space will be present to the right of the last column. When the sum of column width is greater than the grid's width, columns will overflow, and a horizontal scrollbar will appear.

2. `Auto Mode`: This mode automatically resizes the columns to fill the remaining space. When the sum of column width is less than the grid's width, the columns will be automatically expanded to fill the empty space. Conversely, when the sum of column width is greater than the grid's width, the columns will be automatically contracted to fit within the available space.

The following example demonstrates how to set the [resizeSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeSettings/#mode) property to **Normal** and **Auto** on changing the dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the DropDownList component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs8" %}

> When the [autoFit](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofit) property is set to **true**, the Grid will automatically adjust its column width based on the content inside them. In `normal` resize mode, if the `autoFit` property is set to **true**, the Grid will maintain any empty space that is left over after resizing the columns. However, in `auto` resize mode, the Grid will ignore any empty space.

## Touch interaction

The Grid component provides support for touch interactions on mobile devices. Columns can be resized by tapping and dragging the floating handler, and the Column menu offers an option to autofit columns.

**Resizing Columns on Touch Devices**

To resize columns on a touch device:

1. Tap on the right edge of the header cell of the column to resize.

2. A floating handler will appear over the right border of the column.

3. Tap and drag the floating handler to resize the column to the desired width.

The following screenshot represents the column resizing on the touch device:

![Touch Interaction](../images/column-resizing.jpg)

## Resizing column externally

The Grid provides the ability to resize columns using an external button click. This can be achieved by changing the [width](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#width) property of the column and refreshing the grid using the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshcolumns) method in the external button click function.

The following example demonstrates how to resize the columns in a grid using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the DropDownList component by changing the [width](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective/#width) property of the selected column. This is accomplished using the [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnbyfield) method on external button click. Then, the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshcolumns) method is invoked on the Grid component to update the displayed columns in response to interaction events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs6" %}

> The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshcolumns) method is used to refresh the Grid component after column widths are updated. External column resizing is useful when implementing a custom interface for adjusting column sizes.

## Resizing events

During the resizing action, the grid component triggers the following three events:

1. The [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizestart) event is triggered when column resizing begins. This event can be used to execute actions at the start of the resize operation.

2. The [resizing](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizing) event triggers when column header element is dragged (moved) continuously. This event is useful when performing certain actions during the column resize process.

3. The [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizestop) event triggers when column resize ends. This event can be used to perform actions after the column is resized.

The following example demonstrates using the resizing events. The [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizestart) event is used to cancel the resizing of the **OrderID** column. The [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizestop) event is used to apply custom CSS attributes to the resized column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, ResizeArgs, Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [ResizeService],
standalone: true,
    selector: 'app-root',
    template: ` 
    <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid #grid [dataSource]='data' [allowResizing]='true' [enableHover]='false' height='315px' (resizeStart)="resizeStart($event)" (resizing)="resizing($event)" (resizeStop)="resizeStop($event)">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
            <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public message?: string;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    resizeStart(args: ResizeArgs) {
        this.message = `resizeStart event triggered`;
        if ((args.column as Column).field === 'OrderID') {
            args.cancel = true;
        }
    }

    resizing(args: ResizeArgs) {
        this.message = `resizing event triggered`;
    }
    resizeStop(args: ResizeArgs) {
        this.message = `resizeStop event triggered`;
        const headerCell = (this.grid as GridComponent).getColumnHeaderByField((args.column as Column).field);
        headerCell.classList.add('customcss');
        const columnCells = (this.grid as GridComponent)
            .getContentTable()
            .querySelectorAll(`[data-colindex="${(args.column as Column).index}"]`);
        for (let i = 0; i < columnCells.length; i++) {
            const cell = columnCells[i] as HTMLElement;
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        }

    }

}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs5" %}

> The ResizeArgs object passed to the events contains information such as the current column width, new column width, column index, and the original event. The [resizing](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizing) event is triggered multiple times during a single resize operation, so be careful when performing heavy operations in this event.