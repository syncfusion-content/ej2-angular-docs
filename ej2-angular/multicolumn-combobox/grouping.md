---
layout: post
title: Grouping in Angular MultiColumn ComboBox component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiColumn ComboBox 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular MultiColumn ComboBox component

The MultiColumn ComboBox supports wrapping nested elements into a group based on different categories by using the[groupBy](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/fieldSettingsModel/#groupby) property. The category of each list item can be mapped through the groupBy  field in the data table. The group header are displayed as fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

In the following sample, countries are grouped according on its category using `groupBy` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/groupby/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/groupby/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/groupby" %}