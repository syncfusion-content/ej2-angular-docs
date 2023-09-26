---
layout: post
title: Name and value in form submit in Angular Radio button component | Syncfusion
description: Learn here all about Name and value in form submit in Syncfusion Angular Radio button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Name and value in form submit 
documentation: ug
domainurl: ##DomainURL##
---

# Name and value in form submit in Angular Radio button component

The [`name`](https://ej2.syncfusion.com/angular/documentation/api/radio-button#name) attribute of the RadioButton is used to group RadioButton. When the RadioButton are grouped in form, the checked item [`value`](https://ej2.syncfusion.com/angular/documentation/api/radio-button#value) attribute will be post to server on form submit
that can be retrieved through the name. The disabled and unchecked RadioButton value will not be sent to the server on form submit.

In the following code snippet, Credit and Debit card is in the checked state. Now, the value that is in checked state will be sent on form submit.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/radio-button/form-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/radio-button/form-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/radio-button/form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/radio-button/form-cs1" %}