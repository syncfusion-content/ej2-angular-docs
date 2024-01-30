---
layout: post
title: Accessibility in Angular Speed dial component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Speed dial component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Speed dial component

The Speed Dial component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Speed Dial component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/no.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Speed Dial component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) patterns to meet the accessibility. The following ARIA attributes are used in the Speed Dial component:

| Attributes | Purpose  |
| ------------ | ----------------------- |
| `role=menu` | Specifies that the Speed Dial item has a submenu.|
| `role=menuitem` | Indicates an actionable item within the Speed Dial submenu. |
| `aria-label` | Indicates the Speed Dial Popup item text. |
| `aria-expanded` | It indicates whether the Speed Dial current state is expanded or collapsed. |
| `aria-haspopup` | It indicates whether the Speed Dial has popup items or not. |
| `aria-controls` | Attribute is set to the Speed Dial button and it points to the corresponding content. |
| `aria-disabled` | Indicates the state of menu item whether it is disabled. |

## Keyboard interaction

The Speed Dial component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Speed Dial component.

| **Press** | **To do this** |
|------------|-------------------|
| <kbd>Enter</kbd> | Open/close the menu. |
| <kbd>Up-arrow </kbd> | Focuses the next menu item. |
| <kbd>Left-Arrow</kbd> | Focuses the previous menu item. |
| <kbd>Down-Arrow</kbd> | Focuses the previous menu item. |
| <kbd>Right-Arrow</kbd> | Focuses the next menu item. |
| <kbd>Home</kbd> | Focuses the first menu item. |
| <kbd>End</kbd> | Focuses the last menu item. |
| <kbd>Esc</kbd> | Closes the menu. |

## Ensuring accessibility

The Speed Dial component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Speed Dial component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/speed-dial.html) in a new window to evaluate the accessibility of the Speed Dial component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/speed-dial.html" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
