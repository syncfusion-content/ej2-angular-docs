---
layout: post
title: Wizard with Angular Accordion | Syncfusion
description: Learn here all about Create wizard using accordion in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Create wizard using accordion in Angular Accordion component

Accordion items can be disabled dynamically by passing the index and boolean value with the [`enableItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#enableitem) method and also dynamically expand the item using [`expandItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expanditem) method.

The below Wizard sample is designed for Online Shopping model. In this, each Accordion item is integrated with required components to fill the details and designed for getting user details and making payment at the end. Each field is provided with validation for all mandatory option to enable/disable to next Accordion. In below sample, accordion items can be disabled dynamically with [`enableItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#enableitem) method using [`created`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#created) event.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/accordion/accordion-disable-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-disable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-disable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-disable-cs1" %}