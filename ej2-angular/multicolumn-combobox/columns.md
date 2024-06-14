---
layout: post
title: Columns in Angular MultiColumn ComboBox component | Syncfusion
description: Learn here all about Columns in Syncfusion Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiColumn ComboBox 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular MultiColumn ComboBox component

The `<e-column>` selector allows to define the data fields to be displayed in the MultiColumn ComboBox.

It provides options such as `field`, `header`, `width`, `format`, `template` and more.

* [field](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/column/#field) property - Specifies the fields to be displayed in each column, mapped from the data source to the multicolumn combobox.

* [header](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/column/#header) property - Specifes the data to be displayed in the column header.

* [width](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/column/#width) property - Specifes the column width.

In the following example, the column is customized with `field`, `header` and `width` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/column-field/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/column-field/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/column-field" %}

## Setting text align

You can use the [textAlign](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/column/#textalign) property to define the text alignment of the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/column-textalign/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/column-textalign/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/column-textalign" %}

## Setting template

You can use the [template](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/column/#template) property to customize the each cell of the column. It accepts either a template string or an HTML element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/column-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/column-template/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multicolumn-combobox/column-template/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/column-template" %}

## Setting display as checkBox

You can use [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/column/#displayascheckbox) property to display the column value as checkbox instead of a boolean value. By default, the value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/column-checkbox/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/column-checkbox/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/column-checkbox" %}

## Setting custom attributes

You can use the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/column/#customattributes) property to customize the CSS styles and attributes of each column's content cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/custom-attribute/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/custom-attribute/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/custom-attribute" %}