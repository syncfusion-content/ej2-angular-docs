---
layout: post
title: Edit types in Angular TreeGrid component | Syncfusion
description: Learn here all about Edit types in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Edit types 
documentation: ug
domainurl: ##DomainURL##
---

# Edit types in Angular TreeGrid component

The Angular TreeGrid component in Syncfusion<sup style="font-size:70%">&reg;</sup> provides various edit types that allow you to customize the editing behavior for different types of columns. These edit types enhance the editing experience and provide flexibility in handling different data types.

## Default cell edit type editor

The TreeGrid provides pre-built default editors that enhance data editing and input handling within the TreeGrid. These default editors are designed to simplify the process of defining the editor component for specific columns based on the data type of the column within the TreeGrid. To configure default editors for TreeGrid columns, leverage the [editType](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittype) property of column.

The available default edit types are as follows:

| Component | Edit Type value | Description |
|-----------|----------------|-------------|
| [TextBox](../../textbox) | stringedit | The `stringedit` type renders a TextBox component for string data type columns. |
| [NumericTextBox](../../numerictextbox) | numericedit | The `numericedit` type renders a NumericTextBox component for integers, double, float, short, byte, long, long double and decimal data types columns. |
| [DropDownList](../../drop-down-list) | dropdownedit | The `dropdownedit` type renders a DropDownList component for string data type columns. |
| [Checkbox](../../check-box) | booleanedit | The `booleanedit` type renders a CheckBox component for boolean data type columns. |
| [DatePicker](../../datepicker) | datepickeredit | The `datepickeredit` type renders a DatePicker component for date data type columns. |
| [DateTimePicker](../../datetimepicker) | datetimepickeredit | The `datetimepickeredit` type renders a DateTimePicker component for date time data type columns. |

The following example demonstrates how to define the `editType` for TreeGrid columns:

```html
    <e-column field="taskName" headerText="Task Name" editType="stringedit"></e-column>
    <e-column field="duration" headerText="Duration" editType="numericedit"></e-column>
    <e-column field="priority" headerText="Priority" editType="dropdownedit"></e-column>
    <e-column field="startDate" headerText="Start Date" editType="datepickeredit"></e-column>
    <e-column field="endTime" headerText="End Time" editType="datetimepickeredit"></e-column>
    <e-column field="approved" headerText="Approved" editType="booleanedit"></e-column>
```

> If `editType` property is not defined in the column, then it will be considered as the **stringedit** type (TextBox component).

## Customize TextBox component of stringedit type 

You can customize the default TextBox component in TreeGrid edit form using its property. This customization allows you to configure various properties of the TextBox, tailoring its behavior and appearance to match your specific requirements within the TreeGrid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property.

