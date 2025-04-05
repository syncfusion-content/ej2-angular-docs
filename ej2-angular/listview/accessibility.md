---
layout: post
title: Accessibility in Angular ListView component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular ListView component

The ListView component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the ListView component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
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

The ListView component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) patterns to meet the accessibility. The following ARIA attributes are used in the ListView component:

| Attributes | Purpose |
| --- | --- |
| `role=list` | Specifies the non selectable list container. |
| `role=listitem`| Specifies the role of each item in a selectable ListView and its containment within the list. |
| `role=presentation` | Specifies the role of non selectable list element. |
| `role=checkbox` | Indicates checkbox component along with listitem element. |
| `aria-checked` | Indicates the current checked state of checkbox. |
| `aria-label` | Provides an accessible name for the ListView Checkbox. |
| `aria-disabled` | Indicates element is perceivable but disabled. |

## Keyboard interaction

The ListView component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the ListView component.

| Keyboard shortcuts | Actions |
|------------|-------------------|
| <kbd>Arrow Up</kbd> | Move to the previous list item |
| <kbd>Arrow Down</kbd> | Move to the next list item |
| <kbd>Space</kbd> | Check and uncheck the targeted list from the whole list |
| <kbd>BackSpace</kbd> | Get back to the previous lists if it is nested list |
| <kbd>Home</kbd> | Moves focus to first list item |
| <kbd>End</kbd> | Moves focus to last list item |

## Ensuring accessibility

The ListView component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the ListView component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/list-view.html) in a new window to evaluate the accessibility of the ListView component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/list-view.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
