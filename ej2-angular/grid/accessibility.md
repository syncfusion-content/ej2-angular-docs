---
layout: post
title: Angular Grid - Accessibility | Syncfusion
description: Angular Grid accessibility covers keyboard navigation, ARIA roles, and screen reader support to help build inclusive, user‑friendly grids.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid)[https://www.syncfusion.com/angular-components/angular-data-grid] component follows major accessibility guidelines and standards, including the [Americans with Disabilities Act (ADA)](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22), and [WAI‑ARIA roles](https://www.w3.org/TR/wai-aria#roles). These standards ensure the grid is usable with assistive technologies and keyboard‑only navigation.

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

The Angular Grid follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/grid) grid pattern to ensure compatibility with assistive technologies. The following attributes and roles are used throughout the component:

| Attribute / Role | Purpose |
|------------------|---------|
| `role=grid` | Identifies the container element of the grid. |
| `role=row` | Represents a row containing grid cells. |
| `role=rowgroup` | Represents a logical grouping of rows. |
| `role=columnheader` | Identifies header cells that describe a column. |
| `role=gridcell` | Defines an individual grid cell. |
| `role=button` | Represents button elements inside the grid. |
| `role=search` | Identifies a search region, the toolbar search control. |
| `role=presentation` | Indicates elements that are ignored by assistive technologies (used for layout-only elements). |
| `role=navigation` | Identifies the pager navigation region. |
| `aria-colindex` | Defines the column index relative to total columns. |
| `aria-rowindex` | Defines the row index relative to total rows. |
| `aria-rowspan` | Indicates how many rows a cell spans. |
| `aria-colspan` | Indicates how many columns a cell spans. |
| `aria-rowcount` | Specifies the total number of rows. |
| `aria-colcount` | Specifies the total number of columns. |
| `aria-selected` | Indicates the selection state of a row or cell. |
| `aria-expanded` | Indicates the expanded or collapsed state in hierarchical grids. |
| `aria-sort` | Indicates ascending or descending sort order. |
| `aria-busy` | Indicates that an element is being updated. |
| `aria-owns` | Defines contextual relationships between parent and child elements. |
| `aria-hidden` | Hides elements from assistive technologies. |
| `aria-labelledby` | Provides an accessible name for specific elements such as filter dialog items. |
| `aria-describedby` | Provides descriptive help text for focused header cells. |

The Syncfusion Grid component is structured with a two-table architecture for its header and content. To enhance accessibility for screen readers, roles and ARIA attributes are incorporated for both the grid parent and all its child elements. Although this architectural approach may have some limitations with accessibility checker tools. It's important to note that these limitations do not affect the readability of the grid content over screen readers.

The accessibility checker tools highlight the following known issues:

* aria-required-children: This warning appears when rendering the grid without any features, as it contains textarea and grid content. Additionally, it appears when enabling features such as the toolbar and grouping.

* color-contrast: This warning appears when enabling the search item in the grid's toolbar.

