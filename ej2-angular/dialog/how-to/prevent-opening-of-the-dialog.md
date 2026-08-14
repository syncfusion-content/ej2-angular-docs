---
layout: post
title: How to open a Dialog on condition in Angular Dialog | Syncfusion
description: Open the Syncfusion Angular Dialog only when a condition is met by setting the beforeOpen event argument cancel property to true otherwise.
platform: ej2-angular
control: Prevent opening of the dialog 
documentation: ug
domainurl: ##DomainURL##
---

# How to open a Dialog on condition in Angular Dialog

Prevent the dialog from opening by setting the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#beforeopen) event argument's cancel property to `true`.
The following sample opens the success dialog only when you enter a username with a minimum of 4 characters; otherwise, it does not open.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-check-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-check-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-check-cs1" %}
