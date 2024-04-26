---
layout: post
title: Edit in Angular Treegrid component | Syncfusion
description: Learn here all about Edit in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Edit 
documentation: ug
domainurl: ##DomainURL##
---

# Edit in Angular Treegrid component

The TreeGrid component has options to dynamically insert, delete and update records.
Editing feature is enabled by using [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#editsettings) property and it requires a primary key column for CRUD operations.
To define the primary key, set [`columns.isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) to `true` in particular column.

To use CRUD, inject the [`Edit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#editmodule) module in treegrid.

You can check this video to learn about editing modes and editing types in Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=Y1XKjCWiIB4" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs2" %}

> * You can disable editing for a particular column, by specifying [`columns.allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowediting) to `false`.

## Toolbar with edit option

The treegrid toolbar has the built-in items to execute Editing actions.
You can define this by using the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs17" %}

## Adding row position

The TreeGrid control provides the support to add the new row in the top, bottom, above selected row, below selected row and child position of tree grid content using [`editSettings.newRowPosition`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#newrowposition) property. By default, a new row will be added at the top of the treegrid.

The following examples shows how to set new row position as `Child` in tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs18" %}

## Confirmation messages

### Delete confirmation

The delete confirm dialog can be shown when deleting a record by defining the [`showDeleteConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#showdeleteconfirmdialog) as `true`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs19" %}

> The `showDeleteConfirmDialog` supports all type of edit modes.

## Default column values on add new

The treegrid provides an option to set the default value for the columns when adding a new record in it.
To set a default value for the particular column by defining the [`columns.defaultValue`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#defaultvalue).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs20" %}

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowediting).

In the following demo, editing is disabled for the `Start Date` column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs21" %}

## Disable editing for a particular row

Disable the editing for a particular row by using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event of the tree grid based on the **requestType** as **beginEdit**.

In the following demo, the rows which have the value for the **priority** column as "Normal" are prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs22" %}

For batch mode of editing, use the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit) event of the tree grid. In the following demo, the cells which have the value as "Normal" are prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs23" %}

## Editing template column

Edit the template column value by defining the [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) for that particular column.

In the following demo, the **priority** column is rendered with the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs24" %}

## Troubleshoot: Editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row.
If `primaryKey` is not defined in the treegrid, then edit or delete action take places the first row.

You can get the primary key field name by the [`getPrimaryKeyFieldNames`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getprimarykeyfieldnames) method in the tree grid.

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.