---
layout: post
title: Accessibility in Angular Rich text editor component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Rich text editor component

The Rich Text Editor component has been designed, keeping in mind the WAI-ARIA specifications and applies the WAI-ARIA roles, states and properties. This component is characterized by complete ARIA accessibility support that makes it easy for people who use assistive technologies (AT) or those who completely rely on keyboard navigation.

The accessibility compliance for the Rich Text Editor component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## ARIA attributes

* The toolbar of Rich Text Editor, assigned the role of ‘Toolbar’ and has the following list of aria attribute.

| **Property** | **Functionalities** |
| --- | --- |
| role="toolbar" | This attribute added to the ToolBar element describes the actual role of the element. |
| aria-orientation     | Indicates the ToolBar orientation. Default value is `horizontal`. |
| aria-haspopup       | Indicates the popup mode of the Toolbar. Default value is false. When popup mode is enabled,  attribute value has to be changed to `true`. | |
| aria-disabled       | Indicates the disabled state of the ToolBar. |
| aria-owns | Identifies an element to define a visual, functional, or contextual parent/child relationship between DOM elements when the DOM hierarchy cannot represent the relationship. In the Rich Text Editor, the attribute contains the ID of the Rich Text Editor to indicate the popup as a child element. |

For further details of Toolbar ARIA attributes, please look in to [`Accessibility of Toolbar`](../../toolbar/accessibility.html) documentation.

* The Rich Text Editor element is assigned the role of `application`.

| **Property** | **Functionalities** |
| --- | --- |
| role="application" | This attribute added to the Rich Text Editor element describes the actual role of the element. |
| aria-disabled       | Indicates the disabled state of the ToolBar. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs1" %}

## Keyboard interaction

The Rich Text Editor component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Rich Text Editor component.

### HTML formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with HTML edit mode.

| Actions | Keyboard shortcuts |
|----------------|---------|
| Toolbar focus | <kbd>Alt</kbd> + <kbd>f10</kbd> |
| Insert link | <kbd>Ctrl</kbd> + <kbd>k</kbd> |
| Insert image | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>i</kbd> |
| Insert table | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>e</kbd> |
| Undo | <kbd>Ctrl</kbd> + <kbd>z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>y</kbd> |
| Copy | <kbd>Ctrl</kbd> + <kbd>c</kbd> |
| Cut | <kbd>Ctrl</kbd> + <kbd>x</kbd> |
| Paste| <kbd>Ctrl</kbd> + <kbd>v</kbd> |
| Bold| <kbd>Ctrl</kbd> + <kbd>b</kbd> |
| Italic| <kbd>Ctrl</kbd> + <kbd>i</kbd> |
| Underline| <kbd>Ctrl</kbd> + <kbd>u</kbd> |
| Strikethrough| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>s</kbd> |
| Uppercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>u</kbd> |
| Lowercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>l</kbd> |
| Superscript| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> |
| Subscript| <kbd>Ctrl</kbd> + <kbd>=</kbd> |
| Indents| <kbd>Ctrl</kbd> + <kbd>]</kbd> |
| Outdents| <kbd>Ctrl</kbd> + <kbd>[</kbd> |
| HTML source | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>h</kbd> |
| Fullscreen| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>f</kbd> |
| Exit Fullscreen| <kbd>Esc</kbd> |
| Justify center| <kbd>Ctrl</kbd> + <kbd>e</kbd> |
| Justify full | <kbd>Ctrl</kbd> + <kbd>j</kbd> |
| Justify left | <kbd>Ctrl</kbd> + <kbd>l</kbd> |
| Justify right | <kbd>Ctrl</kbd> + <kbd>r</kbd> |
| Clear format | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>r</kbd> |
| Ordered list | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>o</kbd> |
| Unordered list | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>o</kbd> |
| Format Painter Copy| <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>c</kbd> |
| Format Painter Paste| <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>v</kbd> |
| Format Painter Escape | <kbd>Esc</kbd> |

### Markdown formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with Markdown edit mode

| Actions | Keyboard shortcuts |
|----------------|---------|
| Toolbar focus| <kbd>Alt</kbd> + <kbd>f10</kbd> |
| Insert link| <kbd>Ctrl</kbd> + <kbd>k</kbd> |
| Insert image| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>i</kbd> |
| Insert table| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>e</kbd> |
| Undo| <kbd>Ctrl</kbd> + <kbd>z</kbd> |
| Redo| <kbd>Ctrl</kbd> + <kbd>y</kbd> |
| Copy| <kbd>Ctrl</kbd> + <kbd>c</kbd> |
| Cut| <kbd>Ctrl</kbd> + <kbd>x</kbd> |
| Paste| <kbd>Ctrl</kbd> + <kbd>v</kbd> |
| Bold| <kbd>Ctrl</kbd> + <kbd>b</kbd> |
| Italic| <kbd>Ctrl</kbd> + <kbd>i</kbd> |
| Strikethrough| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>s</kbd> |
| Uppercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>u</kbd> |
| Lowercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>l</kbd> |
| Superscript| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> |
| Subscript| <kbd>Ctrl</kbd> + <kbd>=</kbd> |
| Fullscreen| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>f</kbd> |
| Ordered list| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>o</kbd> |
| Unordered list| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>o</kbd> |

## Ensuring accessibility

The Rich Text Editor component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Rich Text Editor component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/rich-text-editor.html) in a new window to evaluate the accessibility of the Rich Text Editor component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/rich-text-editor.html" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)