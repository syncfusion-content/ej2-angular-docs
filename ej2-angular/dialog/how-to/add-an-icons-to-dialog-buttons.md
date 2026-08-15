---
layout: post
title: How to add icons to Dialog buttons in Angular Dialog | Syncfusion
description: Add icons to Syncfusion Angular Dialog footer buttons using the buttons or footerTemplate property to render custom action controls.
platform: ej2-angular
control: Add an icons to dialog buttons 
documentation: ug
domainurl: ##DomainURL##
---

# How to add icons to Dialog buttons in Angular Dialog

Add icons to dialog buttons using the [buttons](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#buttons) property or the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#footertemplate) property. For detailed information about dialog buttons, refer to the [documentation](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#buttons) section.

The following sample demonstrates customizing dialog footer buttons with icons using the `buttons` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-buttons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-buttons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-buttons-cs1" %}

The following sample demonstrates customizing dialog footer buttons with icons using the `footerTemplate` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/dlg-footer-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-footer-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-footer-cs1" %}
