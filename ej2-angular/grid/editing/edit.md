---
layout: post
title: Edit in Angular Grid component | Syncfusion
description: Learn here all about Edit in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Edit 
documentation: ug
domainurl: ##DomainURL##
---

# Edit in Angular Grid component

The Grid component offers robust options for dynamically inserting, deleting, and updating records, enabling direct data modification within the grid. These features facilitate seamless CRUD (Create, Read, Update, Delete) operations for efficient data management.

To enable grid editing, configure the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel/#allowediting), [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel/#allowadding), and [allowDeleting](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel/#allowdeleting) properties within the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#editsettings) to **true**.

Editing requires a primary key column to support full CRUD functionality. Define the primary key by setting [columns.isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) to **true** on the relevant column.

Edit actions can be initiated by double-clicking a row or by selecting a row and clicking the **Edit** button in the toolbar. Records can be added by clicking the **Add** button in the toolbar or via an external trigger that invokes the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#addrecord) method. Use **Save** and **Cancel** to commit or discard changes from the toolbar during edit mode. Deletion is performed by selecting the target row and clicking the **Delete** button.

For CRUD operations, inject the [EditService](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/) module in the **@NgModule.providers** section.

To explore available edit modes and types in Angular Grid, refer to the following video:

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

> * If [columns.isIdentity](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isidentity) is enabled, the column will be treated as read-only when editing or adding records.
> * Use `columns.allowEditing` set to **false** to disable editing for specific columns.
> * The **Insert** key adds a new row, and the **Delete** key deletes the selected row in the grid.

## Toolbar with edit options

The toolbar with edit option feature provides a [built-in toolbar](../../toolbar/item-configuration) that includes items for editing actions. Using the toolbar, users can easily modify, update, or cancel grid data edits.

Enable this feature by configuring the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property, specifying the desired items (such as **Edit**, **Add**, **Delete**, **Update**, and **Cancel**) to display in the grid's toolbar.

Example demonstrating toolbar with edit options:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs19" %}

## Disable editing for specific columns

Grid columns can be made read-only to prevent editing. Configure the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowediting) property on the desired column and set it to **false**.

Example disabling editing for a specific column:

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

