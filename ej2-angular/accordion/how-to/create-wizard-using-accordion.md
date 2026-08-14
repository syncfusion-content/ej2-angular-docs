---
layout: post
title: How to create wizard using Accordion in Angular Accordion | Syncfusion
description: Build a multi-step Angular Accordion wizard with validation that enables or disables next items via the enableItem and expandItem methods.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# How to create wizard using Accordion in Angular Accordion

Accordion items can be disabled dynamically by passing the index and boolean value with the [`enableItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion#enableitem) method and also dynamically expand the item using [`expandItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion#expanditem) method.

The below Wizard sample is designed for Online Shopping model. In this, each Accordion item is integrated with required components to fill the details and designed for getting user details and making payment at the end. Each field is provided with validation for all mandatory option to enable/disable to next Accordion. In below sample, accordion items can be disabled dynamically with [`enableItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion#enableitem) method using [`created`](https://ej2.syncfusion.com/angular/documentation/api/accordion#created) event.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/accordion/accordion-disable-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/accordion/accordion-disable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-disable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-disable-cs1" %}