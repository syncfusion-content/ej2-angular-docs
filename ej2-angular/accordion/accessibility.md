---
layout: post
title: Accessibility in Angular Accordion component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Accordion component

The Accordion component has been designed keeping in mind the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) specifications, by applying the prompt WAI-ARIA roles, states, and properties along with the keyboard support. Thus, making it usable for people who use assistive WAI-ARIA Accessibility supports that is achieved through the attributes like `aria-labelledby`. It helps to provides information about the elements in a document for assistive technology. The component implements the keyboard navigation support by following the [WAI-ARIA practices](https://www.w3.org/TR/wai-aria-practices/) and tested in major screen readers.

The accessibility compliance for the Accordion component is outlined below.

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

## ARIA attributes

| **Roles and Attributes** | **Functionalities**                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------|
| role   | **Button:** Attribute is set to the Accordion header elements to indicate that the element can be used to toggle the visibility of the associated content section, describing the actual role of the element.<br> **Region:** Attribute is set to the Accordion panel elements to create a landmark region that contains the currently expanded accordion panel, describing the actual role of the element. <br/>|
|  aria-labelledby   | Attribute is set to content (panel) and it points to the corresponding Accordion header.                                                                               |
| aria-controls           | Attribute is set to the header and it points to the corresponding Accordion content.                                                                         |
| aria-expanded            | Attribute is set to the Accordion header elements to indicates the expand state of the Accordion Item. Default value of this attribute is `false`. If an item is expanded, the attribute value changes to ‘true’.                                                    |
| aria-hidden              | Attribute is set to the Accordion panel elements to indicates the content visible state of the Accordion Item. Default value of this attribute is `true`. If an item content is visible, the attribute value changes to `false`. |
| aria-disabled              | It indicates the disabled state of the Accordion and its items.                                                                                           |

## Keyboard interaction

Keyboard navigation is enabled by default. Possible keys are:

| Key           | Description                                                                         |
|---------------|-------------------------------------------------------------------------------------|
| <kbd>Space or Enter</kbd>    | When focus is on the Accordion header, click on the focused element makes the element to expand and collapse.                                                    |
| <kbd>Down Arrow</kbd>   | Focus the next Accordion header.                                                            |
| <kbd>Up Arrow</kbd>         | Focus the previous Accordion header. |
| <kbd>Home</kbd>           | Focus the first Accordion header.                                                                     |
| <kbd>End</kbd>   | Focus the last Accordion header.                                                |
| <kbd>Tab</kbd>     | To Move focus through the interactive elements.                 |
| <kbd>Shift + Tab</kbd> | To Move focus through the interactive elements.             |

## Ensuring accessibility

The Accordion component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Accordion component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/accordion.html) in a new window to evaluate the accessibility of the Accordion component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/accordion.html" %}

## See also

- [Accessibility in Syncfusion Angular components](../common/accessibility)