> * If [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) is enabled, editing is automatically disabled for that column.
> * Rows can be set as non-editable using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event. See example [here](https://ej2.syncfusion.com/angular/documentation/grid/editing/in-line-editing#disable-editing-for-a-particular-row).
> * Cells can be made read-only using the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#celledit) event. See example [here](https://ej2.syncfusion.com/angular/documentation/grid/editing/batch-editing#disable-editing-for-a-particular-cell).

## Editing template columns

Customizing the editing experience for specific columns is possible by defining an editing template. Use the [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) property to connect the column with its corresponding data field.

In this example, the **ShipCountry** column is rendered with a template:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [validationRules]='orderIDRules' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' [validationRules]='customerIDRules'  headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' width=120  [validationRules]='freightRules' format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150>
                        <ng-template #template let-data>
                            <a href="#">{{data.ShipCountry}}</a>
                        </ng-template>
                    </e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightRules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.freightRules =  { min:1, max:1000 };
        this.customerIDRules = { required: true };

    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs23" %}

## Customizing the delete confirmation dialog

Personalize the delete confirmation dialog's appearance and behavior—such as header, showCloseIcon, or height—using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

> * Enable the confirmation dialog for deletions by setting [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#showdeleteconfirmdialog) to **true** in `editSettings`.
> * Refer to the Grid [Default text](../global-local) documentation for localization options.

Example customizing the delete confirmation dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-delete-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-delete-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-delete-cs1" %}

## Single-click update of boolean column values

The grid allows boolean column values to be toggled with a single click in normal editing mode. Use the column template feature to render a CheckBox for direct interaction.

Example: Single-click editing with CheckBox in the **Verified** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-single-click/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-single-click/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-single-click" %}

## Editing enum column values

Enum data is easily managed using the [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edittemplate) with a DropDownList in the Grid's edit form.

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

## Edit complex columns

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

## Editing foreign key columns

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

## Preventing duplicate rows with custom validation

The Syncfusion Angular Grid allows you to enforce constraints to prevent duplicate rows by customizing the validation logic within the Grid setup. This ensures data integrity by restricting duplicate entries in the **OrderID** column.

To prevent adding duplicate rows in the Grid, follow these steps:

1. Implement Custom Validation: Define the `orderIdCustomValidation` function to check whether the entered **OrderID** already exists in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource). This allows editing an existing row without triggering a duplicate error.

2. Add Dynamic Validation Rules: Create the `orderIDRules` object to enforce unique **OrderID** values. Dynamically add this rule to the form during the **save** action.

3. Handle Validation in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event: In the `actionBegin` event, check if the **requestType** is **save**. Apply the validation rule before saving and cancel the action `args.cancel = true` if the validation fails.

For server-side validation to prevent adding duplicate rows, you can refer to the detailed guidance provided in our [knowledge base](https://support.syncfusion.com/kb/article/11608/how-to-do-server-side-validation-for-grid-in-asp-net-mvc-application). If you want to display the Grid's validation tooltip instead of the alert used in our knowledge base, you can call the `grid.editModule.formObj.validate()` method in the `Ajax/Fetch` success function to display the Grid's tooltip validation for the server side.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs55/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs55/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs55" %}

## Performing CRUD actions externally

CRUD operations can be executed programmatically or via an external toolbar or form.

### Using a separate toolbar

Invoke grid record operations programmatically using methods like [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#addrecord), [startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit), [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#deleterecord), [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit), and [closeEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#closeedit).

Example with a separate toolbar for external grid operations:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-toolbar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-toolbar/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-toolbar" %}

### Using an external form

Use an external form to perform edit actions outside of the default in-grid editing experience. The `RowSelected` property can trigger edit mode from a row selection in the custom form.

Example for editing using an external form:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-form/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-form/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-form" %}

## Troubleshooting: Editing works only for the first row

Editing relies on the primary key. If [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) is not set to **true**, edit or delete actions affect only the first row. Always ensure the primary key is defined for unique identification.

## How to make a grid column always editable

To keep a column editable at all times, use a column template and handle input via the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event and [updateRow](https://ej2.syncfusion.com/angular/documentation/api/grid/#updaterow) method for user input management.

Example: Editable **Freight** column textbox template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs24" %}

> * If a template column has an associated `field` property, values from the input will be stored in that field in the data object.

## See also

* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list)
* [Tab Inside the Dialog Editing](../how-to/using-tab-inside-the-dialog-editing)
* [Apply animation for Grid Edit dialog in Angular Grid](https://www.syncfusion.com/forums/154544/apply-animation-for-grid-edit-dialog-in-angular-grid)
* [CRUD operations using ASP.NET core web api methods in Angular Grid](https://www.syncfusion.com/forums/150090/crud-operations-using-asp-net-core-web-api-methods-in-angular-grid)
* [How to restrict ArrowUp increase and ArrowDown decrease value in Grid numeric cell in Angular Grid](https://www.syncfusion.com/forums/150611/how-to-restrict-arrowup-increase-and-arrowdown-decrease-value-in-grid-numeric-cell-in)
* [How to use DropDownList and Combo-Box in Batch-edit mode of Angular Grid](https://www.syncfusion.com/forums/151968/how-to-use-dropdownlist-and-combo-box-in-batch-edit-mode-of-angular-grid)
* [How to use CellEditArgs event in Angular Grid](https://www.syncfusion.com/forums/153617/how-to-use-celleditargs-event-in-angular-grid)
* [How to render Grid with add form always in Angular Grid](https://www.syncfusion.com/forums/161716/how-to-render-grid-with-add-form-always-in-angular-grid)
* [How to show the numeric key pad in mobile device when edit the number column in Angular Grid](https://www.syncfusion.com/forums/147184/how-to-show-the-numeric-keypad-in-mobile-device-when-edit-the-number-column-in-angular-grid)
* [How to enable inline editing in Angular 4 Data Grid/Table](https://support.syncfusion.com/kb/article/11700/how-to-enable-inline-editing-in-angular-4-data-grid-table)
