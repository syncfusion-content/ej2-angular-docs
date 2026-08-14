---
layout: post
title: How to prevent state change in Angular Toggle Switch Button | Syncfusion
description: Cancel an Angular Toggle Switch Button state change by handling the beforeChange event and blocking the action.
platform: ej2-angular
control: Prevent State Change 
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent state change in Angular Toggle Switch Button

The [beforeChange](https://ej2.syncfusion.com/angular/documentation/api/switch/#beforechange) event is triggered before the switch's state is altered. This event provides an opportunity to intercept and potentially cancel the change action before it is applied. It allows for implementing conditional logic or validating the change prior to it being rendered on the UI.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/switch/before-change-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/before-change-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/before-change-cs1" %}