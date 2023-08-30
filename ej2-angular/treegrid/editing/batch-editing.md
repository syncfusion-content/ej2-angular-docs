---
layout: post
title: Batch editing in Angular Treegrid component | Syncfusion
description: Learn here all about Batch editing in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Batch editing 
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in Angular Treegrid component

In Batch edit mode, when you double-click on the tree grid cell, then the target cell changed to edit state. You can bulk save (added, changed and deleted data in the single request) to data source by click on the toolbar's `Update` button or by externally invoking the [`batchSave`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/edit/#batchsave) method. To enable Batch edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) as `Batch`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs3" %}

> * You can get the details of added records, changed records and deleted records by the [`getBatchChanges`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/angular/documentation/api/treegrid/#getbatchchanges) method in tree grid.
> * To update a particular cell in the row, use the [`updateCell`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updateCell) method. In this method, pass the row index of the data source, field name, and new value for a particular cell. This can be done only in the batch editing mode of the tree grid.

## Automatically update the column based on another column edited value in batch mode

Update the column value based on another column edited value in the Batch mode by using the Cell Edit Template feature.

You can get the row detail by passing the target element as argument to [`getRowInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getrowinfo) method in the tree grid.

In the following demo, we have update the **price** column value based on the **units** and **unitPrice** column value while batch editing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs4" %}

## Cancel edit based on condition in batch mode

Prevent the CRUD operations of the Batch edit tree grid by using condition in the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellEdit), [beforeBatchAdd](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeBatchAdd) and [beforeBatchDelete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeBatchDelete) events for Edit, Add, and Delete actions respectively.

In the following demo, the CRUD operation have been prevented based on the **Priority** column value. If the **Priority** Column is **Normal**, that row cannot be edited or deleted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs5" %}

## Confirmation dialog

By default, the tree grid will show the confirm dialog when saving, cancelling, or performing any actions like filtering, sorting, and more.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs6" %}

> * The [editSettings.showConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#showconfirmdialog) requires the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) to be **Batch**
> * If the `editSettings.showConfirmDialog` set to **false**, then the confirmation dialog does not display in the batch editing.

## How to save cell programmatically

To save a cell in tree grid, use the [`saveCell`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#savecell) method in batch edit mode as in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs6" %}

> To edit a cell in the tree grid, use the [`editCell`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#editCell) method. In this method, you need to pass the row index and  field name to locate the cell which needs to be edited.