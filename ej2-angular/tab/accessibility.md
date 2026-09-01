---
layout: post
title: Accessibility in Angular Tab | Syncfusion
description: Make the Angular Tab accessible with tablist, tab, and tabpanel WAI-ARIA roles plus full keyboard navigation and screen reader support.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Tab

The Tab component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria/#roles) used to evaluate component accessibility.

The accessibility compliance for the Tab component is outlined below.

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


<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> 
<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

> **High contrast mode:** The Tab component inherits the OS-level high-contrast theme. To verify rendering, enable the Windows High Contrast mode (or the equivalent OS-level accessibility setting) and check the active/hover states for sufficient contrast.

## ARIA attributes

The Tab component follows the [WAI-ARIA Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). ARIA roles and attributes are applied automatically based on the component's state, orientation, and `overflowMode`. The following attributes are managed by the Tab:

| Role / Attribute | Applied to | Functionalities |
| --- | --- | --- |
| `tablist` | Tab header element | Identifies the element as a container of tab controls. |
| `tab` | Tab item element | Identifies the element as an interactive tab inside the `tablist`. |
| `tabpanel` | Tab content element | Identifies the element as the content panel associated with the active tab. |
| `aria-orientation` | Tab header element | Indicates header orientation. Default value is `horizontal`; becomes `vertical` when [`headerPlacement`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#headerplacement) is `Left` or `Right`. |
| `aria-selected` | Tab items | Reflects selection state. The active Tab has `aria-selected="true"`. |
| `aria-labelledby` | Tab content element | Associates the panel with the corresponding tab header. |
| `aria-controls` | Tab items | Associates the tab with its `tabpanel`. |
| `aria-haspopup` | Tab element when popup is enabled | Set to `true` when [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#overflowmode) is `Popup`; `false` otherwise. |
| `aria-disabled` | Disabled tab items | Reflects the disabled state of the Tab item. |

## Keyboard interaction

By default, keyboard navigation is enabled. The component implements keyboard navigation following the WAI-ARIA practices. Once focus is on the active Tab element, the following key combinations are supported:

| Interaction type | Key | Description |
|------------------|-----|-------------|
| Navigation | <kbd>Left</kbd> | Moves focus to the previous Tab. In RTL layouts, focus moves to the next visual Tab. |
| Navigation | <kbd>Right</kbd> | Moves focus to the next Tab. In RTL layouts, focus moves to the previous visual Tab. |
| Activation | <kbd>Enter</kbd> or <kbd>Space</kbd> | Selects the Tab if it is not selected. Opens the drop-down if it is focused. Activates a popup item when one is focused. |
| Popup | <kbd>Esc(Escape)</kbd> | Closes the popup if it is open. |
| Popup | <kbd>Down</kbd> or <kbd>Up</kbd> | Moves between items of the popup in the vertical direction. |
| Navigation | <kbd>Home</kbd> | Moves focus to the first Tab. |
| Navigation | <kbd>End</kbd> | Moves focus to the last Tab. |
| Popup | <kbd>Shift + F10</kbd> | Opens the popup when the Tab is focused and `overflowMode` is `Popup`. |
| Tab close | <kbd>Delete</kbd> | Removes the Tab if the close button is enabled. |
| Focus traversal | <kbd>Tab</kbd> | Moves focus through the interactive elements in the content panel. |
| Focus traversal | <kbd>Shift + Tab</kbd> | Moves focus backward through the interactive elements. |

## Ensuring accessibility

The Tab component's accessibility is validated during automated testing using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core).

Open the [Angular Tab accessibility sample](https://ej2.syncfusion.com/accessibility/tab.html) in a new window to evaluate the Tab with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/tab.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)
* [Tab Key Navigation](./how-to/tab-key-navigation)
* [Keyboard interaction reference](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)