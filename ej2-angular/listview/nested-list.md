---
layout: post
title: Nested list in Angular ListView component | Syncfusion
description: Learn here all about Nested list in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Nested list in Angular ListView component

The ListView component supports nested lists, allowing you to display hierarchical data structures with multiple levels of navigation. To create nested lists, define the [`child`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#child) property in your data source to specify child items for each parent list item.

Nested lists enable users to drill down through hierarchical data by clicking on parent items to reveal their child items. Users can navigate back to parent levels using the built-in back navigation functionality.

The sample below illustrates how to generate a nested list structure using hierarchical data source configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/nested-list-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/nested-list-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/nested-list-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/nested-list-cs1" %}