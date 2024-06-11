---
layout: post
title: Batch editing in Angular TreeGrid component | Syncfusion
description: Learn here all about Batch editing in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Batch editing 
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in Angular TreeGrid component

Batch editing is a powerful feature in the TreeGrid component that allows you to edit multiple cells simultaneously. It provides a convenient way to make changes to multiple cells and save them in a single request to the data source. This feature is particularly useful when dealing with large datasets or when you need to update multiple cells at once.

In batch edit mode, when you double-click on a tree grid cell, the target cell changes to an editable state. You can perform bulk update of the added, changed, and deleted data by either clicking on the toolbar's **Update** button or by externally invoking the [endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) method of the tree grid.

To enable batch editing mode, you need to set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) property to **Batch**. This property determines the editing mode of the tree grid and allows you to activate the batch editing feature.

Here's an example how to enable batch editing in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs1" %}

## Automatically update the column based on another column edited value

You can automatically update the value of a column based on the edited value of another column in batch mode. This feature is useful when you want to dynamically calculate and update a column's value in real-time based on the changes made in another related column. This can be achieved using the [Cell Edit Template](https://ej2.syncfusion.com/angular/documentation/treegrid/editing/edit-types#custom-editors-using-template) feature in the TreeGrid component.

In the following example, the **price** column value is updated based on changes to the **units** and **unitPrice** columns during batch editing. Also, direct editing for **price** column is prevented using the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs2" %}

## Cancel edit based on condition

The TreeGrid component provides support to cancel the CRUD operations (Edit, Add, Delete) for particular row or cell in batch edit mode based on specific conditions. This feature allows you to control over whether editing should be allowed or prevented for certain rows or cells in the tree grid.

To cancel the edit action, you need to handle the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellEdit) event. This event is triggered when a cell enters the edit mode. Within the event handler, you can add a condition to check whether the edit operation should be allowed or canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the edit operation.

To cancel the add action, you need to handle the [beforeBatchAdd](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeBatchAdd) event. This event is triggered before a new record is added to the batch changes. Within the event handler, you can add a condition to determine whether the add operation should proceed or be canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the add operation.

To cancel the delete action, you need to handle the [beforeBatchDelete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#beforeBatchDelete) event. This event is triggered before a record is deleted from the batch changes. Within the event handler, you can add a condition to control whether the delete operation should take place or be canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the delete operation.

In the following demo, the CRUD operation have been prevented based on the **Priority** column value. If the **Priority** Column is **Normal**, that row cannot be edited or deleted.

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

Displaying a confirmation dialog provides an additional layer of confirmation when performing actions like saving a record or canceling changes in the tree grid. This dialog prompts for confirmation before proceeding with the action, ensuring that accidental or undesired changes are avoided. The TreeGrid component offers a built-in confirmation dialog that can be used to confirm save, cancel, and other actions.

To enable the confirmation dialog, you can set the [showConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#showconfirmdialog) property of the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#editsettings) configuration to **true**. The default value is **true**.

> * `editSettings.showConfirmDialog` requires the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#mode) to be **Batch**
> * If `editSettings.showConfirmDialog` set to **false**, then confirmation dialog does not display in batch editing.
> * While performing delete operations, a separate delete confirmation dialog is shown at the time of clicking the delete button or pressing the delete key itself.

Here's an example that demonstrates how to enable/disable the confirmation dialog using the `showConfirmDialog` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs4" %}

## How to make editing in single click and arrow keys

You can enable editing in a single click and navigate between cells or rows using arrow keys without having to double-click or use the mouse for navigation. By default, in batch mode, the **TAB** key can be used to edit or move to the next cell or row and the **Enter** key is used to move to the next row cell. However, you can customize this behavior to enable editing with a single click or using arrow keys.

To enable editing in a single click, you can handle the [created](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#created) event of the tree grid. Within the event handler, bind the click event to the tree grid cells and call the `editCell` method to make the clicked cell editable.

To enable editing using arrow keys, you can handle the [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#load) event of the TreeGrid component. Inside the event handler, you can bind the keydown event to the tree grid element and check for arrow key presses. Based on the arrow key pressed, you can identify the next or previous cell using the `editCell` method and make it editable.

Here's an example that demonstrates how to achieve both single-click editing and arrow key navigation using the `created` and `load` events in conjunction with the `editCell` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs5" %}

## Disable editing for a particular cell

You can prevent editing of specific cells based on certain conditions in the TreeGrid component. This feature is useful when you want to restrict editing for certain cells, such as read-only data, calculated values, or protected information. It helps maintain data integrity and ensures that only authorized changes can be made in the tree grid.

To disable editing for a particular cell in batch mode, use the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit) event of the tree grid. You can then use the **args.cancel** property and set it to **true**  to prevent editing for that cell.

Here's an example demonstrating how you can disable editing for cells containing the value **Normal** using the `cellEdit` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs6" %}

## Save or update the changes immediately

The TreeGrid component provides a convenient way to save or update changes immediately in batch mode without the need for a separate Save button. This feature is particularly useful when you want to edit data efficiently without having to manually trigger a save action. You can achieve this by utilizing the [cellSaved](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsaved) event and the [endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) method of the tree grid. When the Tree Grid is in an editable state, invoking  `endEdit` allows you to save a record.

By default, when you use the `endEdit` method to save or update data, a confirmation dialog is displayed. This dialog prompts for confirmation before proceeding with the save or cancel action, ensuring that accidental or undesired changes are avoided.

The `cellSaved` event is triggered when a cell is saved in the Tree Grid. It provides a way to perform custom logic when a cell is saved or updated.

> * To avoid the confirmation dialog when using the `endEdit` method, you can set `editSettings.showConfirmDialog` to **false**. However, please note that to use this property, the `editSettings.mode` must be set to **Batch**. This combination of properties allows you to save or update changes immediately without the need for a confirmation dialog.

Here's an example that demonstrates how to achieve immediate saving or updating of changes using the `cellSaved` event and the `endEdit` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs7" %}

## Save a cell and save all the batch changes programmatically

The TreeGrid component offers a method to save or update changes in batch mode programmatically using an external button. This can be achieved by utilizing the [endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) method of the tree grid. When the Tree Grid is in an editable state, invoking  `endEdit` allows you to save a record.

Here's an example demonstrating how to use the `endEdit` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/batch-edit-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/batch-edit-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/batch-edit-cs8" %}
