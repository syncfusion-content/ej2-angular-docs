---
layout: post
title: Angular Grid - Edit Types | Syncfusion
description: Angular Grid edit types supports various editor options, configuration for each type, and examples that help select appropriate editors for column data.
platform: ej2-angular
control: Edit types 
documentation: ug
domainurl: ##DomainURL##
---

# Edit Types in Angular Grid Component

The Angular Grid component in Syncfusion supports a range of edit types, enabling customization of data entry and editing behaviors for column types. These edit types enhance the user editing experience and provide flexibility when managing various data types in the Grid.

## Default cell edit type editors

The Syncfusion Grid provides in-built editors to facilitate efficient data entry according to column data types. Default editors are assigned based on the column data type, and are configured with the [editType](https://ej2.syncfusion.com/angular/documentation/api/grid/editType) property.

The available default edit types are as follows:

Component | Edit Type value | Description
----|-----|-----
[TextBox](../../textbox/getting-started) |`stringedit`|  Renders a `TextBox` component for string data type columns. 
[NumericTextBox](../../numerictextbox/getting-started) |`numericedit`| Renders a `NumericTextBox` component for integers, double, float, short, byte, long, long double, and decimal data types.
[DropDownList](../../drop-down-list/getting-started) |`dropdownedit`| Renders a `DropDownList` component for string data type columns with predefined options.
[Checkbox](../../check-box/getting-started) |`booleanedit`| Renders a `CheckBox` component for boolean data type columns.
[DatePicker](../../datepicker/getting-started) |`datepickeredit`| Renders a `DatePicker` component for date data type columns.
[DateTimePicker](../../datetimepicker/getting-started) |`datetimepickeredit`| Renders a `DateTimePicker` component for date-time data type columns.

The following example demonstrates to define the `editType` for grid columns:

```html
    <e-column field="CustomerName" headerText="Customer Name" editType="stringedit"></e-column>
    <e-column field="Frieght" headerText="Frieght" editType="numericedit'"></e-column>
    <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit"></e-column>
    <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit"></e-column>
    <e-column field="OrderTime" headerText="Order Time" editType="datetimepickeredit"></e-column>
    <e-column field="Verified" headerText="Verified" editType="booleanedit"></e-column>
```

> If edit type is not defined in the column, then it will be considered as the `stringedit` type (TextBox component).

## Customizing the TextBox component for stringedit type 

The `TextBox` component for string columns can be customized using its API. Configure properties through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit) property to tailor behavior or appearance in the grid's edit form.

Component|Edit Type |Description|Example Customized edit params
-----|---|-----|-----|
[TextBox](../../textbox/getting-started) |stringedit| The `stringedit` type renders a TextBox component for string data type columns. To customize the `TextBox` component, refer to the [TextBox API documentation](https://ej2.syncfusion.com/angular/documentation/api/textbox) for detailed information on available properties | params: { showClearButton : true}

The following sample code demonstrates the customization applied to `TextBox` component of "Customer ID" grid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-params-default/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-params-default/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-params-default" %}

## Customizing the NumericTextBox for numericedit type 

Customize the `NumericTextBox` component for numeric columns using its API and the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit) property.

Component| Edit Type |Description |Example Customized edit params
-----|-----|-----|----|
[NumericTextBox](../../numerictextbox/getting-started)|numericedit| The `numericedit` type renders a NumericTextBox component for integers, double, float, short, byte, long, long double and decimal data types columns. To customize the `NumericTextBox` component, refer to the [NumericTextBox API documentation](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox) for detailed information on available properties. | params: { decimals: 2, value: 5 }

The following sample code demonstrates the customization applied to `NumericTextBox` component of "Freight" grid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-params-numeric/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-params-numeric/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-params-numeric" %}

### Restrict decimal input in NumericTextBox while editing

