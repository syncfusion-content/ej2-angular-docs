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

| Accessibility Criteria                                                              | Compatibility                                                                                      |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards)                 | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards)              | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support)              | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes">               |
| [Right-To-Left Support](../common/accessibility#right-to-left-support)              | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes">               |
| [Color Contrast](../common/accessibility#color-contrast)                            | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes">               |
| [Mobile Device Support](../common/accessibility#mobile-device-support)              | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes">               |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support)  | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility)  | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |

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

The Grid component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) patterns to meet the accessibility. The following ARIA attributes are used in the Grid component:

| Attributes          | Purpose                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role=grid`         | To represent the element containing the grid component.                                                                                                            |
| `role=row`          | To represent the element containing the cells of the row in the grid.                                                                                              |
| `role=rowgroup`     | To represent the group of rows in the grid.                                                                                                                        |
| `role=columnheader` | To represent the cell in a row contains header information for a column in the grid.                                                                               |
| `role=gridcell`     | To represent a cell in the grid component.                                                                                                                         |
| `role=button`       | To represent the element that acts as a button in the grid.                                                                                                        |
| `role=search`       | To represent the element that acts as a search region in the grid.                                                                                                 |
| `role=presentation` | To represent the element to be not available for accessibility concerns.                                                                                           |
| `role=navigation`   | To represent the element containing pager elements to navigate from one page to another.                                                                           |
| `aria-colindex`     | Defines the column index of the column with respect to the total number of columns within the grid.                                                                |
| `aria-rowindex`     | Defines row index of the row with respect to the total number of rows within the grid.                                                                             |
| `aria-rowspan`      | Defines the number of rows spanned by a cell within the grid.                                                                                                      |
| `aria-colspan`      | Defines the number of columns spanned by a cell within the grid.                                                                                                   |
| `aria-rowcount`     | Defines the total number of rows in the grid.                                                                                                                      |
| `aria-colcount`     | Defines the total number of columns in the grid.                                                                                                                   |
| `aria-selected`     | Indicates the current "selected" state of the rows and cells in the grid.                                                                                          |
| `aria-expanded`     | Indicate if the expand icon in the hierarchy grid or grouped grid or detail grid is expanded or collapsed                                                          |
| `aria-sort`         | Indicates whether the data in the grid are sorted in ascending or descending order.                                                                                |
| `aria-busy`         | Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update. |
| `aria-owns`         | Identifies an element in order to define a visual, functional, or contextual relationship between a parent and its child elements.                                 |
| `aria-hidden`       | Hides the element from accessibility concerns.                                                                                                                     |
| `aria-labelledby`   | Provides an accessible name for the checkbox labels in excel filter, checkbox filter and column chooser dialog.                                                    |
| `aria-describedby`  | Provides an description about the features enabled in the header when the grid header cell is focused.                                                             |

The Syncfusion Grid component is structured with a two-table architecture for its header and content. To enhance accessibility for screen readers, roles and ARIA attributes are incorporated for both the grid parent and all its child elements. Although this architectural approach may have some limitations with accessibility checker tools. It's important to note that these limitations do not affect the readability of the grid content over screen readers.

The accessibility checker tools highlights the following known issues:

* aria-required-children: This warning appears when rendering the grid without any features, as it contains textarea and grid content. Additionally, it appears when enabling features such as the toolbar and grouping.

* color-contrast: This warning appears when you are enabling the search item in the grid's toolbar.

* An explicit ARIA 'role' is not valid for `<tr>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* An explicit ARIA 'role' is not valid for `<th>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* An explicit ARIA 'role' is not valid for `<td>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* The element with role "button" contains descendants with roles "rowgroup" which are ignored by browsers.

* Content is not within a landmark element.

* Multiple elements with "search" role do not have unique labels.

* Text contrast of 4.10 with its background is less than the WCAG AA minimum requirements for text of size 13px and weight of 400.

* Interactive component with ARIA role 'grid' does not have a programmatically associated name.

* The element with role "rowgroup" is not contained in or owned by an element with one of the following roles: "grid, table, treegrid".

## Keyboard interaction

The Grid component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Grid component.

<b>Pager</b>

| **Windows**                            | **MAC**                     | **To do this**                     |
| -------------------------------------- | --------------------------- | ---------------------------------- |
| <kbd>Tab</kbd>                         | <kbd>Tab</kbd>              | Focus on the next pager item.      |
| <kbd>Shift + Tab</kbd>                 | <kbd>Shift + Tab</kbd>      | Focus on the previous pager item.  |
| <kbd>Enter / Space</kbd>               | <kbd>Enter / Space</kbd>    | Select the currently focused page. |
| <kbd>PageUp / Left Arrow</kbd>         | <kbd>Left Arrow</kbd>       | Navigate to previous page.         |
| <kbd>PageDown / Right Arrow</kbd>      | <kbd>Right Arrow</kbd>      | Navigate to next page.             |
| <kbd>Home / Ctrl + Alt + PageUp</kbd>  | <kbd>Fn + Left Arrow</kbd>  | Navigate to first page.            |
| <kbd>End / Ctrl + Alt + PageDown</kbd> | <kbd>Fn + Right Arrow</kbd> | Navigate to last page.             |

<b>Focus Elements</b>

| **Windows**            | **MAC**                                | **To do this**                                                  |
| ---------------------- | -------------------------------------- | --------------------------------------------------------------- |
| <kbd>Home</kbd>        | <kbd>Fn + Left Arrow</kbd>             | Moves the focus to the first cell of the focused row.           |
| <kbd>End</kbd>         | <kbd>Fn + Right Arrow</kbd>            | Moves the focus to the last cell of the focused row.            |
| <kbd>Ctrl + Home</kbd> | <kbd>Command + Fn + Left Arrow</kbd>   | Moves the focus to the first Cell of the first row in the grid. |
| <kbd>Ctrl + End</kbd>  | <kbd>Command +  Fn + Right Arrow</kbd> | Moves the focus to the last Cell of the last row in the grid.   |
| <kbd>Up Arrow</kbd>    | <kbd>Up Arrow</kbd>                    | Moves the cell focus upward from the focused cell.              |
| <kbd>Down Arrow</kbd>  | <kbd>Down Arrow</kbd>                  | Moves the cell focus downward from the focused cell.            |
| <kbd>Right Arrow</kbd> | <kbd>Right Arrow</kbd>                 | Moves the cell focus right side from the focused cell.          |
| <kbd>Left Arrow</kbd>  | <kbd>Left Arrow</kbd>                  | Moves the cell focus left side from the focused cell.           |
| <kbd>Alt + J</kbd>     | <kbd>Alt + J</kbd>                     | Moves the focus to the entire grid.                             |
| <kbd>Alt + W</kbd>     | <kbd>Alt + W</kbd>                     | Move the focus to the grid content element.                     |

<b>Selection</b>

| **Windows**                    | **MAC**                        | **To do this**                                                       |
| ------------------------------ | ------------------------------ | -------------------------------------------------------------------- |
| <kbd>Up Arrow</kbd>            | <kbd>Up Arrow</kbd>            | Moves up a row/cell selection from the selected row/cell.            |
| <kbd>Down Arrow</kbd>          | <kbd>Down Arrow</kbd>          | Moves down a row/cell selection from the selected row/cell.          |
| <kbd>Right Arrow</kbd>         | <kbd>Right Arrow</kbd>         | Moves to the right cell selection from the selected cell.            |
| <kbd>Left Arrow</kbd>          | <kbd>Left Arrow</kbd>          | Moves to the left cell selection from the selected cell.             |
| <kbd>Shift + Up Arrow</kbd>    | <kbd>Shift + Up Arrow</kbd>    | Extends the row/cell selection upwards from the selected row/cell.   |
| <kbd>Shift + Down Arrow</kbd>  | <kbd>Shift + Down Arrow</kbd>  | Extends the row/cell selection downwards from the selected row/cell. |
| <kbd>Shift + Right Arrow</kbd> | <kbd>Shift + Right Arrow</kbd> | Extends the cell selection to the right side from the selected cell. |
| <kbd>Shift + Left Arrow</kbd>  | <kbd>Shift + Left Arrow</kbd>  | Extends the cell selection to the left side from the selected cell.  |
| <kbd>Enter</kbd>               | <kbd>Enter</kbd>               | Moves the row/cell selection downward from the selected cell/row.    |
| <kbd>Shift + Enter</kbd>       | <kbd>Shift + Enter</kbd>       | Moves the row/cell selection upward.                                 |
| <kbd>Esc</kbd>                 | <kbd>Esc</kbd>                 | Deselects all the selected row/cells.                                |
| <kbd>Ctrl + A</kbd>            | <kbd>Ctrl + A</kbd>            | Select all the row/cells in the current page.                        |

<b>Grouping</b>

| **Windows**                  | **MAC**                         | **To do this**                                                                                               |
| ---------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <kbd>Ctrl + Up Arrow</kbd>   | <kbd>Command + Up Arrow</kbd>   | Collapses all the visible groups.                                                                            |
| <kbd>Ctrl + Down Arrow</kbd> | <kbd>Command + Down Arrow</kbd> | Expands all the visible groups.                                                                              |
| <kbd>Ctrl + Space</kbd>      | <kbd>Ctrl + Space</kbd>         | Performs grouping when focused on a header element.                                                          |
| <kbd>Enter</kbd>             | <kbd>Enter</kbd>                | If the current cell is an expand/collapse cell then expands/collapses the current group/detailrow/childgrid. |

<b>Print</b>

| **Windows**         | **MAC**                | **To do this**   |
| ------------------- | ---------------------- | ---------------- |
| <kbd>Ctrl + P</kbd> | <kbd>Command + P</kbd> | Prints the Grid. |

<b>Clipboard</b>

| **Windows**                 | **MAC**                     | **To do this**                                                |
| --------------------------- | --------------------------- | ------------------------------------------------------------- |
| <kbd>Ctrl + C</kbd>         | <kbd>Command + C</kbd>      | Copies selected rows or cells data into the clipboard.        |
| <kbd>Ctrl + Shift + H</kbd> | <kbd>Ctrl + Shift + H</kbd> | Copies selected rows or cells data with header into clipboard |

<b>Editing</b>

| **Windows**              | **MAC**                          | **To do this**                                                                                                                                          |
| ------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>F2</kbd>            | <kbd>F2</kbd>                    | Starts editing of selected row if Mode is Normal/Dialog or Starts editing of selected cell if Mode is Batch.                                            |
| <kbd>Enter</kbd>         | <kbd>Enter</kbd>                 | Saves the current form it the Mode is Normal or Dialog / Saves the current cell and starts editing the next row cell if Mode is Batch.                  |
| <kbd>Insert</kbd>        | <kbd>Ctrl + Command + Enter<kbd> | Creates a new add form depending on the NewRowPosition.                                                                                                 |
| <kbd>Delete</kbd>        | <kbd>Delete</kbd>                | Deletes the current selected record.                                                                                                                    |
| <kbd>Tab</kbd>           | <kbd>Tab</kbd>                   | Navigates to the next editable cell if the Mode is Normal or Dialog / Saves the current cell and starts editing the next cell is Mode is Batch.         |
| <kbd>Shift + Tab</kbd>   | <kbd>Shift + Tab</kbd>           | Navigates to the previous editable cell if the Mode is Normal or Dialog / Saves the current cell and starts editing the previous cell is Mode is Batch. |
| <kbd>Shift + Enter</kbd> | <kbd>Shift + Enter</kbd>         | Saves the current cell and starts editing the previous row cell if Mode is Batch.                                                                       |

<b>Filtering</b>

| **Windows**                 | **MAC**                     | **To do this**                                                                                      |
| --------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------- |
| <kbd>Alt + Down arrow</kbd> | <kbd>Alt + Down arrow</kbd> | Opens the filter menu(excel, menu and checkbox filter) when its header element is in focused state. |

<b>Column Menu</b>

| **Windows**                 | **MAC**                     | **To do this**                                                 |
| --------------------------- | --------------------------- | -------------------------------------------------------------- |
| <kbd>Alt + Down arrow</kbd> | <kbd>Alt + Down arrow</kbd> | Opens column menu when its header element is in focused state. |

<b>Reordering</b>

| **Windows**                                 | **MAC**                                         | **To do this**                                                |
| ------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| <kbd>Ctrl + left arrow or right arrow</kbd> | <kbd>Command  + left arrow or right arrow</kbd> | Reorders the focused header column to the left or right side. |

<b>Sorting</b>

| **Windows**              | **MAC**                    | **To do this**                                                                                  |
| ------------------------ | -------------------------- | ----------------------------------------------------------------------------------------------- |
| <kbd>Enter</kbd>         | <kbd>Enter</kbd>           | Performs sorting(ascending/descending) on a column when its header element is in focused state. |
| <kbd>Ctrl + Enter</kbd>  | <kbd>Command + Enter</kbd> | Performs multi-sorting on a column when its header element is in focused state.                 |
| <kbd>Shift + Enter</kbd> | <kbd>Shift + Enter</kbd>   | Clears sorting for the focused header column.                                                   |

<br>

> * The <kbd>Command</kbd> and <kbd>Control</kbd> keys on Mac devices can be interchanged. When this switch occurs, use the <kbd>Command</kbd> key in place of the <kbd>Control</kbd> key and the <kbd>Control</kbd> key in place of the <kbd>Command</kbd> key for the above listed key interactions with Mac devices. For example, after switching the keys to group the columns when the header element is focused use <kbd>Command + Space</kbd> and for expanding the visible groups use <kbd>Ctrl + Down Arrow</kbd>.

### How to prevent default key action behavior

The Syncfusion Angular Grid provides flexibility to prevent the default key action behavior based on your requirements. This enables you to intercept and customize the behavior when specific keys are pressed within a web application

To prevent the default key action behavior in the grid, you can utilize the [keyPressed](https://ej2.syncfusion.com/angular/documentation/api/grid/#keypressed) event. This event is triggered for every key press, allowing you to customize the behavior based on the pressed key.

The following example demonstrates how to prevent the default behavior of the **"ENTER"** key using the `keyPressed` event. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/keyboard-navigation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/keyboard-navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/keyboard-navigation-cs1" %}

### Custom shortcut keys to perform grid actions

The Syncfusion Angular Grid component enables you to enhance the usability of keyboard shortcuts for various grid actions and navigation. In addition to the built-in keyboard navigation capabilities, you can implement custom keyboard shortcuts to execute specific actions.

To achieve this, you can utilize the [keyPressed](https://ej2.syncfusion.com/angular/documentation/api/grid/#keypressed) event of the grid. This event is triggered for every key press, allowing you to customize the behavior based on the pressed key.

The following example demonstrates how to perform grid actions using shortcut keys through the `keyPressed` event. Within the event, define the following custom shortcuts to perform various grid actions:

* Pressing N adds a new record.
* Pressing Ctrl + S save a record by invoking endEdit.
* Pressing Ctrl + D deletes a record.
* Pressing Ctrl + A selects all rows.
* Pressing Ctrl + G groups the grid by a specified column.

And prevented the default actions associated with the following keyboard shortcuts used for default grouping and editing action:

* Ctrl + Space
* Insert
* F2 
* Delete 
* Enter

You can add more custom shortcuts and actions as needed to enhance the functionality of your Syncfusion Angular Grid component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs51/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs51" %}

## Ensuring accessibility

The Grid component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Grid component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/grid.html) in a new window to evaluate the accessibility of the Grid component with accessibility tools.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/ensuring-accessibility/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/ensuring-accessibility/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/ensuring-accessibility" %} 

## See also

* [Accessibility in Syncfusion Angular components](../common/accessibility)
