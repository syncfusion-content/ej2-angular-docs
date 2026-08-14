---
layout: post
title: How to add custom indication in Angular In-place Editor | Syncfusion
description: Add a custom CSS indication to unsaved Angular In-place Editor values by handling actionSuccess and checking primaryKey in e-value-wrapper.
platform: ej2-angular
control: Custom indication 
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom indication in Angular In-place Editor

You can add custom indication to unsaved input value by using the [actionSuccess](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor#actionsuccess) event, when data not submitted to the server.

In this sample, the `actionSuccess` event configured and the [URL](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor#url) property not included. Then submit button clicked, the current editor value saved into input and data sending to server action prevented due to the `URL` property not configured.

But `actionSuccess` event will trigger the handler function with `null` argument values. In handler function data property [primaryKey](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor#primarykey) value checked, whether it empty or not. If it is empty custom class, added in the `e-value-wrapper` element to customize its styles.

> To send input value to local, set the `URL` property as empty.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/custom-indication-cs1" %}