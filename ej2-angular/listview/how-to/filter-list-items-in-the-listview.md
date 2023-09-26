---
layout: post
title: Filter list items in the listview in Angular Listview component | Syncfusion
description: Learn here all about Filter list items in the listview in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter list items in the listview 
documentation: ug
domainurl: ##DomainURL##
---

# Filter list items in the listview in Angular Listview component

The filtered data can be displayed in the ListView component depending upon on user inputs using the [`DataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started). Refer to the following steps to render the ListView with filtered data.

* Render a textbox to get input for filtering data.

* Render ListView with [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#datasource), and set the [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property.

* Bind the `keyup` event for textbox to perform filtering operation. To filter list data, pass the list data source to the `DataManager`, manipulate the data using the [`executeLocal`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#executelocal) method, and then update filtered data as ListView dataSource.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/getting-started-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs6" %}

> In this demo, data has been filtered with starting character of the list items. You can also filter list items with ending character by passing the `endswith` in [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) clause instead of `startswith`.
