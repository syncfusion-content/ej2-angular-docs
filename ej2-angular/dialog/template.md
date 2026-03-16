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

The Dialog component supports templates for the header, content, and footer sections, allowing any text or HTML content to be inserted.

## Header

The Dialog header content is provided through the [`header`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#header) property as text or HTML string. A close button is included as built-in support and can be enabled using the [`showCloseIcon`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#showcloseicon) property.

## Footer

The Dialog footer is enabled by adding built-in [`buttons`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#buttons) or providing HTML content through the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#footertemplate) property.

> The `buttons` and [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#footertemplate) properties cannot be used together.

## Content

Update the Dialog content by providing HTML as a string through the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#content) property.

The following example demonstrates using header, footer, and content as templates in the Dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/template-cs1" %}

## See Also

* [How to add an icon to dialog buttons](./how-to/add-an-icons-to-dialog-buttons)
* [How to customize the dialog appearance](./how-to/customize-the-dialog-appearance)
