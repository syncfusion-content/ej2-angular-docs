---
layout: post
title: Angular Grid - Editing | Syncfusion
description: Angular Grid editing enables features, actions, modes, toolbar configs, column rules, templates, confirmations, and external CRUD workflows.
platform: ej2-angular
control: Edit 
documentation: ug
domainurl: ##DomainURL##
---

# Edit in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component includes built-in editing features for creating, reading, updating, and deleting data directly in the grid. This eliminates the need for separate forms and allows data modification within a single interface. The grid editing provides powerful options through multiple edit modes, customizable triggers, and flexible data handling.

## Set up editing

Before using editing in the grid, understand that the component needs the [EditService](https://ej2.syncfusion.com/angular/documentation/api/grid/edit) module to unlock all editing features. The `EditService` is a service that powers all create, read, update, and delete operations. Without it, editing features cannot work.

Inject the `EditService` to the providers array.

```ts
import { Component, OnInit } from '@angular/core';
import { GridComponent, EditService, ToolbarService, PageService, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    providers: [EditService, ToolbarService, PageService, SortService]
    template: `
    <ejs-grid [dataSource]='data'>
    </ejs-grid>`, 
})
export class AppComponent {
  public data: any[] = [...];
}
```

## Enable editing

To enable editing functionality directly within the grid, configure the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowediting), [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowadding), and [allowDeleting](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettingsModel#allowdeleting) properties within the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#editsettings) to `true`.

| Property | Purpose |
|----------|---------|
| `allowEditing` | Enable editing of existing records |
| `allowAdding` | Enable adding new records |
| `allowDeleting` | Enable deleting records |

Editing requires a primary key column to support full CRUD functionality. Define the primary key by setting [columns.isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) to `true` on the relevant column.

Edit actions can be initiated by double-clicking a row or by selecting a row and clicking the `Edit` button in the toolbar. Records can be added by clicking the `Add` button in the toolbar or via an external trigger that invokes the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/edit#addrecord) method. Use `Save` and `Cancel` to commit or discard changes from the toolbar during edit mode. Deletion is performed by selecting the target row and clicking the `Delete` button.

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

> * If [columns.isIdentity](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isidentity) is enabled, the column will be treated as read-only when editing or adding records.
> * Use `columns.allowEditing` set to `false` to disable editing for specific columns.
> * The `Insert` key adds a new row, and the `Delete` key deletes the selected row in the grid.

## Toolbar with edit options

The toolbar with edit option feature provides a [built-in toolbar](../../toolbar/item-configuration) that includes items for editing actions. Using the toolbar, users can easily modify, update, or cancel grid data edits.

Configure the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property of the Grid component to enable this feature. The toolbar property defines the items displayed in the grid toolbar. Include relevant items like `Edit`, `Add`, `Delete`, `Update`, and `Cancel` within the `toolbar` property to enable edit options in the toolbar.

The following example demonstrates to enable the toolbar with edit option in the grid:

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

The Grid component provides the option to disable editing for specific columns. This is useful when certain columns should remain read-only, such as columns containing calculated values, IDs, or system-generated data.

### Static column disabling

To permanently disable editing for a column, set the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowediting) property to `false` on the column. This prevents editing for that column across all rows:

```html
<e-column field='OrderID' [allowEditing]='false'></e-column>
```

### Dynamic column disabling

To disable editing for a column based on application interaction or conditions, use the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowediting) property of the `columns` object. Set this property to `false` to prevent editing for that specific column. 

The following example demonstrates to disable editing for selected columns dynamically in the Grid.

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

