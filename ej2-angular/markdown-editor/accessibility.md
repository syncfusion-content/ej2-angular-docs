---
layout: post
title: Accessibility in Angular Markdown editor component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Markdown editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in the Angular Markdown Editor Component

The Angular Markdown Editor is designed to be fully accessible, following WAI-ARIA specifications and implementing ARIA roles, states, and properties. These accessibility features ensure that the editor is user-friendly for individuals relying on assistive technologies (AT) or keyboard navigation. 

The following table summarizes the accessibility support of the Markdown Editor component:

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

## ARIA Attributes

The toolbar in the Markdown Editor is assigned the role of 'Toolbar' and includes the following attributes.

| **Property** | **Functionalities** |
| --- | --- |
| role="toolbar" | This attribute added to the ToolBar element describes the actual role of the element. |
| aria-orientation     | Indicates the ToolBar orientation. Default value is `horizontal`. |
| aria-haspopup       | Indicates the popup mode of the Toolbar. Default value is false. When popup mode is enabled,  attribute value has to be changed to `true`. |
| aria-disabled       | Indicates the disabled state of the toolbar. |
| aria-owns | Identifies an element to define a visual, functional, or contextual parent/child relationship between DOM elements when the DOM hierarchy cannot represent the relationship. In the Markdown Editor, the attribute contains the ID of the Markdown Editor to indicate the popup as a child element. |

For more details on Toolbar ARIA attributes, refer to the [`Accessibility of Toolbar`](../../toolbar/accessibility.html) documentation.

* The Markdown Editor element is assigned the role of `application`.

| **Property** | **Functionalities** |
| --- | --- |
| role="application" | This attribute added to the Markdown Editor element describes the actual role of the element. |
| aria-disabled       | Indicates the disabled state of the ToolBar. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/markdown-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/markdown-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/markdown-cs1" %}

## Keyboard Navigation

The Markdown Editor component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Markdown Editor component.

For more details on keyboard navigation, refer to the [Keyboard support](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/keyboard-support) documentation.

### Customizing Shortcut Keys

You can customize shortcut keys using the [formatter](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#formatter) property.This allows you to configure custom key combinations for various actions in the Markdown Editor. For example, you can set `ctrl+q` to open the `Insert Hyperlink` dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/markdown-custom-key/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/markdown-custom-key/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/markdown-editor/markdown-custom-key" %}

## Implementing Accessibility Best Practices

The Markdown Editor component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Markdown Editor component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/rich-text-editor.html) in a new window to evaluate the accessibility of the Markdown Editor component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/rich-text-editor.html" %}

## See Also

* [General Accessibility Guidelines](../common/accessibility)