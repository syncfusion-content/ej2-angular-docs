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

The dialog centers itself within its target container by default. When no `target` is specified, the dialog renders relative to the body and centers against the current viewport.

The following sample demonstrates a modal dialog configured with `isModal='true'` so it centers within the page viewport. The `overlayClick` event is used to hide the dialog when the user clicks the modal overlay.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/center-the-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/center-the-dialog-cs1" %}
