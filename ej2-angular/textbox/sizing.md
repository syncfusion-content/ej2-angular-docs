---
layout: post
title: Sizing in Angular TextBox component | Syncfusion
description: Learn here all about Sizing in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sizing 
documentation: ug
domainurl: ##DomainURL##
---

# Sizing in Angular TextBox component

You can render the TextBox in three different sizes.

Property     | Description
------------ | -------------
  Normal     | By default, the TextBox is rendered with normal size.
  Small      | You need to add `e-small` class to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property to render the TextBox in smaller size
  Bigger     | You need to add `e-bigger` class to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property to render the TextBox in bigger size

>Note: You can customize the styles of the TextBox by using the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property. This property allows you to add a custom class to the TextBox, which can then be used to apply your own styling to the component

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs10" %}
