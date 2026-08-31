---
layout: post
title: How to close Dialog on outside click in Angular Dialog | Syncfusion
description: Close the Syncfusion Angular Dialog when the user clicks outside its region by calling the hide method on the overlay click handler.
platform: ej2-angular
control: Close dialog while click on outside of dialog 
documentation: ug
domainurl: ##DomainURL##
---

# How to close the Dialog on outside click in Angular Dialog

By default, the dialog closes when you press the Esc key or click the close icon in the dialog header. Close the dialog by clicking outside the dialog area using the [hide](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#hide) method.

> Set the [closeOnEscape](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#closeonescape) property to `false` to prevent the dialog from closing when pressing the Esc key.

The following sample demonstrates closing the dialog when clicking outside the dialog area.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-close-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-close-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-close-cs1" %}

The following sample renders the dialog inside a target container (`#modalTarget`) and ignores clicks that originate on the dialog itself or on the open button. Any other click closes the dialog.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dialog-close-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-close-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-close-cs1" %}