* An explicit ARIA 'role' is not valid for `<tr>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* An explicit ARIA 'role' is not valid for `<th>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* An explicit ARIA 'role' is not valid for `<td>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* The element with role "button" contains descendants with roles "rowgroup" which are ignored by browsers.

* Content is not within a landmark element.

* Multiple elements with "search" role do not have unique labels.

* Text contrast of "4.10" with its background is less than the WCAG AA minimum requirements for text of size 13px and weight of "400".

* Interactive component with ARIA role 'grid' does not have a programmatically associated name.

* The element with role "rowgroup" is not contained in or owned by an element with one of the following roles: "grid, table, treegrid".

## Keyboard interaction

The Grid provides keyboard navigation and follows WAI‑ARIA [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert#keyboardinteraction) guidelines. Some keyboard behaviors vary depending on which features are enabled; consult the compatibility table above and the examples below for specific behavior.

### Pager

**Windows**  | **MAC** | **Description**
-----|----- | -----
<kbd>Tab</kbd> | <kbd>Tab</kbd> | Focus the next pager item.
<kbd>Shift + Tab</kbd> | <kbd>Shift + Tab</kbd> | Focus the previous pager item.
<kbd>Enter / Space</kbd> | <kbd>Enter / Space</kbd> | Select the focused page.
<kbd>PageUp / Left Arrow</kbd> | <kbd>Left Arrow</kbd> | Navigate to the previous page.
<kbd>PageDown / Right Arrow</kbd> | <kbd>Right Arrow</kbd> | Navigate to the next page.
<kbd>Home / Ctrl + Alt + PageUp</kbd> | <kbd>Fn + Left Arrow</kbd> | Navigate to the first page.
<kbd>End / Ctrl + Alt + PageDown</kbd> | <kbd>Fn + Right Arrow</kbd> | Navigate to the last page.

### Focus Elements

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Home</kbd> | <kbd>Fn + Left Arrow</kbd> | Shifts the focus to the first cell in the currently focused row.
<kbd>End</kbd> | <kbd>Fn + Right Arrow</kbd> | Shifts the focus to the last cell in the currently focused row.
<kbd>Ctrl + Home</kbd> | <kbd>Command + Fn + Left Arrow</kbd> | Shifts the focus to the first cell of the first row within the grid.
<kbd>Ctrl + End</kbd> | <kbd>Command + Fn + Right Arrow</kbd> | Shifts the focus to the last cell of the last row within the grid.
<kbd>Up Arrow</kbd> | <kbd>Up Arrow</kbd> | Moves the cell focus upward from the current cell.
<kbd>Down Arrow</kbd> | <kbd>Down Arrow</kbd> | Moves the cell focus downward from the current cell.
<kbd>Right Arrow</kbd> | <kbd>Right Arrow</kbd> | Moves the cell focus to the right of the current cell.
<kbd>Left Arrow</kbd> | <kbd>Left Arrow</kbd> | Moves the cell focus to the left of the current cell.
<kbd>Alt + J</kbd> | <kbd>Alt + J</kbd> | Moves the focus to the entire grid.
<kbd>Alt + W</kbd> | <kbd>Alt + W</kbd> | Moves the focus to the grid content element.

### Selection

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Up Arrow</kbd> | <kbd>Up Arrow</kbd> | Moves the selection up by one row or cell from the current position.
<kbd>Down Arrow</kbd> | <kbd>Down Arrow</kbd> | Moves the selection down by one row or cell from the current position.
<kbd>Right Arrow</kbd> | <kbd>Right Arrow</kbd> | Moves the selection one cell to the right from the current cell.
<kbd>Left Arrow</kbd> | <kbd>Left Arrow</kbd> | Moves the selection one cell to the left from the current cell.
<kbd>Shift + Up Arrow</kbd> | <kbd>Shift + Up Arrow</kbd> | Extends the selection upward by rows or cells from the current selection.
<kbd>Shift + Down Arrow</kbd> | <kbd>Shift + Down Arrow</kbd> | Extends the selection downward by rows or cells from the current selection.
<kbd>Shift + Right Arrow</kbd> | <kbd>Shift + Right Arrow</kbd> | Extends the selection to the right from the current cell.
<kbd>Shift + Left Arrow</kbd> | <kbd>Shift + Left Arrow</kbd> | Extends the selection to the left from the current cell.
<kbd>Enter</kbd> | <kbd>Enter</kbd> | Moves the selection down by one row or cell.
<kbd>Shift + Enter</kbd> | <kbd>Shift + Enter</kbd> | Moves the selection up by one row or cell.
<kbd>Esc</kbd> | <kbd>Esc</kbd> | Clears all current selections.
<kbd>Ctrl + A</kbd> | <kbd>Ctrl + A</kbd> | Selects all rows or cells on the current page.

### Grouping

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Ctrl + Up Arrow</kbd> | <kbd>Command + Up Arrow</kbd> | Collapses all visible groups.
<kbd>Ctrl + Down Arrow</kbd> | <kbd>Command + Down Arrow</kbd> | Expands all visible groups.
<kbd>Ctrl + Space</kbd> | <kbd>Ctrl + Space</kbd> | Groups items when the header element is focused.
<kbd>Enter</kbd> | <kbd>Enter</kbd> | Expands or collapses the current group, detail row, or child grid if the active cell controls this function.

### Print

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Ctrl + P</kbd> | <kbd>Command + P</kbd>| Prints the Grid.

### Clipboard

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Ctrl + C</kbd> | <kbd>Command + C</kbd> | Copies the data of selected rows or cells to the clipboard.
<kbd>Ctrl + Shift + H</kbd> | <kbd>Ctrl + Shift + H</kbd> | Copies the data of selected rows or cells along with the header to the clipboard.

### Editing

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>F2</kbd> | <kbd>F2</kbd> | Begins editing the selected row when Mode is Normal or Dialog, or begins editing the selected cell when Mode is Batch.
<kbd>Enter</kbd> | <kbd>Enter</kbd> | Saves the current form if Mode is Normal or Dialog; saves the current cell and begins editing the next row cell if Mode is Batch.
<kbd>Insert</kbd> | <kbd>Ctrl + Command + Enter</kbd> | Creates a new add form based on the NewRowPosition.
<kbd>Delete</kbd> | <kbd>Delete</kbd> | Removes the currently selected record.
<kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next editable cell if Mode is Normal or Dialog; saves the current cell and begins editing the next cell if Mode is Batch.
<kbd>Shift + Tab</kbd> | <kbd>Shift + Tab</kbd> | Moves to the previous editable cell if Mode is Normal or Dialog; saves the current cell and begins editing the previous cell if Mode is Batch.
<kbd>Shift + Enter</kbd> | <kbd>Shift + Enter</kbd> | Saves the current cell and begins editing the previous row cell when Mode is Batch.

### Filtering

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Alt + Down arrow</kbd> | <kbd>Alt + Down arrow</kbd> | Opens the filter menu (Excel, menu, and checkbox filter) when the header element is focused.

### Column Menu

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Alt + Down arrow</kbd> | <kbd>Alt + Down arrow</kbd> | Opens the column menu when the header element is focused.

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Ctrl + left arrow or right arrow</kbd> | <kbd>Command + left arrow or right arrow</kbd> | Moves the selected header column to the left or right.


| **Windows** | **Mac** | **Action** |
|-------------|----------|-------------|
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Applies sorting (cycles through ascending → descending → none) on the focused column. |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | <kbd>Command</kbd> + <kbd>Enter</kbd> | Adds the focused column to **multi‑sorting**. |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>Shift</kbd> + <kbd>Enter</kbd> | Removes sorting from the focused column. 


> * The <kbd>Command</kbd> and <kbd>Control</kbd> keys on Mac devices can be interchanged. 
> * When this switch occurs, use the <kbd>Command</kbd> key in place of the <kbd>Control</kbd> key and the <kbd>Control</kbd> key in place of the <kbd>Command</kbd> key for the above listed key interactions with Mac devices. 
> * For example, after switching the keys to group the columns when the header element is focused use <kbd>Command + Space</kbd> and for expanding the visible groups use <kbd>Ctrl + Down Arrow</kbd>.

### Preventing Default Key Actions

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid provides the capability to disable the default key action behavior according to application needs. This allows the application to intercept and modify the response when specific keys are pressed within the web interface.

To disable the default key action in the grid, use the [keyPressed](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#keypressed) event.

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component allows improving the usability of keyboard shortcuts for various grid actions and navigation.

Besides the built-in keyboard navigation features, custom keyboard shortcuts can be created to perform specific tasks.

Use the [keyPressed](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#keypressed) event of the grid to achieve this. This event triggers on every key press, enabling customization of the response according to the key pressed.

The example below demonstrates using shortcut keys to execute grid actions via the `keyPressed` event. Define the following custom shortcuts within the event to execute different grid actions:

* Pressing <kbd>N</kbd> adds a new record.
* Pressing <kbd>Ctrl + S</kbd> saves a record by calling `endEdit`.
* Pressing <kbd>Ctrl + D</kbd> deletes a record.
* Pressing <kbd>Ctrl + A</kbd> selects all rows.
* Pressing <kbd>Ctrl + G<kbd> groups the grid by a selected column.

Additionally, the default actions for these keyboard shortcuts related to grouping and editing are prevented:

* <kbd>Ctrl + Space</kbd>
* <kbd>Insert</kbd>
* <kbd>F2</kbd>
* <kbd>Delete</kbd>
* <kbd>Enter</kbd>

Add further custom shortcuts and actions as required to enhance the capabilities of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component.

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
{% raw %}
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel, ToolbarItems, SearchSettingsModel,SelectionSettingsModel,GridModule, PageService, SortService, ReorderService, FilterService, GroupService, ColumnChooserService, 
AggregateService, ToolbarService, SelectionService, RowDDService,FilterSettingsModel,GroupSettingsModel, EditSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-grids';
  
@Component({
    imports: [GridModule],
    providers: [
            PageService,
            SortService,
            ReorderService,
            FilterService,
            GroupService,
            AggregateService,
            ToolbarService,
            SelectionService,
            RowDDService,
            ColumnChooserService  ],
    standalone: true,
    selector: 'app-root',
    template: `
    <ejs-grid [dataSource]='data' [allowPaging]="true" [pageSettings]="pageSettings" 
    [searchSettings]='searchOptions'   [toolbar]='toolbarOptions'  [allowReordering]='true' [allowSorting]="true" [allowReordering]='true' [allowRowDragAndDrop]='true' [selectionSettings]='selectionOptions' [selectedRowIndex]='6' [allowSorting]="true" [sortSettings]='sortOptions'
    [allowFiltering]="true" [filterSettings]='filterOptions' [allowGrouping]="true" [groupSettings]='groupOptions' [editSettings]='editSettings' [showColumnChooser]= 'true'>
        <e-columns>
            <e-column type="checkbox" width=50></e-column>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
            <e-column field='Freight' headerText='Freight($)' textAlign='Right' format='C2' width=90></e-column>                    
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=140></e-column>
            <e-column field='ShipName' headerText='Shipped Name' textAlign='Right' width=140></e-column>                
        </e-columns>
        <e-aggregates>
            <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="sum">
                        <ng-template #footerTemplate let-data>Sum: {{data.sum}} </ng-template>
                    </e-column>
                </e-columns>
            </e-aggregate>
            <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="sum">
                        <ng-template #groupFooterTemplate let-data>Sum: {{data.sum}} </ng-template>
                    </e-column>
                </e-columns>
            </e-aggregate>
            <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="max">
                        <ng-template #groupCaptionTemplate let-data>Max: {{data.max}}</ng-template>
                    </e-column>
                </e-columns>
            </e-aggregate>
        </e-aggregates>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings?: PageSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public searchOptions?: SearchSettingsModel;
    public selectionOptions?: SelectionSettingsModel;
    public sortOptions?: SortSettingsModel;
    public filterOptions?: FilterSettingsModel;
    public groupOptions?: GroupSettingsModel;
    public editSettings?: EditSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageCount: 2, pageSizes: true };
        this.searchOptions = { fields: ['ShipCountry'], operator: 'contains', key: 'a', ignoreCase: true };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'];
        this.selectionOptions = { type: 'Multiple', mode: 'Both' };
        this.sortOptions = { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'ShipCity', direction: 'Descending' }] };
        this.filterOptions = {type:'Excel'};
        this.groupOptions = { columns: ['CustomerID'] };
        this.editSettings = {  allowEditing: true, allowAdding: true, allowDeleting: true, };
      }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/ensuring-accessibility/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/ensuring-accessibility" %} 

## See also

[Accessibility in Syncfusion Angular components](../common/accessibility)
