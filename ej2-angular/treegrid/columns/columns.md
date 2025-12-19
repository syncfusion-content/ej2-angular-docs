---
layout: post
title: Columns in Angular TreeGrid component | Syncfusion
description: Learn here all about Columns in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular TreeGrid component

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component, columns are fundamental elements that play a pivotal role in organizing and displaying data within applications. They serve as the building blocks for data presentation, allowing specification of what data fields to show, how to format and style them, and how to enable various interactions within the TreeGrid.

The column definitions are used as the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid#dataSource) schema in the TreeGrid. The [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#field) property of the [column](https://ej2.syncfusion.com/angular/documentation/api/treegrid#column) is necessary to map the data source values in TreeGrid columns.

## Column types

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component allows specifying the type of data that a column binds using the [column.type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#type) property. The `type` property is used to determine the appropriate [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format), such as [number](../../common/internationalization#number-formatting) or [date](../../common/internationalization#manipulating-datetime), for displaying the column data.

TreeGrid supports the following column types:

* **string**: Represents a column that binds to string data. This is the default type if the `type` property is not defined.
* **number**: Represents a column that binds to numeric data. It supports formatting options for displaying numbers.
* **boolean**: Represents a column that binds to boolean data. It displays checkboxes for boolean values.
* **date**: Represents a column that binds to date data. It supports formatting options for displaying dates.
* **datetime**: Represents a column that binds to date and time data. It supports formatting options for displaying date and time values.
* **checkbox**: Represents a column that displays checkboxes.

The following example demonstrates how to specify column types in a TreeGrid using the types mentioned above:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-type-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-type-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-type-cs1" %}

>* If the [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#type) is not defined, then it will be determined from the first record of the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid#datasource).
>* If the first record of the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treegrid#datasource) is null/blank value for a column, then it is necessary to define the [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#type) for that column. This is because the TreeGrid uses the column type to determine which filter dialog to display for that column.

### Difference between boolean type and checkbox type column 

1. Use the **boolean** column type when binding boolean values from your datasource and/or editing boolean property values from your type.
2. Use the **checkbox** column type when enabling selection/deselection of the whole row.
3. When the TreeGrid column `type` is a **checkbox**, the selection type of the TreeGrid [selectionSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings#mode) will be multiple. This is the default behavior.
4. If there are multiple columns with the column type as **checkbox**, the TreeGrid will automatically enable the other column's checkbox when selecting one column checkbox.

> To learn more about how to render boolean values as checkboxes in a Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid Column, please refer to the [Render Boolean Values as Checkbox](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/columns#render-boolean-value-as-checkbox) section.

## Column width

To adjust the column width in a TreeGrid, the [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid#width) property within the [column](https://ej2.syncfusion.com/angular/documentation/api/treegrid#column) property of the TreeGrid configuration can be used. This property enables defining the column width in pixels or as a percentage. The width can be set to a specific value, like **100** for 100 pixels, or as a percentage value, such as **25%** for 25% of the available width.

1. TreeGrid column width is calculated based on the sum of column widths. For example, a TreeGrid container with 4 columns and a width of 800 pixels will have columns with a default width of 200 pixels each.
2. If widths are specified for some columns but not others, the TreeGrid will distribute the available width equally among the columns without explicit widths. For example, if there are 3 columns with widths of 100px, 200px, and no width specified for the third column, the third column will occupy the remaining width after accounting for the first two columns.
3. Columns with percentage widths are responsive and adjust their width based on the size of the container. For example, a column with a width of 50% will occupy 50% of the TreeGrid width and will adjust proportionally when the TreeGrid container is resized to a smaller size.
4. When columns are manually resized in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid, a minimum width is set to ensure that the content within the cells remains readable. By default, the minimum width is set to 10 pixels if not explicitly specified for a column.
5. If the total width of all columns exceeds the width of the TreeGrid container, a horizontal scrollbar will automatically appear to allow horizontal scrolling within the TreeGrid.
6. When columns are hidden using the column chooser, the width of the hidden columns is removed from the total TreeGrid width, and the remaining columns will be resized to fill the available space.
7. If the parent element has a fixed width, the TreeGrid component will inherit that width and occupy the available space. However, if the parent element does not have a fixed width, the TreeGrid component will adjust its width dynamically based on the available space.

> To learn more about resizing, refer to the resizing section [here](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-resizing)

#### Supported types for column width:

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid supports the following three types of column width:

**1. Auto**

The column width is automatically calculated based on the content within the column cells. If the content exceeds the width of the column, it will be truncated with an ellipsis (...) at the end. The width can be set for columns as **auto** in the TreeGrid configuration as shown below:

```html
  <e-column field='taskID' headerText='Task ID' textAlign='Right' width='auto'></e-column>
```

**2. Percentage**

The column width is specified as a percentage value relative to the width of the TreeGrid container. For example, a column width of 25% will occupy 25% of the total TreeGrid width. The width can be set for columns as **percentage** in the TreeGrid configuration as shown below:

```html
  <e-column field='taskID' headerText='Task ID' textAlign='Right' width='25%'></e-column>
```

**3. Pixel**

The column width is specified as an absolute pixel value. For example, a column width of 100px will have a fixed width of 100 pixels regardless of the TreeGrid container size. The width can be set for columns as **pixel** in the TreeGrid configuration as shown below:

```html
  <e-column field='taskID' headerText='Task ID' textAlign='Right' width='100'></e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-width-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-width-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-width-cs1" %}

## Column formatting

Column formatting is a powerful feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid that allows customizing the display of data in columns. Different formatting options can be applied to columns based on requirements, such as displaying numbers with specific formats, formatting dates according to a specific locale, and using templates to format column values.

The [column.format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property can be used to specify the format for column values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-format-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-format-cs1" %}

>* The TreeGrid uses the [Internalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) library to format values based on the specified format and culture.
>* By default, the [number](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#number-formatting) and [date](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#date-formatting) values are formatted in **en-US** locale. The currency and date can be localized in different locale as explained [here](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization).
>* The available format codes may vary depending on the data type of the column.
>* A custom function can be provided to the [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property, instead of a format string, to customize the formatting further.
>* Ensure that the format string is valid and compatible with the data type of the column, to avoid unexpected results.

### Number formatting

Number formatting allows customizing the display of numeric values in TreeGrid columns. Standard numeric format strings or custom numeric format strings can be used to specify the desired format. The [column.format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property can be used to specify the number format for numeric columns. For example, the following format strings can be used to format numbers:


Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3, etc., which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3, etc., which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3, etc., which denotes the number of precision to be allowed.

The following example demonstrates the formatting of data for **units** column using the **'N'** format, **price** column using the **'P'** format, and **unitPrice** column using the **'C'** format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-format-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-format-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-format-cs2" %}

>To learn more about number formatting, refer to the [number](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#number-formatting) section.

### Date formatting

Date formatting in TreeGrid columns allows customizing how date values are displayed. Standard date format strings, such as **"d," "D," "MMM dd, yyyy,"** and more, can be used, or custom format strings can be created. To specify the desired date format, the [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property of the TreeGrid columns can be used. For example, `format` can be set as a string like **"yMd"** for a built-in date format. 

Additionally, custom format strings can be used to format date values, and examples of custom formats and formatted date values are provided in the table below:

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-format-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-format-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-format-cs3" %}

>To learn more about date formatting, refer to [Date formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#date-formatting). 

### Format the date column based on localization 

The date column can also be formatted based on the localization settings of the browser. The [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property of the TreeGrid columns along with the [locale](https://ej2.syncfusion.com/angular/documentation/api/treegrid#locale) property can be used to specify the desired date format based on the locale.

In this example, the format property specifies the date format as "**yyyy-MMM-dd**", and the locale property specifies the locale as **"es-AR"** for Spanish (Argentina).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-format-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-format-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-format-cs4" %}

### Format template column value 

Template columns in TreeGrid provide a way to customize the appearance of column values using HTML templates. In addition to HTML markup, number formatting can also be used to format the value displayed in a template column. To format values in a column template, Angular pipes and the [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property can be used. In this example, the date pipe is used to format the **OrderDate** value as a date in the format **'dd/MMM/yyyy'**.

```ts
 <e-column field='orderDate'  headerText='Order Date' textAlign='Right' width=120>
        <ng-template #template let-data>
        {% raw %}
          {{ data.orderDate | date:'dd/MMM/yyyy' }}
        {% endraw %}
        </ng-template>
 </e-column>
```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit,ViewChild } from '@angular/core';
import { formatData } from './datasource';
 
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='orderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='orderName' headerText='Order Name' textAlign='Left' width=180></e-column>
                        <e-column field='orderDate' headerText='Order Date' textAlign='Right' width=120>
                            <ng-template #template let-data>
                                 {{ data.orderDate | date:'dd/MMM/yyyy' }}
                            </ng-template>
                        </e-column>
                        <e-column field='shippedDate' headerText='Ship Date' textAlign='Right' width=150></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' format='N' type='number' width=80></e-column>
                    </e-columns>
             </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    
    ngOnInit(): void {
        this.data = formatData;
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-format-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-format-cs5" %}

> Other Angular pipes, such as **currency, decimal, percent,** etc., can be used to format other types of values in the column template based on requirements.

### Custom formatting

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid allows customizing the formatting of data in TreeGrid columns. Custom formats can be applied to numeric or date columns to display data in a specific way according to requirements. To apply custom formatting to TreeGrid columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid, the [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property can be used. The following example demonstrates how custom formatting can be used for numeric and date columns:

In the following example, the **numberFormatOptions** object is used as the `format` property for the **'units'** column to apply a custom numeric format with four decimal places. Similarly, the **dateFormatOptions** object is used as the `format` property for the **'OrderDate'** column to apply a custom date format displaying the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g. Sun, May 8, '23).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-format-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-format-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-format-cs6" %}

>To learn more about custom formatting, refer to [Custom Date formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#custom-formats) and [Custom Number formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#custom-number-formatting-and-parsing).

## Align the text of content

The text in the content of a TreeGrid column can be aligned using the [textAlign](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#textalign) property. This property allows specifying the alignment of the text within the cells of a particular column in the TreeGrid. By default, the text is aligned to the left, but the alignment can be changed by setting the value of the `textAlign` property to one of the following options:

*	**Left**: Aligns the text to the left (default).
*	**Center**: Aligns the text to the center.
*	**Right**: Aligns the text to the right.
*	**Justify**: Align the text to the justify.

The following example demonstrates using the `textAlign` property to align the text of a TreeGrid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-align-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-align-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-align-cs1" %}

>* The `textAlign` property changes the alignment for both the column content and header. If the header needs to be aligned differently, the [headerTextAlign](https://ej2.syncfusion.com/documentation/api/treegrid/column#headerTextAlign) property can be used.

## Render boolean values as checkbox

The TreeGrid component allows rendering boolean values as checkboxes in columns. This can be achieved by using the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#displayascheckbox) property, which is available in the [column](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column). This property is useful when there is a boolean column in the TreeGrid and the values need to be displayed as checkboxes instead of the default text representation of **true** or **false**.

To enable the rendering of boolean values as checkboxes, set the `displayAsCheckBox` property of the `columns` to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/boolean-columns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/boolean-columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/boolean-columns-cs1" %}

>* The `displayAsCheckBox` property is only applicable to boolean values in TreeGrid columns.
>* When `displayAsCheckBox` is set to **true**, the boolean values will be rendered as checkboxes in the TreeGrid column, with checked state indicating **true** and unchecked state indicating **false**.

### How to prevent checkbox in the blank row

To prevent the checkbox in the blank row of the TreeGrid, even if the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#displayascheckbox) property is set to true for that column, the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowdatabound) event can be used to check for empty or null values in the row data. If all the values in the row are empty or null, the inner HTML of the corresponding cell can be set to an empty string to hide the checkbox.

The following example demonstrates how to prevent a checkbox from being displayed in a blank row in a TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/blank-row-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/blank-row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/blank-row-cs1" %}

## AutoFit columns

The TreeGrid has a feature that allows automatically adjusting column widths based on the maximum content width of each column when double-clicking on the resizer symbol located in a specific column header. This feature ensures that all data in the TreeGrid rows is displayed without wrapping. To use this feature, inject the **ResizeService** in the provider section of **AppModule** and enable the resizer symbol in the column header by setting the [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowresizing) property to true in the TreeGrid.

The following screenshot represents the resizing the column using resizer symbol:

![Resizing](../images/resizing.gif)

### Resizing a column to fit its content using method support

The [autoFitColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. Specific columns can be autofit at initial rendering by invoking the `autoFitColumns` method in [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid#databound) event.

To use `autoFitColumns` method, inject **ResizeService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/resize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/resize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/resize-cs1" %}

> All the columns can be autofit by invoking the `autoFitColumns` method without specifying column names.

### AutoFit columns with empty space

The Autofit feature is utilized to display columns in a TreeGrid based on the defined width specified in the columns declaration. If the total width of the columns is less than the width of the TreeGrid, this means that white space will be displayed in the TreeGrid instead of the columns auto-adjusting to fill the entire TreeGrid width.

This feature can be enabled by enabling the [autoFit](https://ej2.syncfusion.com/angular/documentation/api/grid#autofit) property of grid object in TreeGrid instance using the [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid#load) event of the TreeGrid. This feature ensures that the column width is rendered only as defined in the TreeGrid column definition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/autofit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/autofit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/autofit-cs1" %}

> If any one of the column width is undefined, then the particular column will automatically adjust to fill the entire width of the TreeGrid table, even if the `autoFit` property of TreeGrid is enabled.

### AutoFit columns when changing column visibility using column chooser

In the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid, columns can be auto-fitted when the column visibility is changed using the column chooser. This can be achieved by calling the [autoFitColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#autofitcolumns) method in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid#actioncomplete) event. By using the **requestType** property in the event arguments, different actions can be differentiated, and then the `autoFitColumns` method can be called when the request type is **columnState**.

The following example demonstrates how to auto fit columns when changing column visibility using column chooser:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/autofit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/autofit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/autofit-cs2" %}

## Locked columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid allows locking columns, which prevents them from being reordered and moves them to the first position. This functionality can be achieved by setting the [column.lockColumn](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#lockcolumn) property to **true**, which locks the column and moves it to the first position in the TreeGrid.

The following example demonstrates how to use the `lockColumn` property to lock a column in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid. Additionally, in the code snippet below, the locked column is differentiated using CSS with a custom attributes property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/lockedcolumn-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/lockedcolumn-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/treegrid/lockedcolumn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/lockedcolumn-cs1" %}

## Show or hide columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component allows showing or hiding columns dynamically by using property or methods available in the TreeGrid. This feature can be useful when customizing the visibility of columns in the TreeGrid based on requirements.

### Using property

Columns can be shown or hidden in the TreeGrid using the [visible](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#visible) property of each column. By setting the `visible` property to **true** or **false**, whether the column should be visible or hidden in the TreeGrid can be controlled. The following example demonstrates how to show or hide a column in the TreeGrid using the visible property:

In the following example, the **duration** column is defined with `visible` property set to **false**, which will hide the column in the rendered TreeGrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-visible-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-visible-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-visible-cs1" %}

>* Hiding a column using the `visible` property only affects the UI representation of the TreeGrid. The data for the hidden column will still be available in the underlying data source, and can be accessed or modified programmatically.
>* When a column is hidden, its width is not included in the calculation of the total TreeGrid width.
>* To hide a column permanently, its visible property can be set to false in the column definition, or the column definition can be removed altogether.

### Using methods

Columns can also be shown or hidden in TreeGrid using the [showColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#showcolumns) and [hideColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#hidecolumns) methods of the TreeGrid component. These methods allow showing or hiding columns based on either the `headerText` or the `field` of the column.

**Based on header text**

Columns can be dynamically shown or hidden in the TreeGrid based on the header text by invoking the `showColumns` or `hideColumns` methods. These methods take either an array of column header texts or a simple string value for a column header text as the first parameter, and the value `headerText` as the second parameter to specify that columns are being shown or hidden based on the header text.

The following example demonstrates how to show or hide a column based on the HeaderText in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-visible-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-visible-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-visible-cs2" %}

**Based on field**

Columns can be dynamically shown or hidden in the TreeGrid using external buttons based on the field by invoking the `showColumns` or `hideColumns` methods. These methods take either an array of column header texts or a simple string value for a column header text as the first parameter, and the value `field` as the second parameter to specify that columns are being shown or hidden based on the field.

The following example demonstrates how to show or hide a column based on the field in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-visible-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-visible-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-visible-cs3" %}

## Checkbox Column

To render checkboxes in an existing column, set the [columns.showCheckbox](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnmodel#showcheckbox) property to true.

Rows can be selected hierarchically using checkboxes by enabling the [autoCheckHierarchy](https://ej2.syncfusion.com/angular/documentation/api/treegrid#autocheckhierarchy) property. Selecting a parent record checkbox selects its child records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/selection-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/selection-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/selection-cs16" %}


## Controlling TreeGrid actions

Various actions such as filtering, sorting, resizing, reordering, editing, and searching can be controlled for specific columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid using the following properties:

* [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel#allowediting): Enables or disables editing for a column.
* [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel#allowfiltering): Enables or disables filtering for a column.
* [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel#allowsorting): Enables or disables sorting for a column.
* [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel#allowreordering): Enables or disables reordering for a column.
* [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel#allowresizing): Enables or disables resizing for a column
* [allowSearching](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel#allowsearching): Enables or disables searching for a column

The following example demonstrates how to control TreeGrid actions for specific columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/control-actions-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/control-actions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/control-actions-cs1" %}

## Customize column styles

Customizing the TreeGrid column styles allows modifying the appearance of columns in the TreeGrid component to meet design requirements. The font, background color, and other styles of the columns can be customized. To customize the columns styles in the TreeGrid, TreeGrid event, CSS, property or method support can be used.

For more information check on this [documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/cell#customize-cell-styles).

## Manipulating columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid for Angular provides powerful features for manipulating columns. This section explains how to access columns, update column definitions, and add/remove columns using Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid properties, methods, and events.

### Accessing columns

To access columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component, the following methods can be used:

* **[getColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcolumns)**:

This method returns the array of columns defined in the TreeGrid.

```ts
let columns = this.treegrid.getColumns();
```

* **[getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcolumnbyfield)**:

This method returns the column object that matches the specified field name.

```ts
let column = this.treegrid.getColumnByField('taskName');
```

* **[getColumnByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcolumnbyuid)**:

This method returns the column object that matches the specified UID.

```ts
let column = this.treegrid.getColumnByUid("grid-column128");
```

* **[getVisibleColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getvisiblecolumns)**:

This method returns the array of visible columns.

```ts
let visibleColumns = this.treegrid.getVisibleColumns();
```

* **[getColumnFieldNames](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcolumnfieldnames)**

This method returns an array of field names of all the columns in the TreeGrid.

```ts
let fieldNames = this.treegrid.getColumnFieldNames()
```

> For a complete list of column properties, refer to this [section](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column).

### Updating column definitions

The column definitions in the TreeGrid can be updated using the [column](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column) property. The properties of the column objects in the columns array can be modified to update the columns dynamically. For example, the headerText, width, visible, and other properties of a column can be changed to update its appearance and behavior in the TreeGrid and then the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#refreshcolumns) method can be called to apply the changes to the TreeGrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs1" %}

### Adding/removing columns

The TreeGrid component allows dynamically adding or removing columns to and from the TreeGrid using the [columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column) property, which can be accessed through the instance of the TreeGrid.

To add a new column to the TreeGrid, the new column object can be directly **pushed** to the columns property. To remove a column from the TreeGrid, the **pop** method can be used, which removes the last element from the columns array of the TreeGrid. Alternatively, the splice method can be used to remove a specific column from the columns array.

The following example demonstrates how to add and remove a column from the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs16" %}

### How to refresh columns

The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#refreshcolumns) method of the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid can be used to refresh the columns in the TreeGrid. This method can be used when the TreeGrid columns need to be updated dynamically based on actions or data changes.

```ts
this.treegrid.refreshColumns();
```
## Responsive columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component provides a built-in feature to toggle the visibility of columns based on media queries using the [hideAtMedia](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#hideatmedia) property of the column object. The `hideAtMedia` accepts valid [Media Queries](http://cssmediaqueries.com/what-are-css-media-queries.html). 

In this example, there is a TreeGrid that displays data with two columns: **Task ID and Start Date**. The `hideAtMedia` property of the **Task ID** column has been set to (min-width: 700px) which means that this column will be hidden when the browser screen width is less than or equal to 700px.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs17" %}