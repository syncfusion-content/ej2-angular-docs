---
layout: post
title: Expand or collapse accordion items on checkbox click in Angular Accordion component|Syncfusion
description: Learn here all about Expand or collapse accordion items on checkbox click in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Expand or collapse accordion items on checkbox click 
documentation: ug
domainurl: ##DomainURL##
---

# Expand or collapse accordion items on checkbox click in Accordion component

By default, accordion items expand or collapse by clicking the accordion item header or clicking expand/collapse icon in accordion header.

You can also expand or collapse the accordion items through external button click. In the following example, when you change the checkbox provided then the accordion items will expand/collapse accordingly. This requirement can be achieved with the help of accordion's [`click`](https://ej2.syncfusion.com/angular/documentation/api/accordion#click), [`expanding`](https://ej2.syncfusion.com/angular/documentation/api/accordion#expanding) events, [`expandItem`](https://ej2.syncfusion.com/angular/documentation/api/accordion#expanditem) public method and checkbox's [`change`](https://ej2.syncfusion.com/angular/documentation/api/check-box#change) event.

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
