---
layout: post
title: New row position types in Angular TreeGrid component | Syncfusion
description: Learn here all about New row position types in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: New row position types 
documentation: ug
domainurl: ##DomainURL##
---

# Adding new record in Angular TreeGrid component

The TreeGrid component allows you to add new records using the built-in toolbar with the **Add** button or programmatically using the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#addrecord) method. Also, to utilize this method, the [allowadding](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#allowadding) porperty must be enabled. This guide outlines how to add new records at different positions within the Tree Grid.

## New row position types

The TreeGrid component offers the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#newrowposition) property to specify where to add new rows. This property allows you to add new rows at different positions within the Tree Grid hierarchy.

Ensure that the [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#allowadding) property of the Tree Grid is set to true to allow adding new records. 

The TreeGrid component provides the following row positions when adding a new row:

 * **Top**: Adds the new row at the top of the tree grid. This is the default position.
 * **Bottom**: Adds the new row at the bottom of the tree grid.
 * **Above**: Inserts the new row above the selected row.
 * **Below**: Inserts the new row below the selected row.
 * **Child**: Inserts the new row as a child of the selected row.

 These row positions provide flexibility in managing the placement of new rows within the TreeGrid, allowing for efficient organization and structuring of data.

## Give unique value to primary key column automatically

In the TreeGrid component, you can automatically assign unique values to the primary key column using the [actionBegin]() event. During this event, you can set a unique value to the primary key column when the **args.requestType** as **add**.

The following example demonstrates how to set a unique value to the primary key column using the `actionBegin` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-position-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/row-position-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-position-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-position-cs4" %}

## Change new row position dynamically

You have the flexibility to dynamically change the row position for new rows in the TreeGrid component using the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#newrowposition) property of [editSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings) object.

In the following demonstration, row positions are changed by utilizing the `newRowPosition` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-position-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/row-position-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-position-cs1" %}

## Add new row at different positions using context menu

The TreeGrid component provides options to display a context menu when a row is right-clicked. This feature allows to add a new row at different positions within the Tree Grid hierarchy using the **Add Row** items in the context menu.

To use the context menu, inject the **ContextMenuService** module in the treegrid.

Refer to the documentation on [different context menu items](https://ej2.syncfusion.com/angular/documentation/treegrid/context-menu) for more information.

In the following demonstration, row positions are changed by utilizing the context menu feature.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-position-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/row-position-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-position-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-position-cs2" %}

## Add a record programmatically at particular index

To add a new record at a specific index within the Tree Grid, you can utilize the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid#addrecord) method. This method allows you to insert a new record at a particular row index and position. 

Parameters:

* **data**: The data object representing the new record.
* **index**: The row index at which the new record should be inserted. If not provided, the record will be added at the top as the first row index.
* **Position**: The position, such as Below, Above, or as a Child to the selected row, where the new record is to be added.

Ensure that the [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#allowadding) property of the Tree Grid is set to true to allow adding new records. 

In the following demonstration, use the `addRecord` method to add a new row at a specific index.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-position-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/row-position-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-position-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-position-cs3" %}
