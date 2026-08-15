---
layout: post
title: Center the Dialog on page scroll in Angular Dialog | Syncfusion
description: Keep the Syncfusion Angular Dialog fixed at the center of the viewport while the page scrolls by adding the e-fixed class and preventing page scroll.
platform: ej2-angular
control: Position the dialog on center of the page on scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# How to center the Dialog on page scroll in Angular Dialog

By default, the dialog scrolls along with the page or container. To keep the dialog in a fixed position without scrolling, add the `e-fixed` class to the dialog element and prevent scrolling as shown in the sample below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/scrolling-cs1" %}
