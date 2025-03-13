---
layout: post
title: Markdown to HTML preview in Angular Markdown editor component | Syncfusion
description: Learn here all about Markdown to HTML preview in Syncfusion Angular Markdown editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Markdown to HTML preview
documentation: ug
domainurl: ##DomainURL##
---

# Markdown to HTML preview in Angular Markdown Editor Component

The Markdown Editor provides an instant preview of Markdown changes, allowing users to see the formatted output while typing or editing text. This enhances the editing experience by enabling real-time visualization of Markdown formatting.

This feature leverages the third-party library [Marked](https://marked.js.org/) to convert Markdown into HTML content. The following example demonstrates how to enable and preview Markdown changes within the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/markdown-preview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/markdown-preview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/markdown-preview-cs1" %}