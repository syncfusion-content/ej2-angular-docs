---
layout: post
title: Dynamically load child items in Angular ListView | Syncfusion
description: Learn here all about Load list items in child list dynamically in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Dynamically load child items in Angular ListView component

This article demonstrates how to dynamically load list items into a child list based on parent item selection in the ListView component.

To load list items in child list dynamically, push the new list item data into the existing [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#datasource) using the [`select`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event.

## Implementation steps

1. Initially, render the ListView with the required data source.

2. Bind the [`select`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event that triggers selecting list item in the ListView component. By using the select event, you can push the new list item to the child list of the data source on specifying its item index. Item index can be obtained from the [`SelectEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/list-view/selectEventArgs/) of the select event.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/checklist-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/checklist-cs6/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/checklist-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/checklist-cs6" %}
