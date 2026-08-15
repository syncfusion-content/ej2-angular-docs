---
layout: post
title: How to set max height for the Dialog in Angular Dialog | Syncfusion
description: Set a custom maximum height for the Syncfusion Angular Dialog inside the beforeOpen event to control how tall the popup can grow.
platform: ej2-angular
control: Setting max height to the dialog 
documentation: ug
domainurl: ##DomainURL##
---

# How to set max height for the Dialog in Angular Dialog

By default, the dialog's maximum height is calculated based on the target container. If no target is specified, the dialog uses the body as the target and calculates the maximum height accordingly. Set the dialog's maximum height using the [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#beforeopen) event.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/max-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/max-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/max-height-cs1" %}
