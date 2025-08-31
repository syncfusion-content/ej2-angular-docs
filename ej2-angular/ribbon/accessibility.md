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

The Ribbon component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) roles that are commonly used to evaluate accessibility.

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

The Ribbon component uses [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) patterns to provide accessible functionality. The following ARIA attributes are used in the Ribbon component:

| Attributes | Purpose |
| --- | --- |
| `role=tablist` | Identifies the element that serves as the container for a set of tabs. |
| `role=tab` | Defines an interactive element within a `tablist` that displays its associated `tabpanel` when activated. |
| `role=tabpanel` | Defines the content panel associated with a `tab`, which is displayed when the tab is active. |
| `role=button` | Defines a clickable element that triggers a response when activated by the user. |
| `role=menu` | Defines a widget that offers a list of choices to the user, such as a set of actions or functions. |
| `role=menuitem` | Defines an option within a `menu`. |
| `role=combobox` | Defines an input that controls another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the input. |
| `role=option` | Defines a selectable item in a listbox or combobox. |
| `role=gridcell` | Defines a cell within a grid, such as for the tiles in a color palette. |
| `aria-orientation` | Indicates the orientation of the element, which can be `horizontal`, `vertical`, or `unknown`. |
| `aria-selected` | Indicates the current selection state of widgets like tabs or options. |
| `aria-labelledby` | Establishes a relationship between a tab's content and its corresponding tab header. |
| `aria-controls` | Associates a tab header with its corresponding tab panel. |
| `aria-haspopup` | Indicates that the element can trigger a popup and specifies the type of popup (e.g., `menu` or `dialog`). |
| `aria-disabled` | Indicates that the element is visible but not operable. |
| `aria-expanded` | Indicates whether a collapsible element is currently expanded or collapsed. |
| `aria-label` | Provides an accessible name for an interactive element. |
| `aria-checked` | Indicates the state of a checkbox, radio button, or other toggle controls. |
| `aria-owns` | Establishes a relationship between elements when the DOM hierarchy cannot represent it. |
| `aria-readonly` | Indicates that the element is not editable but is otherwise operable. |
| `aria-activedescendant` | Identifies the currently active descendant of a composite widget, such as a combobox or textbox. |
| `aria-autocomplete` | Indicates how predictions will be presented for a combobox, searchbox, or textbox. |

## Keyboard interaction

The Ribbon component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction) guidelines to support navigation using assistive technologies (AT) and keyboard-only access. The following keyboard shortcuts are supported by the Ribbon component.

### Ribbon tab

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Focuses on the Ribbon tabs. |
| <kbd>Right Arrow</kbd> | Moves focus to the next tab.  |
| <kbd>Left Arrow</kbd> | Moves focus to the previous tab. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Selects the currently focused Ribbon tab. |

### Ribbon items

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Focuses on the Ribbon items. |
| <kbd>Right Arrow</kbd> | Moves focus to the next item. |
| <kbd>Left Arrow</kbd> | Moves focus to the previous item. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Selects the currently focused Ribbon item. |

### Ribbon dropdown items/split button

| Key | Action |
| --- | --- |
| <kbd>Esc</kbd> | Closes the popup. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Opens the popup or activates the highlighted item and closes the popup. |
| <kbd>Arrow Up</kbd> | Moves focus to the next item. |
| <kbd>Arrow Down</kbd> | Moves focus to the previous item. |
| <kbd>Alt</kbd> + <kbd>Arrow Up</kbd> | Closes the popup.|
| <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> | Opens the popup. |

### Ribbon file menu

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Focuses on the Ribbon file menu. |
| <kbd>Esc</kbd> | Closes the popup. |
| <kbd>Enter</kbd> | Opens the popup or activates the highlighted item and closes the popup. |
| <kbd>Arrow Up</kbd> | Moves focus to the previous action item. |
| <kbd>Arrow Down</kbd> | Moves focus to the next action item. |
| <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> | Opens the popup. |

### Ribbon combobox

| Key | Action |
| --- | --- |
| <kbd>Arrow Down</kbd> | Selects the first item in the combobox if no item is selected. Otherwise, moves focus to the next item. |
| <kbd>Arrow Up</kbd> | Moves focus to the previous item. |
| <kbd>Page Down</kbd> | Scrolls down one page and selects the first item when the popup list is open. |
| <kbd>Page Up</kbd> | Scrolls up one page and selects the first item when the popup list is open. |
| <kbd>Enter</kbd> | Selects the focused item and closes the popup list. |
| <kbd>Tab</kbd> | Moves focus to the next focusable element on the page. If the popup is open, it closes the popup first. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element on the page. If the popup is open, it closes the popup first. |
| <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> | Opens the popup list. |
| <kbd>Alt</kbd> + <kbd>Arrow Up</kbd> | Closes the popup list. |
| <kbd>Esc</kbd> | Closes the popup list, retaining the currently selected item. |
| <kbd>Home</kbd> | Moves the cursor to the beginning of the input text. |
| <kbd>End</kbd> | Moves the cursor to the end of the input text. |

## Ensuring accessibility

The accessibility of the Ribbon component is ensured by testing it with the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Ribbon component can be evaluated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/ribbon.html) in a new window to test it with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/ribbon.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
