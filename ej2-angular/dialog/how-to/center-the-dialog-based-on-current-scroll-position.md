---
layout: post
title: How to center the Dialog on scroll in Angular Dialog | Syncfusion
description: Center the Syncfusion Angular modal Dialog based on the current page scroll position so the popup stays aligned with the visible viewport.
platform: ej2-angular
control: Center the dialog based on current scroll position 
documentation: ug
domainurl: ##DomainURL##
---

# How to center the Dialog on scroll in Angular Dialog

The dialog centers based on the target container by default. If no target is specified, the dialog renders relative to the body and centers at the current viewport position.

The following sample demonstrates centering the modal dialog based on the current page scroll position.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/center-the-dialog-cs1" %}
