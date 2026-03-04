---
layout: post
title: Accessibility in Angular Dashboard Layout component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Dashboard Layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Dashboard Layout component

The Dashboard Layout component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria#roles) that are commonly used to evaluate accessibility.

The Dashboard Layout component provides an accessible interface for organizing and managing dashboard panels, ensuring that users with disabilities can effectively interact with and navigate the layout structure.

## Accessibility compliance

The accessibility compliance for the Dashboard Layout component is outlined below.

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508](https://www.section508.gov) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | Not applicable |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

## WAI-ARIA attributes

The Dashboard Layout component follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg) patterns to meet accessibility standards. The following ARIA attributes are used in the Dashboard Layout component:

| **Attributes** | **Purpose** |
| --- | --- |
| `role=list` | Indicates the role as a list for the Dashboard Layout element. |
| `role=listitem` | Indicates the role as a listitem for the Dashboard panels. |
| `role=presentation` | Indicates the role as a presentation for the table when the `showGridLines` property is enabled. |
| `aria-grabbed` | When the panel is chosen for dragging, the aria-grabbed attribute is set to "true". If it's set to "false", the element can be grabbed for drag-and-drop, but it won't be actively held. |

## Keyboard interaction

Keyboard support is not applicable for the Dashboard Layout.

## Accessibility testing

The Dashboard Layout component's accessibility levels are validated through automated testing using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Dashboard Layout component is demonstrated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/dashboard-layout.html) in a new window to evaluate the accessibility of the Dashboard Layout component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/dashboard-layout.html" %}

## See also     

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)