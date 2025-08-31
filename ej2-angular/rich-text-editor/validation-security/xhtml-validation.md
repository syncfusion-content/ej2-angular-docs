---
layout: post
title: XHTML Validation in Angular Rich Text Editor component | Syncfusion
description: Learn how to enable XHTML validation and XSS prevention in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: XHTML Validation
documentation: ug
domainurl: ##DomainURL##
---

# XHTML Validation in Angular Rich Text Editor Component

The Syncfusion Angular Rich Text Editor provides features to ensure content complies with XHTML standards and is secure against cross-site scripting (XSS) attacks. The `enableXhtml` property enforces continuous XHTML validation, while `enableHtmlSanitizer` and the `beforeSanitizeHtml` event protect against XSS vulnerabilities. These features are essential for maintaining standards-compliant and secure content, particularly when `editorMode` is set to `HTML`.

## XHTML validation

The editor includes an [enableXhtml](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enablexhtml) property that allows for continuous validation of the Rich Text Editor's source content against the XHTML standard. When content is entered or modified in the editor, this feature ensures ongoing compliance by automatically removing invalid elements and attributes. This feature requires `editorMode: 'HTML'` to function.

### Validating attributes

When `enableXhtml` is set to `true`, the editor enforces the following attribute rules:

* **Case Sensitivity**: Attributes must be lowercase (e.g., `class`, not `CLASS`).
* **Quotation Marks**: Attribute values must be enclosed in quotation marks.
* **Validity**: Only valid attributes for corresponding HTML elements are allowed.
* **Required Attributes**: Required attributes for HTML elements must be included (e.g., `alt` for `<img>`).

### Validating HTML elements

The editor also enforces these element rules:

* **Case Sensitivity**: HTML tags must be lowercase (e.g., `<p>`, not `<P>`).
* **Proper Closing**: All opening tags must have corresponding closing tags.
* **Element Validity**: Only valid HTML elements are permitted.
* **Nesting**: Elements must be properly nested to maintain structure.
* **Root Element**: The content must have a single root element.
* **Element Hierarchy**: Inline elements cannot contain block elements (e.g., `<span>` cannot contain `<div>`).

The following example demonstrates enabling XHTML validation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs31/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs31/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs31" %}

## Cross-Site scripting (XSS) prevention

The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

### Enabling XSS prevention

The [enableHtmlSanitize](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enablehtmlsanitizer), enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.
The following example shows XSS prevention removing a `<script>` tag and `onmouseover` attribute:
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs22" %}

> The XSS prevention feature is only applicable when the [editorMode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#editormode) is set to HTML.

### Custom XSS prevention

For more precise control over XSS prevention, you can implement custom filtering logic using the [beforeSanitizeHtml](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#beforesanitizehtml) event.

### Implementing custom cross-site scripting and fililtering in Rich Text Editor

1. Use the [beforeSanitizeHtml](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#beforesanitizehtml) event to define custom filtering rules.
2. Utilize the `helper` function from the event argument to apply your custom filters.
3. Set the `cancel` argument to `true` if you want to override the built-in XSS prevention entirely.

The following sample demonstrates how to filter the `script` tag by value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs23" %}

You can also filter out the [e.selectors.tags](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/sanitizeSelectors/#tags) and [e.selector.attributs](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/sanitizeSelectors/#attributes) in the [beforeSanitizeHtml](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#beforesanitizehtml) event to control which HTML tags and attributes are allowed to appear. 

For instance, if you want to display `<iframe>`, By manipulating the `e.selectors.tags` property in this event, you can selectively remove tags like `<iframe>`. This approach ensures that your application can safely display iframes while preventing potential security risks associated with XSS vulnerabilities.

The following sample demonstrates how to filter the `iframe` tag.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/prevent-cross-site-scripting-cs1" %}
