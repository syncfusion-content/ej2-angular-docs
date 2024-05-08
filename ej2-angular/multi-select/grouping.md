---
layout: post
title: Grouping in Angular Multi select component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Multi select component

The MultiSelect supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

In the following sample, vegetables are grouped according on its category using `groupBy` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs14" %}

## Customization

The grouping header is also provided with customization option. This allows custom
designing using the [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#grouptemplate) property for both inline and fixed headers.

## Grouping with CheckBox

Previously, there is no checkbox for group headers. Now, this feature allow to render checkbox in group header to select the group items in single selection. You can enable this feature by setting [`enableGroupCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#enablegroupcheckbox) property value as **true** and **mode** property as **CheckBox**.

Inject the `CheckBoxSelection` module in the MultiSelect to use the checkbox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs15" %}

## See Also

* [Group Template support to MultiSelect](./templates#group-template).