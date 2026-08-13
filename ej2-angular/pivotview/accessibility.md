---
layout: post
title: Accessibility in Angular Pivot Table | Syncfusion
description: Learn how the Angular Pivot Table supports WAI-ARIA roles, keyboard navigation, and screen reader support that align with WCAG 2.2 and Section 508 guidelines.
control: Pivot Table
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Pivot Table

The pivot table component follows accessibility guidelines, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the pivot table component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
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

[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) (Accessibility Initiative – Accessible Rich Internet Applications) defines a way to increase the accessibility of web pages, dynamic content, and user interface components developed with Ajax, HTML, JavaScript, and related technologies. ARIA provides additional semantics to describe the role, state, and functionality of web content. The following ARIA attributes are used in the pivot table component:

| Attributes | Purpose |
| --- | --- |
| `role=grid` | Attribute added to identify the grid component element within the pivot table element. |
| `role=region` | Attribute added to identify the chart component element within the pivot table element. The region must have an accessible name (for example, via `aria-label`) to be exposed as a landmark. |
| `role=button` | Indicates a clickable element. This attribute is added to the pager navigation buttons as well as the buttons in the dialog popup such as field list, calculated field, member editor, conditional formatting of pivot table component. |
| `role=table` | Indicates a table-like structure. This attribute is added to each conditional formatting style container element to denote it as a table. |
| `role=rowgroup` | Indicates a group of rows. This attribute is added to the container element that appears inside the number formatting popup to indicate it as a row group. |
| `aria-disabled` | The buttons within the dialog popups, such as field list, calculated field and member editor, are disabled based on their usability. To indicate the disabled state, this attribute is added with the value `true`. By default, the attribute value is set to `false`. |
| `aria-label` | This attribute is added to label elements that are placed inside the pager, member editor popup, and calculated field popup to identify them as label elements. |
| `aria-selected` | This attribute is added to the selected treeview item in the calculated field popup with the value as `true` to denote that it is a selected element. |
| `aria-colspan` | This attribute is added to the `th` elements in the `e-table`, which represent the column span value. |
| `aria-rowspan` | This attribute is added to the `th` elements in the `e-table`, which represent the row span value. |
| `data-type` | This attribute is added to the treeview item in the calculated field popup, as well as the buttons in the grouping bar and field list. It represents the aggregate type for the specified field. |
| `data-caption` | This attribute is added to the treeview item in the calculated field popup, as well as the buttons in the grouping bar and field list. It represents the caption for the specified field. |
| `data-basefield` | This attribute is added to the treeview item in the calculated field popup, as well as the buttons in the grouping bar and field list. It denotes the base field for the specified field, which is used to display the values for aggregation types such as **DifferenceFrom**, **PercentageOfDifferenceFrom**, and **PercentageOfParentTotal**. |
| `data-baseitem` | This attribute is added to the treeview item in the calculated field popup, as well as the buttons in the grouping bar and field list. It denotes the base item for the specified field, which is used to display the values for aggregation types such as **DifferenceFrom**, **PercentageOfDifferenceFrom**, and **PercentageOfParentTotal**. |
| `data-field` | This attribute is added to the treeview item in the calculated field popup. It denotes the name of the specified field. |
| `data-membertype` | This attribute is added to the treeview item in the calculated field popup. It denotes the member type of the selected OLAP calculated field. |
| `data-hierarchy` | This attribute is added to the treeview item in the calculated field popup. It denotes the parent hierarchy unique name of the selected OLAP calculated field. |
| `data-formula` | This attribute is added to the treeview item in the calculated field popup. It denotes the formula used for the specified calculated field. |
| `data-formatString` | This attribute is added to the treeview item in the calculated field popup. It denotes the format string used for the specified calculated field. |
| `data-customformatstring` | This attribute is added to the treeview item in the calculated field popup. It denotes the custom format string used for the specified calculated field. |

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Pivot Table internally uses the Syncfusion Grid component, which follows a two-table structure for header and content rendering. This improves screen reader interpretation but may trigger warnings in automated accessibility tools. These issues occur due to the underlying grid rendering. These warnings do not necessarily affect actual assistive-technology usability. The following categories of warnings have been observed in [axe-core](https://www.npmjs.com/package/axe-core) and [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) reports:

* **aria-required-children** *(axe-core)*: Triggered when the grid renders certain feature elements (for example, textarea or toolbar content). It may be reported when toolbar or grouping features are enabled.

* **color-contrast** *(axe-core)*: Triggered when the toolbar search item or custom styles reduce text contrast below WCAG thresholds.

* **Explicit ARIA 'role' on `<tr>`, `<th>`, and `<td>` inside `role="grid"`** *(accessibility-checker)*: Per the ARIA in HTML specification, these native elements should not carry an explicit ARIA role when nested inside `role="grid"`.

* **button with descendant `rowgroup`** *(accessibility-checker)*: An element with `role="button"` should not contain descendants with `role="rowgroup"`; the role is ignored by browsers.

* **Content not within a landmark element** *(axe-core)*: Major page regions should be wrapped in landmark roles (for example, `region` with an accessible name).

* **Multiple elements with `role="search"` without unique labels** *(axe-core)*: Each `search` landmark must have a unique accessible name.

* **Interactive component with `role="grid"` missing an accessible name** *(axe-core)*: The grid must have a programmatically associated name (for example, via `aria-label` or `aria-labelledby`).

* **`rowgroup` not contained in a `grid`, `table`, or `treegrid`** *(accessibility-checker)*: A `rowgroup` must be owned by an element with one of these parent roles.

## Keyboard interaction

The pivot table component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the pivot table component.

### Pivot Table

> **Prerequisites:** Cell-selection shortcuts (`Ctrl + A`, `Esc`, `Shift + Arrow`) require `allowSelection` to be enabled. Drill-through requires drill-through to be enabled. Hyperlink activation requires `hyperlinkSettings` to be configured. The context-menu shortcut requires the context menu to be enabled. By default, the WAI-ARIA grid pattern uses `Tab` to leave the grid and arrow keys for in-grid navigation; the Syncfusion Pivot Table extends this behavior so `Tab` and `Shift + Tab` also move between cells when no cells are focused.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Moves the cell focus to the right. If no cells are focused, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves the cell focus to the left. If no cells are focused, it moves to the previous active element in the browser page. |
| <kbd>DownArrow</kbd> | Moves the cell focus downwards. If selection is enabled, it moves to the next row, column, or individual cell. |
| <kbd>UpArrow</kbd> | Moves the cell focus upwards. If selection is enabled, it moves to the previous row, column, or individual cell. |
| <kbd>LeftArrow</kbd> | Moves the cell focus to the left. If selection is enabled, it moves to the previous row, column, or individual cell. |
| <kbd>RightArrow</kbd> | Moves the cell focus to the right. If selection is enabled, it moves to the next row, column, or individual cell. |
| <kbd>Shift + DownArrow</kbd> | Extends the cell selection downwards. |
| <kbd>Shift + UpArrow</kbd> | Extends the cell selection upwards. |
| <kbd>Shift + LeftArrow</kbd> | Extends the cell selection to the left side. |
| <kbd>Shift + RightArrow</kbd> | Extends the cell selection to the right side. |
| <kbd>Ctrl + A</kbd> | Selects all cells. |
| <kbd>Esc</kbd> | Deselects all cells. If the current active element is a context menu, the context menu popup will be closed. |
| <kbd>Home</kbd> | Goes to the first cell in the current row. |
| <kbd>End</kbd> | Goes to the last cell in the current row. |
| <kbd>Ctrl + Home</kbd> | Goes to the first cell in the table. |
| <kbd>Ctrl + End</kbd> | Goes to the last cell in the table. |
| <kbd>Enter</kbd> | Performs the action appropriate to the current cell: drill (expand/collapse) on header cells, value sort on a value-axis header, drill-through on a value cell (if enabled), or context-menu activation. |
| <kbd>Shift + Enter</kbd> | Performs value sorting (if enabled) on a value-axis header; otherwise moves to the previous row, column, or individual cell when a cell is in selection state. |
| <kbd>Ctrl + Enter</kbd> | If hyperlink is enabled in the current cell, it performs hyperlink selection. |
| <kbd>Shift + F10</kbd> or <kbd>Menu</kbd> | If the context menu is enabled, the context menu popup will be opened in the current cell. |

### Field List

> **Prerequisites:** The shortcuts `Shift + F`, `Shift + S`, and `Shift + E` only take effect when the relevant icon (filter, sort, or edit) is visible on the active field's button. The `Delete` shortcut removes a field from the report; it does not delete the underlying data.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Shift + Ctrl + F</kbd> | If the popup field list is enabled in either the pivot table or the pivot chart, the field list dialog will be opened. |
| <kbd>Tab</kbd> | Moves to the next active element in the field list. If no active elements are present, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves to the previous active element in the field list. If no active elements are present, it moves to the previous active element in the browser page. |
| <kbd>Shift + F</kbd> | If the current active element is a field's button and if it has a filter icon, the filter dialog will open to perform filtering. |
| <kbd>Shift + S</kbd> | If the current active element is a field's button and if it has a sort icon, the sorting will be performed to the selected field. |
| <kbd>Shift + E</kbd> | If the current active element is a calculated field's button and if it has an edit icon, the calculated field dialog will be opened to perform editing the selected calculated field. |
| <kbd>Enter</kbd> | Performs the selection operation of the current active element. If the current active element is a field's button and it has a dropdown icon, the aggregation menu will open to perform calculations using aggregation options to the selected value field. |
| <kbd>Delete</kbd> | If the current active element is a field's button, the selected field will be removed from the current report. |
| <kbd>DownArrow</kbd> | If the current active element is a tree node, it moves to the next node. |
| <kbd>UpArrow</kbd> | If the current active element is a tree node, it moves to the previous node. |
| <kbd>LeftArrow</kbd> | If the current active element is a tree node, it collapses the current node. |
| <kbd>RightArrow</kbd> | If the current active element is a tree node, it expands the current node. |
| <kbd>Home</kbd> | If the current active element is a tree node, it goes to the first node. |
| <kbd>End</kbd> | If the current active element is a tree node, it goes to the last node. |
| <kbd>Space</kbd> | If the current active element is a tree node or a checkbox element, it will be either checked or unchecked. |
| <kbd>Esc or Escape</kbd> | Closes the popup field list dialog. |

### Grouping Bar

> **Prerequisites:** The shortcuts `Shift + F`, `Shift + S`, and `Shift + E` only take effect when the relevant icon (filter, sort, or edit) is visible on the active field's button. Arrow-key navigation inside a dropdown list only applies when the active element is an open dropdown.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Moves to the next active element (field's button) in the grouping bar. If no active elements are present, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves to the previous active element (field's button) in the grouping bar. If no active elements are present, it moves to the previous active element in the browser page. |
| <kbd>Shift + F</kbd> | If the current active element is a field's button and if it has a filter icon, the filter dialog will be opened to perform filtering. |
| <kbd>Shift + S</kbd> | If the current active element is a field's button and if it has a sort icon, the sorting will be performed to the selected field. |
| <kbd>Shift + E</kbd> | If the current active element is a calculated field's button and if it has an edit icon, the calculated field dialog will be opened to perform editing the selected calculated field. |
| <kbd>Enter</kbd> | Performs the selection operation of the current active element. If the current active element is a field's button and if it has a dropdown icon, the aggregation menu will be opened to perform calculations using aggregation options to the selected value field. |
| <kbd>Delete</kbd> | If the current active element is a field's button, the selected field will be removed from the current report. |
| <kbd>DownArrow</kbd> | If the current active element is a dropdown list, the next item will be selected. |
| <kbd>UpArrow</kbd> | If the current active element is a dropdown list, the previous item will be selected. |
| <kbd>Home</kbd> | If the current active element is a dropdown list, the first item will be selected. |
| <kbd>End</kbd> | If the current active element is a dropdown list, the last item will be selected. |
| <kbd>Alt + Down</kbd> | If the current active element is a dropdown list, the popup will be opened. |
| <kbd>Alt + Up</kbd> | If the current active element is a dropdown list, the popup will be closed. |
| <kbd>Esc or Escape</kbd> | Closes the dropdown list. |

### Filter Dialog

| **Press** | **To do this** |
| --- | --- |
| <kbd>Shift + F</kbd> | If the current active element is a field's button and if it has a filter icon in either the field list or grouping bar UI, the filter dialog will be opened to perform filtering. |
| <kbd>Tab</kbd> | Moves to the next active element in the filter dialog. If no active elements present, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves to the previous active element in the filter dialog. If no active elements present, it moves to the previous active element in the browser page. |
| <kbd>DownArrow</kbd> | If the current active element is a tree node, it moves to the next node. |
| <kbd>UpArrow</kbd> | If the current active element is a tree node, it moves to the previous node. |
| <kbd>LeftArrow</kbd> | If the current active element is a tree node, it collapses the current node. If the current active element is a tab, it moves focus to the previous tab element. |
| <kbd>RightArrow</kbd> | If the current active element is a tree node, it expands the current node. If the current active element is a tab, it moves focus to the next tab element. |
| <kbd>Home</kbd> | If the current active element is a tree node, it goes to the first node. |
| <kbd>End</kbd> | If the current active element is a tree node, it goes to the last node. |
| <kbd>Space</kbd> | If the current active element is a tree node or a checkbox element, it will be either checked or unchecked. |
| <kbd>Alt + Down</kbd> | If the current active element is a DropDownList or DatePicker or DateTimePicker, the popup will be opened. |
| <kbd>Alt + Up</kbd> | If the current active element is a DropDownList or DatePicker or DateTimePicker, the popup will be closed. |
| <kbd>Enter</kbd> | Performs the selection operation of the current active element. If the current active element is a tab, the current tab element will be selected. If the current active element is a tree node, the current node will be either checked or unchecked. If the current active element is DropDownList, the focus item will be selected, and the popup list will close when it is open. Otherwise, toggles the popup list. |
| <kbd>Esc or Escape</kbd> | Closes the filter dialog. |

### Calculated Field Dialog

| **Press** | **To do this** |
| --- | --- |
| <kbd>Shift + E</kbd> | If the current active element is a field's button and if it has an edit icon in either the field list or grouping bar UI, the calculated field dialog will be opened to perform editing the selected calculated field. |
| <kbd>Tab</kbd> | Moves to the next active element in the calculated field dialog. If no active elements present, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves to the previous active element in the calculated field dialog. If no active elements present, it moves to the previous active element in the browser page. |
| <kbd>DownArrow</kbd> | If the current active element is a tree node, it moves to the next node. |
| <kbd>UpArrow</kbd> | If the current active element is a tree node, it moves to the previous node. |
| <kbd>LeftArrow</kbd> | If the current active element is a tree node, it collapses the current node. |
| <kbd>RightArrow</kbd> | If the current active element is a tree node, it expands the current node. If the current active element is a tree node and has a menu icon, the aggregation menu will be opened to select appropriate aggregation type to the selected field. |
| <kbd>Home</kbd> | If the current active element is a tree node, it goes to the first node. |
| <kbd>End</kbd> | If the current active element is a tree node, it goes to the last node. |
| <kbd>Enter</kbd> | Performs the selection operation of the current active element. If the current active element is a tree node, it copies the selected field name/formula to the formula text area to perform calculations. |
| <kbd>Esc or Escape</kbd> | Closes the calculated field dialog. |

### Formatting Dialog

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Moves to the next active element in the formatting dialog. If no active elements present, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves to the previous active element in the formatting dialog. If no active elements present, it moves to the previous active element in the browser page. |
| <kbd>DownArrow</kbd> | If the current active element is a DropDownList, the next item will be selected. |
| <kbd>UpArrow</kbd> | If the current active element is a DropDownList, the previous item will be selected. |
| <kbd>Home</kbd> | If the current active element is a DropDownList, the first item will be selected. |
| <kbd>End</kbd> | If the current active element is a DropDownList, the last item will be selected. |
| <kbd>Alt + Down</kbd> | If the current active element is a DropDownList or ColorPicker, the popup will be opened. |
| <kbd>Alt + Up</kbd> | If the current active element is a DropDownList or ColorPicker, the popup will be closed. |
| <kbd>Enter</kbd> | Performs the selection operation of the current active element. |
| <kbd>Esc or Escape</kbd> | Closes the formatting dialog. |

### Toolbar

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Moves to the next active option in the toolbar. If no active elements present, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves to the previous active option in the toolbar. If no active elements present, it moves to the previous active element in the browser page. |
| <kbd>Enter</kbd> | Performs the selection operation of the current active element. |

### Drill-Through Dialog

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Moves to the next active element in the drill-through dialog. If the current active element is a Grid cell, it moves the cell focus to right side. If no active elements present, then it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves to the previous active element in the drill-through dialog. If the current active element is a Grid cell, it moves the cell focus to left side, If no active elements present, then it moves to the previous active element in the browser page. |
| <kbd>DownArrow</kbd> | Moves the row/cell focus downwards. |
| <kbd>UpArrow</kbd> | Moves the row/cell focus upwards. |
| <kbd>LeftArrow</kbd> | Moves the cell focus left side. |
| <kbd>RightArrow</kbd> | Moves the cell focus right side. |
| <kbd>Home</kbd> | Goes to the first cell in the current row. |
| <kbd>End</kbd> | Goes to the last cell in the current row. |
| <kbd>Ctrl + Home</kbd> | Goes to the first cell in the table. |
| <kbd>Ctrl + End</kbd> | Goes to the last cell in the table. |
| <kbd>Enter</kbd> | Performs the selection operation of the current active element. |
| <kbd>Esc or Escape</kbd> | If the cell is in selected state, then it deselects all rows/cells. If the row/cell is in edit state, it cancels the current entries in the row/cell. If the current active element is not a row/cell, it closes the drill-through dialog. |
| <kbd>F2</kbd> | Initiate editing a row/cell in the data grid. |
| <kbd>Insert</kbd> | Adds a new row/cell in the data grid. |
| <kbd>Delete</kbd> | Removes the selected row in the data grid. |

## Common keyboard combinations for dialogs

The following shortcuts apply to all Pivot Table dialogs (filter, calculated field, formatting, drill-through, and so on).

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Moves to the next active element in the dialog. If either no active elements are present in the dialog or an overlay is not present in the dialog, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | Moves to the previous active element in the dialog. If either no active elements are present in the dialog or an overlay is not present in the dialog, it moves to the previous active element in the browser page. |
| <kbd>Space</kbd> | If the current active element is a tree node or a checkbox element, it will be either checked or unchecked. |
| <kbd>Enter</kbd> | When a dialog button or any input (other than a text area) is in focus, the click event associated with the primary button or button is triggered. The <kbd>Enter</kbd> key has no effect when the dialog content contains a text area with initial focus. |
| <kbd>Esc or Escape</kbd> | Closes the dialog. |

## Ensuring accessibility

The pivot table component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The following sample demonstrates the accessibility compliance of the Pivot Table. Open the [sample](https://ej2.syncfusion.com/accessibility/pivot-view.html) in a new window to evaluate the component with your own accessibility tools.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/accessibility/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/accessibility/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/accessibility" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility) — Cross-component accessibility guidance that applies to all Syncfusion Angular controls.
* [Globalization and localization in Angular Pivot Table](./globalization-and-localization) — Configure RTL, culture, and localization settings, which affect accessibility for non-English users.