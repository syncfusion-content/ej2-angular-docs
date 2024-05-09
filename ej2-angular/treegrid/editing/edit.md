---
layout: post
title: Edit in Angular TreeGrid component | Syncfusion
description: Learn here all about Edit in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Edit 
documentation: ug
domainurl: ##DomainURL##
---

# Edit in Angular TreeGrid component

The TreeGrid component provides powerful options for dynamically inserting, deleting, and updating records, enabling you to modify data directly within the tree grid. This feature is useful when you want to enable you to perform CRUD (Create, Read, Update, Delete) operations seamlessly.

To enable editing functionality directly within the tree grid, you need to configure the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#allowediting), [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#allowadding), and [allowDeleting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#allowdeleting) properties within the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid#editsettings)  to **true**.

Editing feature requires a primary key column for CRUD operations. To define the primary key, set [columns.isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) to **true** in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on **Edit** button in the toolbar. Similarly, you can add a new record to tree grid either by clicking on **Add** button in the toolbar or on an external button which is bound to invoke the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/edit/#addrecord) method of the tree grid. **Save** and **Cancel** actions while in edit mode is possible using respective toolbar icon in tree grid. Deletion of the record is possible by selecting the required row and click on **Delete** button in the toolbar.

To use CRUD, inject the [EditService](https://ej2.syncfusion.com/angular/documentation/api/treegrid/edit/) module into the **@NgModule.providers** section.

To learn about what are all the edit modes and edit types are available in Angular TreeGrid, you can check on this video

{% youtube "https://www.youtube.com/watch?v=Y1XKjCWiIB4" %}

<div style='height:15px'></div>
Here’s an example of how to enable editing in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs2" %}

> * If [columns.isIdentity](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isidentity) is enabled, then it will be considered as a read-only column when adding a record.
> * You can disable editing for a particular column, by specifying `columns.allowEditing` to **false**.
>* You can use the **Insert** key to add a new row to the tree grid and use the **Delete** key to delete the selected row from the tree grid.

## Toolbar with edit option

The toolbar with edit option feature in the TreeGrid component provides a [built-in toolbar](https://ej2.syncfusion.com/angular/documentation/treegrid/tool-bar/tool-bar-items) that includes various items for executing editing actions. This feature allows you to easily perform edit operations on the tree grid data, such as modifying cell values, updating changes, and canceling edits. 

To enable this feature, you need to configure the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property of the TreeGrid component. This property allows you to define the items that will be displayed in the tree grid toolbar. By including the relevant items like **Edit**, **Add**, **Delete**, **Update**, and **Cancel** within the `toolbar` property, you can enable the edit options in the toolbar.

Here's an example of how to enable the toolbar with edit option in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs3" %}

## Disable editing for particular column

In TreeGrid component, you have an option to disable editing for a specific column. This feature is useful when you want to prevent editing certain columns, such as columns that contain calculated values or read-only data.

To disable editing for a particular column, you can use the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowediting) property of the **columns** object. By setting this property to **false**, you can prevent editing for that specific column.

Here's an example that demonstrates how to disable editing for the column in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs4" %}

>* If you have set the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property to **true** for a column, editing will be automatically disabled for that column.
>* You can disable the particular cell using [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#celledit) event. Please refer this [link](https://ej2.syncfusion.com/angular/documentation/treegrid/editing/batch-editing#cancel-edit-based-on-condition-in-batch-mode).

## Disable editing for particular row

In the TreeGrid component, you can prevent editing of specific rows based on certain conditions. This feature is useful when you want to restrict editing for certain rows, such as read-only data, calculated values, or protected information. It helps maintain data integrity and ensures that only authorized changes can be made in the tree grid.

To disable editing for a particular row, use the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event of the tree grid based on **requestType** as **beginEdit**. You can then set the **args.cancel** property to **true** to prevent editing for that row.

In the below demo, the rows which are having the value for **Task Name** column as **Testing** or **planning** is prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs13/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs13" %}

## Editing template column

The editing template column feature in the Tree Grid allows you to create custom editing templates for specific columns in the tree grid. This feature is particularly useful when you need to customize the editing experience for certain columns, such as using custom input controls or displaying additional information during editing.

To enable the editing template column feature, you need to define the [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) property for the specific column in the tree grid's configuration. The `field` property maps the column to the corresponding field name in the data source, allowing you to edit the value of that field.

In the below demo, the **priority** column is rendered with the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    template: `     <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' [toolbar]='toolbar' [editSettings]='editSettings' (actionBegin)="actionBegin($event)" childMapping='subtasks' >
                        <e-columns>
                            <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                            <e-column field='priority' headerText='Priority' width=90>
                                <ng-template #template let-data>
                                    <a href="#">{{data.priority}}</a>
                                </ng-template>
                                <ng-template #editTemplate let-data>
                                    <ejs-dropdownlist [dataSource]='selectDatasource' [(ngModel)]='taskData.priority' [fields]="fields" popupHeight="150px"></ejs-dropdownlist>
                                </ng-template>
                            </e-column>
                            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        </e-columns>
                    </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public selectDatasource = [
        { text: 'High', value: 'High' },
        { text: 'Low', value: 'Low' },
        { text: 'Critical', value: 'Critical' },
        { text: 'Normal', value: 'Normal' },
    ];
    public taskData?: object | any;
    public fields = { value: 'value', text: 'text' };
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    actionBegin(args: any) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.taskData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as any)['priority'] = this.taskData['priority'];
        }
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs5/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs5" %}

## Customize delete confirmation dialog

Customizing the delete confirmation dialog in Tree Grid allows you to personalize the appearance, content, and behavior of the dialog that appears when you attempt to delete an item. You can modify properties like header, showCloseIcon, and height to tailor the edit dialog to your specific requirements. Additionally, you can override default localization strings to provide custom text for buttons or other elements within the dialog.

To customize the delete confirmation dialog, you can utilize the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event. This event is triggered when a toolbar item, such as the delete button, is clicked.

>* To enable the confirmation dialog for the delete operation in the tree grid, you can set the [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#showdeleteconfirmdialog) property of the `editSettings` configuration to **true**.
>* You can refer the tree grid [Default text](../global-local) list for more localization.

The following example that demonstrates how to customize the delete confirmation dialog using the `toolbarClick` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs6/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs6" %}

## Update boolean column value with a single click   

The Tree Grid allows you to update a boolean column value with a single click in the normal mode of editing. This feature streamlines the process of toggling boolean values within the tree grid, enhancing interaction and efficiency. This can be achieved through the use of the column template feature.

In the following sample, the `CheckBox` component is rendered as a template in the **approved** column to make it editable with a single click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs7/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs7" %}

## Edit enum column 

The Tree Grid provides a feature that allows you to edit enum type data in a tree grid column. This is particularly useful when you need to edit enumerated list data efficiently.

In the following example, the `DropDownList` component is rendered within the [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the Project Feedback column using **ngTemplate**. The enumerated list data can be bound to the Project Feedback column using the two-way binding (@bind-Value).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs8/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs8" %}

## Edit complex column 

The edit template for complex column in the Tree Grid is used to customize the editing experience when dealing with complex data structures. This capability is particularly useful for handling nested data objects within tree grid columns. By default, the tree grid binds complex data to column fields using the dot (.) operator. However, when you render custom elements, such as input fields, in the edit template for a complex column, you must use the (___) underscore operator instead of the dot (.) operator to bind the complex object.

In the following sample, the input element is rendered in the edit template of the firstName and lastName column. The edited changes can be saved using the `assignee` property of the input element. Since the complex data is bound to the firstName  and lastName column, The `assignee` property should be defined as **assignee___firstName and assignee___lastName**, respectively, instead of using the dot notation (**assignee.firstName** and **assignee.lastName**).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs9/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs9" %}

## How to perform CRUD action externally 

Performing CRUD (Create, Read, Update, Delete) actions externally in the Tree Grid allows you to manipulate tree grid data outside the tree grid itself. This can be useful in scenarios where you want to manage data operations programmatically.

### Using separate toolbar 

The Tree Grid enables external CRUD operations, allowing you to efficiently manage data manipulation within the tree grid. This capability is particularly useful when you need to manage data operations using a separate toolbar.

To perform CRUD operations externally, the following methods are available:

[addRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#addrecord) - To add a new record. If no data is passed then add form will be shown.
[startEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#startedit) - To edit the selected row.
[deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterecord) - To delete a selected row.
[endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) - If the tree grid is in editable state, then you can save a record by invoking this method.
[closeEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#closeedit) - To cancel the edited state.

The following example demonstrates the integration of the tree grid with a separate toolbar for external CRUD operations. The toolbar contains buttons for Add, Edit, Delete, Update, and Cancel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs10/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs10" %}

### Using external form 

Performing the edit operation in a custom external form in the Tree Grid is a valuable feature when you need to customize the edit operation within a separate form rather than the default in tree grid editing. 

To enable the use of an external form for editing in tree grid, you can make use of the `RowSelected` property. This property specifies whether the edit operation should be triggered when a row is selected.

In the following example, it demonstrates how to edit the form using an external form by utilizing the `RowSelected` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs11/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs11" %}

## Troubleshoot editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row. If [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isprimarykey) property is not defined in the tree grid, then edit or delete action take places the first row. To overcome this, ensure that you establish the `isPrimaryKey` property as **true** for the relevant column responsible for holding the unique identifier for each row.

## How to make a tree grid column always editable

To make a tree grid column always editable, you can utilize the column template feature of the tree grid. This feature is useful when you want to edit a particular column's values directly within the tree grid.

In the following example, the textbox is rendered in the **Duration** column using a column template. The keyup event for the tree grid is bound using the [created](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#created) event of the tree grid, and the edited changes are saved in the data source using the [updateRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updaterow) method of the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowSelectEventArgs, parentsUntil } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    template: ` <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' (created)="created()" [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80>
                            <ng-template #template let-data>
                                <input id='{{data.taskID}}' value='{{data.duration}}' class='custemp' type='text' style='width: 100%'>
                            </ng-template>
                        </e-column>
                        <e-column field='priority' headerText='Priority'  editType= 'dropdownedit'  width=90></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    
    public data?: Object[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public editSettings: Object = { allowEditing: true,mode:"Row"};
    ngOnInit(): void {
        this.data = sampleData;
    }
    created() {
        (this.treegrid as TreeGridComponent).element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
            if ((e.target as HTMLElement).classList.contains('custemp')) { // Based on this condition, you can find whether the target is an input element or not.
                var row = parentsUntil(e.target as HTMLElement, 'e-row');
                var rowIndex = (row as HTMLFormElement)['rowIndex']; // Get the row index.
                var uid = row.getAttribute('data-uid');
                var treegrid = (document.getElementsByClassName('e-treegrid')[0] as HTMLFormElement)['ej2_instances'][0];
                var rowData = treegrid.getRowObjectFromUID(uid).data; // Get the row data.
                rowData.Freight = ((e.target as HTMLFormElement)['value']); // Update the new value for the corresponding column.
                treegrid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
            }
        });
    }
     
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs12/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs12" %}

> * If a template column has a corresponding `field` property defined, the value entered in the template column's input field will be stored in the associated edit column of the row's data object.

## See also

* [Cascading DropDownList with Tree Grid Editing](https://ej2.syncfusion.com/angular/documentation/treegrid/how-to/cascading-drop-down-list-with-treegrid-editing)
