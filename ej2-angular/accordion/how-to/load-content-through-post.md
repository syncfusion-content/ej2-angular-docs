---
layout: post
title: How to load content through Ajax in Angular Accordion | Syncfusion
description: Load dynamic content into the Angular Accordion via AJAX requests using the Ajax module from ej2-base to fetch HTML or JSON.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# How to load content through Ajax in Angular Accordion

The Angular Accordion component supports loading dynamic external content into its items using the `AJAX` library from `@syncfusion/ej2-base`. This feature is useful for fetching HTML, JSON, or other data from APIs or remote servers.

Follow these steps to load content via AJAX:

* Import the `Ajax` module from `@syncfusion/ej2-base` and initialize it with the URL path.

* Retrieve data from the AJAX `success` event and use it to initialize or update the Accordion.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/accordion/accordion-ajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-ajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-ajax-cs1" %}