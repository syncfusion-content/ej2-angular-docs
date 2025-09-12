---
layout: post
title: Columns in Angular Grid Component | Syncfusion
description: Learn here all about Columns in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular Grid Component

In Syncfusion Grid, columns are essential for organizing and presenting data. Columns determine which data fields are shown, control their formatting and styling, and enable interactions such as sorting, filtering, grouping, and editing. Column configuration directly impacts the usability and appearance of the grid.

## Column types

The Syncfusion Grid component lets you specify a column's data type using the [columns.type](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) property. This property determines the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) applied to the column, such as [number](../../common/internationalization#number-formatting) or [date](../../common/internationalization#manipulating-datetime) formatting.

Supported column types:

* **string**: Binds string data. This is the default type if `type` is not specified.
* **number**: Binds numeric data. Supports number formatting.
* **boolean**: Binds boolean data. Can display as text or a checkbox.
* **date**: Binds date values. Supports date formatting.
* **datetime**: Binds combined date and time values. Supports date/time formatting.

> The **checkbox** visual in a column is not a separate column type but a rendering mode. You can use `type: 'boolean'` in combination with the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#displayascheckbox) property to display boolean values as checkboxes.

You can explicitly set column types using the `type` property. For example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-type-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-type-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-type-cs1" %}

> * If [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) is not defined, the grid detects it from the first record in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource).
> * In case the first record's value for a column is null or blank, define the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) for accurate filtering and editing dialogs.

### Difference between boolean type and checkbox type column 

1. Use the **boolean** column type when you want to bind boolean values from your datasource and/or edit boolean property values from your type.
2. Use the **checkbox** column type when you want to enable selection/deselection of the whole row.
3. When the grid column `type` is a **checkbox**, the selection type of the grid `selectionSettings` will be multiple. This is the default behavior.
4. If you have more than one column with the column type as a **checkbox**, the grid will automatically enable the other column's checkbox when selecting one column checkbox.