`NumericTextBox` allows decimal input by default. To restrict entries to whole numbers, use the [validateDecimalOnType](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#validatedecimalontype) (set to `true` to block decimals) and [decimals](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox#decimals) properties.

In the below demo, while editing the row the decimal point value is restricted to type in the `NumericTextBox` of "Freight" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/prevent-decimalpoint-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/prevent-decimalpoint-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/prevent-decimalpoint-cs1" %}

## Customizing the DropDownList for dropdownedit type 

Customize the `DropDownList` editor via [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit). This allows configuration of DropDownList properties for string columns.

Component | Edit Type | Description | Example edit params
-----|-----|-----|----
[DropDownList](../../drop-down-list/getting-started) | dropdownedit | The `dropdownedit` type renders a DropDownList component for string data type columns. To customize the DropDownList component, refer to the [DropDownList API documentation](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list) for detailed information on available properties.  | params: { value: 'Germany' }

The following sample code demonstrates the customization applied to `DropDownList` component of "Ship City" grid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-params-dropdown/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-params-dropdown/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-params-dropdown" %}

### Provide custom data source for DropDownList component

In Syncfusion's Grid component, there is an option to provide a custom data source for the `DropDownList` component in the edit form. This feature allows defining a specific set of values for the `DropDownList`.

To achieve this, the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit) property can be utilized. This property allows defining the edit params for the column within the grid.

