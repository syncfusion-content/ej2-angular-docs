---
layout: post
title: Load accordion items dynamically in Angular Accordion component|Syncfusion
description: Learn here all about Load accordion items dynamically in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load accordion items dynamically 
documentation: ug
domainurl: ##DomainURL##
---

# Load accordion items dynamically in Angular Accordion component

Accordion items can be added dynamically by passing the item and index value with the [`addItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion#additem) method.

In the following demo, you can add the accordion content by expanding any accordion header content using
[`expanded`](https://ej2.syncfusion.com/angular/documentation/api/accordion#expanded) event.

* Data is fetched from the data source.

* The data is formatted as a JSON object with [`header`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem#header)
and [`content`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem#content) fields.

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
