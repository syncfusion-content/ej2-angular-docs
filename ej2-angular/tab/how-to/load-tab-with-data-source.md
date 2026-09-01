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

You can bind any data object to Tab items by mapping the data to the [`header`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective/#header) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective/#content) properties.

> **Dependencies:** install the `@syncfusion/ej2-data` package to use `DataManager` and adaptors.

You can watch the following video to learn more about loading tab items from a remote data source in the Angular Tabs component:

{% youtube "https://www.youtube.com/watch?v=N34FcZmCN98" %}

## Steps

1. Create a `DataManager` configured with the remote URL and an `ODataAdaptor`.
2. Bind the result to the Tab's [`items`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel/#items) property after the request resolves.
3. Optionally map remote field names to `header.text` and `content` (see [Field mapping](#field-mapping)).

In the following demonstration, data is retrieved from an OData service using Syncfusion's `DataManager`; the response is structured as JSON objects with `header` and `content` fields, which are then bound to `items`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/basic-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs7" %}

## Field mapping

When the remote payload uses different field names (for example, `Title` and `Body`), map them to `header.text` and `content` in a transform step before assigning to `items`.

## See Also

* [Load content through Ajax](./load-content-through-post)
* [Load Tab items dynamically](./load-tab-items-dynamically)