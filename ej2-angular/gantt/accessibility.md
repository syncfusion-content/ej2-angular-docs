---
layout: post
title: Accessibility in Angular Gantt component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Gantt component

The Gantt component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Gantt component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes">
|

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

The Gantt component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns) patterns to meet the accessibility. The following ARIA attributes are used in the Gantt component:

The following ARIA attributes are used in Gantt:

| Attributes | Purpose |
| --- | --- |
| `grid (role)` | This attribute is added to the `e-table` element present in the Gantt, which represents Grid part |
| `gridcell (role)` | This attribute is added to the `td` elements present within the `e-table`, which represents the work cells of Gantt |
| `columnheader (role)` | This attribute is added to the `th` elements within the `e-table`, which represents the header cells of Grid table |
| `separator (role)` | This attribute is added to the `e-split-bar` element, which represents the splitter between the Grid table and Chart |
| `dialog (role)` | This attribute is added to the `e-dialog` element, which represents the pop-up dialog |
| `toolbar (role)` | This attribute is added to the `e-gantt-toolbar` element, which represents the toolbars of Gantt |
| `aria-label` | It indicates the element's information`<br>` It is assigned to the Gantt UI elements such as timeline cell, taskbar, left label, right label, dependency line, and event markers. |
| `aria-selected` | This attribute is assigned to the Gantt chart row, and it defaults to `false`. The value is changed to `true` when the user selects a grid cell or task |
| `aria-expanded` | This attribute is assigned to the Gantt chart parent task row. The value is changed to `true` when the user clicks a parent taskbar to expand. After the user clicked a parent taskbar to collapse, the attribute value is changed to `false` |
| `aria-grabbed` | This attribute is assigned to the taskbars of Gantt when the user tries to achieve taskbar editing |

## Keyboard navigation

The Gantt component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Gantt component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Home</kbd> | Selects the first row. |
| <kbd>End</kbd> | Selects the last row. |
| <kbd>DownArrow</kbd> | Moves the cell focus/row or cell selection downward. |
| <kbd>UpArrow</kbd> | Moves the cell focus/row or cell selection upward. |
| <kbd>LeftArrow</kbd> | Moves the cell focus/row or cell selection left side. |
| <kbd>RightArrow</kbd> | Moves the cell focus/row or cell selection right side. |
| <kbd>Ctrl + Up Arrow</kbd> | Collapses all tasks. |
| <kbd>Ctrl + Down Arrow</kbd> | Expands all tasks. |
| <kbd>Ctrl + Shift + Up Arrow</kbd> | Collapses the selected row. |
| <kbd>Ctrl + Shift + Down Arrow</kbd> | Expands the selected row. |
|<kbd>Enter</kbd> | Saves request. |
| <kbd>Esc</kbd> | Cancels request. |
| <kbd>Insert</kbd> | Adds a new row. |
| <kbd>Ctrl + Insert</kbd> | Opens addRowDialog. |
| <kbd>Ctrl + F2</kbd> | Opens editRowDialog. |
| <kbd>Delete</kbd> | Deletes the selected row. |
| <kbd>Shift + F5</kbd> | FocusTask |
| <kbd>Ctrl + Shift + F</kbd> | Focus search |
| <kbd>Shift + DownArrow</kbd> | Extends the row/cell selection downwards. |
| <kbd>Shift + UpArrow</kbd> | Extends the row/cell selection upwards. |
| <kbd>Shift + LeftArrow</kbd> | Extends the cell selection to the left side. |
| <kbd>Shift + RightArrow</kbd> | Extends the cell selection to the right side. |
| <kbd>Tab / Shift + Tab</kbd> | To focus the close icon in the message. |
| <kbd>Alt + j</kbd> | Focus Gantt component. |

## Ensuring accessibility

The Gantt component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Gantt component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/gantt.html) in a new window to evaluate the accessibility of the Gantt component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/gantt.html" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
