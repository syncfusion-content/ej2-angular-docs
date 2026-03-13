---
layout: post
title: Accessibility in Angular Sankey component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Accessibility
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Sankey component

The Sankey component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22), and relevant [WAI-ARIA](https://www.w3.org/TR/wai-aria#roles) roles.

## Accessibility compliance

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Accessibility Checker Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Axe-core Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

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

The Sankey component uses WAI-ARIA patterns and attributes to improve accessibility.  
Common attributes include semantic roles and ARIA attributes.

Additional ARIA roles and attributes used:

* img (role)  
* button (role)  
* region (role)  
* aria-label (attribute)  
* aria-hidden (attribute)  
* aria-pressed (attribute)

## Keyboard interaction

Keyboard navigation follows standard guidelines to move focus between nodes and links.

The following keyboard shortcuts are supported:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Alt + J</kbd> | Moves the focus to the Sankey Chart element. |
| <kbd>Tab</kbd> | Moves the focus to the next element in the chart. |
| <kbd>Shift + Tab</kbd> | Moves the focus to the previous element in the chart. |
| <kbd>Down Arrow</kbd> | Moves the focus to the node or link below from the selected element. |
| <kbd>Up Arrow</kbd> | Moves the focus to the node or link above from the selected element. |
| <kbd>Left Arrow</kbd> | Moves the focus to the next node or link from the selected element. |
| <kbd>Right Arrow</kbd> | Moves the focus to the previous node or link from the selected element. |
| <kbd>ESC</kbd> | Cancel the tooltip for the node or link. |
| <kbd>Ctrl + P</kbd> | Prints the Sankey Chart. |

## Ensuring accessibility

The Sankey component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Sankey component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/sankey.html) in a new window to evaluate the accessibility with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/sankey.html" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)