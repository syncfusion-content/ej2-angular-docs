---
layout: post
title: Columns in Angular Gantt component | Syncfusion
description: Learn here all about Columns in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular Gantt component

In Syncfusion Angular Gantt component, columns are fundamental elements that play a pivotal role in organizing and displaying data within your application. They serve as the building blocks for data presentation, allowing you to specify what data fields to show, how to format and style them, and how to enable various interactions within the gantt.

The column definitions are used as the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) schema in the gantt. The [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) property of the [column](https://ej2.syncfusion.com/angular/documentation/api/gantt/#column) is necessary to map the data source values in gantt columns.

## Column types

The Syncfusion Gantt component allows you to specify the type of data that a column binds using the `column.type` property. The `type` property is used to determine the appropriate [format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format), such as [number](../../common/internationalization/#number-formatting) or [date](../../common/internationalization/#manipulating-datetime), for displaying the column data. 

Gantt supports the following column types:

* **string**: Represents a column that binds to string data. This is the default type if the `type` property is not defined.
* **number**: Represents a column that binds to numeric data. It supports formatting options for displaying numbers.
* **boolean**: Represents a column that binds to boolean data. It displays checkboxes for boolean values.
* **date**: Represents a column that binds to date data. It supports formatting options for displaying dates.
* **datetime**: Represents a column that binds to date and time data. It supports formatting options for displaying date and time values.
* **checkbox**: Represents a column that displays checkboxes.

Here is an example of how to specify column types in a gantt using the types mentioned above.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columntype-cs1" %}

>* If the `type` is not defined, then it will be determined from the first record of the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource).
>* Incase if the first record of the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) is null/blank value for a column then it is necessary to define the `type` for that column. This is because the gantt uses the column type to determine which filter dialog to display for that column.

### Difference between boolean type and checkbox type column 

1. Use the **boolean** column type when you want to bind boolean values from your datasource and/or edit boolean property values from your type.
2. Use the **checkbox** column type when you want to enable selection/deselection of the whole row.
3. When the gantt column `type` is a **checkbox**, the selection type of the gantt [selectionSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/selectionSettings/) will be multiple. This is the default behavior.
4. If you have more than one column with the column type as a **checkbox**, the gantt will automatically enable the other column's checkbox when selecting one column checkbox.

