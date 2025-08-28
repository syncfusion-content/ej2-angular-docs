---
layout: post
title: Custom Markdown Syntax in Angular Markdown Editor component | Syncfusion
description: Learn how to customize Markdown syntax in the Syncfusion Angular Markdown Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom Markdown Syntax
documentation: ug
domainurl: ##DomainURL##
---

# Custom Markdown Syntax in Angular Markdown Editor Component

The Angular Markdown Editor allows customization of default Markdown syntax to match preferred formatting styles. You can override the default syntax using the [formatter](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#formatter) property, enabling a customized Markdown experience.

## Customizing markdown syntax

You can define custom symbols for different Markdown formatting options:

* Use `+` for unordered lists instead of `-`.
* Use `__text__` for bold text instead of `**text**`.
* Use `_text_` for italic text instead of `*text*`.

The following example customizes Markdown tags:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs4" %}