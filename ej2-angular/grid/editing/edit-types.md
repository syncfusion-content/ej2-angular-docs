---
layout: post
title: Edit types in Angular Grid component | Syncfusion
description: Learn here all about Edit types in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Edit types 
documentation: ug
domainurl: ##DomainURL##
---

# Edit types in Angular Grid component

## Customize editors using params

The [`columns.editType`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edittype) is used to define the editor component for any particular column. You can set the [`columns.editType`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edittype) based on data type of the column.

* [`NumericTextBox`](../../numerictextbox) component for integers, double, and decimal data types.

* [`TextBox`](../../textbox) component for string data type.

* [`DropDownList`](../../drop-down-list) component to show all unique values related to that field.

* [`CheckBox`](../../check-box) component for boolean data type.

* [`DatePicker`](../../datepicker) component for date data type.

* [`DateTimePicker`](../../datetimepicker) component for date time data type.

Also, you can customize the behavior of the editor component through the [`columns.edit.params`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit).

The following table describes editor component and their example edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](../../numerictextbox) | params: { decimals: 2, value: 5 }
[`DropDownList`](../../drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](../../check-box) | params: { checked: true}
[`DatePicker`](../../datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](../../datetimepicker) | params: { value: new Date() }

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs11" %}

> If edit type is not defined in the column, then it will be considered as the **stringedit** type (Textbox component) .

### Restrict to type decimal points in a NumericTextBox while editing the numeric column

By default, the number of decimal places will be restricted to two in the NumericTextBox while editing the numeric column. We can restrict to type the decimal points in a NumericTextBox by using the [`validateDecimalOnType`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#validatedecimalontype) and [`decimals`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#decimals) properties of NumericTextBox.

In the below demo, while editing the row we have restricted to type the decimal point value in the NumericTextBox of **Freight** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/prevent-decimalpoint-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/prevent-decimalpoint-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/prevent-decimalpoint-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/prevent-decimalpoint-cs1" %}

### Provide custom data source and enabling filtering to DropDownList

You can provide data source to the DropDownList by using the [`columns.edit.params`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit) property.

While setting new data source using edit params, you must specify a new [`query`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#query) property too for the DropDownList as follows,

```typescript
{
    this.countryParams = {
        params:   {
            allowFiltering: true,
            dataSource: this.country,
            fields: {text:'countryName',value:'countryName'},
            query: new Query(),
            actionComplete: () => false
            }
        }
}

```

You can also enable filtering for the DropDownList by passing the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#allowfiltering) as **true** to the edit params.

In the below demo, DropDownList is rendered with custom Datasource for the **ShipCountry** column and enabled filtering to search DropDownList items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs12" %}

## Custom editors using template

The cell edit template is used to add a custom component for a particular column by invoking the following functions:

* **create** - It is used to create the element at the time of initialization.

* **write** - It is used to create custom component or assign default value at the time of editing.

* **read** - It is used to read the value from the component at the time of save.

* **destroy** - It is used to destroy the component.

### Render TimePicker component while editing

Use the cell edit template feature of the Grid to render the TimePicker component in the Grid edit form. In the below sample, we have rendered TimePicker component in the **OrderDate** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs13" %}

### Render AutoComplete component while editing

Use the cell edit template feature of the Grid to render the AutoComplete component in the Grid edit form. In the below sample, we have rendered AutoComplete component in the **CustomerID** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs14" %}

### Render MultiSelect DropDown component while editing

Use the cell edit template feature of the Grid to render the MultiSelect DropDown component in the Grid edit form. In the below sample, we have rendered MultiSelect DropDown component in the **ShipCity** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs15/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs15" %}

### Render MaskedTextBox component while editing

Use the cell edit template feature of the Grid to render the MaskedTextBox component in the Grid edit form. In the following sample, the MaskedTextBox component is rendered in the Mask column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs22/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs22/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs22" %}

### Render RichTextEditor component while editing

Use the cell edit template feature of the Grid to render the RichTextEditor component in the Grid edit form. In the below sample, we have rendered RichTextEditor component in the **ShipAddress** column, so we use [allowTextWrap](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowtextwrap) property to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs16" %}

### Render multiple columns in DropDownList component while editing

Use the cell edit template feature of the Grid to render the DropDownList component in the Grid edit form.

The DropDownList has been provided with several options to customize each list item, group title, selected value, header, and footer element. By default, list items can be rendered as a single column in the DropDownList component. Instead of this, multiple columns can be rendered. This can be achieved by using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#headertemplate) and [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#itemtemplate) properties of the DropDownList component.

This is demonstrated in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/multicolumn-dropdown-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/multicolumn-dropdown-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/multicolumn-dropdown-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/multicolumn-dropdown-cs1" %}

### Using template

The cell editor for a particular column can be specified using the content of the NgTemplate. The [`#editTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edittemplate-string) template variable identifies the NgTemplate content as the corresponding column editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs17/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs17" %}