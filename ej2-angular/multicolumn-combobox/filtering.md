---
layout: post
title: Filtering in Angular MultiColumn ComboBox component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiColumn ComboBox 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular MultiColumn ComboBox component

The MultiColumn ComboBox has built-in support to filter the data items, which allows users to filter the list of items based on their input. The filter operation starts as soon as you start typing characters in the component. The filtering can be disabled by setting the when [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#allowfiltering) to `false`. By default the value is `true`.

## Change the filter type

You can change the filter type by using the [filterType](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#filtertype) property. The `filterType` supports filtering options such as [StartsWith](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/filterType/), [EndsWith](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/filterType/) and [Contains](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/filterType/).

In the following examples, data filtering is done with `EndsWith` type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/filtering/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/filtering/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/filtering" %}