> For more details, see [Checkbox](https://ej2.syncfusion.com/angular/documentation/grid/columns/columns#render-boolean-value-as-checkbox).

## Column Width

Adjust column width in the Grid using the [width](https://ej2.syncfusion.com/angular/documentation/api/grid/#width) property of a column definition. Width can be set in pixels, percentage, or as `'auto'` for automatic sizing.

1. Grid column widths are distributed based on the sum of declared widths. For instance, four columns in an 800 pixel–wide grid default to 200 pixels each if widths are unspecified.
2. Specifying widths for some columns makes the grid allocate remaining space among columns without explicit widths.
3. Percentage-based widths ensure columns are responsive to the grid container’s size.
4. Manual column resizing enforces a minimum width (10 pixels by default) to maintain readability, unless otherwise specified.
5. If combined column width exceeds the grid’s width, a horizontal scrollbar appears.
6. When columns are hidden (for example, via the column chooser), their width is excluded, and remaining columns expand to fill space.
7. If the parent container has a fixed width, the grid fills it. Otherwise, grid width adjusts dynamically to available space.

**Supported types for column width:**

1. **Auto**: Width is determined automatically based on cell content. Excess content is truncated with ellipsis (`...`). Example:
   ```html
   <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='auto'></e-column>
   ```
2. **Percentage**: Width is a percentage of the total grid width, responsive to container resizing. Example:
   ```html
   <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='25%'></e-column>
   ```
3. **Pixel**: Width is a fixed pixel value. Example:
   ```html
   <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='100'></e-column>
   ```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-width-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-width-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/column-width-cs1" %}

## Column formatting

Column formatting enables customization of data display within grid columns. Use the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property for number or date formatting, supporting both format strings and format options objects.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs12" %}

> * The grid uses the [Internationalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) library to format values based on culture and format.
> * By default, [number](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#number-formatting) and [date](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#date-formatting) formats use the **en-US** locale. Customize by specifying the [locale](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization).
> * Format strings vary based on column data type.
> * The `format` property also accepts a formatting options object for advanced customization.
> * Ensure the format string or options object matches the column’s data type.

### Number formatting

Customize numeric values using standard or custom numeric format strings in the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property.

Format |Description |Remarks
-------|-------|-------
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

The following example code demonstrates the formatting of data for **Mark 1** and **Mark 2** using the **'N'** format, **Percentage of Marks** using the **'P'** format, and **Fees** using the **'C'** format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-format-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-format-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-format-cs3" %}

> For more information on number formatting, see the [Number Formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#number-formatting) section.

### Date formatting

Display date values using standard or custom date format strings through the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property. Built-in format types include **"d"**, **"D"**, **"yMd"**, or customize with an options object:

Format object | Sample formatted value
--------------|----------------------
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type:'dateTime', format:'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type:'dateTime', format:'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs13" %}

> See [Date formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#date-formatting) for more details.

### Date column formatting with localization

Date columns can be formatted based on user locale by combining the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) and [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) properties.

Example: Set `format: "yyyy-MMM-dd"` and `locale: "es-AR"` for Spanish (Argentina) localization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/localization-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/localization-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/localization-cs3" %}

### Format template column values

Use templates to format complex column content. Combine Angular pipes with [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) as needed:

```ts
 <e-column field='OrderDate' headerText='Order Date' textAlign='Right' width=120>
   <ng-template #template let-data>
     {{ data.OrderDate | date:'dd/MMM/yyyy' }}
   </ng-template>
 </e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height="315px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' width=120>
                        <ng-template #template let-data>
                            {{ data.OrderDate | date:'dd/MMM/yyyy' }}
                        </ng-template>
                    </e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public formatOptions?: object;
  public shipFormat?: object;

  ngOnInit(): void {
    this.data = data;
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-format-cs1" %}

> You can use other Angular pipes, such as **currency, decimal, percent,** etc., to format other types of values in the column template based on your requirements.

### Custom formatting

Apply custom format objects to numerical or date columns via the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property. Define formatting options objects per Angular’s Internationalization guidelines for advanced scenarios.

In the below example, the **numberFormatOptions** object is used as the `format` property for the **'Freight'** column to apply a custom numeric format with four decimal places. Similarly, the **dateFormatOptions** object is used as the `format` property for the **'OrderDate'** column to apply a custom date format displaying the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g. Sun, May 8, '23).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-format-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-format-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-format-cs2" %}

> Learn more about [custom date formatting](https://ej2.syncfusion.com/angular/documentation/common/internationalization#custom-formats) and [custom number formatting](https://ej2.syncfusion.com/angular/documentation/common/internationalization#custom-number-formatting-and-parsing).

## Align the text of content

Align cell text using the [textAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#textalign) column property. Values include:

* **Left** (default): Aligns text to the left.
* **Center**: Centers content.
* **Right**: Aligns right.
* **Justify**: Stretches text for justified alignment.

Example using the `textAlign` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs17" %}

> The `textAlign` property affects only cell content; to align the header, use [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertextalign).

## Render boolean value as checkbox

The Grid component allows you to render boolean values as checkboxes in columns. This can be achieved by using the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#displayascheckbox) property, which is available in the [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/column/). This property is useful when you have a boolean column in your Grid and you want to display the values as checkboxes instead of the default text representation of **true** or **false**.

To enable the rendering of boolean values as checkboxes, you need to set the `displayAsCheckBox` property of the `columns` to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs14" %}

> * The `displayAsCheckBox` property applies only to boolean columns. Checked = true; unchecked = false.

## Prevent rendering checkbox for blank rows

Hide a checkbox when row data is blank, even if [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#displayascheckbox) is enabled. Use the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event to detect blank rows and clear the cell content.

Example implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/blank-row/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/blank-row/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/blank-row" %}

## AutoFit columns

AutoFit automatically adjusts column width to match the widest cell's content. Double-click the column header’s resizer symbol to use this feature. Set [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowresizing) to `true` and inject **ResizeService**.

### Resizing a column to fit its content using AutoFit method

Invoke [autoFitColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) to auto-size specific columns. Call `autoFitColumns` in the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event for initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/resize-cs1" %}

> Call `autoFitColumns()` without parameters to autofit all columns.

### AutoFit columns with empty space

Set the [autoFit](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofit) property to `true` so columns only use the width defined in column declarations. White space remains if total column width is less than the grid’s width.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autofit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autofit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/autofit-cs1" %}

> If any column’s width is undefined, that column expands to fill the entire grid width, even with `autoFit` enabled.

### AutoFit columns when changing column visibility using column chooser

Use [autoFitColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event (with `requestType: 'columnState'`) to auto-fit columns after toggling their visibility via column chooser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autofit-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autofit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/autofit-cs2" %}

### AutoFit columns for specific rows

AutoFit can adjust columns according to the widest content within a specific row range by sending start and end index parameters to [autoFitColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns).

This feature will calculate the appropriate width based on the maximum content width of the specified range of rows or the header text width. Subsequently, the maximum width of the content of the specified rows or header text will be applied to the entire column of the grid.

Here is an example of how to autofit columns with specific rows. The first parameter is an array containing the specific column field names, such as  **Inventor**, **Number of INPADOC patents** and **Main fields of invention**  is passed to apply the autofit functionality to these columns. After, the second parameter are start index is set to **1** and third parameter are end index is set to **3**. When specifying these start and end index, the autofit operation is applied only to the range of rows from 1 to 3 for column width adjustment.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autofit-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autofit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/autofit-cs3" %}

## Locked columns

Lock columns to prevent reordering and keep them positioned at the left of the grid. Set [column.lockColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#lockcolumn) to `true` on the column.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs5/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/grid/reorder-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/reorder-cs5" %}

## Show or hide columns

The Syncfusion Grid control allows you to show or hide columns dynamically by using property or methods available in the grid. This feature can be useful when you want to customize the visibility of columns in the Grid based on the requirements.

> At least one column must always remain visible.

### Using the visible property

You can show or hide columns in the Angular Grid using the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property of each column. By setting the `visible` property to **true** or **false**, you can control whether the column should be visible or hidden in the grid. Here's an example of how to show or hide a column in the Angular Grid using the visible property:

Example: Toggling the `visible` property (using a [Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started)). Call [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshcolumns) to update the UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs15" %}

>* Hiding a column using the `visible` property only affects the UI representation of the grid. The data for the hidden column will still be available in the underlying data source, and can be accessed or modified programmatically.
>* When a column is hidden, its width is not included in the calculation of the total grid width.
>* To hide a column permanently, you can set its visible property to false in the column definition, or remove the column definition altogether.

### Using methods

Show or hide columns at runtime using [showColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumns) and [hideColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidecolumns). Identify columns by either `headerText` or `field`.

**Based on header text**

You can dynamically show or hide columns in the Grid based on the header text by invoking the `showColumns` or `hideColumns` methods. These methods take an array of column header texts as the first parameter, and the value `headerText` as the second parameter to specify that you are showing or hiding columns based on the header text.

Here's an example of how to show or hide a column based on the HeaderText in the Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs16" %}

**Based on field**

You can dynamically show or hide columns in the Grid using external buttons based on the field by invoking the `showColumns` or `hideColumns` methods. These methods take an array of column fields as the first parameter, and the value `field` as the second parameter to specify that you are showing or hiding columns based on the field.

Here's an example of how to show or hide a column based on the field in the Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs30" %}

## Controlling Grid actions per column

Enable or disable column-specific actions using these column properties:

* [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowediting): Controls editing.
* [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowfiltering): Controls filtering.
* [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowgrouping): Controls grouping.
* [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowsorting): Controls sorting.
* [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowreordering): Controls reordering.
* [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowresizing): Controls resizing.
* [allowSearching](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowsearching): Controls searching.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/control-actions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/control-actions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Customize column styles

Customize grid column appearance through events, CSS, or API methods. This includes modifying font, background color, and other visual styles.

See the [Customize Cell Styles](https://ej2.syncfusion.com/angular/documentation/grid/cell#customize-cell-styles) documentation for details.

## Manipulating columns

Syncfusion Grid for Angular enables runtime access, update, addition, or removal of columns using its API methods.

### Accessing Columns

Use these methods on the grid instance:

* **[getColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumns)**: Returns an array of all column definitions.
    ```ts
    let columns = this.grid.getColumns();
    ```
* **[getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnbyfield)**: Returns the column object by field name.
    ```ts
    let column = this.grid.getColumnByField('ProductName');
    ```
* **[getColumnByUid](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnbyuid)**: Returns a column by unique ID.
    ```ts
    let column = this.grid.getColumnByUid();
    ```
* **[getVisibleColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#getvisiblecolumns)**: Returns only currently visible columns.
    ```ts
    let visibleColumns = this.grid.getVisibleColumns();
    ```
* **[getForeignKeyColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#getforeignkeycolumns)**: Returns foreign key columns.
    ```ts
    let foreignKeyColumns = this.grid.getForeignKeyColumns();
    ```
* **[getColumnFieldNames](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnfieldnames)**: Returns all field names as an array.
    ```ts
    let fieldNames = this.grid.getColumnFieldNames();
    ```

> For a full API reference, see the [Grid Column API section](https://ej2.syncfusion.com/angular/documentation/api/grid/column/).

### Updating column definitions

Modify any column configuration object in the [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) array and call [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshcolumns) to apply changes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-cs1" %}

### Adding/Removing Columns

The Grid component allows you to dynamically add or remove columns to and from the grid using the [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) property, which can be accessed through the instance of the Grid.

To add a new column to the Grid, you can directly **push** the new column object to the columns property.To remove a column from the Grid, you can use the **pop** method, which removes the last element from the columns array of the Grid. Alternatively, you can use the splice method to remove a specific column from the columns array.

Here's an example of how you can add and remove a column from the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-cs2" %}

### How to refresh columns

Call [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshcolumns) after updating, adding, or removing columns to re-render grid columns:

```ts
this.grid.refreshColumns();
```

## Responsive columns

Toggle column visibility responsively using the [hideAtMedia](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#hideatmedia) property. This property accepts standard [Media Queries](http://cssmediaqueries.com/what-are-css-media-queries.html).

In this example, the data in the Grid is displayed with three columns: **Order ID, Customer ID, and Freight**. We have set the `hideAtMedia` property of the **OrderID** column to (min-width: 700px) which means that this column will be hidden when the browser screen width is less than or equal to 700px.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs21" %}

## See also

* [Group Column by Format](../grouping#group-by-format)
* [Format grid with auto-generated columns in Angular Grid](https://www.syncfusion.com/forums/141181/format-grid-with-auto-generation-columns-in-angular-grid)
* [Change background color for stacked headers and calculated columns](https://www.syncfusion.com/forums/139804/background-color-change-for-stacked-headers-and-calculated-columns-in-angular-grid)
* [Drag and Drop Between two grids](https://www.syncfusion.com/forums/150058/drag-and-drop-between-two-grids-in-angular-grid)
