---
layout: post
title: Add an icons to dialog buttons in Angular Dialog component | Syncfusion
description: Learn here all about Add an icons to dialog buttons in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add an icons to dialog buttons 
documentation: ug
domainurl: ##DomainURL##
---

# Add an icons to dialog buttons in Angular Dialog component

You can add icons to the dialog buttons using the [buttons](https://ej2.syncfusion.com/angular/documentation/api/dialog/#buttons) property or [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/dialog/#footertemplate) property . For detailed information about dialog buttons, refer to the [documentation](https://ej2.syncfusion.com/angular/documentation/api/dialog/#buttons)&nbsp;section.

In the following sample, dialog footer buttons are customized with icons using `buttons` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-buttons-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dlg-buttons-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-buttons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-buttons-cs1" %}

In the following sample, dialog footer buttons are customized with icons using `footerTemplate` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-footer-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dlg-footer-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-footer-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-footer-cs1" %}
