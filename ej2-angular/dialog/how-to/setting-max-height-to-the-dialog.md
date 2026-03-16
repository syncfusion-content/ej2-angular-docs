---
layout: post
title: Setting max height to the dialog in Angular Dialog component | Syncfusion
description: Learn here all about Setting max height to the dialog in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Setting max height to the dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Set max height for the dialog in Angular Dialog component

By default, the dialog's maximum height is calculated based on the target container. If no target is specified, the dialog uses the body as the target and calculates the maximum height accordingly. Set the dialog's maximum height using the [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/dialog/#beforeopen) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/max-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/max-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/max-height-cs1" %}
