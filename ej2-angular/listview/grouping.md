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

The ListView component supports organizing items into groups based on categories. Each list item's category can be mapped using the [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#groupby) field in the data source, enabling single-level navigation within grouped content.

In the sample below, cars are grouped based on their category using the groupBy field.

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

The grouping header can be customized using the [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#grouptemplate) property. This property allows you to define custom templates for group headers in both inline and fixed header scenarios. The groupTemplate accepts string or function templates to render custom content, enabling you to add icons, styling, or additional information to group headers based on your application requirements.