---
layout: post
title: How to prevent closing of modal Dialog in Angular Dialog | Syncfusion
description: Block the Syncfusion Angular modal Dialog from closing by setting the beforeClose event argument cancel property to true to enforce validation.
platform: ej2-angular
control: Prevent closing of modal dialog 
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent closing of modal Dialog in Angular Dialog

Prevent the modal dialog from closing by setting the [`beforeClose`](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#beforeclose) event argument's cancel property to `true`.
The following sample closes the dialog only when you enter a username with a minimum of 4 characters; otherwise, it remains open.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-validation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-validation-cs1" %}
