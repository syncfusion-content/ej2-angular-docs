---
layout: post
title: Angular Grid - Columns | Syncfusion
description: Angular Grid columns provides a complete guide to defining columns, types, widths, templates, and behaviors to model tabular data effectively.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular Grid Component

In Angular Data Grid, columns are the fundamental building blocks that display data from a data source. Each column maps to a specific field in the data source and is responsible for rendering values in the required format. For example, a dataset containing customer details such as "ID", "Name", "Email", and "Purchase Date" will present each field as an individual column in the Grid.

A column definition commonly includes the following properties:
- `field`: The [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column#field) property establishes the connection between the dataset and the column by mapping a data source field to a grid column. This property is required for performing data operations between the Grid and the data source.
- `headerText`: The [headerText](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertext) property defines the text displayed in the column header. It provides a clear label for the column, making the grid easier to read and understand.

## Column types

The [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type) property defines the data type of the values in a column. Defining the correct column type is important because it determines the way the Grid formats, filters, and sorts the data.

The `type` property applies formatting rules, such as number formats or date formats, to ensure proper display of column values. By default, the Grid automatically assigns the column type based on the first value in that column. If the first value is "null", "undefined", or "empty", the type cannot be inferred and must be set manually to ensure correct formatting and data operations.

### Supported column types

The Grid provides column types to represent different data types. Each type ensures that values are displayed accurately and that operations such as sorting and filtering function properly. The supported column types are:

* `string`: Contains text values. This is the default type. If the first value is "null", "undefined", or "empty", and no type is set, the column defaults to `string`.
* `number`: Contains numeric values.
* `boolean`: Represents `true` or `false` values. By default, these values are displayed as text in the grid cell. To show them as checkboxes with checked or unchecked states, set the `displayAsCheckBox` property for the column.
* `date`: Represents date values.
* `datetime`: Represents date and time values.
* `checkbox`: Provides checkboxes for row selection.

Column types can be explicitly defined using the `type` property. For example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-type-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-type-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-type-cs1" %}

> * If [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type) is not defined, the grid detects it from the first record in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource).
> * In case the first record's value for a column is null or blank, define the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type) for accurate filtering and editing dialogs.

### Difference between boolean type and checkbox type column 

* `boolean`: Represents `true` or `false` values from the data source. Values can be edited. By default, values are displayed as text, but can be shown as checkboxes by setting the `displayAsCheckBox` property.
* `checkbox`: When a column type is set to `checkbox`, it enables row selection. By default, the Grid allows multiple records to be selected, as the `selectionSettings` automatically defaults to multiple selection.

