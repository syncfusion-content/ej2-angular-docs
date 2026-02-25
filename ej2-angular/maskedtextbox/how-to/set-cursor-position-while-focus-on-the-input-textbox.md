---
layout: post
title: Set cursor position while focus on the input textbox in Angular Maskedtextbox component | Syncfusion
description: Learn here all about Set cursor position while focus on the input textbox in Syncfusion Angular Maskedtextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set cursor position while focus on the input textbox 
documentation: ug
domainurl: ##DomainURL##
---

# Set cursor position on focus in Angular MaskedTextBox component

By default, the entire mask is selected when the MaskedTextBox receives focus. Use the [`focus`](https://ej2.syncfusion.com/angular/documentation/api/maskedtextbox#focus) event to customize the cursor position by using any of the following methods:

* Set cursor position at the start of the MaskedTextBox
* Set cursor position at the end of the MaskedTextBox
* Set cursor position at a specific location within the MaskedTextBox

> When the MaskedTextBox contains only mask characters, **selectionStart** and **selectionEnd** are set to **0** instead of the input value's length. This is the default behavior of the HTML 5 input element and occurs because the input technically contains no data.

The following example demonstrates how to set the cursor position in the MaskedTextBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maskedtextbox/cursor-position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maskedtextbox/cursor-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maskedtextbox/cursor-position-cs1" %}