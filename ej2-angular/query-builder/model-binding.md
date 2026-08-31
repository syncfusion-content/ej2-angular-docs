---
layout: post
title: Model Binding in Angular Query Builder UI | Syncfusion
description: Enable two-way model binding between the Syncfusion Angular Query Builder UI field, operator, and value columns and custom components.
platform: ej2-angular
control: Model binding
documentation: ug
domainurl: ##DomainURL##
---

# Model Binding in Angular Query Builder UI

Model binding lets you configure the built-in Syncfusion editors used in the field, operator, and value columns of the Query Builder. Implement model binding by configuring the [`fieldModel`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#fieldmodel), [`operatorModel`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#operatormodel), and [`valueModel`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#valuemodel) properties. The `fieldModel` and `operatorModel` properties configure the DropDownList editors used for the field and operator columns, while the `valueModel` property configures the value editors, which vary based on the column `type`.

The editor applied to a value column depends on the column `type`. The following table summarizes this mapping (see [Columns](./columns) for the supported column types):

| Column type | Value editor |
| --- | --- |
| `number` | NumericTextBox |
| `date` | DatePicker |
| `boolean` | RadioButton |
| `string` | TextBox (default) or DropDownList/MultiSelect when the column `values` are defined |

The following snippet shows a minimal model binding configuration on the Query Builder:

```html
<ejs-querybuilder width="100%" [rule]="importRules"
    [fieldModel]="{ allowFiltering: true, popupHeight: '400px' }"
    [operatorModel]="{ allowFiltering: true, popupHeight: '500px' }"
    [valueModel]="{ numericTextBoxModel: { cssClass: 'e-custom' }, datePickerModel: { cssClass: 'e-custom' } }">
    <e-columns>
      <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
      <e-column field="HireDate" label="Hire Date" type="date"></e-column>
    </e-columns>
</ejs-querybuilder>
```

## Field model

The [`fieldModel`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#fieldmodel) property accepts a [`FieldSettingsModel`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel) that is applied to the DropDownList editor used to select the field for a rule. Common keys include `allowFiltering`, `popupHeight`, `popupWidth`, and the standard DropDownList model settings.

## Operator model

The [`operatorModel`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#operatormodel) property accepts a [`FieldSettingsModel`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/fieldSettingsModel) that is applied to the DropDownList editor used to select the operator for a rule. It supports the same keys as `fieldModel`.

## Value model

The [`valueModel`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#valuemodel) property accepts an object whose keys configure the value editor for each column `type`. The following nested keys are supported:

| Key | Editor configured | Description |
| --- | --- | --- |
| `numericTextBoxModel` | NumericTextBox | Applied to the value editor for `number` columns. Accepts a [`NumericTextBoxModel`](https://ej2.syncfusion.com/angular/documentation/api/numeric-text-box/numericTextBoxModel). |
| `datePickerModel` | DatePicker | Applied to the value editor for `date` columns. Accepts a [`DatePickerModel`](https://ej2.syncfusion.com/angular/documentation/api/date-picker/datePickerModel). |
| `textBoxModel` | TextBox | Applied to the default value editor for `string` columns. Accepts a [`TextBoxModel`](https://ej2.syncfusion.com/angular/documentation/api/textbox/textboxModel). |
| `radioButtonModel` | RadioButton | Applied to the value editor for `boolean` columns. Accepts a [`RadioButtonModel`](https://ej2.syncfusion.com/angular/documentation/api/radio-button/radioButtonModel). |
| `multiSelectModel` | MultiSelect | Applied to the value editor for `string` columns with values. Accepts a [`MultiSelectModel`](https://ej2.syncfusion.com/angular/documentation/api/multi-select-dropdown/multiSelectModel). |

The following sample demonstrates model binding. The model bindings live in the `template-driven.html` file, included as the second tab in the snippet below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/model-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template-driven.html" %}
{% include code-snippet/query-builder/model-binding-cs1/src/template-driven.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/model-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/model-binding-cs1" %}

## See also

* [Columns](./columns)
* [Template](./template)
* [Filtering](./filtering)
* [Data binding](./data-binding)