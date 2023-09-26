---
layout: post
title: Edit types in Angular Treegrid component | Syncfusion
description: Learn here all about Edit types in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Edit types 
documentation: ug
domainurl: ##DomainURL##
---

# Edit types in Angular Treegrid component

## Cell edit type and its params

The [`columns.editType`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittype) is used to customize the edit type of the particular column.
You can set the [`columns.editType`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](../../numerictextbox) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](../../textbox) component for string data type.

* `dropdownedit` - [`DropDownList`](../../drop-down-list) component for list data type.

* `booleanedit` - [`CheckBox`](../../check-box) component for boolean data type.

* `datepickeredit` - [`DatePicker`](../../datepicker) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](../../datetimepicker) component for date time data type.

Also, you can customize model of the [`columns.editType`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edittype) component through the [`columns.edit.params`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](../../numerictextbox) | params: { decimals: 2, value: 5 }
[`TextBox`](../../textbox) | -
[`DropDownList`](../../drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](../../check-box) | params: { checked: true}
[`DatePicker`](../../datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](../../datetimepicker) | params: { value: new Date() }

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs11" %}

> If the edit type is not defined in the column, then it will be considered as the `stringedit` type (Textbox component).

### Restrict to type decimal points in a NumericTextBox while editing the numeric column

By default, the number of decimal places will be restricted to two in the NumericTextBox while editing the numeric column. Restrict to type the decimal points in a NumericTextBox by using the [validateDecimalOnType](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#validatedecimalontype) and [decimals](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#decimals) properties of NumericTextBox.

In the following demo, while editing the row, the decimal point values have been restricted to type in the NumericTextBox of the **progress** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs12" %}

### Provide custom data source and enabling filtering to DropDownList

Provide the data source to the DropDownList by using the [columns.edit.params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property.

While setting a new data source using the edit params, you must specify a new [query](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#query) property too for the DropDownList as follows:

```typescript
{
    this.priorityParams = {
            params: {
                allowFiltering: true,
                dataSource: new DataManager(this.prior),
                fields: { text: 'priorityType', value: 'priorityType' },
                query: new Query(),
                actionComplete: () => false
            }
        };
}

```

Enable filtering for the DropDownList by passing the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#allowfiltering) as **true** to the edit params.

In the following demo, the DropDownList is rendered with the custom Datasource for the **priority** column and filtering is enabled to search the DropDownList items:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-cs1" %}

## Cell edit template

The cell edit template is used to add a custom component for a particular column by invoking the following functions:

* `create` - It is used to create the element at the time of initialization.

* `write` - It is used to create the custom component or assign default value at the time of editing.

* `read` - It is used to read the value from the component at the time of save.

* `destroy` - It is used to destroy the component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs13" %}

### Render TimePicker component while editing

Use the cell edit template feature of the tree grid to render the TimePicker component in the tree grid edit form. In the following sample, the TimePicker component is rendered in the **startDate** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs14" %}

### Render MultiSelect DropDown component while editing

Use the cell edit template feature of the tree grid to render the MultiSelect DropDown component in the tree grid edit form.

In the following sample, the MultiSelect DropDown component is rendered in the **priority** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs15/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs15" %}

### Render RichTextEditor component while editing

Use the cell edit template feature of the tree grid to render the RichTextEditor component in the tree grid edit form. In the following sample, the RichTextEditor component is rendered in the **taskName** column, so the [allowTextWrap](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowtextwrap) property is used as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs16" %}