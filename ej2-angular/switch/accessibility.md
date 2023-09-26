---
layout: post
title: Accessibility in Angular Switch component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Switch component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Switch component

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies.

Switch provides built-in compliance with `WAI-ARIA` specifications. `WAI-ARIA` support is achieved through the attributes like `aria-checked` and `aria-disabled`. It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers, such as screen readers.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Indicates the switch component. |
| aria-checked | Indicates whether the input is checked, unchecked. |
| aria-disabled | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |

## Keyboard interaction

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Space</kbd></td><td>
When the switch has focus, pressing the Space key changes the state of the switch.</td></tr>
</table>

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/switch/state-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/switch/state-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/state-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/state-cs1" %}