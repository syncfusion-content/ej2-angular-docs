---
layout: post
title: Prevent opening of the dialog in Angular Dialog Component | Syncfusion
description: Learn here all about prevent opening of the dialog in Syncfusion Essential Angular Dialog component, it's elements and more.
platform: ej2-angular
control: Prevent opening of the dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent opening of the dialog in Angular Dialog Component

You can prevent opening of the dialog by setting the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#beforeopen) event argument cancel value to true.
In the following sample, the success dialog is opened when you enter the username value with minimum 4 characters. Otherwise, it will not be opened.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-check-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dlg-check-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-check-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/dialog/dlg-check-cs1" %}
