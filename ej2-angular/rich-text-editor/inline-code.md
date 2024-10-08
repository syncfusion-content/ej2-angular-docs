---
layout: post
title: Inline Code in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Inline Code in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Inline Code 
documentation: ug
domainurl: ##DomainURL##
---

# Inline Code in the Angular Rich Text Editor Component

Inline code formatting in the Angular Rich Text Editor allows users to apply code-specific styling to selected text, typically used for displaying code snippets within content. 

This is done by wrapping the selected text in an HTML `<code>` tag, which gives it a monospace font and distinct background color, making the code visually stand out from the regular text.

To apply inline code formatting in the Syncfusion Rich Text Editor, users can select the desired text and use the `InlineCode` toolbar option to wrap it in the `<code>` tag. This makes it easy to format and display code snippets within the editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/inline-code-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/inline-code-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/inline-code-cs1" %}