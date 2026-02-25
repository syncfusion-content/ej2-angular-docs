---
layout: post
title: Prevent opening of the dialog in Angular Dialog component | Syncfusion
description: Learn here all about Prevent opening of the dialog in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent opening of the dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent the dialog from opening in Angular Dialog component

Prevent the dialog from opening by setting the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#beforeopen) event argument's cancel property to `true`.
The following sample opens the success dialog only when you enter a username with a minimum of 4 characters; otherwise, it does not open.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-check-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-check-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-check-cs1" %}
