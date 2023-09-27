---
layout: post
title: Accessibility in Angular Breadcrumb component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Breadcrumb component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Breadcrumb component

## ARIA attributes

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies.
The breadcrumb provides a built-in compliance with `WAI-ARIA` specifications. The `WAI-ARIA` support is achieved using the attributes such as `aria-label`and `aria-disabled`.
It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. The breadcrumb component contains the `breadcrumb` roles.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Indicates the type of input element. |
| aria-label | Indicates the breadcrumb item text. |
| aria-disabled | Indicates the state of breadcrumb item whether it is disabled. |

## User interaction with keyboard

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Tab</kbd></td><td>
Navigate to the next item and also next item in the popup of menu type overflow.</td></tr>
<tr>
<td>
<kbd>Shift + Tab</kbd></td><td>
Navigate to the previous item also previous item in the popup of menu type overflow.</td></tr>
<tr>
<td>
<kbd>Enter key in normal mode</kbd></td><td>
 Select the breadcrumb item.</td></tr>
<tr>
<td>
<kbd>Enter key in collapsed mode</kbd></td><td>
 To open the popup of menu type overflow mode when you press enter on collapsed button and It will expand the items of collapsed type overflow mode when you press enter on collapsed button.</td></tr>
</table>

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/accessibility-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/breadcrumb/accessibility-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/accessibility-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/accessibility-cs1" %}
