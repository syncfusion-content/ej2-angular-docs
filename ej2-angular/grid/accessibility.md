---
layout: post
title: Accessibility in Angular Grid component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Grid component

The Grid component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Grid component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |

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

The Grid component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) patterns to meet the accessibility. The following ARIA attributes are used in the Grid component:

* grid (role)
* row (role)
* gridcell (role)
* aria-selected (attribute)
* aria-expanded (attribute)
* aria-sort (attribute)
* aria-busy (attribute)
* aria-invalid (attribute)
* aria-grabbed (attribute)
* aria-owns (attribute)
* aria-label (attribute)

## Keyboard interaction

The Grid component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Grid component.

**Press**  | **To do this**
-----|-----
<b>Pager</b>||
<kbd>Tab / Shift + Tab</kbd> | Focus on the next/previous pager item.
<kbd>Enter / Space</kbd> | Select the currently focused page.
<kbd>Right Arrow / PageDown</kbd> | Navigate to next page.
<kbd>Left Arrow / PageUp</kbd> | Navigate to previous page.
<kbd>Home / End</kbd> | Navigate to first and last page.
<b>Focus Elements</b>||
<kbd>Home</kbd> | Goes to the first cell.
<kbd>End</kbd> | Goes to the last cell.
<kbd>Ctrl + Home</kbd> | Goes to the first row.
<kbd>Ctrl + End</kbd> | Goes to the last row.
<kbd>DownArrow</kbd> | Moves the cell focus downward.
<kbd>UpArrow</kbd> | Moves the cell focus upward.
<kbd>LeftArrow</kbd> | Moves the cell focus left side.
<kbd>RightArrow</kbd> | Moves the cell focus right side.
<kbd>Alt + J</kbd> | To focus grid header element.
<kbd>Alt + W</kbd> | To focus grid content element.
<b>Selection</b>||
<kbd>Shift + DownArrow</kbd> | Extends the row/cell selection downwards.
<kbd>Shift + UpArrow</kbd> | Extends the row/cell selection upwards.
<kbd>Shift + LeftArrow</kbd> | Extends the cell selection to the left side.
<kbd>Shift + RightArrow</kbd> | Extends the cell selection to the right side.
<kbd>Enter</kbd> | Moves the row/cell selection downward.
<kbd>Shift + Enter</kbd> | Moves the row/cell selection upward.
<kbd>Tab</kbd> | Moves the cell selection right side.
<kbd>Shift + Tab</kbd> | Moves the cell selection left side.
<kbd>Esc</kbd> | Deselects all the rows/cells.
<kbd>Ctrl + A</kbd> | Selects all the rows/cells.
<kbd>UpArrow</kbd> | Moves up a row/cell selection.
<kbd>DownArrow</kbd> | Moves down a row/cell selection.
<kbd>RightArrow</kbd> | Moves to the right cell selection.
<kbd>LeftArrow</kbd> | Moves to the left cell selection.
<b>Grouping</b>||
<kbd>Ctrl + DownArrow</kbd> | Expands all the visible groups.
<kbd>Ctrl + UpArrow</kbd> | Collapses all the visible groups.
<kbd>Ctrl + Space</kbd> | Performs grouping when focused on a header element.
<kbd>Enter</kbd> | If the current cell is an expand/collapse cell then expands/collapses the current group/detailrow/childgrid.
<b>Print</b>||
<kbd>Ctrl + P</kbd> | Prints the Grid.
<b>Clipboard</b>||
<kbd>Ctrl + C</kbd> | Copy selected rows or cells data into clipboard
<kbd>Ctrl + Shift + H</kbd> | Copy selected rows or cells data with header into clipboard
<b>Edit</b>||
<kbd>F2</kbd> | Edits current selected row/cell in Grid.
<kbd>Enter</kbd> | If current row/cell is in edit state, then completes the editing.
<b>Filtering</b>||
<kbd>Alt + Down arrow</kbd> | Opens the filter menu(excel, menu and checkbox filter) when its header element is in focused state.
<b>Column Menu</b>||
<kbd>Alt + Down arrow</kbd> | Opens column menu when its header element is in focused state.
<b>Reordering</b>||
<kbd>Ctrl + left arrow or right arrow</kbd> | Reorders the focused header column to the left or right side.
<b>Sorting</b>||
<kbd>Ctrl + Enter</kbd> | Performs multi-sorting on a column when its header element is in focused state.
<kbd>Shift + Enter</kbd> | Clears sorting for the focused header column.
<kbd>Enter</kbd> | Performs sorting(ascending/descending) on a column when its header element is in focused state.

## Ensuring accessibility

The Grid component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Grid component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/grid.html) in a new window to evaluate the accessibility of the Grid component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/grid.html" %}

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)