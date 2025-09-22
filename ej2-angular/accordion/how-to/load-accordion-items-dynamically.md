---
layout: post
title: Dynamic item loading in Angular Accordion | Syncfusion
description: Learn here all about Load accordion items dynamically in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Load accordion items dynamically in Angular Accordion component

The Syncfusion Angular Accordion component supports dynamic item loading at runtime, allowing updates to content without rebuilding the component. This is useful for user-driven interactions, real-time data integration, or progressive content loading. Use the [`addItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#additem) method to add items by specifying the item object and index.

In the following demo, you can add the accordion content by expanding any accordion header content using
[`expanded`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expanded) event.

* Data is fetched from the data source.

* The data is formatted as a JSON object with [`header`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem/#header)
and [`content`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem/#content) fields.

* Here last index is calculated to append the new accordion at the end.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-items-dynamically-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-items-dynamically-cs1" %}
