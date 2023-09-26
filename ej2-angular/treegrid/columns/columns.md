---
layout: post
title: Columns in Angular Treegrid component | Syncfusion
description: Learn here all about Columns in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular Treegrid component

The column definitions are used as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#dataSource) schema in the TreeGrid. This plays a vital role in rendering column values in the required format.
The treegrid operations such as sorting, filtering and searching etc. are performed based on column definitions. The [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) property of the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#column) is necessary to map the data source values in TreeGrid columns.

> 1. If the column [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) is not specified in the dataSource, the column values will be empty.
> 2. If the [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) name contains “dot” operator, it is considered as complex binding.

[`treeColumnIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#treecolumnindex) property denotes the column that is used to expand and collapse child rows.

## Format

To format cell values based on specific culture, use the [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format) property. The TreeGrid uses [`Internalization`](../../common/internationalization/) library to format [`number`](../../common/internationalization/#number-formatting) and [`date`](../../common/internationalization/#manipulating-datetime) values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs14" %}

> By default, the [`number`](../../common/internationalization/#number-formatting) and [`date`](../../common/internationalization/#manipulating-datetime) values are formatted in `en-US` locale.

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example the cell value `0.2` is formatted as `20%`. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`Number formatting`](../../common/internationalization/#number-formatting).

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format) property as string   (Example: `yMd`). Please refer to the link to know more about [`Date formatting`](../../common/internationalization/#manipulating-datetime).

You can also use custom format string to format the date values. Some of the custom formats and the formatted date values are given in the below table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs15/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs15" %}

## Visibility

Hide any particular column in the tree grid before rendering by defining the [visible](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#visible) property as false. In the following sample, the **duration** column is defined as visible false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs16" %}

## Column type

Column type can be specified using the [`columns.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format)  is defined for a column, the column uses [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) to select the appropriate format option ([number](../../common/internationalization/#number-formatting) or [date](../../common/internationalization/#manipulating-datetime)).

TreeGrid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#datasource).

## Checkbox column

To render checkboxes in existing column, you need to set [`columns.showCheckbox`] property as `true`.

It is also possible to select the rows hierarchically using checkboxes in TreeGrid by enabling [`autoCheckHierarchy`] property. When we check on any parent record checkbox then the child record checkboxes will get checked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs17/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs17" %}

> Using [`selectCheckboxes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectcheckboxes) method, we can check the checkboxes by passing the desired row Indexes. When we pass the parent record index in the [`selectCheckboxes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectcheckboxes) method, all children record checkboxes for the corresponding parent record will be selected. So, there is no need to pass the child record index along with the parent record index.
>  1. You can get the checked records detail by the [`getCheckedRecords`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcheckedrecords) method in tree grid.
>  2. You can get the details of the column by the [`getColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumns) method in tree grid.
>  3. You can get the checked row index programmatically by the ['getCheckedRowIndexes'](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcheckedrowindexes) method in tree grid.

## Controlling Tree Grid actions

You can enable or disable treegrid action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowfiltering), and [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowsorting) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs18/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs18" %}

## Show/hide columns by external button

You can show or hide treegrid columns dynamically using external buttons by invoking the [`showColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showcolumns) or [`hideColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidecolumns) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs19" %}

## ValueAccessor

The [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) is used to access/manipulate the value of display data. You can achieve custom value formatting by using the [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs20/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs20" %}

### Display array type columns

You can bind an array of objects in a column by using the [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) property.
In this example, the name field has an array of two objects, FirstName and LastName. These two objects are joined and bound to a column using the [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs21/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs21/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs21" %}

### Expression column

You can achieve the expression column by using the [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs22/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs22/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs22" %}

## How to render boolean values as checkbox

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#displayascheckbox) property as `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs23/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs23/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs23" %}

## Display custom tooltip for columns

Achieve the custom tooltip([EJ2 Tooltip](../../tooltip/getting-started)) for the tree grid by using the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event.

Render the Tooltip component for the tree grid cells by using the following code in the `queryCellInfo` event:

```typescript
tooltip (args: QueryCellInfoEventArgs) {
    let tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString();
    }, args.cell);
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/custom-tooltip-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/custom-tooltip-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/custom-tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/custom-tooltip-cs1" %}

## Align the text of tree grid content and header

For aligning the text of the tree grid content and header part, use the [textAlign](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#textalign) and [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertextalign) properties respectively.

The Tree Grid column supports the following alignments:
* Left
* Right
* Center
* Justify

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/custom-tooltip-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/custom-tooltip-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/custom-tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/custom-tooltip-cs2" %}

## Get column uid by field name using external button

You can get the unique id of the column by field name using [`getUidByColumnField`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getuidbycolumnfield) method in the tree grid by passing field as parameter.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-uid-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/column-uid-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-uid-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-uid-cs1" %}

> You can get the column name by uid in the tree grid by passing the uid as a parameter to the [`getColumnByUid`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyuid) method.
> You can get the column index by field name by passing the field name as a parameter to the [`getColumnIndexByField`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyfield) method in tree grid.
> You can get the column names in the tree grid by the [`getColumnFieldNames`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnfieldnames) method.
> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.