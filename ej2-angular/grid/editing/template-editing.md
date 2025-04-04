---
layout: post
title: Template editing in Angular Grid component | Syncfusion
description: Learn here all about Template editing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template editing 
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in Angular Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component supports template editing, providing a powerful and flexible way to customize the appearance and behavior of cells during editing. This feature allows you to use Angular templates to define the structure and content of the cells within the grid.

## Inline or dialog template editing 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides support for inline and dialog template editing, allowing you to customize the editing using either [Reactive](https://v17.angular.io/guide/reactive-forms) or [Template-driven](https://v17.angular.io/guide/forms#template-driven-forms) Forms. These forms can be utilized to add and update grid records.

To enable this feature, you need to set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) property of the Grid to either **Normal** or **Dialog** and define the grid editors using the **editSettingsTemplate** template variable of **ngTemplate**.

**Using Reactive Forms**

Reactive forms offer a model-driven approach using TypeScript for form handling in Angular. This approach involves dynamically creating and managing form controls programmatically. Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time. This particularly useful in scenarios where you need a more dynamic and programmatic approach to form handling, providing fine-grained control and flexibility over form validation and error handling.

In some cases, you want to add new field editors in the dialog which are not present in the column model. In that situation the dialog template will help us to customize the default edit dialog.

In the following example, a **FormGroup** is created with **FormControls** for each column during the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event. During saving, the form group is validated, and the grid is then updated with the edited data from the **FormGroup** object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reactive-form-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="reactive-form.html" %}
{% include code-snippet/grid/reactive-form-cs1/src/reactive-form.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reactive-form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/reactive-form-cs1" %}

**Using Template-driven Forms**

Template-driven Forms provide a template-driven approach using HTML for form handling in Angular. This approach utilizes two-way data binding, such as the **ngModel** directive, to update the data model in the component as changes occur in the template and vice versa. This is useful for simplifying syntax and reducing the amount of code needed for form setup, making it suitable for simpler forms with straightforward validation. 

In the following example, a **FormGroup** is created using the **ngForm** directive. During the save operation, the form group is validated, and the grid is updated with the edited model data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dialogTemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template-driven.html" %}
{% include code-snippet/grid/dialogTemplate-cs1/src/template-driven.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dialogTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dialogTemplate-cs1" %}

> The form editors should have **name** attribute.

## Using template context 

You can enhance the customization of your grid's edit forms by utilizing template contexts, such as accessing row details inside ngTemplate, rendering editors as components, getting values from editors, setting focus to editors, and disabling default form validation, and adding custom validation. These features are applicable in both **inline** and **dialog** editing modes.

The following template context topics are demonstrated through a practical example in the [Render tab component inside the dialog template](https://ej2.syncfusion.com/angular/documentation/grid/editing/template-editing#render-tab-component-inside-the-dialog-template) topic.

### Access row details inside ngTemplate using template context

When utilizing edit templates in the Grid , you can access crucial row information within an **ngTemplate** when utilizing edit templates. This enables dynamic binding of attributes, values, or elements based on the specific row being edited. This is particularly useful for conditionally rendering or modifying elements in the edit template based on the row's state.

The following properties will be available at the time of template execution:

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property that defines whether the current row is a new record or not. |

The following code example demonstrates the usage of the `isAdd` property in an edit template to disable the OrderID textbox when it's not a new record:

```
    <input id="OrderID" [(ngModel)]="data.OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null">

```

### Render editors as components 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides a powerful feature that allows you to dynamically render Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 controls as form editors during the editing process. This functionality is particularly useful when you want to provide feature-rich controls for data entry within the edit form.

To achieve this by utilizing the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event of the Grid and specifying `requestType` as **beginEdit** or **add**.

The following code example illustrates rendering the `DropDownList` component in the `actionComplete` event.

```typescript

 actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true) ;
            new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
        }
    }
```

### Get value from editor

The get value from editor feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to read, format, and update the current editor value before it is saved. This feature is particularly valuable when you need to perform specific actions on the data, such as formatting or validation, before it is committed to the underlying data source. 

To achieve this feature, you can utilize the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event with the **requestType** set to **save**.

In the following code example, the freight value has been formatted and updated.

```typescript
    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'save') {
            // cast string to integer value.
            (args.data as ColumnDataType).Freight = parseFloat(((args as any).form.querySelector('#Freight').ej2_instances[0] as HTMLInputElement).value);
        }
    }
```

### Set focus to particular column editor 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to control the focus behavior of input elements in edit forms. By default, the first input element in the dialog receives focus when the dialog is opened. However, in scenarios where the first input element is disabled or hidden, you can specify which valid input element should receive focus. This can be achieved using the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event of the Grid,  where the **requestType** is set to **beginEdit**.

In the following code example, the CustomerID column focused.

```typescript
    actionComplete(args: DialogEditEventArgs) {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            ((args.form as HTMLFormElement).elements.namedItem('CustomerID') as HTMLInputElement).focus();
        }
    }
```

### Disable default form validation 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides built-in support for [angular form validation](https://v17.angular.io/guide/form-validation) to ensure data integrity and accuracy during editing. However, there might be scenarios where you want to disable the default form validation rules. This can be achieved using the [removeRules](https://helpej2.syncfusion.com/documentation/api/form-validator/#removerules) method within the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event of the Grid.

To disable default form validation rules in the Grid, follow these steps:

```typescript
    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
        (args.form as HTMLFormElement)['ej2_instances'][0].removeRules();
        }
    }
```

> You can use this method to disable validation rules: **args.form.ej2_instances[0].rules = {}**.

### Adding validation rules for custom editors

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides the ability to add validation rules for fields that are not present in the column model. This feature is particularly useful to prevent erroneous or inconsistent data from being submitted, ultimately enhancing the reliability of your application's data.

To accomplish this, you can utilize the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event along with the [addRules](https://ej2.syncfusion.com/documentation/api/form-validator/#addrules) method.

Here's how you can use the `addRules` method to add validation rules for custom editors in the `actionComplete` event: 

```typescript
    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            (args.form as HTMLFormElement)['ej2_instances'][0].addRules('Freight', { max: 500 });
        }
    }
```

## Render tab component inside the dialog template

You can enhance the editing experience in the Grid by rendering a [Tab](../../../tab/index.html) component inside the dialog template. This feature is especially useful when you want to present multiple editing sections or categories in a tabbed layout, ensuring a more intuitive and easily navigable interface for data editing.

To enable this functionality, you need to set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) property of the Grid to **Dialog**. This configures the Grid to use the dialog editing mode. Additionally, you can use the [editSettingsTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) property to define a template variable that contains the `Tab` component and its corresponding content.

The following example renders a tab component inside the edit dialog. The tab component has two tabs, and once you fill in the first tab and navigate to the second one, the validation for the first tab is performed before navigating to the second.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/tablikeedit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="tablikeedit.html" %}
{% include code-snippet/grid/tablikeedit-cs1/src/tablikeedit.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/tablikeedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/tablikeedit-cs1" %}

## See also

>* [angular-template-driven-vs-reactive-forms](https://www.syncfusion.com/blogs/post/angular-template-driven-vs-reactive-forms.aspx)

