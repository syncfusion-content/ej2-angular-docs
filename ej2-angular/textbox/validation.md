---
layout: post
title: Validation in Angular TextBox component | Syncfusion
description: Learn here all about Validation in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Validation 
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Angular TextBox component

The TextBox supports three types of validation styles namely `error`, `warning`, and `success`. These states are enabled by adding corresponding classes `.e-error`, `.e-warning`, or `.e-success` to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs11" %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-float-input.e-control-wrapper .e-float-text::after</b> class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/asterisk-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/asterisk-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/asterisk-cs1" %}
