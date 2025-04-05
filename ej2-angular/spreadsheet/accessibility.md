---
layout: post
title: Accessibility in Angular Spreadsheet component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Spreadsheet component

The Spreadsheet component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Spreadsheet component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 ](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 ](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
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

The Spreadsheet component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the Spreadsheet component:

| Attributes | Purpose |
|-------|---------|
| `grid` (role) | This role is added to the spreadsheet content table and describes the collection of rows and columns. |
| `gridcell` (role) | This role is added to the cell element and describes the rows `<td>` element. |
| `rowheader` (role) | This role is added to the row header and describes the header of the rows. |
| `colheader` (role) | This role is added to the column header and describes the header of the columns. |
| `aria-rowindex` (attribute) | This attribute describes the table's row index in the spreadsheet. |
| `aria-colindex` (attribute) | This attribute describes the table's column index in the spreadsheet. |
| `aria-selected` (attribute) | This attribute describes an item's (cell, menu, checkbox, etc.) current selected state in the spreadsheet. |
| `aria-rowcount` (attribute) | This attribute describes the total number of rows in the table. |
| `aria-colcount` (attribute) | This attribute describes the total number of columns in the table. |
| `aria-busy` (attribute) | This attribute describes a currently updated or modified element. |
| `aria-label` (attribute) | This attribute describes the accessible name for the interactive elements. |
| `textbox` (role) | This role is assigned to the textbox that accepts text input. |
| `menu` (role) | This role has been added to the menu and describes the menu items. |
| `aria-expanded` (attribute) | This attribute describes the control (for example, dropdown) is expanded or collapsed. |
| `aria-multiline` (attribute) | This attribute defines what the Alt + Enter key does in the spreadsheet editor. |

## Keyboard interaction

The Spreadsheet component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Spreadsheet component.

| Press | To do this |
|----------|-------------|
| Up arrow | Navigate from the active cell to the previous cell in the same column. |
| Down arrow | Navigate from the active cell to the next cell in the same column. |
| Left arrow | Navigate from the active cell to the previous cell in the same row. |
| Right arrow | Navigate from the active cell to the next cell in the same row. |
| Tab | Navigate the active cell to the next cell in the same row. |
| Shift + Tab | Navigate the active cell to the previous cell in the same row. |
| Home | Moves the selection to starting column in worksheet. |
| Ctrl + Home | Move the selection to the first visible cell on a worksheet. |
| Shift + Home | Extend the cell selection to the first column of a worksheet. |
| Ctrl + Shift + Home | Extend the selection of cells to the beginning of the worksheet. |
| Ctrl + End | Move to the last cell on a worksheet, right most last column and last row cell. |
| Page Up | Move page up. |    
| Page Down | Move page down. |
| Shift + Page Up | Perform page up by selecting all cells between. |
| Shift + Page Down | Perform page down by selecting all cells between. |
| Ctrl + Up | Navigate to the non-blank cell before the active cell in the same column. |
| Ctrl + Down | Navigate to the last non-blank cell in the same column as the active cell. |
| Ctrl + Left | Navigate to the non-blank cell before the active cell in the same row. |
| Ctrl + Right | Navigate to the last non-blank cell in the same row as the active cell. |
| Shift + Up | Extend the selection of cells to the previous row. | 
| Shift + Down | Extend the selection of cells to the next row. | 
| Shift + Left | Extend the selection of cells to the previous column. | 
| Shift + Right | Extend the selection of cells to the next column. |
| Ctrl + Shift + Up | Extend the cell selection to the previous non-blank cell in the same column as the active cell. |
| Ctrl + Shift + Down | Extend the cell selection to the last non-blank cell in the same column as the active cell. |
| Ctrl + Shift + Left | Extend the cell selection to the previous non-blank cell in the same row as the active cell. |
| Ctrl + Shift + Right | Extend the cell selection to the last non-blank cell in the same row as the active cell. |
| Enter | Navigate the active cell to the next cell in the same column. | 
| Shift + Enter | Navigate to the previous cell in the same column from the active cell. |
| Alt + Enter | While editing, add a new line. |
| Enter | Complete the cell editing and select the cell below in the same column. |
| Shift + Enter | Complete the cell editing and select the cell above in the same column. |
| Tab | Complete the cell editing and select the next cell in the same row. |
| Shift + Tab | Complete the cell editing and select the previous cell in the same row. |
| Alt | Focus on the active ribbon tab. |
| Left | Move the focus to the previous items in the ribbon content. |
| Right | Move the focus to the next items in the ribbon content. |
| Alt + Down | Open the ribbon dropdown menu. |
| Esc / Alt + Up | Close the ribbon dropdown menu. |

## Ensuring accessibility

The Spreadsheet component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Spreadsheet component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/spreadsheet.html) in a new window to evaluate the accessibility of the Spreadsheet component with accessibility tools.

{% previewsample "page.domainurl/samples/spreadsheet/accessibility" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](https://ej2.syncfusion.com/angular/documentation/common/accessibility)