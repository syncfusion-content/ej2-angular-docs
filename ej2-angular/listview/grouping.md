---
layout: post
title: Grouping in Angular Listview component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Listview component

ListView supports to wrap the nested element into a group based on category.

The category of each list item can be mapped with groupBy field in the data table, which also supports single-level navigation.

In below sample, Cars are grouped based on its category using groupBy field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/grouping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/grouping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/grouping-cs1" %}

## Customization

The grouping header can be customized by using groupTemplate property for both inline and fixed group header.