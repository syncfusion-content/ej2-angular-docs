---
layout: post
title: How to submit name and value in form in Angular Toggle Switch Button | Syncfusion
description: Submit Angular Toggle Switch Button name and checked values in a form to the server and exclude disabled items.
platform: ej2-angular
control: Submit name and value in form 
documentation: ug
domainurl: ##DomainURL##
---

# How to submit name and value in form in Angular Toggle Switch Button

The [`name`](https://ej2.syncfusion.com/angular/documentation/api/switch#name) attribute of the Switch is used to group Switches. When the Switches are grouped in form, the checked items [`value`](https://ej2.syncfusion.com/angular/documentation/api/switch#value) attribute will post to the server on form submit. The disabled and unchecked Switch values will not be sent to the server on form submit.

In the following code snippet, USB and Wi-Fi in the [`checked`](../../switch#checked) state, and Bluetooth is in disabled state. Values that are in checked state only be sent on form submit.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/switch/form-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/form-cs1" %}
