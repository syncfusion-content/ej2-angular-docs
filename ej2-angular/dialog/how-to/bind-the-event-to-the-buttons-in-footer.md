---
layout: post
title: Bind the event to the buttons in footer in Angular Dialog component | Syncfusion
description: Learn here all about Bind the event to the buttons in footer in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bind the event to the buttons in footer 
documentation: ug
domainurl: ##DomainURL##
---

# Bind events to footer buttons in Angular Dialog component

Bind actions to footer buttons using the [buttons](https://ej2.syncfusion.com/angular/documentation/api/dialog/#buttons) property. In the following example, the dialog closes when you click the buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/button-actions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/button-actions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/button-actions-cs1" %}

To access the current component within button actions, include **bind(this)** with the function name in the action binding.