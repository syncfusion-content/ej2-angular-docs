---
layout: post
title: Prevent closing of modal dialog in Angular Dialog component | Syncfusion
description: Learn here all about Prevent closing of modal dialog in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent closing of modal dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent modal dialog from closing in Angular Dialog component

Prevent the modal dialog from closing by setting the [`beforeClose`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#beforeclose) event argument's cancel property to `true`.
The following sample closes the dialog only when you enter a username with a minimum of 4 characters; otherwise, it remains open.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-validation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-validation-cs1" %}
