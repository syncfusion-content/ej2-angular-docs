---
layout: post
title: Prevent closing of modal dialog in Angular Dialog component | Syncfusion
description: Learn here all about Prevent closing of modal dialog in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent closing of modal dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent closing of modal dialog in Angular Dialog component

You can prevent closing of modal dialog by setting the [`beforeClose`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#beforeclose) event argument cancel value to true.
In the following sample, the dialog is closed when you enter the username value with minimum 4 characters. Otherwise, it will not be closed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-validation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dlg-validation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-validation-cs1" %}
