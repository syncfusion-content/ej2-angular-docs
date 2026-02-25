---
layout: post
title: Close dialog while click on outside of dialog in Angular Dialog component | Syncfusion
description: Learn here all about Close dialog while click on outside of dialog in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Close dialog while click on outside of dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Close dialog when clicking outside in Angular Dialog component

By default, the dialog closes when you press the Esc key or click the close icon in the dialog header. Close the dialog by clicking outside the dialog area using the [hide](https://ej2.syncfusion.com/angular/documentation/api/dialog/#hide) method.

> Set the [closeOnEscape](https://ej2.syncfusion.com/angular/documentation/api/dialog/#closeonescape) property to `false` to prevent the dialog from closing when pressing the Esc key.

The following sample demonstrates closing the dialog when clicking outside the dialog area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-close-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-close-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-close-cs1" %}

The following sample demonstrates rendering the dialog within a target container and closing it by clicking outside the dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-close-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-close-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-close-cs1" %}