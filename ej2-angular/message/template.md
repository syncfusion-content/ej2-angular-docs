---
layout: post
title: Template in Angular Message component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Message component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Message component

The message supports templates that allows the user to customize the content with a custom structure. The content can be a string, paragraph, or any other HTML element. The template can be rendered through the [content](https://ej2.syncfusion.com/angular/documentation/api/message/#content) property or added directly to the HTML element.

In the following sample, the Message component content is customized with HTML elements and Angular Button components, which are directly added to the HTML element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/message/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/message/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/message/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/message/template-cs1" %}