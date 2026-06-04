---
layout: post
title: Angular Grid - Column Resizing | Syncfusion
description: Angular Grid column resizing enables manual and automatic width adjustments, multiple resize modes, and control over user or programmatic changes.
platform: ej2-angular
control: Column resizing 
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in Angular Grid Component

Column resizing in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component allows adjusting column widths dynamically to fit content and improve data readability. This feature provides flexibility in customizing the grid layout based on data requirements and screen size.

To enable column resizing, set the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/grid#allowresizing) property to `true` and inject the `ResizeService` in the providers section. Once enabled, columns can be resized by clicking and dragging the right edge of the column header. The column width updates immediately during the drag operation, providing real-time visual feedback.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs2" %}

> * Resizing can be disabled for a particular column by specifying [columns.allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective#allowresizing) to `false`.
> * In RTL mode, click and drag the left edge of the header cell to resize the column.
> * The `width` property of the column can be set initially to define the default width of the column. However, when column resizing is enabled, the default width can be overridden by manually resizing the columns.

## Set column resizing limits

Column resizing can be limited to a specific range by defining minimum and maximum widths. This ensures that columns remain readable and do not shrink too small or expand too wide during resize actions. The `minWidth` and `maxWidth` properties control these boundaries for each column. Both properties accept numeric values that represent pixel widths.

**Behavior:**

| Property | Description | Example |
|----------|-------------|---------|
| `minWidth` | Defines the minimum width (in pixels). The column cannot be resized smaller than this value. | `minWidth='100'` keeps the column width at "100px" or more.  |
| `maxWidth` | Defines the maximum width (in pixels). The column cannot be resized larger than this value | `maxWidth='250'` keeps the column width at "250px" or less.  |

In the following example, resize constraints are applied to multiple columns:

- "Order ID" column: minimum width of "100px", maximum width of "250px".
- "Ship Name" column: minimum width of "150px", maximum width of "300px".
- "Ship Country" column: minimum width of "120px", maximum width of "280px".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs3" %}

> * The [columns.minWidth](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective#minwidth) and [columns.maxWidth](https://ej2.syncfusion.com/angular/documentation/api/grid/columnDirective#maxwidth) properties are applied only during column resizing. They are not considered when resizing the window, as columns cannot be re-rendered dynamically during that process.
> * When setting the `minWidth` and `maxWidth` properties, ensure that the values are appropriate for the data and layout requirements.
> * The specified `minWidth` and `maxWidth` values take precedence over any user-initiated resizing attempts that fall outside the defined range.

## Prevent resizing for specific column

In some scenarios, certain columns may need to maintain a fixed width to preserve data consistency or layout structure. The Grid provides column-level control to prevent resizing for specific columns while allowing others to be resized freely. To disable resizing for a particular column, set the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowresizing) property of that column to `false`. This property overrides the grid-level `allowResizing` setting for the specified column.

The following example demonstrates disabling resize functionality for the "Customer ID" column while keeping other columns resizable:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs7" %}

> Resizing can also be prevented by setting `args.cancel` to `true` in the [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/grid#resizestart) event.

## Resize stacked header columns

The Grid supports resizing stacked header columns, which are columns grouped under a parent header. When resizing a stacked column, the behavior differs from standard column resizing.

**Stacked column resize behavior:**

- Dragging the right edge of a stacked header resizes all child columns together.
- The total width of the child columns adjusts to match the new stacked header width.
- Each child column keeps its proportional width during the resize.
- Resizing can be disabled for specific child columns by setting their `allowResizing` property to `false`.

In the following code, resizing is disabled for the "Ship City" column:

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

The Angular Data Grid component provides flexible column resizing behavior through the [ResizeSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeSettingsModel#resizesettingsmodel) interface. The [mode](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeSettings#mode) property determines the way the Grid handles space distribution when columns are resized.

**Available resize modes:**

The [ResizeMode](https://ej2.syncfusion.com/angular/documentation/api/grid/resizeMode) enum provides two distinct resizing behaviors:

| Mode    | Description                                                                 | Behavior                                                                                          | When to Use                                                                                   |
|---------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **`Normal`** | Keeps fixed column widths without automatic adjustment.                    | - If total column width < grid width: Empty space appears to the right.<br>- If total column width > grid width: A horizontal scrollbar appears. | Use when exact column widths are required and extra space or scrolling is acceptable.        |
| **`Auto`**  | Dynamically adjusts columns to fill available space.                       | - If total column width < grid width: Columns expand proportionally to fill space.<br>- If total column width > grid width: Columns shrink proportionally to fit within the grid. | Use when the grid should always fill its container without empty space or scrollbars.        |


The following example demonstrates dynamically switching between `Normal` and `Auto` resize modes using a DropDownList. The `resizeSettings.mode` property is updated in the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event handler:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs8" %}

> When the [autoFit](https://ej2.syncfusion.com/angular/documentation/api/grid#autofit) property is set to `true`, the Grid will automatically adjust its column width based on the content inside them. In `normal` resize mode, if the `autoFit` property is set to `true`, the Grid will maintain any empty space that is left over after resizing the columns. However, in `auto` resize mode, the Grid will ignore any empty space.

## Touch interaction

The Grid provides full touch support for column resizing on mobile and tablet devices. Touch-based resizing offers an intuitive interface for adjusting column widths on touchscreen devices.

**Resizing Columns on touch devices**

Touch-based column resizing follows a slightly different interaction pattern compared to mouse-based resizing to accommodate touch precision:

1. **Tap the column edge**: Tap the right edge of the header cell for the column to resize.
2. **Handler appears**: A floating resize handler appears over the right border of the column, making it easier to grab with touch.
3. **Drag to resize**: Tap and drag the floating handler left or right to adjust the column width to the desired size.
4. **Release to apply**: Release finger to apply the new column width.

The following screenshot represents the column resizing on the touch device:

![Touch Interaction](../images/column-resizing.jpg)

## Resizing column externally

The Grid supports programmatic column resizing through external controls or application logic. This enables creating custom interfaces for column width management, implementing preset column layouts, or responding to application state changes.

Programmatic column resizing involves two steps:

1. **Update column width**: Modify the [width](https://ej2.syncfusion.com/angular/documentation/api/grid/column#width) property of the target column using the [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnbyfield) or [getColumnByUid](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnbyuid) method.

2. **Refresh display**: Call the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshcolumns) method to apply the width changes and update the grid display.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/resize-cs6" %}

> The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshcolumns)  method is essential for applying width changes made through the column object. Without calling this method, width changes will not be reflected in the grid display.

## Resizing events

The Grid provides three events that trigger during column resize operations. These events enable custom logic, validation, and status updates throughout the resize process, giving complete control over the resizing life cycle.

**Available resize events:**

| Event | Timing | Usage | Cancelable |
|-------|--------|-------|-------------|
| [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/grid#resizestart) | Triggered when column resize begins (on initial mouse/touch down) | Validate resize action, prevent specific columns from resizing, initialize custom logic | Yes (set `args.cancel = true`) |
| [resizing](https://ej2.syncfusion.com/angular/documentation/api/grid#resizing) | Triggered continuously while dragging the resize handle | Display real-time feedback, track width changes, update related UI | No |
| [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/grid#resizestop) | Triggered when column resize ends (on mouse/touch release) | Save resize preferences, apply post-resize styles, log resize actions | No |

The following example demonstrates practical use of resize events:

- `resizeStart`: Prevents resizing of the "Order ID" column.
- `resizing`: Displays a message indicating active resize operation.
- `resizeStop`: Applies custom styling to the resized column and its cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridModule, ResizeService ,GridComponent, ResizeArgs, Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [GridModule],
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

> * The `ResizeArgs` object provides comprehensive information such as the current column width, new column width, column index, and the original DOM event.
> * The `resizing` event is triggered continuously during drag operations, potentially triggering dozens of times per second. Avoid heavy computations or DOM manipulations in this event handler to maintain smooth performance.
