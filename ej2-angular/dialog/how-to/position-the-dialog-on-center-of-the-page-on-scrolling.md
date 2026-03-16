---
layout: post
title: Position the dialog on center of the page on scrolling in Angular Dialog component | Syncfusion
description: Learn here all about Position the dialog on center of the page on scrolling in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Position the dialog on center of the page on scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Position the dialog at center when scrolling in Angular Dialog component

By default, the dialog scrolls along with the page or container. To keep the dialog in a fixed position without scrolling, add the `e-fixed` class to the dialog element and prevent scrolling as shown in the sample below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/scrolling-cs1" %}
