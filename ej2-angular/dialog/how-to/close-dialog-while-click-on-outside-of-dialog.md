---
layout: post
title: Close by clicking outside in Angular Dialog Component | Syncfusion
description: Learn here all about close by clicking outside support in Syncfusion Essential Angular Dialog component, it's elements and more.
platform: ej2-angular
control: Close dialog while click on outside of dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Close by clicking outside in Angular Dialog

By default, [Angular Dialog](https://www.syncfusion.com/angular-components/angular-modal-dialog) can be closed by pressing Esc key and clicking the close icon on the right of dialog header. It can also be closed by clicking outside of the dialog using hide method.

> Set the [closeOnEscape](https://ej2.syncfusion.com/angular/documentation/api/dialog/#closeonescape) property value to false to prevent closing of the dialog when pressing Esc key.

In the following sample, dialog is closed when clicking outside the dialog area using [hide](https://ej2.syncfusion.com/angular/documentation/api/dialog/#hide) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-close-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dlg-close-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-close-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-close-cs1" %}

In the following sample, the dialog is rendered based on the target container. It can also be closed by clicking outside of the dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dialog-close-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dialog-close-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dialog-close-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dialog-close-cs1" %}