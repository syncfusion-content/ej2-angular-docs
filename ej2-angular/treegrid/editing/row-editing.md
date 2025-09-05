---
layout: post
title: Row editing in Angular TreeGrid component | Syncfusion
description: Learn how to use row editing in the Syncfusion Angular TreeGrid component, including editing entire rows, performing CRUD actions programmatically, and using confirmation dialogs.
platform: ej2-angular
control: Row editing 
documentation: ug
domainurl: ##DomainURL##
---

# Row editing in Angular TreeGrid component

In Row edit mode, when you begin editing a selected record, the entire row enters edit state. This allows you to modify all cell values in the row and save the changes to the data source. To enable row editing, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) property to `Row`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs25" %}

## Automatically update a column based on another column's edited value

Update a column value based on another column's value while editing by using the Cell Edit Template feature.

In the example below, the **price** column value is updated based on changes in the **units** and **unitPrice** columns during batch editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs26" %}

## Cancel edit based on condition

You can prevent TreeGrid CRUD operations (edit, add, delete) based on a custom condition by handling the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event with the appropriate `requestType` (such as `beginEdit` for editing, `add` for adding, and `delete` for deleting).

In the example below, CRUD operations are prevented when the **priority** column value is `Low`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs27" %}

## Perform CRUD action programmatically

TreeGrid methods enable you to perform CRUD operations programmatically:

- [`addRecord`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#addrecord): Add a new record (optionally specifying data and index/position).
- [`startEdit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#startedit): Change the selected row to edit state.
- [`updateRow`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updaterow): Update a row by index.
- [`setCellValue`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#setcellvalue): Update the value for a cell using primary key, field name, and new value.
- [`setRowData`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#setrowdata): Update an entire row using primary key and data.
- [`deleteRecord`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterecord): Delete a selected row.
- [`closeEdit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#closeedit): Cancel editing programmatically in Row and Dialog modes.
- [`deleteRow`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterow): Delete a row by providing the row element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs28" %}

## Show delete confirmation dialog

A delete confirmation dialog can be shown by setting [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#showdeleteconfirmdialog) in the [editSettings] to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs29" %}

> The `showDeleteConfirmDialog` property is supported in all editing modes.

## Move focus to a particular cell when editing a row

Use the [recordDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#recordDoubleClick) event to focus the specific cell that was double-clicked when editing a row, rather than defaulting to the first cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs30" %}
