---
layout: post
title: Bind the event to the buttons in footer in Angular Dialog component | Syncfusion
description: Learn here all about Bind the event to the buttons in footer in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bind the event to the buttons in footer 
documentation: ug
domainurl: ##DomainURL##
---

# Bind the event to the buttons in footer in Angular Dialog component

You can bind the actions to the buttons inside the footer using the buttons property. In the following example,dialog will be closed when you click on the buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/button-actions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/button-actions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/button-actions-cs1" %}

To access the current component within the button actions, add **bind(this)** along with function name in action binding.