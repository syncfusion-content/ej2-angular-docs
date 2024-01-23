---
layout: post
title: Accessibility in Angular Treegrid component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Treegrid component

The Tree Grid component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Tree Grid component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
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

The Tree Grid component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/) patterns to meet the accessibility. The following ARIA attributes are used in the Tree Grid component:

| Attributes | Purpose |
| --- | --- |
| `role=treegrid` | Used to convey a significant and contextual message to the user. |
| `aria-selected` | Accurately reflect the selection state, whether it's single-select or multi-select. |
| `aria-expanded` | It can be used to show whether a node is expanded or collapsed, making it easier for screen reader users to navigate and understand the hierarchy. |
| `aria-sort` | Indicate the current sorting order of a table column for users with disabilities, facilitating accessible data presentation and interaction. |
| `aria-busy` |  Loading state to improve accessibility for users, particularly those relying on screen readers. |
| `aria-invalid` | To indicate whether the user's input in a form field is valid or invalid, aiding users, including those with disabilities, in understanding and correcting their input. |
| `aria-grabbed` | Provides accessibility information for users interacting with draggable elements |
| `aria-owns` | Establishing relationships between an element and the elements it owns or controls. |
| `aria-label` | Provides an accessible name for the close icon. |

## Keyboard interaction

The Tree Grid component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Tree Grid component.

Interaction Keys |Description
-----|-----
<kbd>PageDown</kbd> |Goes to the next page.
<kbd>PageUp</kbd> |Goes to the previous page.
<kbd>Ctrl + Alt +PageDown</kbd> |Goes to the last page.
<kbd>Ctrl + Alt + PageUp</kbd> |Goes to the first page.
<kbd>Alt + PageDown</kbd> |Goes to the next page.
<kbd>Alt + PageUp</kbd> |Goes to the previous page.
<kbd>Home</kbd> |Goes to the first cell.
<kbd>End</kbd> |Goes to the last cell.
<kbd>Ctrl + Home</kbd> |Goes to the first row.
<kbd>Ctrl + End</kbd> |Goes to the last row.
<kbd>DownArrow</kbd> |Moves the cell focus downward.
<kbd>UpArrow</kbd> |Moves the cell focus upward.
<kbd>LeftArrow</kbd> |Moves the cell focus left side.
<kbd>RightArrow</kbd> |Moves the cell focus right side.
<kbd>Shift + DownArrow</kbd> |Extends the row/cell selection downwards.
<kbd>Shift + UpArrow</kbd> |Extends the row/cell selection upwards.
<kbd>Shift + LeftArrow</kbd> |Extends the cell selection to the left side.
<kbd>Shift + RightArrow</kbd> |Extends the cell selection to the right side.
<kbd>Enter</kbd> | Moves the row/cell selection downward. If current cell is in edit state, then completes the editing. If the current cell is a header then performs sorting.
<kbd>Shift + Enter</kbd> | Moves the row/cell selection upward. If the current cell is a header then clears sorting for the selected column.
<kbd>Ctrl + Enter</kbd> | If the current cell is a header then performs multi-sorting.
<kbd>Tab</kbd> | Moves the cell selection right side.
<kbd>Shift + Tab</kbd> | Moves the cell selection left side.
<kbd>Esc</kbd> |Deselects all the rows/cells.
<kbd>Ctrl + A</kbd> |Selects all the rows/cells.
<kbd>UpArrow</kbd> |Moves up a row/cell selection.
<kbd>DownArrow</kbd> |Moves down a row/cell selection.
<kbd>RightArrow</kbd> |Moves to the right cell selection.
<kbd>LeftArrow</kbd> |Moves to the left cell selection.
<kbd>Ctrl + Shift + DownArrow</kbd> |Expands the selected group.
<kbd>Ctrl + DownArrow</kbd> |Expands all the visible groups.
<kbd>Ctrl + Shift + UpArrow</kbd> |Collapses the selected group.
<kbd>Ctrl + UpArrow</kbd> |Collapses all the visible groups.
<kbd>Ctrl + P</kbd> |Prints the TreeGrid.

## Ensuring accessibility

The Tree Grid component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Tree Grid component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/tree-grid.html) in a new window to evaluate the accessibility of the Tree Grid component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/tree-grid.html" %}

## See also
* [Accessibility in Syncfusion Angular components](../common/accessibility)

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
