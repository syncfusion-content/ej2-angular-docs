---
layout: post
title: Accessibility in Angular Menu component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Menu component

The Menu component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Menu component is outlined below.

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

The Menu component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) patterns to meet the accessibility. The following ARIA attributes are used in the Menu component:

| Attributes | Purpose |
| --- | --- |
| `role` | Indicates Menu component's root menu as `menubar`, popup as `menu`, and the popup items as `menuitem`. |
| `aria-haspopup` | Indicates the availability and type of interactive popup element. |
| `aria-expanded` | Indicates whether the subtree can be expanded or collapsed, and indicates whether its current state can be expanded or collapsed. |
| `aria-orientation` | Indicates whether the orientation is horizontal or vertical. The default orientation is horizontal. |
| `aria-label` | Indicates the menu item text. |
| `aria-disabled` | Indicates the state of menu item whether it is disabled. |

## Keyboard interaction

The Menu component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Menu component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Esc</kbd> | Closes the sub menu that contains focus and returns focus to the parent element. |
| <kbd>Enter</kbd> | Opens the sub menu if focused menu item has sub menu, and places focus on its first item or activates the item and closes the sub menu. |
| <kbd>Up</kbd> | Navigates up or to the previous menu item. |
| <kbd>Down</kbd> | Navigates down or to the next menu item. |
| <kbd>Left</kbd> | Closes the current sub menu and navigates to the parent menu. |
| <kbd>Right</kbd> | Navigates and open the next sub menu. |
| <kbd>Home</kbd> | Focuses the first item. |
| <kbd>End</kbd> | Focuses the last item. 

## Ensuring accessibility

The Menu component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Menu component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/menu.html) in a new window to evaluate the accessibility of the Menu component with accessibility tools.

{% previewsample "page.domainurl/samples/menu/getting-started-cs1" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
