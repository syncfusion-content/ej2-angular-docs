---
layout: post
title: Load content through post in Angular Accordion component | Syncfusion
description: Learn here all about Load content through post in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load content through post 
documentation: ug
domainurl: ##DomainURL##
---

# Load content through post in Angular Accordion component

Accordion supports to load external contents through `AJAX` library. Refer the below steps.

* Import the `Ajax` module from `ej2-base` and initialize with URL path.

* Get data from the Ajax `Success` event to initialize Accordion with retrieved external path data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-ajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-ajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-ajax-cs1" %}