---
layout: post
title: Accessibility in Angular Query Builder component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Query Builder component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Query Builder component

The Query Builder component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WAI-ARIA](https://www.w3.org/TR/wai-aria/) roles, ensuring an inclusive experience for all users.

The following table outlines the accessibility compliance features of the Query Builder component.

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

WAI-ARIA (Accessibility Initiative – Accessible Rich Internet Applications) provides semantics for describing component roles, states, and functionality. These attributes enhance accessibility for assistive technologies, enabling better support for users with disabilities.

The Query Builder uses the following WAI-ARIA attributes:

| Attributes | Purpose |
| --- | --- |
| `role` | Indicates the query builder component. |

## Keyboard interaction

The Query Builder supports full keyboard navigation, enabling users who rely on assistive technologies or keyboard-only navigation to interact with all features. The following keyboard shortcuts are available:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab / Shift + Tab</kbd> | To focus the next item in the rule. |

## Ensuring accessibility

The Query Builder component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Query Builder component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/query-builder.html) in a new window to evaluate the accessibility of the Query Builder component with accessibility tools.

{% previewsample "page.domainurl/samples/query-builder/default-cs1" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