> To learn more about how to render boolean values as checkboxes in a Syncfusion GanttColumn, please refer to the [Render Boolean Values as Checkbox](https://ej2.syncfusion.com/angular/documentation/gantt/columns/columns#render-boolean-value-as-checkbox) section.

## Column width

To adjust the column width in a Gantt, you can use the [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/#width) property within the [column](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columns) property of the Gantt configuration. This property enables you to define the column width in pixels or as a percentage. You can set the width to a specific value, like **100** for 100 pixels, or as a percentage value, such as **25%** for 25% of the available width.

1. Gantt column width is calculated based on the sum of column widths. For example, a gantt container with 4 columns and a width of 800 pixels will have columns with a default width of 200 pixels each.
2. If you specify widths for some columns but not others, the Gantt will distribute the available width equally among the columns without explicit widths. For example, if you have 3 columns with widths of 100px, 200px, and no width specified for the third column, the third column will occupy the remaining width after accounting for the first two columns.
3. Columns with percentage widths are responsive and adjust their width based on the size of the gantt container. For example, a column with a width of 50% will occupy 50% of the gantt width and will adjust proportionally when the gantt container is resized to a smaller size.
4. When you manually resize columns in Syncfusion Gantt, a minimum width is set to ensure that the content within the cells remains readable. By default, the minimum width is set to 10 pixels if not explicitly specified for a column.
5. If the total width of all columns exceeds the width of the gantt container, a horizontal scrollbar will automatically appear to allow horizontal scrolling within the gantt.
6. If the parent element has a fixed width, the gantt component will inherit that width and occupy the available space. However, if the parent element does not have a fixed width, the gantt component will adjust its width dynamically based on the available space.

> To learn more about resizing, you can refer to the resizing section [here](https://ej2.syncfusion.com/angular/documentation/gantt/columns/column-resizing)

#### Supported types for column width:

Syncfusion Gantt supports the following three types of column width:

**1. Auto**

The column width is automatically calculated based on the content within the column cells. If the content exceeds the width of the column, it will be truncated with an ellipsis (...) at the end. You can set the width for columns as **auto** in your Gantt configuration as shown below:

```html
  <e-column field='TaskID' headerText='Task ID' textAlign='Right' width='auto'></e-column>
```

**2. Percentage**

The column width is specified as a percentage value relative to the width of the gantt container. For example, a column width of 25% will occupy 25% of the total gantt width. You can set the width for columns as **percentage** in your Gantt configuration as shown below:

```html
  <e-column field='TaskID' headerText='Task ID' textAlign='Right' width='25%'></e-column>
```

**3. Pixel**

The column width is specified as an absolute pixel value. For example, a column width of 100px will have a fixed width of 100 pixels regardless of the gantt container size. You can set the width for columns as **pixel** in your Gantt configuration as shown below:

```html
  <e-column field='TaskID' headerText='Task ID' textAlign='Right' width='100'></e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnwidth-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnwidth-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnwidth-cs1" %}

## Column formatting

Column formatting is a powerful feature in Syncfusion Gantt that allows you to customize the display of data in gantt columns. You can apply different formatting options to columns based on your requirements, such as displaying numbers with specific formats, formatting dates according to a specific locale, and using templates to format column values.

You can use the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property to specify the format for column values. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnformat-cs1" %}

>* The Gantt uses the [Internalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) library to format values based on the specified format and culture.
>* By default, the [number](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#number-formatting) and [date](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#date-formatting) values are formatted in **en-US** locale. You can localize the currency and date in different locale as explained [here](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization).
>* The available format codes may vary depending on the data type of the column.
>* You can also customize the formatting further by providing a custom function to the [format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property, instead of a format string.
>* Make sure that the format string is valid and compatible with the data type of the column, to avoid unexpected results.

### Number formatting

Number formatting allows you to customize the display of numeric values in Gantt columns. You can use standard numeric format strings or custom numeric format strings to specify the desired format. The [columns.format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property can be used to specify the number format for numeric columns. For example, you can use the following format strings to format numbers:

Format |Description |Remarks
-------|-------|-------
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

The following example code demonstrates the formatting of data for **TaskID** column using the **‘N’** format, **progress** column using the **‘P’** format, and **‘C’** format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnformat-cs5" %}

>To learn more about number formatting, you can refer to the [number](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#number-formatting) section.

### Date formatting

Date formatting in Gantt columns allows you to customize how date values are displayed. You can use standard date format strings, such as **"d," "D," "MMM dd, yyyy,"** and more, or create your own custom format strings. To specify the desired date format, you can use the [format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property of the Gantt columns. For example, you can set `format` as a string like **"yMd"** for a built-in date format. 

Additionally, you can use custom format strings to format date values, and examples of custom formats and formatted date values are provided in the table below.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnformat-cs2" %}

>To learn more about date formatting, you can refer to [Date formatting](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#date-formatting). 

### Format the date column based on localization 

You can also format the date column based on the localization settings of the user's browser. You can use the [format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property of the Gantt columns along with the [locale](https://ej2.syncfusion.com/angular/documentation/api/gantt/#locale) property to specify the desired date format based on the locale.

In this example, the format property specifies the date format as "**yyyy-MMM-dd**", and the locale property specifies the locale as **"es-AR"** for Spanish (Argentina).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnformat-cs3" %}

### Format template column value 

Template columns in Gantt provide a way to customize the appearance of column values using HTML templates. In addition to HTML markup, you can also use number formatting to format the value displayed in a template column. To format values in a column template, you can use Angular pipes and the [format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property. In this example, we are using the date pipe to format the **StartDate** value as a date in the format **'dd/MMM/yyyy'**.

```ts

 <e-column field='StartDate'  headerText='Start Date' textAlign='Left' width=120>
        <ng-template #template let-data>
         {% raw %}
          {{ data.StartDate | date:'dd/MMM/yyyy' }}
        {% endraw %}
        </ng-template>
 </e-column>

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [splitterSettings]="splitterSettings">
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign= 'Left' width= 100></e-column>
                <e-column field='TaskName' headerText= 'Task Name' width= 150></e-column>
                <e-column field= 'StartDate' headerText='Start Date' width= 150 >
                <ng-template #template let-data>
                    {{ data.StartDate | date:'dd/MMM/yyyy' }}
                </ng-template>
                </e-column>
                <e-column field= 'Duration' headerText='Duration' width= 150 ></e-column>
                <e-column field= 'Progress' headerText= 'Progress' width= 150 ></e-column>
            </e-columns></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = GanttData
        this.taskSettings = {
             id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columntemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columntemplate-cs1" %}

> You can use other Angular pipes, such as **currency, decimal, percent,** etc., to format other types of values in the column template based on your requirements.

### Custom formatting

Syncfusion Gantt allows you to customize the formatting of data in the gantt columns. You can apply custom formats to numeric or date columns to display data in a specific way according to the requirements. To apply custom formatting to gantt columns in Syncfusion Gantt, you can use the [format](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property. Here's an example of how you can use custom formatting for numeric and date columns:

In the below example, the **numberFormatOptions** object is used as the `format` property for the **'Progress'** column to apply a custom numeric format with four decimal places. Similarly, the **dateFormatOptions** object is used as the `format` property for the **'StartDate'** column to apply a custom date format displaying the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g. Sun, May 8, '23).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/customformat-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/customformat-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/customformat-cs1" %}

>To learn more about custom formatting, you can refer to [Custom Date formatting](https://ej2.syncfusion.com/angular/documentation/common/internationalization#custom-formats) and [Custom Number formatting](https://ej2.syncfusion.com/angular/documentation/common/internationalization#custom-number-formatting-and-parsing). 

## Align the text of content

You can align the text in the content of a Gantt column using the [textAlign](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#textalign) property. This property allows you to specify the alignment of the text within the cells of a particular column in the Gantt. By default, the text is aligned to the left, but you can change the alignment by setting the value of the `textAlign` property to one of the following options:

*	**Left**: Aligns the text to the left (default).
*	**Center**: Aligns the text to the center.
*	**Right**: Aligns the text to the right.
*	**Justify**: Align the text to the justify.

Here is an example of using the `textAlign` property to align the text of a Gantt column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnalign-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnalign-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnalign-cs1" %}

>* The `textAlign` property changes the alignment for both the column content and header. If you want to align header differently, you can use the [headerTextAlign](https://ej2.syncfusion.com/documentation/api/gantt/column/#headertextalign) property.

## Render boolean value as checkbox

The Gantt component allows you to render boolean values as checkboxes in column. This can be achieved by using the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#displayascheckbox) property, which is available in the [column](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/). This property is useful when you have a boolean column in your Gantt and you want to display the values as checkboxes instead of the default text representation of **true** or **false**.

To enable the rendering of boolean values as checkboxes, you need to set the `displayAsCheckBox` property of the `columns` to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnformat-cs4" %}

>* The `displayAsCheckBox` property is only applicable to boolean values in Gantt columns.
>* When `displayAsCheckBox` is set to **true**, the boolean values will be rendered as checkboxes in the Gantt column, with checked state indicating **true** and unchecked state indicating **false**.

### How to prevent checkbox for particular row

To prevent the checkbox in the particular row of the Gantt, even if the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#displayascheckbox) property is set to true for that column, you can use the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) event and check for index value in the row data. If the row index and required index position matches, you can set the inner HTML of the corresponding cell to an empty string to hide the checkbox.

Here is an example of how you can prevent a checkbox from being displayed in a particular row in a Gantt:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnformat-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnformat-cs6" %}

## AutoFit columns

The Gantt has a feature that allows to automatically adjust column widths based on the maximum content width of each column when you double-click on the resizer symbol located in a specific column header. This feature ensures that all data in the gantt rows is displayed without wrapping. To use this feature, you need to inject the **ResizeService** in the provider section of **AppModule** and enable the resizer symbol in the column header by setting the [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowresizing) property to true in the gantt.

The following screenshot represents the resizing the column using resizer symbol.

![Resizing](../images/resizing.gif)

### Resizing a column to fit its content using method support

The [autoFitColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#autofitcolumns) method of treegrid object in gantt instance resizes the column to fit the widest cell's content without wrapping. You can autofit specific columns at initial rendering by invoking the `autoFitColumns` method in [dataBound](https://ej2.syncfusion.com/angular/documentation/api/gantt/#databound) event.

To use `autoFitColumns` method, you need to inject **ResizeService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnautofit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnautofit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnautofit-cs1" %}

> You can autofit all the columns by invoking the `autoFitColumns` method without specifying column names.

## Locked columns

The Syncfusion Gantt allows you to lock columns, which prevents them from being reordered and moves them to the first position. This functionality can be achieved by setting the [column.lockColumn](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#lockcolumn) property of treegrid object in gantt instance to **true**, which locks the column and moves it to the first position in the gantt.

Here's an example of how you can use the `lockColumn` property to lock a column in the Syncfusion Gantt. Additionally, in the code snippet below, differentiate the locked column using CSS with a custom attributes property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnlock-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnlock-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnlock-cs1" %}

## Show or hide columns

The Syncfusion Gantt control allows you to show or hide columns dynamically by using property or methods available in the gantt. This feature can be useful when you want to customize the visibility of columns in the Gantt based on the requirements.

### Using property

You can show or hide columns in the Angular Gantt using the [visible](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#visible) property of each column. By setting the `visible` property to **true** or **false**, you can control whether the column should be visible or hidden in the gantt. Here's an example of how to show or hide a column in the Angular Gantt using the visible property:

In the below example, the **Duration** column is defined with `visible` property set to **false**, which will hide the column in the rendered gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnhide-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnhide-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnhide-cs1" %}

>* Hiding a column using the `visible` property only affects the UI representation of the gantt. The data for the hidden column will still be available in the underlying data source, and can be accessed or modified programmatically.
>* When a column is hidden, its width is not included in the calculation of the total gantt width.
>* To hide a column permanently, you can set its visible property to false in the column definition, or remove the column definition altogether.

### Using methods

You can also show or hide columns in the Angular Gantt using the [showColumn](https://ej2.syncfusion.com/angular/documentation/api/gantt/#showcolumn) and [hideColumn](https://ej2.syncfusion.com/angular/documentation/api/gantt/#hidecolumn) methods of the gantt component. These methods allow you to show or hide columns based on either the `headerText` or the `field` of the column.

**Based on header text**

You can dynamically show or hide columns in the Gantt based on the header text by invoking the `showColumn` or `hideColumn` methods. These methods take either an array of column header texts or a simple string value for a column header text as the first parameter, and the value `headerText` as the second parameter to specify that you are showing or hiding columns based on the header text.

Here's an example of how to show or hide a column based on the HeaderText in the gantt:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnhide-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnhide-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnhide-cs2" %}

**Based on field**

You can dynamically show or hide columns in the Gantt using external buttons based on the field by invoking the `showColumn` or `hideColumn` methods. These methods take either an array of column header texts or a simple string value for a column header text as the first parameter, and the value `field` as the second parameter to specify that you are showing or hiding columns based on the field.

Here's an example of how to show or hide a column based on the field in the Angular Gantt:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnhide-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnhide-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnhide-cs3" %}

## Controlling Gantt actions

You can control various actions such as filtering, sorting, resizing, reordering, editing, and searching for specific columns in the Syncfusion Angular Gantt using the following properties:

* [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnModel/#allowediting): Enables or disables editing for a column.
* [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnModel/#allowfiltering): Enables or disables filtering for a column.
* [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnModel/#allowsorting): Enables or disables sorting for a column.
* [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnModel/#allowreordering): Enables or disables reordering for a column.
* [allowResizing](https://ej2.syncfusion.com/angular/documentation/api/gantt/columnModel/#allowresizing): Enables or disables resizing for a column

Here is an example code that demonstrates how to control gantt actions for specific columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnactions-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnactions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnactions-cs1" %}

## Customize column styles

Customizing the gantt column styles allows you to modify the appearance of columns in the Gantt component to meet your design requirements. You can customize the font, background color, and other styles of the columns. To customize the columns styles in the gantt, you can use gantt event, css, property or method support.

For more information check on this [documentation](https://ej2.syncfusion.com/angular/documentation/gantt/style-and-appearance).

## Manipulating columns

The Syncfusion Gantt for Angular provides powerful features for manipulating columns. This section explains how to access columns, update column definitions, and add/remove columns using Syncfusion Tree Gantt properties, methods, and events.

### Accessing columns

To access columns in the Syncfusion Gantt component, you can use the following methods of gantt and treegrid object in gantt instance:

* **[getGanttColumns](https://ej2.syncfusion.com/angular/documentation/api/gantt/#getganttcolumns)**:

This method returns the array of columns defined in the gantt.

```ts
let columns = this.gantt.getGanttColumns();
```

* **[getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyfield)**:

This method returns the column object that matches the specified field name.

```ts
let column = this.gantt.treeGrid.getColumnByField('TaskName');;
```

* **[getColumnByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyuid)**:

This method returns the column object that matches the specified UID.

```ts
let column = this.gantt.treeGrid.getColumnByUid();
```

* **[getVisibleColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getvisiblecolumns)**:

This method returns the array of visible columns.

```ts
let visibleColumns = this.gantt.treeGrid.getVisibleColumns();
```

* **[getColumnFieldNames](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnfieldnames)**

This method returns an array of field names of all the columns in the Gantt.

```ts
let fieldNames = this.gantt.treeGrid.getColumnFieldNames()
```

> For a complete list of column properties, refer to this [section](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/)

### Updating column definitions

You can update the column definitions in the Gantt using the [columns](https://helpej2.syncfusion.com/angular/documentation/api/gantt/column/) property. You can modify the properties of the column objects in the columns array to update the columns dynamically. For example, you can change the headerText, width, visible, and other properties of a column to update its appearance and behavior in the gantt and then call the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns) method of treegrid object in gantt instance to apply the changes to the gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnupdate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnupdate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnupdate-cs1" %}

### Adding/removing Columns

The Gantt component allows you to dynamically add or remove columns to and from the gantt using the [columns](https://helpej2.syncfusion.com/angular/documentation/api/gantt/column/) property, which can be accessed through the instance of the Gantt.

To add a new column to the Gantt Columns, you can directly **push** the new column object to the columns property.To remove a column from the Gantt Columns, you can use the **pop** method, which removes the last element from the columns array of the Gantt Columns. Alternatively, you can use the splice method to remove a specific column from the columns array.

Here's an example of how you can add and remove a column from the gantt:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnupdate-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnupdate-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnupdate-cs2" %}

### How to refresh columns

You can use the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns) method of treegrid object in gantt instance to refresh the columns in the gantt. This method can be used when you need to update the gantt columns dynamically based on user actions or data changes.

```ts
this.gantt.treeGrid.refreshColumns();
```

## Responsive columns

The Syncfusion Angular Gantt provides a built-in feature to toggle the visibility of columns based on media queries using the [hideAtMedia](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#hideatmedia) property of the column object. The `hideAtMedia` accepts valid [Media Queries](http://cssmediaqueries.com/what-are-css-media-queries.html). 

In this example, we have a gantt that displays data with two columns: **Task Name and Duration**. We have set the `hideAtMedia` property of the **Task Name** column to (min-width: 700px) which means that this column will be hidden when the browser screen width is less than or equal to 700px.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/responsivecolumn-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/responsivecolumn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/responsivecolumn-cs1" %}