> For more information on rendering boolean values as a checkbox, refer to the [Checkbox](https://ej2.syncfusion.com/angular/documentation/grid/columns/columns#render-boolean-value-as-checkbox) section.

## Column Width

The Grid allocates column space using the [width](https://ej2.syncfusion.com/angular/documentation/api/grid#width) property. Widths can be defined in **pixels** (e.g., "100" for "100px"), as a **percentage** (e.g., "25%" for one-quarter of the grid width), or set to "auto" to let the Grid size the column automatically based on its content.

### Understanding column width distribution  

| **Scenario**                                   | **Result**                                                                 |
|------------------------------------------------|----------------------------------------------------------------------------|
| **No widths defined for any columns**          | The Grid divides the total width equally among all columns. Example: 4 columns in an "800px" grid → each column gets "200px". |
| **Some columns have widths, others do not**    | The remaining space is shared equally among the columns without a defined width. |
| **All columns use percentage widths**          | Columns resize responsively based on the grid size. Example: "50%" → column always takes half of the grid width. |
| **Combined column widths exceed grid size**    | A horizontal scrollbar appears automatically to allow scrolling.           |
| **Columns set to auto width**                  | The Grid calculates the width based on the widest cell in the column. If content is too long, it is truncated with an ellipsis (…). |
| **Parent container has a fixed width**         | The Grid inherits that fixed width from its parent.                        |
| **Parent container has a flexible width**      | The Grid adjusts dynamically to fit the available space.                   |

**Supported types for column width:**

1. **Auto** 

    Column width is automatically calculated based on the content within the column cells. If the content exceeds the specified width in the `e-column`, it is truncated with an ellipsis (…) at the end. To allow a column to adjust its width dynamically based on content, set the width property of the `e-column` to "auto".

    A Grid can combine both flexible and fixed-width columns to create a balanced layout. For example, consider three columns "Order ID", "Customer Name", and "Freight". The "Customer Name" column automatically adjusts its width based on the length of the names, while the "Order ID" and "Freight" columns remain fixed. This ensures that numeric fields stay consistent while text fields expand as needed.

      ```html
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='auto'></e-column>
      ```
2. **Percentage**

    Column width can be defined as a percentage relative to the total width of the grid container. For example, assigning "25%" to a column will allocate one-fourth of the grid's width to that column. This approach is useful for distributing space proportionally across columns.

      ```html
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='25%'></e-column>
   ```
3. **Pixel**

    The column width can be defined using an absolute pixel value. For example, setting a column width to "100px" means the column will always occupy "100" pixels, regardless of the grid container's size. The width for `e-column` can be set as pixels in the Grid configuration as shown below:

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

Column formatting serves as a powerful feature in Angular Data Grid, enabling customization of data display in grid columns. Different formatting options can be applied to columns to meet specific needs, including number formatting with defined patterns, date formatting according to particular locales, and the use of templates for column values.

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
> * The available format codes may vary depending on the data type of the column.
> * Column formatting allows advanced customization by assigning a custom function to the `format` property, rather than using a predefined format string.
> * Ensure that the format string is valid and compatible with the data type of the column to avoid unexpected results.

### Number formatting

Number formatting enables customization of numeric value display in Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) columns. Standard numeric format strings or custom numeric format strings specify the desired presentation. The `format` property of Grid columns can be used to specify the number format for numeric columns.

Format |Description |Remarks
-------|-------|-------
`N` | Denotes numeric type. | The numeric format is followed by integer value as `N2`, `N3`, etc., where the number specifies the number of decimal places to display.
`C` | Denotes currency type. | The currency format is followed by integer value as `C2`, `C3`, etc., where the number specifies the number of decimal places to display.
`P` | Denotes percentage type. | The percentage format expects input values in the range of 0 to 1. For example, a cell value of "0.2" is displayed as "20%". The format can include an integer value such as `P2`, `P3`, etc., where the number indicates the number of decimal places to display.

The following example code demonstrates the formatting of data for "Mark 1" and "Mark 2" using the `N` format, "Percentage of Marks" using the `P` format, and "Fees" using the `C` format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-format-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-format-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-format-cs3" %}

> For additional details on number formatting options supported by the Grid component, refer to the [number formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#number-formatting) section in the Internationalization documentation.


### Date formatting

Date formatting customizes the display of date values in Grid columns. It supports standard date format strings (such as "d", "D", or "MMM dd, yyyy"), built-in skeletons (such as "yMd"), and custom format strings. The `format` property of Grid columns specifies the desired date format.

Additionally, custom format strings provide precise control over the way date values are displayed, and the table below shows examples of custom formats with their corresponding outputs.

Format | Formatted value
-----|-----
`{ type:'date', format:'dd/MM/yyyy' }` | 04/07/1996
`{ type:'date', format:'dd.MM.yyyy' }` | 04.07.1996
`{ type:'date', skeleton:'short' }` | 7/4/96
`{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }` | 04/07/1996 12:00 AM
`{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' }` | 07/04/1996 12:00:00 AM

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

### Format the date and currency column based on localization

Date columns can be formatted based on user locale by combining the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column#format) and [locale](https://ej2.syncfusion.com/angular/documentation/api/grid#locale) properties.

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

Template columns in Angular Data Grid enable customization of column value appearance through HTML templates. Number formatting can also be applied within template columns to control the display of values. To format values in a column template, use the Angular pipes and the `format` property.

In this example, the date pipe formats the "Order Date" value as a date in the format "dd/MMM/yyyy".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { CommonModule } from '@angular/common';

@Component({
    imports: [GridModule, CommonModule],
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

> Other Angular pipes, such as "currency", "decimal", "percent", etc., can be used to format different types of values in the column template based on the requirements.

### Custom formatting

Angular Data Grid supports customizing the formatting of data in its columns. Custom formats can be applied to numeric or date fields to display values in a specific style as required. The `format` property is used to define these custom formats.

A custom format string must contain one or more of the following standard date/time symbols.

| Symbol         | Description             | Format                                      | Formatted Value     |
|----------------|-------------------------|-----------------------------------------------------|---------------------|
| G              | Era (for example: AD (Anno Domini, after year 0), BC (Before Christ, before year 0) )      | `{ type: 'Date', format: 'G' }`           | AD or BC (for example: September 17, 2025, the era is AD)                 |
| y              | Year                    | `{ type: 'Date', format: 'yyyy' }`        | 2025                |
| M / L          | Month                   | `{ type: 'Date', format: 'MM' }`          | 09                  |
| E / c          | Day of the week         | `{ type: 'Date', format: 'EEEE' }`        | Wednesday           |
| d              | Day of the month        | `{ type: 'Date', format: 'dd' }`          | 17                  |
| m              | Minutes                 | `{ type: 'DateTime', format: 'mm' }`               | 09                  |
| h / H          | Hour (12/24-hour)       | `{ type: 'DateTime', format: 'hh a' }`<br />`{ type: 'DateTime', format: 'HH' }` | 04 PM<br />16         |
| s              | Seconds                 | `{ type: 'DateTime', format: 'ss' }`               | 00                  |
| f              | Milliseconds            | `{ type: 'DateTime', format: 'fff' }`              | 000                 |
| a              | AM/PM (with 12-hour)    | `{ type: 'DateTime', format: 'hh:mm a' }`          | 04:09 PM            |
| z              | Time zone               | `{ type: 'DateTime', format: 'z' }`                | IST                 |
| ' (single quotes) | Literal text in format | `{ type: 'Date', format: "'Date:' yyyy-MM-dd" }` | Date: 2025-09-17 |

The custom format specifiers listed in the table below can be used to create custom number format.

| Specifier | Description | Example Input | Format Output |
|-----------|-------------|---------------|----------------|
| 0         | Displays digit or zero if absent. | `{ format: '0000' }` | 0123 |
| #         | Displays digit if present; hides if absent. | `{ format: '####' }` | 1234 |
| .         | Defines decimal precision. | `{ format: '###0.##0#' }` | 546321.000 |
| %         | Converts value to percentage. | `{ format: '0000 %' }` | 0100 % |
| $         | Formats value as currency. | `{ format: '$ ###.00' }` | $ 13.00 |
| ;         | Separates formats for positive, negative, and zero. | `{ format: '###.##;(###.00);-0' }` | (120.00) |
| 'String' (single Quotes)  | Displays literal text in output. | `{ format: "####.## '@'" }` | 123.44 @ |

In the below example, the "numberFormatOptions" object is used as the `format` property for the "Freight" column to apply a custom numeric format with four decimal places. Similarly, the "dateFormatOptions" object is used as the `format` property for the "Order Date" column to apply a custom date format displaying the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g. Sun, May 8, ‘23).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-format-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-format-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-format-cs2" %}

> For more information, refer to the [custom date formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#custom-formats) and [custom number formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#custom-number-formatting-and-parsing) sections.

## Align the text of content

The alignment of text within Grid column cells can be controlled using the [textAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column#textalign) property. This property specifies the alignment of text within the cells of a particular column. By default, text is aligned to the `left`, but the alignment can be changed by setting the `textAlign` property to one of the following options:

* `Left`: Aligns the text to the left (default).
* `Center`: Aligns the text to the center.
* `Right`: Aligns the text to the right.
* `Justify`: Align the text to the justify.

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

> The `textAlign` property affects only cell content; to align the header, use [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertextalign).

## Render boolean value as checkbox

The Grid component supports rendering boolean values as checkboxes within columns. This can be achieved by using the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/grid/column#displayascheckbox) property, which is available in the [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/column). This property is useful for displaying boolean column values as checkboxes instead of the default text representation of `true` or `false`.

To enable the rendering of boolean values as checkboxes, set the `displayAsCheckBox` property of the column to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs14" %}

> The `displayAsCheckBox` property applies only to boolean columns. Checked = true; unchecked = false.

## Preventing checkbox in blank rows

To prevent the checkbox in blank rows of the Grid, even when the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/grid/column#displayascheckbox) property is set to `true` for that column, use the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdatabound) event to detect **empty** or **null** values in the row data. If all values in the row are **empty** or **null**, set the inner HTML of the corresponding cell to an empty string to hide the checkbox.

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

The AutoFit feature in the Angular Data Grid allows columns to automatically adjust their widths based on the maximum content width within each column. This ensures that all cell values are fully visible without truncation or wrapping.

**Usage:**

- Hover the mouse over a column header. A resizer icon appears on the right edge of the header.
- Double-click the resizer icon to resize the column to fit its longest content.

To display the resizer icon on column headers while hovering in the Angular Data Grid:

- Set the [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid#allowresizing) property to `true` in the Grid component.
- Inject the `Resize` module from `@syncfusion/ej2-angular-grids`and inject **ResizeService**.


### Resizing a column to fit its content using AutoFit method

The Grid can automatically adjust column widths to fit the widest cell content, ensuring that all data remains visible without wrapping. This behavior can also be triggered programmatically without user interaction by calling the [autoFitColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#autofitcolumns) method inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event. Columns are resized immediately after the Grid finishes rendering its data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/resize-cs1" %}

> Call `autoFitColumns()` without parameters to resize every column in the Grid.

### AutoFit columns with empty space

The AutoFit feature adjusts column widths in the Grid based on the values defined in the column declarations. If the total width of all columns is smaller than the overall Grid width, the remaining space will appear as white space. In this case, the columns do not automatically adjust to fill the entire Grid width.

This feature can be enabled by setting the [autoFit](https://ej2.syncfusion.com/angular/documentation/api/grid#autofit) property to `true`. When enabled, the column width is rendered strictly according to the values defined in the Grid's column definitions, without expanding to occupy unused space.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autofit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autofit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/autofit-cs1" %}

> If any one of the `e-column` widths is **undefined**, then the particular column will automatically adjust to fill the entire width of the Grid table, even if the `autoFit` property of Grid is enabled.

### AutoFit columns when changing column visibility using column chooser

Use [autoFitColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#autofitcolumns) in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event (with `requestType: 'columnState'`) to auto-fit columns after toggling their visibility via column chooser.

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

AutoFit can adjust columns according to the widest content within a Column width adjustment for a specific range of rows based on their content can be achieved using the `autoFitColumns` method by passing the second and third parameters (optional) as the start and end index for the columns to fit.

This feature calculates the appropriate width based on the maximum content width of the specified range of rows or the header text width. Subsequently, the maximum width of the content of the specified rows or header text is applied to the entire column of the grid.

The following example demonstrates auto-fitting columns with specific rows. The first parameter is an array containing the specific column field names, such as "Inventor", "Number of INPADOC patents" and "Main fields of invention" to apply the auto-fit functionality to these columns. The second parameter (start index) is set to "1" and the third parameter (end index) is set to "3". When specifying these start and end indices, the auto-fit operation is applied only to the range of rows from "1" to "3" for column width adjustment.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autofit-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autofit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/autofit-cs3" %}

## Lock columns

The Angular Data Grid allows locking columns to prevent reordering and automatically position them first. This can be achieved by setting the [lockColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/column#lockcolumn) property to `true`.

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

Column visibility in the Angular Data Grid can be shown or hidden dynamically through built-in properties and methods. This feature helps customize which columns appear based on specific needs.

> At least one column must always remain visible.

### Using the visible property

The [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column#visible) property controls whether columns appear in the Angular Grid. Setting this property to `true` shows the column, while `false` hides it.

In the below example, the "Ship City" column is defined with `visible` property set to `false`, which will hide the column in the rendered grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/grid-cs15" %}

> * Hiding a column using the `visible` property only affects the UI representation of the Grid. The data for hidden columns still exists in the data source and can be accessed or modified through code.
> * When a column is hidden, its width is not included in the calculation of the total grid width.
> * Columns can be permanently hidden by setting the `visible` property to `false` in the column definition, or by removing the column entirely.

### Using methods

The [showColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#showcolumns) and [hideColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#hidecolumns) methods provide another way to control column visibility in the Angular Grid. These methods work by specifying either the `headerText` or the `field` name of the column.

**Based on header text**

The [showColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#showcolumns) and [hideColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#hidecolumns) methods provide another way to control column visibility in the Angular Grid. These methods work by specifying either the `headerText` or the `field` name of the column.

Here's an example showing how to show or hide a column based on the HeaderText in the Angular Grid:

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

External buttons can control column visibility by field name using the `showColumns` or `hideColumns` methods. These methods require an array of column field names as the first parameter and the value `field` as the second parameter to indicate the operation is based on field names.

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

Column-specific actions like filtering, grouping, sorting, resizing, reordering, editing, and searching in the Angular Data Grid can be enabled or disabled using these properties:

* [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#allowediting): Controls editing.
* [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#allowfiltering): Controls filtering.
* [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#allowgrouping): Controls grouping.
* [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#allowsorting): Controls sorting.
* [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#allowreordering): Controls reordering.
* [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#allowresizing): Controls resizing.
* [allowSearching](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#allowsearching): Controls searching.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/control-actions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/control-actions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Customize column styles

Column style customization enables changes to the appearance of columns in the Grid control based on design needs. Properties like font, background color, and other styles can be modified. Grid events, CSS, properties, or methods can be used to customize column styles.

For more information refer to the [documentation](https://ej2.syncfusion.com/angular/documentation/grid/cell#customize-cell-styles).

## Manipulating columns

This section explains working with columns in the Angular Data Grid, including accessing columns, changing column settings, and adding or removing columns using the Grid's properties, methods, and events.

### Accessing Columns

Accessing columns in the Angular Data Grid is done using these grid methods:

| Method | Description | Example |
|--------|-------------|---------|
| [getColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumns) | Returns the array of all columns defined in the grid. | `let columns = grid.getColumns();` |
| [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnbyfield) | Returns the column object that matches the specified field name. | `let column = grid.getColumnByField('ProductName');` |
| [getColumnByUid](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnbyuid) | Returns the column object that matches the specified UID. | `let column = grid.getColumnByUid();` |
| [getVisibleColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#getvisiblecolumns) | Returns the array of all visible columns. | `let visibleColumns = grid.getVisibleColumns();` |
| [getForeignKeyColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#getforeignkeycolumns) | Returns the array of all foreign key columns. | `let foreignKeyColumns = grid.getForeignKeyColumns();` |
| [getColumnFieldNames](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnfieldnames) | Returns an array of field names of all the columns in the Grid. | `let fieldNames = grid.getColumnFieldNames();` |

> All available column properties can be found in this [section](https://ej2.syncfusion.com/angular/documentation/api/grid/column).

### Updating column definitions

The [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#columns) property enables updating column definitions in the Grid. Column properties like `headerText`, `width`, `visible`, and others can be modified in the columns array to change the way columns appear and behave. After making changes, the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#refreshcolumns) method applies the updates to the Grid.

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

Adding or removing columns dynamically in the Grid component is possible through the `columns` property, accessible via the Grid instance.

New columns can be added using the `push` method to add the column object to the `columns` property. Columns can be removed using the `pop` method to delete the last column, or the `splice` method to remove a specific column from the columns array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/column-cs2" %}

### Refreshing columns

The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#refreshcolumns) method of the Angular Data Grid can be used to refresh the columns in the grid. This method is useful when grid columns need to be updated dynamically based on user actions or data changes.

```ts
this.grid.refreshColumns();
```

## Responsive columns

Column visibility in the Angular Data Grid can be toggled based on screen size using the [hideAtMedia](https://ej2.syncfusion.com/angular/documentation/api/grid/column#hideatmedia) property. This property accepts valid [Media Queries](http://cssmediaqueries.com/what-are-css-media-queries.html) to control when columns appear or hide.

This example shows a Grid with three columns: "Order ID", "Customer ID", and "Freight". The "OrderID" column uses `hideAtMedia` set to "(min-width: 700px)", hiding the column when the browser width is "700px" or less.

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
