---
layout: post
title: Preventing XSS in Angular Rich Text Editor component | Syncfusion
description: Learn all about Preventing XSS in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Preventing XSS
documentation: ug
domainurl: ##DomainURL##
---

# Prevention of Cross-Site Scripting (XSS)

The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

The [`enableHtmlSanitize`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enablehtmlsanitizer) property determines whether XSS prevention is active. It's set to `true` by default.

In the following sample, we removed the `script` tag and `onmouseover` attribute from the content of the Rich Text Editor.

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

## Custom Cross-Site Scripting

For more precise control over XSS prevention, you can implement custom filtering logic using the [`beforeSanitizeHtml`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#beforesanitizehtml) event.

### Implementing Custom Cross-Site Scripting and Fililtering in Rich Text Editor

1. Use the [`beforeSanitizeHtml`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#beforesanitizehtml) event to define custom filtering rules.
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

You can also filter out the [`e.selectors.tags`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/sanitizeSelectors/#tags) and [`e.selector.attributs`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/sanitizeSelectors/#attributes) in the [`beforeSanitizeHtml`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#beforesanitizehtml) event to control which HTML tags and attributes are allowed to appear. 

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


