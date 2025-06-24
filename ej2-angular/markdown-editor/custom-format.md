---
layout: post
title: Customizing Markdown Syntax in Markdown editor component | Syncfusion
description: Learn here all about Customizing Markdown Syntax in Syncfusion Angular markdown editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customizing Markdown Syntax
documentation: ug
domainurl: ##DomainURL##
---

# Customizing Markdown Syntax in Angular Markdown Editor Component

The Angular Markdown Editor allows you to modify the default Markdown syntax to match your preferred formatting style. You can override the default syntax using the [formatter](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#formatter) property, enabling a customized Markdown experience.

## Defining Custom Markdown Formatting  

You can define custom symbols for different Markdown formatting options:

* Use `+` for unordered lists instead of `-`.
* Use `__text__` for bold text instead of `**text**`.
* Use `_text_` for italic text instead of `*text*`.

The following example demonstrates how to customize Markdown tags in the editor:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs4" %}