| Component | Edit Type | Description | Example Customized edit params |
|-----------|-----------|-------------|--------------------------------|
| [TextBox](../../textbox) | stringedit | The `stringedit` type renders a TextBox component for string data type columns. To customize the `TextBox` component, refer to the [TextBox API documentation](https://ej2.syncfusion.com/angular/documentation/api/textbox) for detailed information on available properties | params: { showClearButton: true} |

The following sample code demonstrates the customization applied to TextBox component of **taskName** column in TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs1" %}

## Customize NumericTextBox component of numericedit type 

You can customize the `NumericTextBox` component in TreeGrid edit form using its property. This customization allows you to configure various properties of the NumericTextBox, tailoring its behavior and appearance to match your specific requirements within the TreeGrid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property.

| Component | Edit Type | Description | Example Customized edit params |
|-----------|-----------|-------------|--------------------------------|
| [NumericTextBox](../../numerictextbox) | numericedit | The `numericedit` type renders a NumericTextBox component for integers, double, float, short, byte, long, long double and decimal data types columns. To customize the **NumericTextBox** component, refer to the [NumericTextBox API documentation](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/) for detailed information on available properties. | params: { decimals: 2, value: 5 } |

The following sample code demonstrates the customization applied to NumericTextBox component of **Progress** column in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs2" %}

### Restrict the decimal points in a NumericTextBox while editing the numeric column

By default, the `NumericTextBox` component allows entering decimal values with up to two decimal places when editing a numeric column. However, there might be cases where you want to restrict input to whole numbers only, without any decimal points. In such scenarios, you can make use of the [validateDecimalOnType](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#validatedecimalontype) and [decimals](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#decimals) properties provided by Syncfusion's `NumericTextBox` component.

The `validateDecimalOnType` property is used to control whether decimal points are allowed during input in the NumericTextBox. By default, it is set to **false**, allowing decimal points to be entered. However, when set to **true**, decimal points will be restricted, and only whole numbers can be entered.

The `decimals` property specifies the number of decimal places to be displayed in the NumericTextBox. By default, it is set to 2, meaning that two decimal places will be displayed. However, you can modify this value to customize the decimal places according to your requirements.

In the following demo, while editing the row the decimal point value is restricted to type in the NumericTextBox of **Duration** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs3" %}

## Customize DropDownList component of DropDownEdit type 

You can customize the `DropDownList` component in TreeGrid edit form using its property. This customization allows you to configure various properties of the DropDownList, tailoring its behavior and appearance to match your specific requirements within the TreeGrid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property. 

| Component | Edit Type | Description | Example Customized edit params |
|-----------|-----------|-------------|--------------------------------|
| [DropDownList](../../drop-down-list) | DropDownEdit | The `dropdownedit` type renders a DropDownList component for string data type columns. To customize the DropDownList component, refer to the [DropDownList API documentation](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list) for detailed information on available properties. | params: { value: 'High' } |

The following sample code demonstrates the customization applied to DropDownList component of **priority** column in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs4/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs4" %}

### Provide custom data source for DropDownList component

In TreeGrid component, you have an option to provide a custom data source for the `DropDownList` component in the edit form. This feature allows you to define a specific set of values for the DropDownList.

To achieve this, you can utilize the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property. This property allows you to define the edit params for the column within the TreeGrid.

When setting a new data source using the edit params, you need to specify a new [query](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#query) property for the DropDownList. The `query` property allows you to define custom queries for data retrieval and filtering.

In the following demo, DropDownList is rendered with custom data source for the **Priority** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs1" %}

### Apply filtering for DropDownList component

The TreeGrid component provides filtering for the DropDownList within the edit form. This feature allows to select options from a predefined list and easily search for specific items using the built-in filtering feature.  

To enable filtering, set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#allowfiltering) property to **true** within the edit params. This will enable the filtering feature in the DropDownList.

In the following demo, filtering is enabled for the **Priority** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs5/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs5" %}

### Open popup while focusing in the edit cell

You can open the dropdown edit popup with a single click by focusing the dropdown element. This feature allows you to quickly access and interact with the dropdown options without the need for an additional click.

To achieve this, you can utilize the [showPopup](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#showpopup) method provided by the EJ2 DropDownList component. This method can be invoked within the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event of the TreeGrid, which triggers when an action, such as editing, is completed. By calling the `showPopup` method in this event, you can open the popup for the dropdown edit.

To ensure that the dropdown column is the clicked edit target, you need to set a global flag variable in the **mouseup** event along with [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#load) event. This flag variable will be used to determine if the clicked element corresponds to the dropdown column.

The following sample demonstrates how to open the popup when focusing on the edit cell using the `actionComplete` and `load` events:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs6/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs6" %}

## Customize CheckBox component of booleanedit type 

You can customize the `CheckBox` component in TreeGrid edit form using its property. This customization allows you to configure various properties of the CheckBox, tailoring its behavior and appearance to match your specific requirements within the TreeGrid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property.

| Component | Edit Type | Description | Example Customized edit params |
|-----------|-----------|-------------|--------------------------------|
| [CheckBox](../../check-box) | booleanedit | The `booleanedit` type renders a **CheckBox** component for boolean data type. To customize the CheckBox component, refer to the [CheckBox API documentation](https://ej2.syncfusion.com/angular/documentation/api/check-box/) for detailed information on available properties. | params: { checked: true} |

The following sample code demonstrates the customization applied to CheckBox component of **approved** column in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs7/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs7" %}

## Customize DatePicker component of datepickeredit type 

You can customize the `DatePicker` component in TreeGrid edit form using its property. This customization allows you to configure various properties of the DatePicker, tailoring its behavior and appearance to match your specific requirements within the TreeGrid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property.

| Component | Edit Type | Description | Example Customized edit params |
|-----------|-----------|-------------|--------------------------------|
| [DatePicker](../../datepicker) | datepickeredit | The `datepickeredit` type renders a **DatePicker** component for date data type columns. To customize the DatePicker component, refer to the [DatePicker API documentation](https://ej2.syncfusion.com/angular/documentation/api/datepicker/) for detailed information on available properties. | params: { format:'dd.MM.yyyy' } |
 
The following sample code demonstrates the customization applied to DatePicker component of **startDate** column in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs8/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs8" %}

## Customize DateTimePicker component of datetimepickeredit type 

You can customize the `DateTimePicker` component in TreeGrid edit form using its property. This customization allows you to configure various properties of the DateTimePicker, tailoring its behavior and appearance to match your specific requirements within the TreeGrid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property.

| Component | Edit Type | Description | Example Customized edit params |
|-----------|-----------|-------------|--------------------------------|
| [DateTimePicker](../../datetimepicker) | datetimepickeredit | The `datetimepickeredit` type renders a **DateTimePicker** component for date time data type columns. You can customize the DateTimePicker component, refer to the [DateTimePicker API documentation](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker) for detailed information on available properties. | params: { value: new Date() } |
 
The following sample code demonstrates the customization applied to DateTimePicker component of **startDate** column in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs9/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs9" %}

## Access editor components using instance

Accessing editor components in the TreeGrid allows you to interact with the editor instances associated with cells during editing or adding actions. This feature is especially useful when you need to perform custom actions, retrieve data from the Editor, or manipulate its properties during editing or adding operations in the TreeGrid.

To access the component instance from the component element, you can use the **ej2_instances** property. This property provides access to the instance of the editor component associated with a cell.

In the following demo, you can access the editor component instance while adding or editing actions in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs10/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs10" %}

## Render custom cell editors

The TreeGrid allows you to render custom cell editors for particular columns. This feature is particularly useful when you need to use custom components to edit the data within a TreeGrid column. To achieve this, you can make use of the [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) of the column in TreeGrid component.

>Custom components inside the `editTemplate` must be specified with two-way (@bind-Value) binding to reflect the changes in TreeGrid.

### Render textArea in edit form 

The TreeGrid allows you to render a textArea within the TreeGrid's edit form for a specific column. This feature is especially valuable when you need to edit and display multi-line text content, providing an efficient way to manage extensive text data within the TreeGrid's columns.

To render a textArea in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

> When using a text area, press **Shift+Enter** to move to the next line. By default, pressing **Enter** will trigger a record update while you are in edit mode.

The following example demonstrates how to render a textArea component in the **Task Name** column of the TreeGrid. The [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/treegrid/valueAccessor/) property is utilized to split the text into multiple lines within the TreeGrid column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs11/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs11" %}

**Prevent the enter key functionality in multiline textbox while editing** 

While editing a particular row in dialog or row edit mode, pressing the **ENTER** key will save the changes made in the specific cell or edit form. Similarly, pressing the **ENTER** key while performing editing with the multiline textbox will save the changes. However, in a multiline textbox, it is often desired that pressing the **ENTER** key adds a new line break in the text content, rather than triggering the save action.

To achieve this behavior, you can utilize the `stopPropagation` method along with the [focus](https://ej2.syncfusion.com/angular/documentation/api/textbox/textBoxModel/#focus) event of the textBox component. This prevents the default behavior of the **ENTER** key, allowing you to manually handle the newline behavior.

The following example demonstrates how to prevent the enter key functionality in multiline textbox during editing by utilizing the `focus` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs12/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs12" %}

### Render AutoComplete component in edit form 

The TreeGrid allows you to render a **AutoComplete** component within the TreeGrid's edit form for a specific column. This feature is especially valuable when you need to provide a dropdown-like auto-suggestion and input assistance for data entry in the TreeGrid's columns.

To render a AutoComplete component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render an AutoComplete component in the **taskName** column of the TreeGrid. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs13/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs13/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs13/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs13" %}

### Render MaskedTextBox component in edit form 

The TreeGrid allows you to render a **MaskedTextBox** component within the TreeGrid's edit form for a specific column. This feature is especially useful when you need to provide masked input fields that require a specific format, such as phone numbers or postal codes.

To render a MaskedTextBox component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a MaskedTextBox component in the **Contact** column of the TreeGrid. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs14/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs14" %}

### Render DropDownList component in edit form 

The TreeGrid allows you to render a DropDownList component within the TreeGrid's edit form for a specific column. This feature is valuable when you need to provide a convenient way to select options from a predefined list while editing data in the TreeGrid's edit form.

To render a DropDownList component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a DropDownList component in the **taskName** column of the TreeGrid. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs15/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs15" %}

### Render images in the DropDownList editor component using the item template 

The TreeGrid allows you to render images in the DropDownList editor component. This feature is valuable when you want to display images for each item in the dropdown list of a particular column, enhancing the visual representation of your data.

To render a DropDownList in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

To display an image in the DropDownList editor component, you can utilize the [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#itemtemplate) property. This property allows you to customize the content of each item in the dropdown list.

The following example demonstrates how to render images in the DropDownList editor component using the `itemTemplate` within the **EmployeeID** column of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. Additionally, the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs16/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs16" %}

### Render Multiple columns in DropDownList component  

The TreeGrid allows you to render a DropDownList component within the TreeGrid's edit form for a specific column. This feature is particularly useful when you want to display more detailed information for each item in the dropdown list during editing a specific column.

To render a DropDownList in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The DropDownList has been provided with several options to customize each list item, group title, selected value, header, and footer element. By default, list items can be rendered as a single column in the DropDownList component. Instead of this, multiple columns can be rendered. This can be achieved by using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#headertemplate) and [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#itemtemplate) properties of the DropDownList component.

The following example demonstrates how to render a DropDownList component with multiple columns within the **Task Name** column. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}




import { NgModule, } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit} from '@angular/core';
import { sampleData ,drop_Data} from './datasource';
import { EditSettingsModel, ToolbarItems ,EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';
import { Query } from '@syncfusion/ej2-data';
@Component({
    imports: [
    TreeGridAllModule,DropDownListModule
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionBegin)='actionBegin($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=250>
                            <ng-template #editTemplate let-data3>
                                <ejs-dropdownlist [dataSource]='datas' [fields]='fields' [(value)]="taskData.taskName">
                                    <ng-template #headerTemplate="" let-data2="">
                                        <table><tr><th>Task ID</th><th>Task Name</th></tr></table>
                                    </ng-template>
                                    <ng-template #itemTemplate let-data1>
                                        <div class="e-grid">
                                            <table class="e-table">
                                                <tbody>
                                                    <tr>
                                                        <td class="e-rowcell">{{data1.taskID}}</td>
                                                        <td class="e-rowcell">{{data1.taskName}}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </ng-template>
                                </ejs-dropdownlist>
                            </ng-template>
                        </e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=140></e-column>
                        <e-column field='progress' editType= 'numericedit' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public taskData?: object | any;
    public datas:any=drop_Data;
    public fields = { text: 'taskName' };
    public query: Query = new Query()
        .from('datas')
        .select(['taskName', 'taskID'])
        .take(6);

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        
    }
    actionBegin(args: any) {
        if (args.requestType === 'beginEdit' || args.type === 'edit' || args.requestType === 'add') {
            (this.taskData as object) = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as any)['taskName'] = this.taskData['taskName'];
        }
    }

}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs17/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs17" %}

### Render ComboBox component in edit form 

The TreeGrid allows you to render a ComboBox component within the TreeGrid's edit form for a specific column. This feature is especially valuable when you need to provide a drop-down selection with auto-suggestions for data entry.

To render a comboBox component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a ComboBox component in the **Task Name** column of the TreeGrid. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs18/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs18" %}

### Render TimePicker component in edit form 

The TreeGrid allows you to render a TimePicker component within the TreeGrid's edit form for a specific column. This feature is especially valuable when you need to provide a time input, such as appointment times, event schedules, or any other time-related data for editing in the TreeGrid.

To render a TimePicker component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a TimePicker component in the **startDate** column of the TreeGrid. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs19/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs19" %}

### Render MultiSelect component in edit form 

The TreeGrid allows you to render a MultiSelect component within the TreeGrid's edit form, enabling you to select multiple values from a dropdown list when editing a specific column. This feature is particularly useful when you need to handle situations where multiple selections are required for a column.

To render a MultiSelect component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a MultiSelect component in the **Task Name** column of the TreeGrid. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs20/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs20" %}

### Render RichTextEditor component in edit form

The TreeGrid allows you to render the RichTextEditor component within the edit form. This feature is valuable when you need to format and style text content using various formatting options such as bold, italic, underline, bullet lists, numbered lists, and more during editing a specific column.

To render RichTextEditor component in edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

Additionally, you need set the [allowTextWrap](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowtextwrap) property of the corresponding TreeGrid column to **true**. By enabling this property, the rich text editor component will automatically adjust its width and wrap the text content to fit within the boundaries of the column.

The following example demonstrates how to render a RichTextEditor component in the **taskName** column of the TreeGrid. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs21/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs21/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs21" %}

### Render Upload component in edit form  

The TreeGrid allows you to render an Upload component within the TreeGrid's edit form. This feature is especially valuable when you need to upload and manage files or images in a specific column during data editing.

To render Upload component in edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittemplate) for the column using **ng-template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a Upload component in the **Image** column of the TreeGrid. The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event is handled to update the edited value in the TreeGrid when the save button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs22/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs22/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs22" %}

## Render custom cell editors using external function 

The TreeGrid provides the ability to render custom cell editors, allowing you to add custom components to specific columns in your TreeGrid using the cell edit template feature. This feature is useful when you need to edit cell values using custom input elements or controls.

To utilize the custom cell editor template feature, you need to implement the following functions:

* **create** - It is used to create the element at the time of initialization.

* **write** - It is used to create custom component or assign default value at the time of editing.

* **read** - It is used to read the value from the component at the time of save.
          
* **destroy** - It is used to destroy the component.

### Render AutoComplete component in edit form 

The TreeGrid allows you to render the AutoComplete component within the edit form by using the cell edit template feature. This feature enables you to select values from a predefined list during the editing of a specific column. It is especially valuable when you need to provide a dropdown-like auto-suggestion and input assistance for data entry in the TreeGrid's columns.

To achieve this, you need to utilize the [columns->edit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property along with a defined object that specifies the necessary functions for creating, reading, and writing the auto complete component.

The following example demonstrates how to render a Autocomplete component in the **Task Name** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs23/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs23/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs23" %}

### Render cascading DropDownList component in edit form 

The TreeGrid allows you to render the cascading DropDownList within the edit form by using the cell edit template feature. This feature is especially useful when you need to establish a hierarchy of options, such as choosing a country and then selecting a state based on the chosen country.

To achieve this, you need to utilize the [columns->edit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property along with a defined object that specifies the necessary functions for creating, reading, and writing the auto complete component.

In the following demo, cascading DropDownList rendered for **Priority** and **Duration** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-type-cs24/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/edit-type-cs24/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-type-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-type-cs24" %}