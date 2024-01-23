---
layout: post
title: Accessibility in Angular List box component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular List box component

The List box component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the List box component is outlined below.

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

The List box component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/List box/) patterns to meet the accessibility. The following ARIA attributes are used in the List box component:

| Attributes | Purpose |
| --- | --- |
| `role` | Indicates the List box component wrapper element as `List box`, the `UL` element as `presentation`, and its list item as `option`. |
| `aria-label` | Provides an accessible name for the List box component. |
| `aria-multiselectable` | Applied to the element with the List box role, tells assistive technologies that the list supports multiple selection. The default value is true. |
| `aria-selected` | Applied to elements with role option that are visually styled as selected to inform assistive technologies that the options are selected. |

## Keyboard interaction

The List box component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/List box/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the List box component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Up arrow</kbd> | Moves focus to the previous option. |
| <kbd>Down arrow</kbd> | Moves focus to the next option. |
| <kbd>Home</kbd> | Moves focus to first option. |
| <kbd>End</kbd> | Moves focus to last option. |
| <kbd>Space</kbd> | Changes the selection state of the focused option. |
| <kbd>Ctrl + A</kbd> | Selects all options in the list. |
| <kbd>Ctrl + Shift + Home</kbd> | Selects the focused option and all options up to the first option. |
| <kbd>Ctrl + Shift + End</kbd> | Selects the focused option and all options down to the last option. |
| <kbd>Ctrl + (Up or Down)</kbd> | Press Ctrl key with up / down arrow or mouse to select multiple items. |

## Ensuring accessibility

The List box component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the List box component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/list-box.html) in a new window to evaluate the accessibility of the List box component with accessibility tools.

{% previewsample "page.domainurl/samples/listbox/getting-started-cs1" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
