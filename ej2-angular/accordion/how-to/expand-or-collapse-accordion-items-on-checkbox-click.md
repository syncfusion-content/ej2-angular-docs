---
layout: post
title: Control Accordion with checkbox | Syncfusion
description: Learn here all about Expand or collapse accordion items on checkbox click in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion 
documentation: ug
domainurl: ##DomainURL##
---

# Control Accordion with checkbox in Angular Accordion component

The Angular Accordion component typically expands or collapses items when clicking their headers or expand/collapse icons. However, you can control this behavior programmatically using a checkbox to toggle multiple items simultaneously, which is useful for centralized control in forms or dashboards.

To implement this, ensure the `@syncfusion/ej2-angular-navigations` and `@syncfusion/ej2-angular-buttons` packages are installed. Use the Accordion’s [`click`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#click) and [`expanding`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expanding) events, along with the [`expandItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expanditem) method, to manage item states. The checkbox’s [`change`](https://ej2.syncfusion.com/angular/documentation/api/check-box/#change) event triggers the logic to expand or collapse items based on its state.

The example below demonstrates a checkbox controlling the expand/collapse state of Accordion items.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/accordion/accordion-checkbox-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-checkbox-cs1" %}
