---
layout: post
title: Accessibility in Angular Toolbar | Syncfusion
description: Make the Angular Toolbar accessible with the WAI-ARIA toolbar role, aria-orientation, arrow key navigation, and screen reader support.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Toolbar

The [Angular Toolbar](https://www.syncfusion.com/angular-ui-components/angular-toolbar) component is designed to follow the [WAI-ARIA Authoring Practices Guide for the Toolbar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/). It exposes the appropriate WAI-ARIA roles, states, and properties, and provides keyboard navigation for users of assistive technologies.

Accessibility information is conveyed through attributes such as `aria-label`, `aria-orientation`, `aria-expanded`, and `aria-haspopup`, which assistive technologies consume to describe elements and their state. Keyboard navigation follows the [WAI-ARIA practices](https://www.w3.org/WAI/ARIA/apg/) and the Toolbar has been verified in major screen readers.

The accessibility compliance for the Toolbar component is outlined below.

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

The Toolbar applies ARIA accessibility attributes following the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/), so it is consumable by screen readers and other assistive technology devices.

### Role

| **Attribute** | **Function** |
| --- | --- |
| `role="toolbar"` | Set on the Toolbar element to describe its actual role to assistive technologies. |

### Attributes

| **Attribute** | **Function** |
| --- | --- |
| `aria-orientation` | Set on the Toolbar element to indicate the Toolbar orientation. Default value is `horizontal`. |
| `aria-label` | Set on the Toolbar element to describe the purpose of the toolbar group. The value can be customized in Angular by using [`htmlAttributes`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#htmlattributes) on the Toolbar host. |
| `aria-expanded` | Set on the Toolbar popup trigger element to indicate whether the overflow popup is currently open (`true`) or closed (`false`). The value toggles with the popup state. |
| `aria-haspopup` | Set on the Toolbar overflow trigger element to indicate that the Toolbar opens a popup. Default value is `false`. When [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#overflowmode) is `'Popup'`, the attribute value is set to `true`. |
| `aria-disabled` | Set on Toolbar items to indicate the disabled state of the item. To disable items programmatically, use the [`enableItems`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#enableitems) method with `false`. |

## Keyboard interaction

Keyboard navigation is enabled by default. The key maps are split between the main Toolbar and the overflow popup when it is open.

### Main Toolbar navigation

| Key | Description |
| --- | --- |
| <kbd>Left</kbd> | Moves focus to the previous item. |
| <kbd>Right</kbd> | Moves focus to the next item. |
| <kbd>Home</kbd> | Moves focus to the first Toolbar item. |
| <kbd>End</kbd> | Moves focus to the last Toolbar item. |
| <kbd>Enter</kbd> | When focus is on a Toolbar command, activates the item. When focus is on the popup trigger, opens the popup. |
| <kbd>Tab</kbd> | Moves focus through the interactive elements in forward order. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus through the interactive elements in reverse order. |

### Popup navigation

When the overflow popup is open, focus moves into the popup and the following keys apply in addition to <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd>.

| Key | Description |
| --- | --- |
| <kbd>Down</kbd> | Moves focus to the next popup item. |
| <kbd>Up</kbd> | Moves focus to the previous popup item. |
| <kbd>Enter</kbd> | Activates the focused popup item. |
| <kbd>Esc</kbd> | Closes the popup and returns focus to the Toolbar trigger. |

## Ensuring accessibility

The Toolbar component's accessibility levels are ensured through automated validation using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during the Syncfusion test pipeline.

You can review the live Toolbar demo and run accessibility tools against it. Open the [Toolbar demo in a new window](https://ej2.syncfusion.com/angular/demos/#/material/toolbar/default) to evaluate the component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/toolbar.html" %}

## See also

- [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
- [WAI-ARIA Toolbar Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)