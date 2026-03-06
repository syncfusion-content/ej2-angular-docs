---
layout: post
title: Angular Grid - Template editing | Syncfusion
description: Angular Grid inline editing enables direct row edits, auto updates, conditional control, CRUD actions, confirmations, and flexible add/delete.
platform: ej2-angular
control: Template editing 
documentation: ug
domainurl: ##DomainURL##
---

# Template Editing in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component supports template editing, providing a powerful and flexible way to customize the appearance and behavior of cells during editing. Angular templates enable defining the structure and content of cells within the grid.

> For grid basic editing setup and configuration, refer to the [Edit Feature Setup](./edit#set-up-editing).

## Inline or dialog template editing

The Syncfusion Grid provides support for inline and dialog template editing, enabling customization of the editing experience using either [Reactive](https://v17.angular.io/guide/reactive-forms) or [Template-driven](https://v17.angular.io/guide/forms#template-driven-forms) Forms. These forms can be used to add and update grid records.

To enable this feature, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#mode) property to either `Normal` or `Dialog` and define grid editors using the `editSettings.template` template variable of `ngTemplate`.

**Using Reactive Forms**

Reactive forms take a programmatic, model-driven approach to handling forms with TypeScript, offering dynamic control over form structure, state management, validation, and error handling. This is ideal for scenarios requiring custom logic or the inclusion of editors for fields that are not part of the grid column model. Dialog templates allow for additional editors beyond the default edit dialog.

In this example, a `FormGroup` with relevant `FormControls` is created during the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event. When saving, the form is validated, and, if successful, the grid updates using the data from the FormGroup.

{% tabs %}`
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

Template-driven forms use HTML with Angular's two-way data binding and the `ngModel` directive, making syntax simple and code minimal. This method is best for straightforward forms with simple validation requirements.

In the following example, a `FormGroup` is created using the `ngForm` directive. During the save operation, the form group is validated, and the grid is updated with the edited model data.

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

> Each form field must have a `name` attribute.

## Using template context

Enhance custom edit forms by accessing the template context: obtain row details, render editors as components, retrieve values from editors, set the initial focus, disable default validation, and add custom validation. These features work for both `inline` and `dialog` modes.

The below scenarios are demonstrated in detail with [tab component inside the dialog template](https://ej2.syncfusion.com/angular/documentation/grid/editing/template-editing#render-tab-component-inside-the-dialog-template).

### Access row details inside ngTemplate using template context

Edit templates provide access to crucial row information within an `ngTemplate`. This enables dynamic binding of attributes, values, or elements based on the specific row being edited, and supports conditional rendering or modification of elements in the edit template based on the row's state.

The following properties will be available at the time of template execution:

| Property Name | Usage |
|---------------|-------|
| `isAdd` | A Boolean property that defines whether the current row is a new record or not. |

The following code example demonstrates the usage of the `isAdd` property in an edit template to disable the OrderID textbox when it's not a new record:

```
    <input id="OrderID" [(ngModel)]="data.OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null">

```

### Render editors as components

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides a powerful feature enabling dynamic rendering of Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 controls as form editors during the editing process. This functionality delivers feature-rich controls for data entry within the edit form.

To achieve this by utilizing the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event of the Grid and specifying `requestType` as `beginEdit` or `add`.

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

The get value from editor feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enables reading, formatting, and updating the current editor value before saving. This feature provides significant value when specific actions must be performed on data, such as formatting or validation, before committing to the underlying data source.

To implement this feature, utilize the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event with the `requestType` set to `save`.

In the following code example, the freight value has been formatted and updated.

```typescript
    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'save') {
            // cast string to integer value.
            (args.data as ColumnDataType).Freight = parseFloat(((args as any).form.querySelector('#Freight').ej2_instances[0] as HTMLInputElement).value);
        }
    }
```

### Set focus to a particular column editor

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enables control of focus behavior for input elements in edit forms. By default, the first input element in the dialog receives focus when the dialog is opened. However, when the first input element is disabled or hidden, a different valid input element can receive focus. This can be achieved using the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event of the grid, where the `requestType` is set to `beginEdit`.

In the following code example, the "Customer ID" column receives focus.

```typescript
    actionComplete(args: DialogEditEventArgs) {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            ((args.form as HTMLFormElement).elements.namedItem('CustomerID') as HTMLInputElement).focus();
        }
    }
```

### Disable default form validation

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides built-in support for [Angular form validation](https://v17.angular.io/guide/form-validation) to ensure data integrity and accuracy during editing. Scenarios may arise where disabling the default form validation rules is necessary. This can be achieved using the [removeRules](https://helpej2.syncfusion.com/documentation/api/form-validator#removerules) method within the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event of the grid.

To disable default form validation rules in the grid, use the following approach:

```typescript
    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
        (args.form as HTMLFormElement)['ej2_instances'][0].removeRules();
        }
    }
```

> An alternative method to disable validation rules: `args.form.ej2_instances[0].rules = {}`.

### Add validation rules for custom editors

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides the ability to add validation rules for fields not present in the column model. This feature prevents erroneous or inconsistent data from being submitted, enhancing the reliability of application data.

To add validation rules, utilize the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event along with the [addRules](https://ej2.syncfusion.com/documentation/api/form-validator#addrules) method.

The following approach uses the `addRules` method to add validation rules for custom editors in the `actionComplete` event:

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

Rendering a [Tab](../../../tab/index.html) component inside the dialog template enhances the grid editing experience. This feature is especially useful for presenting multiple editing sections or categories in a tabbed layout, ensuring a more intuitive and easily navigable interface for data editing.

Enable dialog mode with [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#mode) set to `Dialog`. Place the `Tab` component inside [editSettingsTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#template).

The following example renders a tab component inside the edit dialog. The tab component has two tabs. Once fields in the first tab are filled and navigation to the second tab occurs, validation for the first tab is performed before proceeding.

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

>[angular-template-driven-vs-reactive-forms](https://www.syncfusion.com/blogs/post/angular-template-driven-vs-reactive-forms.aspx)
