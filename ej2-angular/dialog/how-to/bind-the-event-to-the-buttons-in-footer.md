---
layout: post
title: How to bind events to footer buttons in Angular Dialog | Syncfusion
description: Bind click handlers to Syncfusion Angular Dialog footer buttons through the buttons property to close the dialog or trigger custom actions.
platform: ej2-angular
control: Bind the event to the buttons in footer 
documentation: ug
domainurl: ##DomainURL##
---

# How to bind events to footer buttons in Angular Dialog

Bind actions to footer buttons using the [buttons](https://ej2.syncfusion.com/angular/documentation/api/dialog/index-default#buttons) property. In the following example, the dialog closes when you click the buttons.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/button-actions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/button-actions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/button-actions-cs1" %}

To access the current component within button actions, include **bind(this)** with the function name in the action binding.