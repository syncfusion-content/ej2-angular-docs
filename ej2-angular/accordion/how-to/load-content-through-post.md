---
layout: post
title: Load content through post in Angular Accordion component | Syncfusion
description: Learn here all about Load content through post in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Load content through post in Angular Accordion component

The Angular Accordion component supports loading dynamic external content into its items using the `AJAX` library from `@syncfusion/ej2-base`. This feature is useful for fetching HTML, JSON, or other data from APIs or remote servers.

Follow these steps to load content via AJAX:

* Import the `Ajax` module from `@syncfusion/ej2-base` and initialize it with the URL path.

* Retrieve data from the AJAX `success` event and use it to initialize or update the Accordion.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-ajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-ajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-ajax-cs1" %}