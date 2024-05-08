---
layout: post
title: Center the dialog based on current scroll position in Angular Dialog component | Syncfusion
description: Learn here all about Center the dialog based on current scroll position in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Center the dialog based on current scroll position 
documentation: ug
domainurl: ##DomainURL##
---

# Center the dialog based on current scroll position in Angular Dialog component

The dialog is always centered based on the target container. If the target is not specified, then the dialog will be rendered based on its body and centered in the position of the current viewpoint.

In the following sample, the model dialog is centered based on its current scroll position of the page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/center-the-dialog-cs1" %}
