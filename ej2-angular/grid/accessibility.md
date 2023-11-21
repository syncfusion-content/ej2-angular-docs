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

The Syncfusion Angular Grid component is designed with a focus on accessibility to ensure that all individuals, including those with disabilities, can effectively access and interact with its features, and effectively access the Grid features through assistive technologies such as screen readers. Accessibility is achieved by adhering to the Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) standards and providing comprehensive keyboard navigations.

## Accessibility compliance

Accessibility compliance refers to the extent to which a product, device, service, or environment meets certain standards or guidelines for accessibility. These standards and guidelines may be set by governments, industry organizations, or other groups.

Syncfusion Angular components meet the following guidelines and standards that are commonly used to evaluate accessibility:
* [ADA](https://www.ada.gov/) - Law to ensure that people with disabilities have the same opportunities and access as people without disabilities.

* [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) - Provides guidelines developed by the World Wide Web Consortium (W3C). WAI-ARIA provides a set of roles, states, and properties that can be added to HTML elements to provide additional context and information about the purpose and behavior of those elements. This can help assistive technologies better understand and interpret web content and interact with web applications.

* [Section 508](https://www.section508.gov/) - Syncfusion Angular components compliance with the standard of `Section 508` accessibility. It is a set of guidelines for making electronic and information technology (EIT) accessible to people with disabilities. These standards apply to federal agencies in the United States, and they are based on the Web Content Accessibility Guidelines (WCAG).

## Screen reader

A screen reader allows people who are blind or visually impaired to use a computer by reading aloud the text that is displayed on the screen. Syncfusion Angular components meet the standards defined by the [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) screen reader.

## Accessibility testing

The goal of accessibility testing is to identify and address any barriers that might prevent individuals with disabilities from using the product or service effectively. There are several different types of accessibility testing that can be performed on the Angular components, such as:

* **Automated testing**: The Angular component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) software tool.

* **Manual testing**: This type of testing involves manually evaluating the Angular components. During manual accessibility testing, testers will ensure accessibility using the [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) screen reader.

## WAI-ARIA

WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) is a set of attributes that enhances the accessibility of web pages and dynamic content, especially when developed using technologies like **Ajax**, **HTML**, **JavaScript**, and related technologies. By utilizing ARIA attributes, the Syncfusion Angular Grid component ensures better accessibility by providing additional semantics to describe the role, state, and functionality of various web components.

The following list of ARIA attributes is used in Grid.

* grid (role): Indicates the container element that represents a grid.

* row (role): Represents a row within the grid container.

* gridcell (role): Represents a cell within the grid container.

* aria-selected (attribute): Indicates whether an item, such as a row or cell, is selected.

* aria-expanded (attribute): Indicates whether a collapsible element, such as a group row, is expanded or collapsed.

* aria-sort (attribute): Indicates the current sort order of a sortable column.

* aria-busy (attribute): Indicates that an element, such as a cell or row, is currently busy with an asynchronous operation.

* aria-invalid (attribute): Indicates that the value of an input cell is invalid.

* aria-grabbed (attribute): Indicates whether an element, such as a draggable column header, is currently grabbed or selected.

* aria-owns (attribute): Identifies elements that are controlled by a particular cell, such as a dropdown associated with a cell.

* aria-label (attribute): Provides a human-readable label for an element when a visible label is not present.

