---
layout: post
title: Accessibility in Angular Block Editor component | Syncfusion
description:  Checkout and learn about Accessibility with Angular Block Editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Block Editor component

The Block Editor component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Block Editor component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) |<img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

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

The following ARIA attributes are recommended for the Block Editor to improve discoverability and operable by assistive technologies.

| Attribute | Purpose |
|---|---|
| `contenteditable="true"` + `role="textbox"` | Marks the editable block container as an editable text region. The editable region must have an accessible name to satisfy input-field-name checks. |
| `role="toolbar"` | Applied to inline formatting toolbars and action-menu containers to group related controls for assistive technologies. |
| `role="grid"` | Table blocks are exposed as a grid/table for screen readers and keyboard navigation; ensure header cells (`th`) and proper `scope`/`headers` attributes are present. |
| `role="img"` | Ensure accessible name is present for informative images. |
| `aria-label` / `aria-labelledby` | Provides the accessible name for the editor, toolbar, or specific editable region. The running sample is missing this on the main editable container (axe reports `aria-input-field-name`). |
| `aria-orientation` | Specifies the orientation of the toolbar. |
| `aria-disabled` | Indicates whether the toolbar or element is currently disabled and not interactive. |
| `aria-haspopup` / `aria-expanded` | Used by menus and popups (command/context/action menus). `aria-expanded` reflects open/closed state. |
| `aria-hidden` | Hides non-interactive or offscreen content (e.g., closed popups) from assistive technologies. |

## Keyboard interaction

The Block Editor component follows [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guidelines, making it easy for people who use assistive technologies (AT) or rely solely on keyboard navigation. The component supports a variety of keyboard shortcuts for common actions.

For a complete list of keyboard shortcuts, refer to the [Keyboard Support](https://ej2.syncfusion.com/angular/documentation/block-editor/keyboard-shortcuts) documentation.

## Ensuring accessibility

The accessibility of the Block Editor component is continuously verified using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)