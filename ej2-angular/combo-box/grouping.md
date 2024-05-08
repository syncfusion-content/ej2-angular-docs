---
layout: post
title: Grouping in Angular Combo box component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Combo box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Combo box component

The ComboBox supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

In the following sample, vegetables are grouped according on its category using `groupBy` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/getting-started-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs15" %}

## Customization

The grouping header is also provided with customization option. This allows custom designing using the [groupTemplate](https://ej2.syncfusion.com/angular/documentation/api/combo-box/#grouptemplate) property for both inline and fixed header.

## See Also

* [Group Template support to ComboBox](./templates#group-template).