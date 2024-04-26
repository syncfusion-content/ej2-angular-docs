---
layout: post
title: Load accordion with data source in Angular Accordion component|Syncfusion
description: Learn here all about Load accordion with data source in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load accordion with data source 
documentation: ug
domainurl: ##DomainURL##
---

# Load accordion with data source in Angular Accordion component

You can bind any data object to Accordion items, by mapping it to [`header`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem#header) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem#content)&nbsp; property.

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with [`header`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem#header) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem#content) fields, which is set to [`items`](https://ej2.syncfusion.com/angular/documentation/api/accordion#items) property of Accordion.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-cs5" %}
