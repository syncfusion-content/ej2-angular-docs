---
layout: post
title: Rich Text Editor with Tailwind CSS Preflight Theme| Syncfusion
description: Learn here all about Integrating Editor with Tailwind CSS Preflight Theme in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more
platform: ej2-angular
control: Integrating Rich Text Editor with Tailwind CSS Preflight
documentation: ug
domainurl: ##DomainURL##
---

# Integrating the Angular Rich Text Editor with Tailwind CSS Preflight Styles

When combining the Rich Text Editor with Tailwind CSS, you may encounter unintended style conflicts. Tailwind’s Preflight, a base reset layer, can override default element styles used by the Rich Text Editor, leading to formatting inconsistencies. This guide documents the integration process, offering solutions to maintain design integrity and functionality. In the Rich Text Editor, it affects ordered and unordered lists, which are unformatted by default, with no bullets or numbers.

To resolve this issue and ensure that the list styles are correctly applied, you can copy and use the following styles directly in your application.

```css

.e-rte-content li {
    margin-bottom: 10px !important;
    padding: unset !important;
}

.e-rte-content ul {
    list-style-type: disc !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol {
    list-style-type: decimal !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ul[style*="list-style-type: circle"]{
    list-style-type: circle !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ul[style*="list-style-type: square"]{
    list-style-type: square !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: upper-alpha"]{
    list-style-type: upper-alpha !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: lower-alpha"]{
    list-style-type: lower-alpha !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: upper-roman"]{
    list-style-type: upper-roman !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: lower-roman"]{
    list-style-type: lower-roman !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: lower-greek"]{
    list-style-type: lower-greek !important;
    padding: unset !important;
    margin-left: 40px;
}

```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/tailwind-preflight/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor/how-to/tailwind-preflight/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/tailwind-preflight/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/tailwind-preflight" %}

## Configuring Tailwind CSS Preflight Styles with the Iframe editor

Tailwind CSS includes a “Preflight” feature, an opinionated set of base styles that normalize and reset default browser styles. When working with an Iframe editor, Preflight can sometimes conflict with or unintentionally style the iframe content. Here’s how to fine-tune Tailwind’s Preflight behavior in such scenarios with the CSS styles,

``` css
body.e-content li {
    margin-bottom: 10px !important;
    padding: unset !important;
}

body.e-content ul {
    list-style-type: disc !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol {
    list-style-type: decimal !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ul[style*="list-style-type: circle"]{
    list-style-type: circle !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ul[style*="list-style-type: square"]{
    list-style-type: square !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: lower-greek"]{
    list-style-type: lower-greek !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: upper-alpha"]{
    list-style-type: upper-alpha !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: lower-alpha"]{
    list-style-type: lower-alpha !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: upper-roman"]{
    list-style-type: upper-roman !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: lower-roman"]{
    list-style-type: lower-roman !important;
    padding: unset !important;
    margin-left: 40px;
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/tailwind-preflight-iframe/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor/how-to/tailwind-preflight-iframe/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/tailwind-preflight-iframe/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/tailwind-preflight-iframe" %}