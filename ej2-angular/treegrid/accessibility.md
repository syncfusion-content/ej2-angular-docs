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

Accessibility is achieved in the TreeGrid component through WAI-ARIA standard and keyboard navigations.  The TreeGrid features can be effectively accessed through assistive technologies such as screen readers.

## WAI-ARIA

WAI-ARIA (Accessibility Initiative – Accessible Rich Internet Applications) defines a way to increase the accessibility of web pages, dynamic content, and user interface components developed with Ajax, HTML, JavaScript, and related technologies. ARIA provides additional semantics to describe the role, state, and functionality of web components.

The following ARIA attributes are used in the TreeGrid:a
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

## Keyboard navigation

TreeGrid functionalities can be interactive with keyboard shortcuts.

The following keyboard shortcuts are supported by TreeGrid.

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

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
