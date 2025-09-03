---
layout: post
title: Accessibility in Angular Context menu component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
control: Context Menu
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Context menu component

The Angular ContextMenu component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Angular ContextMenu component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support| <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
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

The Angular ContextMenu component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) patterns to meet accessibility requirements. The following ARIA attributes are used in the ContextMenu component:

| Attributes | Purpose |
| --- | --- |
| `role` | Indicates the ContextMenu component popup as `menu`, and the popup items as `menuitem`. |
| `aria-haspopup` | Indicates the availability and type of interactive popup element. |
| `aria-expanded` | Indicates whether the subtree can be expanded or collapsed, as well as indicates whether its current state is expanded or collapsed. |
| `aria-label` | Indicates the menu item text. |

## Keyboard interaction

The Angular ContextMenu component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/#keyboardinteraction) guidelines, making it accessible for people who use assistive technologies and those who rely completely on keyboard navigation. The following keyboard shortcuts are supported by the ContextMenu component:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Esc</kbd> | Closes the opened sub menu. |
| <kbd>Enter</kbd> | Selects the focused item. |
| <kbd>Up</kbd> | Navigates up or to the previous menu item. |
| <kbd>Down</kbd> | Navigates down or to the next menu item. |
| <kbd>Left</kbd> | Close the current sub menu and navigates to the parent menu. |
| <kbd>Right</kbd> | Navigates and open the next sub menu. |

## Ensuring accessibility

The Angular ContextMenu component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the ContextMenu component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/context-menu.html) in a new window to evaluate the accessibility of the ContextMenu component with accessibility tools.

{% previewsample "page.domainurl/samples/context-menu/aria-and-keyboard-cs1" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)