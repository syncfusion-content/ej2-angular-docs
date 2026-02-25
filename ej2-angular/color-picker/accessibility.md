---
layout: post
title: Accessibility in Angular Color picker component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Color picker component

The ColorPicker component adheres to accessibility guidelines and standards including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles). The following table outlines the accessibility compliance status of the ColorPicker component.

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

The ColorPicker component implements [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to ensure accessibility compliance. The following ARIA attributes are used in the ColorPicker component:

| Attributes | Purpose |
| --- | --- |
| `role` | Identifies the ColorPicker as `color` and palette tiles as `gridcell`. |
| `aria-label` | Provides accessible names for palette tiles. |
| `aria-selected` | Indicates the current selected state of a tile. |
| `aria-haspopup` | Indicates the availability of the popup element. |
| `aria-expanded` | Indicates whether the popup is expanded or collapsed. |
| `aria-owns` | Defines parent/child relationships between DOM elements when hierarchy cannot be used. |
| `aria-disabled` | Indicates that the element is disabled and not editable or operable. |

## Keyboard interaction

The ColorPicker component supports [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guidelines, enabling full functionality for users relying on assistive technologies or keyboard-only navigation. The following keyboard shortcuts are supported:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Up Arrow</kbd> | Moves the handler or tile up. |
| <kbd>Down Arrow</kbd> | Moves the handler or tile down. |
| <kbd>Left Arrow</kbd> | Moves the handler or tile left. |
| <kbd>Right Arrow</kbd> | Moves the handler or tile right. |
| <kbd>Enter</kbd> | Applies the selected color value. |
| <kbd>Tab</kbd> | Focuses the next focusable element in the ColorPicker popup. |

## Ensuring accessibility

The ColorPicker component's accessibility is validated using industry-standard tools including [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during automated testing.

The accessibility compliance of the ColorPicker is demonstrated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/color-picker.html) in a new window to evaluate the ColorPicker's accessibility with accessibility tools.

{% previewsample "page.domainurl/samples/colorpicker/getting-started/default-cs1" %}

## See Also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
