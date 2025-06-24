---
layout: post
title: Accessibility in Angular MultiColumn ComboBox component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular MultiColumn ComboBox component

The MultiColumn ComboBox component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the MultiColumn ComboBox component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

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

The following ARIA attributes are used in the MultiColumn ComboBox component:

| Attributes | Purpose |
| ------------ | ----------------------- |
| `role=combobox` | Identifies an input element that controls another element, like a listbox or grid, which can pop up to help the user set its value. |
| `aria-expanded` | Indicates whether the popup list has expanded or not. |
| `aria-selected` | Indicates the selected option. |
| `aria-readonly` | Indicates the readonly state of the MultiColumn ComboBox element. |
| `aria-disabled` | Indicates whether the MultiColumn ComboBox component is in a disabled state or not. |
| `aria-owns` | This attribute contains the ID of the popup list to indicate popup as a child element. |

## Keyboard interaction

The following keyboard shortcuts are supported by the MultiColumn ComboBox component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Enter</kbd> | Selects the focused item and popup list closes when it is in open state.  |
| <kbd>Esc</kbd> | Closes the popup list when it is in an open state and the currently selected item remains the same. |
| <kbd>Alt +down</kbd> | Opens the popup list. |
| <kbd>Alt + Up</kbd> | Closes the popup list. |
| <kbd>Arrow Up</kbd> | Selects the item previous to the currently selected one. |
| <kbd>Arrow Down</kbd> | Selects the first item in the MultiColumn ComboBox when no item selected. Otherwise, selects the item next to the currently selected item. |
| <kbd>Home  </kbd> | Selects the first item in the popup list. |
| <kbd>End</kbd> | Selects the last item in the popup list. |
| <kbd>Tab</kbd> | Focuses on the next TabIndex element on the page when the popup is closed. Otherwise, closes the popup list and remains the focus of the component. |
| <kbd>Shift + Tab</kbd> | Focuses on the previous TabIndex element on the page when the popup is closed. Otherwise, closes the popup list and remains the focus of the component. |

## Ensuring accessibility

The MultiColumn ComboBox component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> components](../common/accessibility)