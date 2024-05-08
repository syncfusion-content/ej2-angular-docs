---
layout: post
title: Submit name and value in form in Angular Switch component | Syncfusion
description: Learn here all about Submit name and value in form in Syncfusion Angular Switch component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Submit name and value in form 
documentation: ug
domainurl: ##DomainURL##
---

# Submit name and value in form in Angular Switch component

The [`name`](https://ej2.syncfusion.com/angular/documentation/api/switch#name) attribute of the Switch is used to group Switches. When the Switches are grouped in form, the checked items [`value`](https://ej2.syncfusion.com/angular/documentation/api/switch#value) attribute will post to the server on form submit. The disabled and unchecked Switch values will not be sent to the server on form submit.

In the following code snippet, USB and Wi-Fi in the [`checked`](../../switch#checked) state, and Bluetooth is in disabled state. Values that are in checked state only be sent on form submit.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/switch/form-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/form-cs1" %}
