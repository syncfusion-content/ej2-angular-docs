---
layout: post
title: Accessibility in Angular Image Editor | Syncfusion
description: Review accessibility support in the Syncfusion Angular Image Editor, including WCAG 2.2, Section 508, screen reader, keyboard navigation, and RTL compliance.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Image Editor

The Image Editor component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), and [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, along with [ARIA roles](https://www.w3.org/TR/wai-aria/#roles) commonly used to evaluate accessibility.

The accessibility compliance for the Image Editor component is outlined below.

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

## Keyboard interaction

The Image Editor component follows the keyboard interaction guidelines, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Image Editor component. Focus the Image Editor control to use keyboard navigation.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Ctrl + Z</kbd> | Undo the last user action. |
| <kbd>Ctrl + Y</kbd> | Redo the last user action. |
| <kbd>Ctrl + S</kbd> | Save the image. |
| <kbd>Ctrl + O</kbd> | Open the image. |
| <kbd>Delete</kbd> | Delete the selected shape after it is selected. |
| <kbd>Enter</kbd> | Apply Selection Crop or Image Resize. |
| <kbd>Escape</kbd> | Discard operations performed in the Image Editor, such as annotation drawings, crop selection, and more. |

## Ensuring accessibility

The Image Editor component's accessibility levels are validated using the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing.

The following sample demonstrates the accessibility compliance of the Image Editor component. Open the [sample](https://ej2.syncfusion.com/accessibility/image-editor.html) in a new window to evaluate the accessibility of the Image Editor component with accessibility tools.

{% previewsample "page.domainurl/samples/image-editor/default-cs6" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
