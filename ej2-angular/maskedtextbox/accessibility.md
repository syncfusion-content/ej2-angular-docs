---
layout: post
title: Accessibility in Angular Maskedtextbox component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Maskedtextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular MaskedTextBox component

The MaskedTextBox component adheres to accessibility guidelines and standards including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles). The following table outlines the accessibility compliance status of the MaskedTextBox component.

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

## WAI-ARIA attributes

The MaskedTextBox includes complete ARIA accessibility support, enabling access through screen readers and other assistive technology devices. The component is designed following the [WAI-ARIA Accessibility practices](https://www.w3.org/TR/wai-aria/#textbox) guidelines for textbox elements.

The MaskedTextBox uses the `textbox` role and the following ARIA properties based on component state:

| **Property** | **Functionality** |
| --- | --- |
| aria-live | Indicates the priority of updates to a live region. |
| aria-disabled | Indicates the disabled state of the MaskedTextBox. |
| aria-valuenow | Specifies the current value of the MaskedTextBox. |
| aria-invalid | Indicates that the user input is incorrect or outside acceptable ranges. |
| aria-placeholder | Provides a short hint for data entry when the MaskedTextBox has no value. |
| aria-labelledby | References the floating label element associated with the MaskedTextBox. |

## Ensuring accessibility

The MaskedTextBox component's accessibility is validated using industry-standard tools including [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during automated testing.

The accessibility compliance of the MaskedTextBox is demonstrated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/masked-textbox.html) in a new window to evaluate the MaskedTextBox's accessibility with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/masked-textbox.html" %}

## See Also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)