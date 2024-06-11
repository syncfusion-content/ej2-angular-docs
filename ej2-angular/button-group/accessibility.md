---
layout: post
title: Accessibility in Angular Button Group Component | Syncfusion
description: Learn here all about accessibility in Syncfusion Essential Angular Button Group component, it's elements and more.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Button Group Component

The Button group component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Button group component is outlined below.

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

The Button group component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/button/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Button group component.

### Normal behavior

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Focuses the next button in the ButtonGroup. |
| <kbd>Enter/Space</kbd> | Activates the focussed button in the ButtonGroup. |

### Checkbox behavior

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Focuses the next button in the ButtonGroup. |
| <kbd>Space</kbd> | Activates the focused button in the ButtonGroup. |

### Radiobutton behavior

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Focuses the active button in the ButtonGroup. |
| <kbd>Right</kbd> | Activates next/previous button in the ButtonGroup. |

## Ensuring accessibility

The Button group component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Button group component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/button-group.html) in a new window to evaluate the accessibility of the Button group component with accessibility tools.

{% previewsample "page.domainurl/samples/button-group/util-cs1" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