When setting a new data source using the edit params, a new [query](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#query) property must be specified for the DropDownList. The query property enables defining custom queries for data retrieval and filtering.

In the below demo, `DropDownList` is rendered with custom data source for the "Ship Country" column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs12" %}

### Enable filtering in DropDownList editor

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides filtering for the `DropDownList` within the edit form. This feature enables selection of options from a predefined list and easier search for specific items using the built-in filtering feature.  

Enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#allowfiltering) property to `true` within the edit params. This will enable the filtering feature in the `DropDownList`.

In the following demo, filtering is enabled for the "Ship Country" column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-filter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-filter/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-filter" %}

### Open popup on focus in DropDownList

Open the dropdown edit popup with a single click by focusing the dropdown element. This feature enables quick access and interaction with the dropdown options without the need for an additional click.

To achieve this, utilize the [showPopup](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#showpopup) method provided by the EJ2 DropDownList component. This method can be invoked within the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event of the grid, which triggers when an action, such as editing, is completed. By calling the `showPopup` method in this event, open the popup for the dropdown edit.

To ensure that the dropdown column is the clicked edit target, set a global flag variable in the `mouseup` event along with `load` event. This flag variable determines if the clicked element corresponds to the dropdown column.

The following sample demonstrates to open the popup when focusing on the edit cell using the `actionComplete` and `load` events:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/open-dropdown-popup-cs1" %}

## Customizing the CheckBox for booleanedit type 

Customize the `CheckBox` component using the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit) property.

Component | Edit Type | Description | Example edit params
-----|-----|-----|----
[CheckBox](../../check-box/getting-started)| booleanedit | The `booleanedit` type renders a `CheckBox` component for boolean data type. To customize the CheckBox component, refer to the [CheckBox API documentation](https://ej2.syncfusion.com/angular/documentation/api/check-box) for detailed information on available properties. | params: { checked: true }

The following sample code demonstrates the customization applied to `CheckBox` component of "Verified" grid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-params-checkbox/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-params-checkbox/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-params-checkbox" %}

## Customizing the DatePicker for datepickeredit type 

Enhance the [DatePicker](../../datepicker/getting-started) component in grid edit form by customizing its properties. This enables configuration of various DatePicker features, tailoring its behavior and appearance to match specific requirements within the grid. Fine-tune the editor component behavior through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit) property for powerful date selection control.

Component | Edit Type | Description | Example edit params
-----|-----|-----|----
[DatePicker](../../datepicker/getting-started)| datepickeredit | The `datepickeredit` type renders a `DatePicker` component for date data type columns. To customize the DatePicker component, refer to the [DatePicker API documentation](https://ej2.syncfusion.com/angular/documentation/api/datepicker) for detailed information on available properties. | params: { format:'dd.MM.yyyy' }

The following sample code demonstrates the customization applied to `DatePicker` component of "Order Date" grid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-params-datepicker/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-params-datepicker/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-params-datepicker" %}

## Customizing the DateTimePicker for datetimepickeredit type 

Enhance the `DateTimePicker` component in grid edit form by customizing its properties. This enables configuration of various DateTimePicker features, tailoring its behavior and appearance to match specific requirements within the grid. Fine-tune the editor component behavior through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit) property for powerful date-time selection control.

Component | Edit Type | Description | Example edit params
-----|-----|-----|----
[DateTimePicker](../../datetimepicker/getting-started) | datetimepickeredit |  The `datetimepickeredit` type renders a `DateTimePicker` component for date time data type columns. Customize the DateTimePicker component by referring to the  [DateTimePicker API documentation](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker) for detailed information on available properties. | params: { value: new Date() }

The following sample code demonstrates the customization applied to DateTimePicker component of "Order Date" grid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-params-datetimepicker/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-params-datetimepicker/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-params-datetimepicker" %}

### Restrict minimum selectable date in DatePicker

Set a minimum selectable date dynamically in the DatePicker editor by configuring the minimum property in `edit` params. This prevents selection of dates prior to a specified value.

Example with dynamic min date:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/hide-dates-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/hide-dates-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/hide-dates-cs1" %}

## Accessing editor component instances

Accessing editor components in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enables seamless interaction with editor instances associated with cells during editing or adding actions. This feature is especially valuable when performing custom actions, retrieving data from the editor, or manipulating its properties during editing or adding operations in the grid.

Access the component instance from the component element using the `ej2_instances` property. This property provides access to the instance of the editor component associated with a cell.

In the below demo, access the editor component instance while adding or editing actions in the `actionComplete` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-access-editor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-access-editor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-access-editor-cs1" %}

## Rendering custom cell editors

Render custom editors for grid columns using the [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) property, and for advanced scenarios, by using custom create, write, read, and destroy methods in the [edit](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit) property.

> For custom components in `editTemplate`, use two-way binding (@bind-Value) to ensure updates propagate to the Grid.

### Render textArea in the edit form 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows rendering a `textArea` within the Grid's edit form for a specific column. This feature is especially valuable when there is a need to edit and display multi-line text content, providing an efficient way to manage extensive text data within the Grid's columns.

To render a textArea in the edit form, it is necessary to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template that is used as an editor for a particular column. It can accept either a template string or an HTML element ID.

> When using a text area, please use <kbd>Shift+Enter</kbd> to move to the next line. By default, pressing <kbd>Enter</kbd> will trigger a record update while in edit mode.

The following example demonstrates to render a textArea component in the "Ship Adress" column of the Syncfusion grid. The [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/grid/valueAccessor) property is utilized to split the text into multiple lines within the grid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-textarea-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-textarea-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-textarea-cs1" %}

**Prevent Enter key from saving edits in a multiline textbox** 

Override the default Enter key behavior in multiline textboxes by using the `stopPropagation` method in the textbox's [focus](https://ej2.syncfusion.com/angular/documentation/api/textbox/textBoxModel#focus) event, ensuring Enter inserts a new line instead of saving the edit.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-textbox/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-textbox/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-textbox" %}

### Render AutoComplete in the edit form

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows rendering an [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started) component within the grid's edit form for a specific column. This feature is especially valuable when there is a need to provide a dropdown like auto suggestion and input assistance for data entry in the grid's columns.

To render an `AutoComplete` component in the edit form, it is necessary to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates to render an `AutoComplete` component in the "Customer ID" column of the Syncfusion Grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/grid/edit-autocomplete/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/grid/edit-autocomplete/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-autocomplete" %}

### Render MaskedTextBox in the edit form

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows rendering an [MaskedTextBox](https://ej2.syncfusion.com/angular/documentation/maskedtextbox/getting-started) component within the grid's edit form for a specific column. This feature is especially useful when there is a need to provide masked input fields that require a specific format, such as phone numbers or postal codes.

To render a MaskedTextBox component in the edit form, it is necessary to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

Here's an example to render a MaskedTextBox component in the "Customer Number" column of the Syncfusion Grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-maskedtextbox/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-maskedtextbox/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-maskedtextbox" %}

### Render DropDownList component in edit form 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows rendering a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component within the Grid's edit form for a specific column. This feature is valuable when there is a need to provide a convenient way to select options from a predefined list while editing data in the grid's edit form.

To render a DropDownList component in the edit form, it is necessary to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates to render a `DropDownList` component in the "Ship Country" column of the Syncfusion Grid .The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-dropdownlist/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-dropdownlist/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-dropdownlist" %}

### Render images in the DropDownList editor component using the item template 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows rendering images in the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/templates#item-template) editor component. This feature is valuable when there is a need to display images for each item in the dropdown list of a particular column, enhancing the visual representation of the data.

To render a `DropDownList` in the edit form, it is necessary to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template that is used as an editor for a particular column. It can accept either a template string or an HTML element ID.

To display an image in the DropDownList editor component, the  [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#itemtemplate) property can be utilized. This property allows customization of the content of each item in the dropdown list.

The following example demonstrates to render images in the DropDownList editor component using the `itemTemplate` within the "Employee Name" column of the Syncfusion grid. Additionally, the `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { FormsModule } from '@angular/forms';
import { GridModule, SortService, PageService } from '@syncfusion/ej2-angular-grids';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { Component, ViewChild } from '@angular/core';
import { columnDataType, data, employeeData } from './datasource';
import { GridComponent, EditService, ToolbarService, ToolbarItems, EditSettingsModel, ForeignKeyService, SaveEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        DropDownListModule
        ],
    providers: [EditService, ToolbarService, SortService, PageService, ForeignKeyService],
    standalone: true,
    selector: 'app-root',
    template: `
            <ejs-grid #grid [dataSource]="data" [allowPaging]="true" [pageSettings]="pageSettings" (actionBegin)="actionBegin($event)" [editSettings]="editOptions" [toolbar]="toolbarItems" height="220" >
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" [validationRules]="orderIDRules" isPrimaryKey="true"></e-column>
                <e-column field="EmployeeID" foreignKeyValue='FirstName' foreignKeyField='EmployeeID' [dataSource]='employeeData' headerText="Employee Name" width="220">
                <ng-template #editTemplate let-data>
                    <ejs-dropdownlist [dataSource]='employeeData' [(ngModel)]="orderData.EmployeeID" [fields]='dropdownFields' [itemTemplate]="itemTemplate">
                    <ng-template #itemTemplate let-data>
                        <div>
                        <img class="empImage" width="50px" [src]="'https://ej2.syncfusion.com/demos/src/grid/images/' + data.EmployeeID + '.png'" alt="employee" />
                        <div class="ename">{{ data.FirstName }}</div>
                        </div>
                    </ng-template>
                    </ejs-dropdownlist>
                </ng-template>
                </e-column>
                <e-column field="Freight" headerText="Freight" width="100" format="C2" textAlign="Right" editType="numericedit"></e-column>
                <e-column field="ShipName" headerText="Ship Name" width="170"></e-column>
                <e-column field="ShipCountry" headerText="Ship Country" width="150" editType="dropdownedit"></e-column>
            </e-columns>
            </ejs-grid>`,
})
export class AppComponent {

    public data?: Object[];
    public pageSettings?: Object;
    public toolbarItems?: ToolbarItems[];
    public editOptions?: EditSettingsModel;
    public employeeData?: Object;
    public orderIDRules?: Object;
    public orderData?: object | any;
    public dropdownFields?: Object;

    @ViewChild('grid')
    public grid?: GridComponent;

    public ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageCount: 5 };
        this.toolbarItems = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.employeeData = employeeData;
        this.editOptions = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            mode: 'Normal',
        };
        this.orderIDRules = { required: true };
        this.dropdownFields = { text: 'FirstName', value: 'EmployeeID' };
    }

    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['EmployeeID'] = this.orderData['EmployeeID'];
        }
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-drobdown-image/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/edit-drobdown-image" %}

### Render Multiple columns in DropDownList component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports rendering a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component within the Grid's edit form for a specific column. This feature is useful for displaying detailed information for each item in the dropdown list during column editing.

Define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template used as an editor for a particular column and can accept either a template string or an HTML element ID.

The `DropDownList` has been provided with several options to customize each list item, group title, selected value, header, and footer element. By default, list items can be rendered as a single column in the `DropDownList` component. Instead of this, multiple columns can be rendered. This can be achieved by using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#headertemplate) and [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#itemtemplate) properties of the `DropDownList` component.

The following example demonstrates to render a `DropDownList` component with multiple columns within in the "Ship Country" column. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule , TimePickerModule} from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { MultiSelectModule, DropDownListModule, AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit } from '@angular/core';
import { columnDataType, data } from './datasource';
import { GridModule, EditService, ToolbarService, SortService, PageService, EditSettingsModel, ToolbarItems,SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';

@Component({
    imports: [
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        DropDownListModule
        ],
    providers: [EditService, ToolbarService, SortService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'
        (actionBegin)='actionBegin($event)'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' 
                isPrimaryKey='true' [validationRules]='orderIDRules'></e-column>
            <e-column field='CustomerID' headerText='Customer Name' width='120'></e-column>
            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' 
                editType='numericedit' [validationRules]='freightRules'></e-column>
            <e-column field='OrderDate' headerText='Order Date' width='130' editType='datepickeredit' 
                format='yMd' textAlign='Right'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=300>
                <ng-template #editTemplate let-data3>
                    <ejs-dropdownlist [dataSource]='data' 
                    [fields]='fields' [query]='query'[(value)]="orderData.ShipCountry">
                    <ng-template #headerTemplate="" let-data2="">
                    <table><tr><th>EmployeeID</th><th>ShipCountry</th></tr></table>
                    </ng-template>
                        <ng-template #itemTemplate let-data1>
                        <div class="e-grid">
                        <table class="e-table">
                            <tbody>
                                <tr>
                                    <td class="e-rowcell">{{ data1.EmployeeID }}</td>
                                    <td class="e-rowcell">{{ data1.ShipCountry }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                        </ng-template>
                    </ejs-dropdownlist>
                </ng-template>
            </e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData?: object | any;
    public orderIDRules?: object;
    public freightRules?: object;
    public fields = { text: 'ShipCountry' };
    public query: Query = new Query()
        .from('data')
        .select(['EmployeeID', 'ShipCountry', 'OrderID'])
        .take(6);

    ngOnInit(): void {
        this.data = data;
        this.orderIDRules = { required: true };
        this.freightRules = { required: true, min: 1, max: 1000 };
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['ShipCountry'] = this.orderData['ShipCountry'];
        }
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-multicolumn-dropdown/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-multicolumn-dropdown" %}

### Render ComboBox component in edit form

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports rendering a [ComboBox](https://helpstaging.syncfusion.com/ej2-angular/combo-box/getting-started) component within the Grid's edit form for a specific column. This feature is useful for providing a drop-down selection with auto-suggestions for data entry.

Define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template used as an editor for a particular column and can accept either a template string or an HTML element ID.

The following example demonstrates to render a `ComboBox` component in the "Ship Country" column of the Syncfusion Grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-combox/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-combox/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-combox" %}

### Render TimePicker component in edit form

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports rendering a [TimePicker](https://ej2.syncfusion.com/angular/documentation/timepicker/getting-started) component within the grid's edit form for a specific column. This feature is useful for providing a time input, such as appointment times or event schedules, for editing in the grid.

Define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template used as an editor for a particular column and can accept either a template string or an HTML element ID.

The following example demonstrates to render a `TimePicker` component in the "Order Date" column of the Syncfusion Grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs13" %}

### Render MultiSelect component in edit form

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports rendering a [MultiSelect](https://ej2.syncfusion.com/angular/documentation/multi-select/getting-started) component within the Grid's edit form, enabling selection of multiple values from a dropdown list when editing a specific column. This feature is useful when multiple selections are required for a column.

Define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template used as an editor for a particular column and can accept either a template string or an HTML element ID.

The following example demonstrates to render a `MultiSelect` component in the "Ship City" column of the Syncfusion Grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs15" %}

### Render RichTextEditor component in edit form

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid allows rendering the [RichTextEditor](../../rich-text-editor/getting-started) component within the edit form. This enables formatting and styling text content using bold, italic, underline, bullet lists, numbered lists, and other formatting options.

Define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template used as an editor for a particular column and can accept either a template string or an HTML element ID.

Set the [allowTextWrap](https://ej2.syncfusion.com/angular/documentation/api/grid#allowtextwrap) property of the corresponding grid column to `true`. Enabling this property allows the rich text editor component to adjust its width and wrap text content to fit within the boundaries of the column.

The following example demonstrates to render a `RichTextEditor` component in the "Ship Address" column of the Syncfusion Grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs16" %}

### Render Upload component in edit form  

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid allows rendering an [Uploader](../../uploader/getting-started) component within the grid's edit form. This enables uploading and managing files or images in a specific column during data editing.

Define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittemplate) for the column using `ng-template`. The `editTemplate` property specifies the cell edit template used as an editor for a particular column and can accept either a template string or an HTML element ID.

The following example demonstrates to render a `Upload` component in the "Order Image" column of the Syncfusion Grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { MultiSelectModule, DropDownListModule, AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { Component, OnInit, NgModule } from '@angular/core';
import { employeeData } from './datasource';
import { EditSettingsModel,ToolbarItems,SaveEventArgs, GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids';
import { FileInfo, SuccessEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [ 
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        UploaderModule
        ],
    providers: [EditService, ToolbarService, SortService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid [dataSource]='data' allowPaging='true' height='220px' [editSettings]='editSettings' [toolbar]='toolbar' (actionBegin)='actionBegin($event)'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                <e-column field='FirstName' headerText='First Name' textAlign='Left'  width=120></e-column>
                <e-column field='LastName' headerText='Last Name'  textAlign='Left' width=120></e-column>
                <e-column field='Title' headerText='Title'  textAlign='Left' width=120 ></e-column>
                <e-column headerText='Employee Image' width='150' textAlign='Center'>
                    <ng-template #template let-data>
                        <div class="image">
                        <img [src]="!data.Image ? 'https://ej2.syncfusion.com/angular/demos/assets/grid/images/' + data.EmployeeID + '.png' : data.Image"  alt="{{data.EmployeeID}}" />
                        </div>
                    </ng-template>
                    <ng-template #editTemplate let-data>
                        <ejs-uploader #defaultupload (success)="onUploadSuccess($event)" [asyncSettings]='path' multiple='false'></ejs-uploader>
                    </ng-template>
                </e-column>
            </e-columns>
        </ejs-grid>
    `,
})
export class AppComponent implements OnInit {
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData?: object | any;
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightRules?: object;
    public strm?:string;
    public path: object = {
        saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    };

    ngOnInit(): void {
        this.data = employeeData;
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 5 };
        this.freightRules = { required: true, min: 1, max: 1000 };
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['Image'] = this.strm;
        }
    }

    onUploadSuccess(args: SuccessEventArgs) {
        if (args.operation === 'upload') {
            const fileBlob = (args.file as FileInfo).rawFile as Blob;
            const file = new File([fileBlob], (args.file as FileInfo).name);
            this.strm = this.getBase64(file);
        }
    }

    getBase64(file:File): string {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.strm = reader.result as string;
        };
        return (this.strm as string); 
    }
}

export interface columnDataType{
    Image?: string;
 }
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-upload/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-upload" %}

> To prevent accidentally closing the cell editor (particularly with complex custom editors), add the `edit-custom-template` class to custom component roots and set the `cssClass` property to include `edit-custom-template` for Syncfusion editors when needed.

## Rendering custom cell editors using external functions

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides powerful capabilities for rendering custom cell editors, enabling the addition of specialized custom components to specific columns. This feature is essential for editing cell values using custom input elements or controls tailored to specific data types or workflows.

To utilize the custom cell editor template feature, implement these four essential functions:

| Function | Purpose | When Triggered |
|----------|---------|--------|
| `create` | Create the DOM element or component container | During component initialization |
| `write` | Create the custom component and assign default values | When editing begins on the cell |
| `read` | Extract and return the edited value from the component | When saving changes to the cell |
| `destroy` | Clean up and remove the component | When exiting edit mode or closing the editor |

### Example: AutoComplete as custom editor

Define a custom editor with the `edit` API for AutoComplete in the "Customer ID" column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs14" %}

### Example: Cascading DropDownList editors

Create cascading DropDownLists (e.g., country and state) by configuring a custom editor with appropriate `edit` methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs40/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs40" %}
