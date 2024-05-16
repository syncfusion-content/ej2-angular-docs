---
layout: post
title: Edit in Angular Grid component | Syncfusion
description: Learn here all about Edit in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Edit 
documentation: ug
domainurl: ##DomainURL##
---
   
# Edit in angular grid component

The Grid component provides powerful options for dynamically inserting, deleting, and updating records, enabling you to modify data directly within the grid. This feature is useful when you want to enable you to perform CRUD (Create, Read, Update, Delete) operations seamlessly.

To enable editing functionality directly within the grid, you need to configure the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel/#allowediting), [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel/#allowadding), and [allowDeleting](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel/#allowdeleting) properties within the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#editsettings)  to **true**.

Editing feature requires a primary key column for CRUD operations. To define the primary key, set [columns.isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) to **true** in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on **Edit** button in the toolbar. Similarly, you can add a new record to grid either by clicking on **Add** button in the toolbar or on an external button which is bound to invoke the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#addrecord) method of the grid, **Save** and **Cancel** while in edit mode is possible using respective toolbar icon in grid. Deletion of the record is possible by selecting the required row and click on **Delete** button in the toolbar.

To use CRUD, inject the [EditService](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/) module into the **@NgModule.providers** section.

To learn about what are all the edit modes and edit types are available in Angular Grid, you can check on this video

{% youtube "https://www.youtube.com/watch?v=RefC_z4Nnmg" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs18" %}

> * If [columns.isIdentity](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isidentity) is enabled, then it will be considered as a read-only column when editing and adding a record.
> * You can disable editing for a particular column, by specifying `columns.allowEditing` to **false**.
>* You can use the **Insert** key to add a new row to the grid and use the **Delete** key to delete the selected row from the grid.

## Toolbar with edit option

The toolbar with edit option feature in the Grid component provides a [built-in toolbar](../../toolbar/item-configuration) that includes various items for executing editing actions. This feature allows you to easily perform edit operations on the grid data, such as modifying cell values, updating changes, and canceling edits. 

To enable this feature, you need to configure the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property of the Grid component. This property allows you to define the items that will be displayed in the grid toolbar. By including the relevant items like **Edit**, **Add**, **Delete**, **Update**, and **Cancel** within the `toolbar` property, you can enable the edit options in the toolbar.

Here's an example of how to enable the toolbar with edit option in the Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs19" %}

## Disable editing for particular column

In Grid component, you have an option to disable editing for a specific column. This feature is useful when you want to prevent editing certain columns, such as columns that contain calculated values or read-only data.

To disable editing for a particular column, you can use the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowediting)  property of the **columns** object. By setting this property to **false**, you can prevent editing for that specific column.

Here's an example that demonstrates how to disable editing for the column in the Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/grid/edit-cs20/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs20" %}

