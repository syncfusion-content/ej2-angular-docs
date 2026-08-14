---
layout: post
title: How to load tab with data source in Angular Tab | Syncfusion
description: Bind the Angular Tab to a remote data source like OData with DataManager, mapping header and content fields into the items property.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to load tab with data source in Angular Tab

You can bind any data object to Tab items by mapping the data to the [`header`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#header) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem/#content) property.

You can watch the following video to learn more about loading tab items from a remote data source in the Angular Tabs component:

{% youtube "https://www.youtube.com/watch?v=N34FcZmCN98" %}

In the following demonstration, data is retrieved from an OData service using Syncfusion's DataManager. The retrieved data is structured as JSON objects with `header` and `content` fields, which are then bound to the [`items`](https://ej2.syncfusion.com/angular/documentation/api/tab/#items) property of the Tab component. The DataManager handles the HTTP requests and data formatting automatically, simplifying integration with remote data sources.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/basic-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs7" %}