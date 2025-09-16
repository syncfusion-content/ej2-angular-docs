---
layout: post
title: Custom expand/collapse in Angular Accordion | Syncfusion
description: Learn here all about Customize expand collapse actions in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Customize expand collapse actions in Angular Accordion component

Accordion component supports customizing the expand or collapse animation action behavior. You can manually change the expand animation action performed after the collapse animation operation performed on already expand pane when the expand icons are clicked.

By default, the Accordion component pane is expanded or collapsed, when click the expand or collapse icon. It is not affected on already expand pane.

The following sample demonstrates, how to expand the collapsed Accordion item after collapse animation performed on the expanded Accordion item using [`created`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#created), [`expanding`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expanding), and [`expanded`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expanded) event. In the Expanding event, get the previously expanded item index and prevent the expanding behavior using `args.cancel` option. Expand the Accordion item dynamically based on specifying the `index` value using the [`expandItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expanditem) public method and [`expanded`](https://ej2.syncfusion.com/angular/documentation/api/accordion/#expanded) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-actions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-actions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/accordion/accordion-actions-cs1" %}