>* If you have set the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) property to **true** for a column, editing will be automatically disabled for that column.
> * You can disble the particular row using [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event.please refer this [link](https://ej2.syncfusion.com/angular/documentation/grid/editing/in-line-editing#disable-editing-for-a-particular-row).
>* You can disble the particular cell using [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#celledit) event.please refer this [link](https://ej2.syncfusion.com/angular/documentation/grid/editing/batch-editing#disable-editing-for-a-particular-cell).

## Editing template column

The editing template column feature in the Grid allows you to create custom editing templates for specific columns in the grid. This feature is particularly useful when you need to customize the editing experience for certain columns, such as using custom input controls or displaying additional information during editing.

To enable the editing template column feature, you need to define the [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) property for the specific column in the grid's configuration. The `field` property maps the column to the corresponding field name in the data source, allowing you to edit the value of that field.

In the below demo, the **ShipCountry** column is rendered with the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs23" %}

## Customize delete confirmation dialog

Customizing the delete confirmation dialog in Grid allows you to personalize the appearance, content, and behavior of the dialog that appears when you attempts to delete an item. You can modify properties like header, showCloseIcon, and height to tailor the edit dialog to your specific requirements. Additionally, you can override default localization strings to provide custom text for buttons or other elements within the dialog.

To customize the delete confirmation dialog, you can utilize the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event. This event is triggered when a toolbar item, such as the delete button, is clicked.

>* To enable the confirmation dialog for the delete operation in the Grid, you can set the [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#showdeleteconfirmdialog) property of the `editSettings` configuration to **true**.
>* You can refer the Grid [Default text](../global-local) list for more localization.

The following example that demonstrates how to customize the delete confirmation dialog using the `toolbarClick` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-delete-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-delete-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-delete-cs1" %}

## Update boolean column value with a single click   

The Syncfusion Grid allows you to update a boolean column value with a single click in the normal mode of editing. This feature streamlines the process of toggling boolean values within the grid, enhancing interaction and efficiency. This can be achieved through the use of the column template feature.

In the following sample, the `CheckBox` component is rendered as a template in the **Verified** column to make it editable with a single click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-single-click/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-single-click/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-single-click" %}

## Edit enum column 

The Syncfusion Grid provides a feature that allows you to edit enum type data in a grid column. This is particularly useful when you need to edit enumerated list data efficiently.

In the following example, the `DropDownList` component is rendered within the [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edittemplate) for the Employee Feedback column using **ngTemplate**. The enumerated list data can be bound to the Employee Feedback column using the two-way binding (@bind-Value).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-enum/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-enum/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-enum" %}

## Edit complex column 

The edit template for complex column in Grid is used to customize the editing experience when dealing with complex data structures. This capability is particularly useful for handling nested data objects within grid columns. By default, the grid binds complex data to column fields using the dot (.) operator. However, when you render custom elements, such as input fields, in the edit template for a complex column, you must use the (___) underscore operator instead of the dot (.) operator to bind the complex object.

In the following sample, the input element is rendered in the edit template of the FirstName and LastName column. The edited changes can be saved using the `name` property of the input element. Since the complex data is bound to the FirstName  and LastName column, The `name` property should be defined as **Name___FirstName** and **Name___LastName**, respectively, instead of using the dot notation (**Name.FirstName** and **Name.LastName**).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-complex/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-complex/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-complex" %}

## Edit foreign key column 

The Syncfusion Grid offers a powerful editing feature for foreign key columns, enhancing the default rendering of the DropDownList component during editing. This flexibility is particularly useful when you need to customize the editor for foreign key columns. By default, the Syncfusion Grid renders the DropDownList component as the editor for foreign key columns during editing. However, you can enhance and customize this behavior by leveraging the [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edittemplate) property for the column using **ng-template**. The `editTemplate` property allows you to specify a cell edit template that serves as an editor for a particular column, accepting either a template string or an HTML element ID.

In the following code example, the Employee Name is a foreign key column. When editing, the ComboBox component is rendered instead of DropDownList.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-tempalte/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-tempalte/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-tempalte" %}

## How to perform CRUD action externally 

Performing CRUD (Create, Read, Update, Delete) actions externally in the Syncfusion Grid allows you to manipulate grid data outside the grid itself. This can be useful in scenarios where you want to manage data operations programmatically.

### Using separate toolbar 

The Syncfusion Grid enables external CRUD operations, allowing you to efficiently manage data manipulation within the grid. This capability is particularly useful when you need to manage data operations using a separate toolbar.

To perform CRUD operations externally, the following methods are available:

[addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#addrecord) - To add a new record. If no data is passed then add form will be shown.
[startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit) - To edit the selected row.
[deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#deleterecord) - To delete a selected row.
[endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit) - If the grid is in editable state, then you can save a record by invoking this method.
[closeEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#closeedit) - To cancel the edited state.

The following example demonstrates the integration of the Syncfusion Grid with a separate toolbar for external CRUD operations. The toolbar contains buttons for Add, Edit, Delete, Update, and Cancel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-toolbar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-toolbar/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-toolbar" %}

### Using external form 

Performing the edit operation in a custom external form in the Syncfusion Grid is a valuable feature when you need to customize the edit operation within a separate form rather than the default in-grid editing. 

To enable the use of an external form for editing in Syncfusion Grid, you can make use of the `RowSelected` property. This property specifies whether the edit operation should be triggered when a row is selected.

In the following example, it demonstrates how to edit the form using an external form by utilizing the `RowSelected` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-form/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-form/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-form" %}

## Troubleshoot editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row. If [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) property is not defined in the grid, then edit or delete action take places the first row. To overcome this, ensure that you establish the `isPrimaryKey` property as **true** for the relevant column responsible for holding the unique identifier for each row.

## How to make a grid column always editable

To make a Grid column always editable, you can utilize the column template feature of the Grid. This feature is useful when you want to edit a particular column's values directly within the grid.

In the following example, the textbox is rendered in the **Freight** column using a column template. The keyup event for the Grid is bound using the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](https://ej2.syncfusion.com/angular/documentation/api/grid/#updaterow) method of the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs24" %}

> * If a template column has a corresponding `field` property defined, the value entered in the template column's input field will be stored in the associated edit column of the row's data object.

## See also

* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list)
* [Tab Inside the Dialog Editing](../how-to/using-tab-inside-the-dialog-editing)
* [Apply animation for Grid Edit dialog in Angular Grid](https://www.syncfusion.com/forums/154544/apply-animation-for-grid-edit-dialog-in-angular-grid)
* [CRUD operations using asp.net core web api methods in Angular Grid](https://www.syncfusion.com/forums/150090/crud-operations-using-asp-net-core-web-api-methods-in-angular-grid)
* [How to restrict ArrowUp increase and ArrowDown decrease value in Grid numeric cell in Angular Grid](https://www.syncfusion.com/forums/150611/how-to-restrict-arrowup-increase-and-arrowdown-decrease-value-in-grid-numeric-cell-in)
* [How to use DropDownList and Combo-Box in Batch-edit mode of Angular Grid](https://www.syncfusion.com/forums/151968/how-to-use-dropdownlist-and-combo-box-in-batch-edit-mode-of-angular-grid)
* [How to use CellEditArgs event in Angular Grid](https://www.syncfusion.com/forums/153617/how-to-use-celleditargs-event-in-angular-grid)
* [How to render Grid with add form always in Angular Grid](https://www.syncfusion.com/forums/161716/how-to-render-grid-with-add-form-always-in-angular-grid)
* [How to show the numeric key pad in mobile device when edit the number column in Angular Grid](https://www.syncfusion.com/forums/147184/how-to-show-the-numeric-keypad-in-mobile-device-when-edit-the-number-column-in-angular-grid)
* [How to enable inline editing in Angular 4 Data Grid/Table](https://support.syncfusion.com/kb/article/11700/how-to-enable-inline-editing-in-angular-4-data-grid-table)