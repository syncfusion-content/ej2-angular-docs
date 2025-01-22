---
layout: post
title: Grouping in Angular ListView component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular ListView component

ListView supports to wrap the nested element into a group based on category. The category of each list item can be mapped with [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#groupby) field in the data table, which also supports single-level navigation.

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

The grouping header can be customized by using [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#grouptemplate) property for both inline and fixed group header.