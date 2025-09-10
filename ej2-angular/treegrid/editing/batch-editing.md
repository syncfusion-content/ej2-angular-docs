---
layout: post
title: Batch editing in Angular TreeGrid component | Syncfusion
description: Learn how to use batch editing in the Syncfusion Angular TreeGrid component for editing multiple cells and performing bulk save operations efficiently.
platform: ej2-angular
control: Batch editing 
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in Angular TreeGrid component

Batch editing is a feature in the TreeGrid component that enables editing of multiple cells simultaneously and allows all changes to be saved in a single request to the data source. This feature is useful for updating multiple cells at once, especially with large datasets that require efficient editing workflows.

In batch edit mode, double-clicking a TreeGrid cell puts it in editable state. Bulk updates (add, change, delete) can be saved by either clicking the toolbar's **Update** button or programmatically calling the [endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) method.

To enable batch editing mode, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) property to **Batch**.

Example to enable batch editing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs1" %}

## Automatically update a column based on another column's edited value

You can update the value of a column dynamically based on the edited value of another column in batch mode. This is achieved using the [Cell Edit Template](https://ej2.syncfusion.com/angular/documentation/treegrid/editing/edit-types#custom-editors-using-template) feature. In the example below, the **price** column is updated based on the **units** and **unitPrice** columns, and direct editing of the **price** column is prevented with the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs2" %}

## Cancel edit based on a condition

The TreeGrid supports conditional cancelation of CRUD operations (Edit, Add, Delete) in batch edit mode. Use the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit), [beforeBatchAdd](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeBatchAdd), and [beforeBatchDelete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeBatchDelete) events and set `args.cancel` to **true** to prevent editing, adding, or deleting based on custom logic. In the demo below, CRUD is prevented for rows where the **Priority** column value is **Normal**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs3" %}

## Confirmation dialog

A confirmation dialog appears before actions such as saving or canceling changes. This dialog can be enabled by setting [showConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#showconfirmdialog) in [editSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#editsettings) to **true** (default). 

> * The confirmation dialog requires [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) to be **Batch**.
> * Setting `editSettings.showConfirmDialog` to **false** disables the dialog in batch editing.
> * A separate dialog appears for delete actions.

Example to toggle the confirmation dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs4" %}

## Enable editing by single click and arrow keys

You can enable editing in a single click and navigate between cells or rows using arrow keys without having to double-click or use the mouse for navigation. By default, in batch mode, the **TAB** key can be used to edit or move to the next cell or row and the **Enter** key is used to move to the next row cell. However, you can customize this behavior to enable editing with a single click or using arrow keys.

To enable editing in a single click, you can handle the [created](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#created) event of the tree grid. Within the event handler, bind the click event to the tree grid cells and call the `editCell` method to make the clicked cell editable.

To enable editing using arrow keys, you can handle the [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#load) event of the TreeGrid component. Inside the event handler, you can bind the keydown event to the tree grid element and check for arrow key presses. Based on the arrow key pressed, you can identify the next or previous cell using the `editCell` method and make it editable.

Example for single-click editing and arrow key navigation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs5" %}

## Disable editing for specific cells

To prevent editing for certain cells (for example, cells with the value **Normal**), use the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit) event and set **args.cancel** to **true**.

Example for disabling editing for specific values:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs6" %}

## Immediate save/update in batch mode

You can save changes immediately in batch mode using the [cellSaved](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsaved) event and [endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) method.

> * To skip the confirmation dialog with `endEdit`, set `editSettings.showConfirmDialog` to **false**. This requires `editSettings.mode` to be **Batch**.

Example to save or update changes immediately:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs7" %}

## Save all batch changes programmatically

You can trigger saving of changes using the [endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) method, such as from an external button.

Example for programmatic save:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs8" %}

