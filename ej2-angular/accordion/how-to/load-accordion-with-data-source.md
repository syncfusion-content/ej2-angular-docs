---
layout: post
title: Data source binding in Angular Accordion | Syncfusion
description: Learn here all about Load accordion with data source in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Load accordion with data source in Angular Accordion component

You can bind any data object to Accordion items, by mapping it to [`header`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem/#header) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem/#content)&nbsp; property.

To set up data binding, ensure the `@syncfusion/ej2-angular-navigations` and `@syncfusion/ej2-data` packages are installed. Use the `DataManager` from `@syncfusion/ej2-data` to query data sources, such as an `OData` service, and handle the response to populate the Accordion. The resulting data, formatted as a JSON object with [`header`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem/#header) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem/#content) fields, which is set to [`items`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#items) property of Accordion.

The example below demonstrates an Accordion populated with data from an OData service using `DataManager`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-cs5" %}
