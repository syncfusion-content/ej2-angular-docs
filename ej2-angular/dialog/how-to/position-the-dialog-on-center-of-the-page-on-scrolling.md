---
layout: post
title: Position the dialog on center of the page on scrolling in Angular Dialog component | Syncfusion
description: Learn here all about Position the dialog on center of the page on scrolling in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Position the dialog on center of the page on scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Position the dialog on center of the page on scrolling in Angular Dialog component

By default, when scroll the page/container Dialog also scrolled along with the page/container.
When a user expects to display the Dialog in the same position without scrolling achieving this in sample level as like below. Here added 'e-fixed' class to Dialog element and prevent the scrolling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/scrolling-cs1" %}
