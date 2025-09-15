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

The Syncfusion Angular Grid component supports template editing, enabling advanced customization of the appearance and behavior of cell editors. Template editing leverages Angular templates, providing flexible control over the layout and content of grid cells during editing operations.

## Inline or dialog template editing

The Syncfusion Grid provides support for inline and dialog template editing, allowing you to customize the editing using either [Reactive](https://v17.angular.io/guide/reactive-forms) or [Template-driven](https://v17.angular.io/guide/forms#template-driven-forms) Forms. These forms can be utilized to add and update grid records.

To enable this feature, you need to set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) property of the Grid to either **Normal** or **Dialog** and define the grid editors using the **editSettingsTemplate** template variable of **ngTemplate**.

**Using Reactive Forms**

Reactive forms take a programmatic, model-driven approach to handling forms with TypeScript, offering dynamic control over form structure, state management, validation, and error handling. This is ideal for scenarios requiring custom logic or the inclusion of editors for fields that are not part of the grid column model. Dialog templates allow for additional editors beyond the default edit dialog.

In this example, a **FormGroup** with relevant **FormControls** is created during the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event. When saving, the form is validated, and, if successful, the grid updates using the data from the FormGroup.

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

Template-driven forms use HTML with Angular's two-way data binding and the **ngModel** directive, making syntax simple and code minimal. This method is best for straightforward forms with simple validation requirements.

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

> Each form field must have a **name** attribute.

## Using template context

Enhance custom edit forms by accessing the template context: obtain row details, render editors as components, retrieve values from editors, set the initial focus, disable default validation, and add custom validation. These features work for both **inline** and **dialog** modes.

The below scenarios are demonstrated in detail with [tab component inside the dialog template](https://ej2.syncfusion.com/angular/documentation/grid/editing/template-editing#render-tab-component-inside-the-dialog-template).

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

The Syncfusion Grid provides a powerful feature that allows you to dynamically render Syncfusion EJ2 controls as form editors during the editing process. This functionality is particularly useful when you want to provide feature-rich controls for data entry within the edit form.

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

Read, transform, or validate data before it is saved by using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event with **requestType** set to **save**.

Example formatting Freight value before update:

```typescript
    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'save') {
            // cast string to integer value.
            (args.data as ColumnDataType).Freight = parseFloat(((args as any).form.querySelector('#Freight').ej2_instances[0] as HTMLInputElement).value);
        }
    }
```

### Set focus to a particular column editor

Use the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event for precise input focus control, setting the focus to a specific input on dialog open (e.g., focus on **CustomerID**):

```typescript
    actionComplete(args: DialogEditEventArgs) {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            ((args.form as HTMLFormElement).elements.namedItem('CustomerID') as HTMLInputElement).focus();
        }
    }
```

### Disable default form validation

Disable built-in [Angular form validation](https://v17.angular.io/guide/form-validation) if you need custom validation. Use the [removeRules](https://helpej2.syncfusion.com/documentation/api/form-validator/#removerules) method inside the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event:

```typescript
    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
        (args.form as HTMLFormElement)['ej2_instances'][0].removeRules();
        }
    }
```

> You can use this method to disable validation rules: **args.form.ej2_instances[0].rules = {}**.

### Add validation rules for custom editors

For fields not present in the column model, attach custom validators using [addRules](https://ej2.syncfusion.com/documentation/api/form-validator/#addrules) in the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event.

Example:

```typescript
    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            (args.form as HTMLFormElement)['ej2_instances'][0].addRules('Freight', { max: 500 });
        }
    }
```

## Render tab component inside the dialog template

A [Tab](../../../tab/index.html) component can be embedded within the dialog edit template to organize form content into logical sections, improving usability for larger or more complex edit scenarios.

Enable dialog mode with [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) set to **Dialog**. Place the Tab component inside [editSettingsTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template).

In this sample, validation is performed when navigating between tabs and before saving changes.

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
