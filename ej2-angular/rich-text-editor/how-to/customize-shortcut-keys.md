---
layout: post
title: Customize shortcut keys in Angular Rich text editor component | Syncfusion
description: Learn here all about Customize shortcut keys in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize shortcut keys 
documentation: ug
domainurl: ##DomainURL##
---

# Customize shortcut keys in Angular Rich text editor component

It can be achieved by using [`formatter`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#formatter) property. You need to create `customformatterModel` to configure the `keyConfig` using `IHtmlFormatterModel` class and assign the same to the formatter property. Here, `ctrl+q` is configured to open the `Insert Hyperlink` dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/cut-copy-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/cut-copy-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/cut-copy-cs1" %}

> You need to import `IHtmlFormatterModel` and `HTMLFormatter` to configure the shortcut key.
