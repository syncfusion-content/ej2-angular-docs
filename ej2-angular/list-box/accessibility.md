---
layout: post
title: Accessibility in Angular List box component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---
# Accessibility in Angular List box component

## ARIA Attributes

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies. ListBox provides built-in compliance with WAI-ARIA specifications. WAI-ARIA support is achieved through the attributes like `aria-multiselectable` and `aria-selected` applied for ListBox element and selected elements in the ListBox. It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. ListBox component contains the `listbox` role and `option` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| listbox | This role will be specified for root element. |
| aria-multiselectable | Applied to the element with the ListBox role, tells assistive technologies that the list supports multiple selection. The default value is true. |
| option | Identifies each selectable element containing the name of an option. |
| aria-selected | Applied to elements with role option that are visually styled as selected to inform assistive technologies that the options are selected. |

## Keyboard interaction

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Up arrow</kbd></td><td>
Moves focus to the previous option.</td></tr>
<tr>
<td>
<kbd>Down arrow</kbd></td><td>
Moves focus to the next option.</td></tr>
<tr>
<td>
<kbd>Home</kbd></td><td>
Moves focus to first option.</td></tr>
<tr>
<td>
<kbd>End</kbd></td><td>
Moves focus to last option.</td></tr>
<tr>
<td>
<kbd>Space</kbd></td><td>
Changes the selection state of the focused option.</td></tr>
<tr>
<td>
<kbd>Ctrl + A</kbd></td><td>
Selects all options in the list.</td></tr>
<tr>
<td>
<kbd>Ctrl + Shift + Home</kbd></td><td>
Selects the focused option and all options up to the first option.</td></tr>
<tr>
<td>
<kbd>Ctrl + Shift + End</kbd></td><td>
Selects the focused option and all options down to the last option.</td></tr>
<tr>
<td>
<kbd>Ctrl + (Up or Down)</kbd></td><td>
Press Ctrl key with up / down arrow or mouse to select multiple items.</td></tr>
</table>

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs1" %}