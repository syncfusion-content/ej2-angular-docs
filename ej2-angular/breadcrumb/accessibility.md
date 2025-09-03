---
layout: post
title: Accessibility in Angular Breadcrumb component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Breadcrumb 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Breadcrumb component

The Breadcrumb component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Breadcrumb component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Breadcrumb component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/) patterns to meet accessibility standards. The following ARIA attributes are used in the Breadcrumb component:

| Attributes | Purpose |
| --- | --- |
| `aria-label` | Indicates the breadcrumb item text. |
| `aria-disabled` | Indicates the state of breadcrumb item whether it is disabled. |

## Keyboard interaction

The Breadcrumb component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/#keyboardinteraction) guidelines, making it accessible for users who rely on assistive technologies and keyboard navigation. The following keyboard shortcuts are supported by the Breadcrumb component:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Navigate to the next item and also next item in the popup of menu type overflow. |
| <kbd>Shift + Tab</kbd> | Navigate to the previous item also previous item in the popup of menu type overflow. |
| <kbd>Enter key in normal mode</kbd> | Select the breadcrumb item. |
| <kbd>Enter key in normal mode</kbd> | To open the popup of menu type overflow mode when you press enter on collapsed button and It will expand the items of collapsed type overflow mode when you press enter on collapsed button. |

## Ensuring accessibility

The Breadcrumb component's accessibility compliance is verified through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Breadcrumb component is demonstrated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/breadcrumb.html) in a new window to evaluate the accessibility of the Breadcrumb component with accessibility tools.

{% previewsample "page.domainurl/samples/breadcrumb/accessibility-cs1" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)