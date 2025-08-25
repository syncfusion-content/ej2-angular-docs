---
layout: post
title: Accessibility in Angular TreeGrid component | Syncfusion
description: Learn how the Syncfusion Angular TreeGrid component supports accessibility standards, WAI-ARIA roles, keyboard navigation, and compliance with ADA, Section 508, and WCAG guidelines.
platform: ej2-angular
control: Accessibility
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular TreeGrid component

The TreeGrid component follows established accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WAI-ARIA](https://www.w3.org/TR/wai-aria/#roles) practices to promote an inclusive user experience.

## Accessibility compliance

The following table summarizes TreeGrid's compliance with major accessibility criteria:

| Accessibility Criteria | Compatibility |
|-----------------------|---------------|
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Partial"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Full"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Partial"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Full"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Full"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Full"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Full"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Full"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Full"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Full"> - All features of the component meet the requirement.</div>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Partial"> - Some features of the component do not fully meet the requirement.</div>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The TreeGrid component implements [WAI-ARIA TreeGrid patterns](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/) to ensure accessibility support. The following ARIA attributes are used:

| Attribute       | Purpose                                                                                                                              |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `role=treegrid`     | Identifies the component as a treegrid, conveying its hierarchical nature to assistive technologies.                             |
| `aria-selected`     | Represents the selection state, whether single or multiple.                                                                     |
| `aria-expanded`     | Indicates whether a node is expanded or collapsed, helping users understand hierarchical structure.                             |
| `aria-sort`         | Communicates the current sorting state of a column for accessible data presentation.                                            |
| `aria-busy`         | Indicates loading state to users, especially for screen readers.                                                               |
| `aria-invalid`      | Signals whether user input is valid or invalid, aiding accessible form validation.                                              |
| `aria-grabbed`      | Provides context for draggable elements within the grid.                                                                       |
| `aria-owns`         | Establishes relationships between an element and the elements it controls or owns.                                             |
| `aria-label`        | Supplies accessible names to various controls, such as the close icon.                                                         |

## Keyboard interaction

TreeGrid follows [WAI-ARIA keyboard interactions](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/) to support users relying on assistive technologies or keyboard navigation alone. The following keyboard shortcuts are available:

Interaction Keys                 | Description
---------------------------------|-------------------------------------------------------------
<kbd>PageDown</kbd>              | Go to the next page.
<kbd>PageUp</kbd>                | Go to the previous page.
<kbd>Ctrl + Alt + PageDown</kbd> | Go to the last page.
<kbd>Ctrl + Alt + PageUp</kbd>   | Go to the first page.
<kbd>Alt + PageDown</kbd>        | Go to the next page.
<kbd>Alt + PageUp</kbd>          | Go to the previous page.
<kbd>Home</kbd>                  | Move focus to the first cell.
<kbd>End</kbd>                   | Move focus to the last cell.
<kbd>Ctrl + Home</kbd>           | Move focus to the first row.
<kbd>Ctrl + End</kbd>            | Move focus to the last row.
<kbd>DownArrow</kbd>             | Move cell focus downward.
<kbd>UpArrow</kbd>               | Move cell focus upward.
<kbd>LeftArrow</kbd>             | Move cell focus left.
<kbd>RightArrow</kbd>            | Move cell focus right.
<kbd>Shift + DownArrow</kbd>     | Extend row/cell selection downward.
<kbd>Shift + UpArrow</kbd>       | Extend row/cell selection upward.
<kbd>Shift + LeftArrow</kbd>     | Extend cell selection left.
<kbd>Shift + RightArrow</kbd>    | Extend cell selection right.
<kbd>Enter</kbd>                 | Move selection downward; in edit, complete editing; in header, sort.
<kbd>Shift + Enter</kbd>         | Move selection upward; in header, clear sort for the column.
<kbd>Ctrl + Enter</kbd>          | In header, perform multi-sorting.
<kbd>Tab</kbd>                   | Move right in cell selection.
<kbd>Shift + Tab</kbd>           | Move left in cell selection.
<kbd>Esc</kbd>                   | Deselect all rows or cells.
<kbd>Ctrl + A</kbd>              | Select all rows or cells.
<kbd>Ctrl + Shift + DownArrow</kbd> | Expand the selected group.
<kbd>Ctrl + DownArrow</kbd>          | Expand all visible groups.
<kbd>Ctrl + Shift + UpArrow</kbd>    | Collapse the selected group.
<kbd>Ctrl + UpArrow</kbd>             | Collapse all visible groups.
<kbd>Ctrl + P</kbd>                  | Print the TreeGrid.

## Ensuring accessibility

The accessibility of the TreeGrid component is verified using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools with automated testing.

To evaluate accessibility in real scenarios, view the TreeGrid accessibility [sample](https://ej2.syncfusion.com/accessibility/tree-grid.html) in a new window and test with your preferred accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/tree-grid.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)

> For additional feature highlights, see the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid) or explore the [TreeGrid live example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/treegrid/treegrid-overview) for interactive data presentation and accessibility configurations.