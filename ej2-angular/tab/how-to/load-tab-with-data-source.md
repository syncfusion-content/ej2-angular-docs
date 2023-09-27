---
layout: post
title: Load tab with data source in Angular Tab component | Syncfusion
description: Learn here all about Load tab with data source in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load tab with data source 
documentation: ug
domainurl: ##DomainURL##
---

# Load tab with data source in Angular Tab component

You can bind any data object to Tab items, by mapping it to [`header`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem#header) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem#content)&nbsp; property.

You can watch the following video to learn more about loading tab items from a remote data source in the Angular Tabs component:

{% youtube "https://www.youtube.com/watch?v=N34FcZmCN98" %}

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with `header` and `content` fields, which is set to [`items`](https://ej2.syncfusion.com/angular/documentation/api/accordion#items) property of Tab.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/basic-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/basic-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs7" %}
