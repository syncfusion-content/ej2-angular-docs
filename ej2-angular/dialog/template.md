---
layout: post
title: Template in Angular Dialog component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Dialog component

In Dialog the template support is provided to the header, content and footer sections. So any text or HTML content can be appending in these sections.

## Header

The Dialog header content can be provided through the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#header) property, and it will allow both text and any HTML content as a string.
Also in header, close button is provided as built-in support, and this can be enabled through the [`showCloseIcon`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#showcloseicon) property.

## Footer

The Dialog footer can be enabled by adding built-in [`buttons`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#buttons) or providing any HTML string through the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#footertemplate).

> The `buttons` and [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#footertemplate) properties can't be used at the same time.

## Content

The Dialog content can be update by providing any HTML string through the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#content).

The below example demonstrates the usage of header, footer and content as template in the Dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/template-cs1" %}

## See Also

* [How to add an icon to dialog buttons](./how-to/add-an-icons-to-dialog-buttons)
* [How to customize the dialog appearance](./how-to/customize-the-dialog-appearance)
