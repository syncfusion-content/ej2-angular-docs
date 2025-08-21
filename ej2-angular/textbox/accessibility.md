---
layout: post
title: Accessibility in Angular TextBox component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular TextBox component

The TextBox component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the TextBox component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
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

## Keyboard navigation

The TextBox component supports keyboard navigation to enhance accessibility for users who rely on keyboard input. The following keyboard shortcuts are available:

| **Keys** | **Description** |
| --- | --- |
| <kbd>Tab</kbd> | Moves focus to the TextBox component. |
| <kbd>Shift + Tab</kbd> | Moves focus to the previous focusable element. |
| <kbd>Home</kbd> | Moves the cursor to the beginning of the text. |
| <kbd>End</kbd> | Moves the cursor to the end of the text. |
| <kbd>Ctrl + A</kbd> | Selects all text in the TextBox. |
| <kbd>Arrow keys</kbd> | Moves the cursor left or right within the text. |

## WAI-ARIA attributes

The TextBox component provides comprehensive ARIA accessibility support that enables access through screen readers and other assistive technology devices. This component is designed with reference to the guidelines document provided in [WAI-ARIA Accessibility Practices](https://www.w3.org/TR/wai-aria/#textbox).

The TextBox uses the `textbox` role and the following ARIA properties for its element based on its state:

| **Property** | **Functionality** |
| --- | --- |
| aria-labelledby | Indicates the floating label element that describes the TextBox. |
| aria-describedby | References additional descriptive text associated with the TextBox, such as help text or error messages. |
| aria-invalid | Indicates the current validation state of the TextBox input. |
| aria-disabled | Indicates whether the TextBox is disabled and cannot receive user input. |

## Ensuring accessibility

The TextBox component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the TextBox component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/textbox.html) in a new window to evaluate the accessibility of the TextBox component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/textbox.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)