> You can achieve a single table announcing on the JAWS screen reader by setting an **`e-gridcell-read`** class through [cssClass](https://ej2.syncfusion.com/angular/documentation/api/grid/#cssclass) property of the grid.

## Keyboard navigation

The Syncfusion Angular Grid provides support for keyboard navigation options, to enhance interactivity and ease of use. By using keyboard shortcuts, you can efficiently navigate, select, edit, and perform various actions within the grid without relying on a mouse.

The following keyboard shortcuts are supported by the Grid.

**Pager**

The Grid Paging feature provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Tab</kbd> | Moves the focus to the next pager item. 
<kbd>Shift + Tab</kbd> | Moves the focus to the previous pager item.
<kbd>Enter / Space</kbd> | Select the currently focused page.
<kbd>Right Arrow / PageDown</kbd> | Navigate to the next page. If the focus is on the last page, the focus does not move.
<kbd>Left Arrow / PageUp</kbd> | Navigate to the previous page. If the focus is on the first page, the focus does not move.
<kbd>Home</kbd> | Navigate to first page of data if the current page is not the first one.
<kbd>End</kbd> | Navigate to last page of data if the current page is not the last one.

**Focus Elements**

The Grid provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Home</kbd> | Focus to the first cell of the current row.
<kbd>End</kbd> | Focus to the last cell of the current row.
<kbd>Ctrl + Home</kbd> | Focus to the first cell of the first row.
<kbd>Ctrl + End</kbd> | Focus to the last cell of the last row.
<kbd>DownArrow</kbd> | Moves the cell focus downward from the focused cell. If the focus is on the last cell in the column, the focus does not move.
<kbd>UpArrow</kbd> | Moves the cell focus upward from the focused cell. If the focus is on the first cell in the column, the focus does not move.
<kbd>LeftArrow</kbd> | Moves the cell focus left side from the focused cell. If the focus is on the first cell of the row, the focus does not move.
<kbd>RightArrow</kbd> | Move the cell focus right side from the focused cell. If the focus is on the last cell in the row, the focus does not move.
<kbd>Alt + J</kbd> | Move the focus to the entire grid.
<kbd>Alt + W</kbd> | Focus on the grid content element.

**Selection**

The Grid Selection feature provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Enter</kbd> | Move the row/cell selection downward.
<kbd>Shift + Enter</kbd> | Move the row/cell selection upward.
<kbd>Tab</kbd> | Move the cell selection right side.
<kbd>Shift + Tab</kbd> | Move the cell selection left side.
<kbd>UpArrow</kbd> | Move up a row/cell selection from the selected row/cell.
<kbd>DownArrow</kbd> | Move down a row/cell selection from the selected row/cell.
<kbd>RightArrow</kbd> | Move to the right cell selection from the selected cell.
<kbd>LeftArrow</kbd> | Move to the left cell selection from the selected cell.
<kbd>Shift + DownArrow</kbd> | Extend the row/cell selection downwards from the selected row/cell.
<kbd>Shift + UpArrow</kbd> | Extend the row/cell selection upwards from the selected row/cell.
<kbd>Shift + LeftArrow</kbd> | Extend the cell selection to the left side from the selected cell.
<kbd>Shift + RightArrow</kbd> | Extend the cell selection to the right side from the selected cell.
<kbd>Ctrl + A</kbd> | Select all the rows/cells in the current page.
<kbd>Esc</kbd> | Deselect all the selected rows/cells.

**Grouping**

The Grid Grouping feature provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Ctrl + DownArrow</kbd> | Expand all the visible groups.
<kbd>Ctrl + UpArrow</kbd> | Collapse all the visible groups.
<kbd>Ctrl + Space</kbd> | Perform grouping when focused on a header element.
<kbd>Enter</kbd> | If the current cell is an expand/collapse cell, then expand/collapse the current group/detailrow/childgrid.

**Print**

The Print provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Ctrl + P</kbd> | Print the Grid.

**Clipboard**

The Clipboard provides the following keyboard shortcuts:

<kbd>Ctrl + C</kbd> | Copy selected rows or cells data into the clipboard
<kbd>Ctrl + Shift + H</kbd> | Copy selected rows or cells data with header into the clipboard

**Edit**

The Grid Editing feature provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>F2</kbd> | Edit current selected row/cell in Grid.
<kbd>Enter</kbd> | If current row/cell is in edit state, then completes the editing.
<kbd>Delete</kbd> | Delete the currently selected record.
<kbd>Insert</kbd> | Create a new add form depending on the NewRowPosition.
<kbd>Tab</kbd> | If the mode is Normal or Dialog, it navigates to the next editable cell. In Batch mode, it saves the current cell and proceeds to edit the next cell.
<kbd>Shift + Tab</kbd> | If the mode is Normal or Dialog, it navigates to the previous editable cell. In Batch mode, it saves the current cell and proceeds to edit the previous cell.
<kbd>Shift + Enter</kbd> | In Batch mode, you can save the current cell and initiate editing in the previous row's cell.
<kbd>Esc</kbd> | Exits from the edit action

**Filter**

The Grid Filtering feature provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Alt + Down arrow</kbd> | Open the filter menu(excel, menu and checkbox filter) when its header element is in focused state.
<kbd>Esc</kbd> | Close the filter menu(excel, menu and checkbox filter).

**Column Menu**

The Grid Column Menu feature provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Alt + Down arrow</kbd> | Open column menu when its header element is in focused state.
<kbd>Esc</kbd> | Close the column menu

**Reordering**

The Grid Reodering feature provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Ctrl + left arrow</kbd> | Reorder the focused header column to the left side.
<kbd>Ctrl + right arrow</kbd> | Reorder the focused header column to the right side.

**Sorting**

The Grid Sorting feature provides the following keyboard shortcuts:

Interaction Keys | Description
-----|-----
<kbd>Ctrl + Enter</kbd> | Perform multi-sorting on a column when its header element is in the focused state.
<kbd>Shift + Enter</kbd> | Clear sorting for the focused header column.
<kbd>Enter</kbd> | Perform sorting(ascending/descending) on a column when its header element is in the focused state.

### How to prevent default key action behavior

The Syncfusion Angular Grid provides flexibility to prevent the default key action behavior based on your requirements. This enables you to intercept and customize the behavior when specific keys are pressed within a web application

To prevent the default key action behavior in the grid, you can utilize the [keyPressed](https://ej2.syncfusion.com/angular/documentation/api/grid/#keypressed) event. This event is triggered for every key press, allowing you to customize the behavior based on the pressed key.

The following example demonstrates how to prevent the default behavior of the **"ENTER"** key using the `keyPressed` event. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/keyboard-navigation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/keyboard-navigation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/keyboard-navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/keyboard-navigation-cs1" %}