> * If [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) is enabled, editing is automatically disabled for that column.
> * To disable editing for a specific row using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event. See example [here](https://ej2.syncfusion.com/angular/documentation/grid/editing/in-line-editing#disable-editing-for-a-particular-row).
> * To disable editing for a particular cell using the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#celledit) event. See example [here](https://ej2.syncfusion.com/angular/documentation/grid/editing/batch-editing#disable-editing-for-a-particular-cell).

## Editing template columns

Customizing the editing experience for specific columns is possible by defining an editing template. Use the [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column#field) property to connect the column with its corresponding data field.

In this example, the "Ship Country" column is rendered with a template:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { FormsModule } from '@angular/forms';
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule, MultiSelectModule, AutoCompleteModule };
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

By default, the Grid shows a confirmation dialog when attempting to delete a row. The appearance and content of this dialog can be customized to match application requirements. Customization can include changing the dialog header, icons, or button text.

To customize the delete confirmation dialog, utilize the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event. This event is triggered when a toolbar action is performed and allows modification of dialog properties.

> * Enable the confirmation dialog for deletions by setting [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#showdeleteconfirmdialog) to `true` in `editSettings`.
> * Refer to the grid [Default text](../global-local) documentation for localization options.

The following example demonstrates to customize the delete confirmation dialog using the `toolbarClick` event.

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

The grid allows boolean column values to be toggled with a single click in normal editing mode. Use the column template feature to render a CheckBox for direct interaction.

The following example demonstrates to render a `CheckBox` component as a template in the "Verified" column to enable single-click editing:

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

Enum columns contain predefined list values (enumerated data). Instead of allowing free-form text input, using a dropdown editor ensures data consistency and prevents invalid entries. The [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) property enables custom editors for enum data.

The following example demonstrates to render a `DropDownList` component as an edit template for the "Employee Feedback" column, binding it to a predefined list of enum values:

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

Complex columns contain nested data objects (such as "Name.FirstName"). When editing complex data with custom input elements, the binding syntax differs from simple columns. Use the underscore operator (`___`) instead of the dot operator (`.`) to correctly bind nested properties in edit templates.

The following example demonstrates to edit complex nested data. The "FirstName" and "LastName" properties (nested under "Name") are edited using input elements with names defined as "Name___FirstName" and "Name___LastName":

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

The Syncfusion Grid offers a powerful editing feature for foreign key columns, enhancing the default rendering of the `DropDownList` component during editing. This flexibility is particularly useful for customizing the editor for foreign key columns. By default, the Syncfusion Grid renders the `DropDownList` component as the editor for foreign key columns during editing. However, this behavior can be enhanced and customized by leveraging the [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) property for the column using `ng-template`. The `editTemplate` property allows specification of a cell edit template that serves as an editor for a particular column, accepting either a template string or an HTML element ID.

In the following code example, the "Employee Name" is a foreign key column. When editing, the `ComboBox` component is rendered instead of `DropDownList`.

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

The Syncfusion Angular Grid enables enforcement of constraints to prevent duplicate rows by customizing the validation logic within the grid setup. This ensures data integrity by restricting duplicate entries in the "Order ID" column.

To prevent adding duplicate rows in the grid, follow these steps:

1. Implement Custom Validation: Define the "orderIdCustomValidation" function to check whether the entered "Order ID" already exists in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource). This allows editing an existing row without triggering a duplicate error.

2. Add Dynamic Validation Rules: Create the "orderIDRules" object to enforce unique "Order ID" values. Dynamically add this rule to the form during the `save` action.

3. Handle Validation in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event: In the `actionBegin` event, check if the `requestType` is `save`. Apply the validation rule before saving and cancel the action `args.cancel = true` if the validation fails.

For server-side validation to prevent adding duplicate rows, refer to the detailed guidance provided in our [knowledge base](https://support.syncfusion.com/kb/article/11608/how-to-do-server-side-validation-for-grid-in-asp-net-mvc-application). To display the Grid's validation tooltip instead of the alert used in the knowledge base, call the `grid.editModule.formObj.validate()` method in the `Ajax/Fetch` success function to show the Grid's tooltip validation for the server side.

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

By default, the grid provides built-in editing through toolbars and inline editing. However, CRUD operations can also be triggered programmatically from external controls (custom buttons, forms, or panels outside the grid). This allows full control over when and how data operations occur.

### Using a separate toolbar

To perform CRUD operations externally, use the following methods:

| Method | Purpose |
|--------|---------|
| [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid#addrecord) | Add a new record (shows edit form if no data provided) |
| [startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#startedit) | Begin editing the selected row |
| [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid#deleterecord) | Delete the selected row |
| [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#endedit) | Save changes when grid is in edit state |
| [closeEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#closeedit) | Cancel editing without saving |

The following example demonstrates external CRUD operations with a custom toolbar.

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

Instead of editing data in the grid itself, custom forms can be used to edit selected rows. When a row is selected in the grid, the corresponding data is populated in an external form. Changes made in the external form update the grid data.

The [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#rowselected) event can be used to capture row selection and populate external form fields with the selected row's data. The following example demonstrates editing using an external form.

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

If editing or deleting only works for the first row in the grid, the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) property is likely not configured. The primary key is essential for identifying which row to edit or delete. Without it, the grid cannot distinguish between rows.

**Solution**: Set [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) to `true` on the column that contains unique identifiers:

```html
<e-column field='OrderID' headerText='Order ID' width='100' isPrimaryKey='true'></e-column>
```

## Make a grid column always editable

To keep a column editable at all times, use a column template and handle input via the [created](https://ej2.syncfusion.com/angular/documentation/api/grid#created) event and [updateRow](https://ej2.syncfusion.com/angular/documentation/api/grid#updaterow) method for user input management.

Example: Editable "Freight" column textbox template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-cs24" %}

> If a template column has an associated `field` property, values from the input will be stored in that field in the data object.

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
