---
layout: post
title: Accessibility in Angular Ribbon component | Syncfusion
description:  Learn here all about Accessibility in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Ribbon component

The Ribbon component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Ribbon component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
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

The Ribbon component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) patterns to meet the accessibility. The following ARIA attributes are used in the Ribbon component:

| Attributes | Purpose |
| --- | --- |
| `role=tablist` | Used to identify the element that serves as the container for a set of tabs. |
| `role=tab` | Indicates an interactive element within a tablist that, when activated, displays its associated tab panel.|
| `role=tabpanel` | Specifies the role for the content associated with an active tab, describing its role in presenting the active content.|
| `role=button` | Represents a clickable element that trigger a response when activated by the user.|
| `role=menu` | Represents an item that have sub menu.|
| `role=menuitem` | Indicates an option in a set of choices within a menu. |
| `role=combobox` | Identifies an element as an input that controls another element, commonly used for dropdowns. |
| `role=option` | Used for selectable items in a combobox. |
| `role=gridcell` | Specified as gridcell for the tiles in the color palette. |
| `aria-orientation` | Indicates the element's orientation as horizontal, vertical, or unknown/ambiguous. |
| `aria-selected` | Indicates the current `selected` state of various widgets. |
| `aria-labelledby` | Sets to the Tab content element to indicates the associated Tab header for the content. |
| `aria-controls` | Indicates the associated tabpanel for the header by setting the attribute on Tab items. |
| `aria-haspopup` | Indicates availability and type of interactive popup triggered by the element it's set on. |
| `aria-disabled` | Indicates that the element is perceivable but disabled, making it not editable or operable. |
| `aria-expanded` | Indicates whether a component is expanded or collapsed, set on the respective element. |
| `aria-label` | Defines a string value that labels an interactive element for accessibility. |
| `aria-checked` |  Indicates the current `checked` state of checkboxes, radio buttons, and other widgets. |
| `aria-owns` | Identifies an element or elements, establishing a relationship when DOM hierarchy can't represent it. |
| `aria-readonly` |  Indicates that the element is not editable but is otherwise operable. |
| `aria-activedescendent` | Identifies the currently active element when focus is on a combobox, textbox, group, or application. |
| `aria-autocomplete` |  Indicates whether inputting text could trigger display of predictions and specifies how predictions will be presented for a combobox, searchbox, or textbox. |

## Keyboard interaction

The Ribbon component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Ribbon component.

| **Press** | **To do this** |
| --- | --- |
<b>Ribbon Tab</b>||
| <kbd>Tab</kbd> | To focus the ribbon tabs. |
| <kbd>Right Arrow</kbd> | Moves focus to the next Tab.  |
| <kbd>Left Arrow</kbd> | Moves focus to the previous Tab. |
| <kbd>Enter / Space</kbd> | To select the currently focused ribbon tab. |
<b>Ribbon Items</b>||
| <kbd>Tab</kbd> | To focus the ribbon Items. |
| <kbd>Right Arrow</kbd> | Focuses the next item. |
| <kbd>Left Arrow</kbd> | Focuses the previous item. |
| <kbd>Enter / Space</kbd> | To select the currently focused ribbon item. |
<b>Ribbon Dropdown Items/ Ribbon Split button</b>||
| <kbd>Esc</kbd> | Closes the popup. |
| <kbd>Enter / Space</kbd> | Opens the popup, or activates the highlighted item and closes the popup. |
| <kbd>Arrow Up</kbd> | Focuses the next item. |
| <kbd>Arrow Down</kbd> | Focuses the previous item. |
| <kbd>Alt + Arrow Up</kbd> | Closes the popup.|
| <kbd>Alt + Arrow Down</kbd> | Opens the popup |
<b>Ribbon File menu</b>||
| <kbd>Tab</kbd> | To focus the ribbon file menu. |
| <kbd>Esc</kbd> | Closes the popup. |
| <kbd>Enter</kbd> | Opens the popup, or activates the highlighted item and closes the popup. |
| <kbd>Arrow Up</kbd> | Focuses the previous action item. |
| <kbd>Arrow Down</kbd> | Focuses the next action item. |
| <kbd>Alt + Arrow Down</kbd> | Opens the popup |
<b>Ribbon Combobox</b>||
| <kbd>Arrow Down</kbd> | Selects the first item in the ComboBox when no item selected. Otherwise, selects the item next to the currently selected item. |
| <kbd>Arrow Up</kbd> | Selects the item previous to the currently selected one. |
| <kbd>Page Down</kbd> | Scrolls down to the next page and selects the first item when popup list opens. |
| <kbd>Page Up</kbd> | Scrolls up to the previous page and selects the first item when popup list opens. |
| <kbd>Enter</kbd> | Selects the focused item and popup list closes when it is in open state. |
| <kbd>Tab</kbd> | Focuses on the next TabIndex element on the page when the popup is closed. Otherwise, closes the popup list and remains the focus of the component. |
| <kbd>Shift + tab</kbd> | Focuses on the previous TabIndex element on the page when the popup is closed. Otherwise, closes the popup list and remains the focus of the component. |
| <kbd>Alt + Down</kbd> | Open the popup list |
| <kbd>Alt + Up</kbd> | Close the popup list |
| <kbd>Esc(Escape)</kbd> | Closes the popup list when it is in an open state and the currently selected item remains the same. |
| <kbd>Home</kbd> | Cursor moves to before of first character in input |
| <kbd>End</kbd> | Cursor moves to next of last character in input |

## Ensuring accessibility

The Ribbon component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Ribbon component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/ribbon.html) in a new window to evaluate the accessibility of the Ribbon component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/ribbon.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
