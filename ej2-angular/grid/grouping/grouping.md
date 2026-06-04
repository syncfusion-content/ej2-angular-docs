---
layout: post
title: Angular Grid - Grouping | Syncfusion
description: Angular Grid grouping enables configurable settings, initial grouping, aggregates, drop‑area control, reorderable columns, and expand/collapse.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Grid Component

The grouping feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enables data to be organized into a hierarchical structure, allowing records to be expanded and collapsed for improved readability and analysis.

The group feature is enabled by injecting the `GroupService` to the providers array.

To enable grouping, set the [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid#allowgrouping) property to `true`. When grouping is enabled, column headers can be dragged into the group drop area to organize data.

The [groupSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings) property provides options to customize grouping behavior, such as:

- Showing or hiding the group drop area.
- Controlling Grouped Column Display.
- Defining custom caption templates for grouped rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs2" %}

> - Columns can be grouped and ungrouped dynamically using the [groupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/group#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/group#ungroupcolumn) methods.
> - To disable grouping for a specific column, set the [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowgrouping) property to `false` in column configuration.

## Initial group

Initial grouping in the grid is configured by assigning an array of column field names to the [groupSettings.columns](https://helpej2.syncfusion.com/angular/documentation/api/grid/groupSettings#columns) property. This approach is effective for organizing large datasets based on predefined criteria.

The example below demonstrates grouping by "Customer ID" and "Ship City", rendering the grid with data structured in a two-level hierarchy first by "Customer ID", followed by "Ship City" within each group.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs3" %}

> To group multiple columns, specify an array of column names in the `groupSettings.columns` property.

## Prevent grouping for particular column

Columns that contain unique identifiers or sensitive information may not be suitable for grouping. In such cases, grouping can be disabled by setting the [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowgrouping) property to `false` in the column configuration, preventing the column header from being placed in the group drop area.

The following example prevents grouping on the "Customer ID" column. While other columns can be grouped, "Customer ID" cannot be dragged to the group drop area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs20" %}

## Hide drop area

By default, the Grid shows a drop area container where column headers can be dragged to configure grouping or ungrouping. In scenarios where grouping through the drag-and-drop interface is not required, this drop area can be hidden.

To disable the group drop area container, set the [groupSettings.showDropArea](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#showdroparea) property to `false`. This hides the drop area from the UI, while still allowing grouping to be managed programmatically using the Grid [groupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#ungroupcolumn) methods if needed.

In this example, the Syncfusion Angular<sup style="font-size:70%">&reg;</sup> [Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is used to dynamically show or hide the group drop area. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event updates the Grid's `groupSettings.showDropArea` property to either display or hide the drop area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs4" %}

> The drop area is displayed only if at least one column is available for grouping.

## Show the grouped column

By default, when a column is grouped in the Grid, that column is hidden from the display. This keeps the layout clean and makes grouped rows easier to read. To keep grouped columns visible, set the [groupSettings.showGroupedColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#showgroupedcolumn) property to `true`.

In the example below, a Syncfusion Angular<sup style="font-size:70%">&reg;</sup> [Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is used to control this setting. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event updates the Grid's `groupSettings.showGroupedColumn` property, showing or hiding the grouped columns as needed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs16" %}

## Reordering on grouped columns 

By default, grouped columns follow the order in which they are added to the group drop area. Because grouping order determines the hierarchy of data organization, modifying this order can present different structural views. For example, grouping by "Region" before "Sales Person" produces a different arrangement than the reverse.

To allow reordering, set [groupSettings.allowReordering](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#allowReordering) to `true`. This enables drag-and-drop rearrangement of grouped column badges, and the grid dynamically updates the data hierarchy to reflect the new order.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping-anim-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping-anim-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping-anim-cs1" %}

## Sort grouped columns in descending order during initial grouping

Grouped columns are sorted in ascending order by default (A–Z, 0–9, oldest to newest). To display grouped values in descending order such as showing the most recent dates or highest values first (Z–A, 9–0, newest to oldest), configure the [sortSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings#columns) property with the appropriate [field](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel#field) and set its [direction](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel#direction-string) to `Descending`.

The following example demonstrates sorting the "Customer ID" column in descending order during the grid's initial load.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sort-group/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sort-group/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sort-group" %}

## Group with paging

The Grid component supports column grouping in combination with paging. When grouping is enabled, aggregated values and item counts are calculated based on the current page by default. As a result, group footers and caption summaries reflect only the visible page data. To include aggregate values and total item counts across all pages, set the [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#disablePageWiseAggregates) property to `false`.

> When using remote data binding, enabling this option triggers two separate requests during grouping: 
> * One to retrieve grouped data.
> * Another to fetch aggregate values and total item counts.

## Group by format

By default, grouping is based on the raw data values of each row. For numeric or datetime columns, grouping can also be performed using a specified format for example, grouping dates by month or numbers by range. To enable this behavior, set the [enableGroupByFormat](https://ej2.syncfusion.com/angular/documentation/api/grid/column#enablegroupbyformat) property on the corresponding column. This allows the grid to group values based on their specific format.

The following example demonstrates grouping the "Order Date" and "Freight" columns using formatted values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs5" %}

> Numeric columns can be grouped based on formats such as currency or percentage, while datetime columns can be grouped based on specific date or time formats.

## Show grouped rows based on page size

In the Angular Data Grid, controlling the number of grouped rows per page is useful when working with grouped data and a fixed page size.

By default, the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings#pagesize) setting applies to individual grid rows, not grouped rows. To show grouped column rows based on the `pageSize`, a custom implementation can be used.

This can be achieved by customizing the `generateQuery` method of the "Data prototype", allowing the query logic to be modified for grouped row pagination.

## Collapse all grouped rows at initial rendering

The Angular Data Grid provides the ability to expand or collapse grouped rows, enabling better control over data visibility. This is especially useful for large datasets where an initial summarized view is preferred.

To collapse all grouped rows on initial render, use the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event in combination with the [collapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid/group#collapseall) method. This is shown in the example below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/collapse-all-initial-cs1" %}

> All grouped rows can also be collapsed at the initial rendering using the [groupCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid#groupcollapseall) method within the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event. The following code snippet demonstrates this approach:

```typescript
    dataBound() {
        if (this.initial === true) {
            (this.grid as GridComponent).groupCollapseAll();
            this.initial = false;
        }
    }
```
> The collapse all approach is recommended for a limited number of records since collapsing every grouped record requires time. For large datasets, [lazy-load grouping](https://ej2.syncfusion.com/angular/documentation/grid/grouping/lazy-load-grouping) is recommended to optimize performance. This approach is also applicable to the [groupExpandAll](https://ej2.syncfusion.com/angular/documentation/api/grid#groupexpandall) method.

## Group or ungroup column externally

The Angular Data Grid supports both interactive and programmatic approaches to column grouping. Columns can be grouped manually via drag-and-drop or programmatically using the [groupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid#ungroupcolumn) methods.

The following example demonstrates implementing programmatic grouping and ungrouping using the [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component for column selection. When the corresponding button is activated, the selected column is grouped or ungrouped using the appropriate API method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/grid/grouping1-cs17" %}

## Expand or collapse externally

The Angular Data Grid supports external control of grouped row visibility through programmatic expand and collapse. This functionality can be integrated using the grid's methods to manage grouped data display dynamically.

### Expand or collapse all grouped rows

The Angular Data Grid enables programmatic expand and collapse of all grouped rows using the [groupExpandAll](https://ej2.syncfusion.com/angular/documentation/api/grid#groupexpandall) and [groupCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid#groupcollapseall) methods.

In the example below, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is used to control the visibility of grouped rows. When toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch#change) event triggers the appropriate method to expand or collapse all groups accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/grid/grouping1-cs18" %}

### Expand or collapse selected grouped row

The Angular Data Grid allows programmatic expand or collapse of specific grouped rows through the [expandCollapseRows](https://ej2.syncfusion.com/angular/documentation/api/grid/group#expandcollapserows) method, which toggles the state of a targeted group caption row based on its current visibility.

To implement this functionality, follow these steps:

- Capture the grouped row index via an input field.
- Use a button to trigger a method.
- Retrieve grouped rows using `querySelectorAll` method.
- Identify the target group caption element by index.
- Call `expandCollapseRows` to toggle its state.

The example below demonstrates collapsing a selected grouped row using an external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule, GroupService,GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';

@Component({
    imports: [GridModule,FormsModule,ButtonModule],
    providers: [GroupService],
    standalone: true,
    selector: 'app-root',
    template: `
    <div style="display:flex">
    <input
      type="number"
      [(ngModel)]="groupedRowIndex"
      placeholder="Enter Grouped Row Index"
    />
    <button ejs-button (click)="onExpandCollapseButtonClick()">
      Collapse or Expand Row
    </button>
    </div>
    <div style="padding-top:5px">
      <p style="color:red; ">{{ message }}</p>
    </div>
  
  <ejs-grid #grid style="padding-top: 5px" [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings' height='240px'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 [allowGrouping]='false'></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=100 [allowGrouping]='false'></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=120 [allowGrouping]='false'></e-column>
    </e-columns>
  </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupSettings?: GroupSettingsModel;
    public groupedRowIndex?: number;
    public message?:string
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.groupSettings = { columns: ['CustomerID'] };
    }

   onExpandCollapseButtonClick() {
      const groupedRows = Array.from(
      (this.grid as GridComponent)
        .getContentTable()
        .querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse')
    );

    if (groupedRows.length >= 0 && (this.groupedRowIndex as number) < groupedRows.length) {
      this.message = '';
      const groupCaptionElement = groupedRows[this.groupedRowIndex as number];
      (this.grid as GridComponent).groupModule.expandCollapseRows(groupCaptionElement);
    } else {
      (this.message as string) =
        'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
    }
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs7" %}

## Clear grouping 

The Angular Data Grid provides a [clearGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid#cleargrouping) method to remove all grouped columns programmatically. This is useful for resetting the grid to an ungrouped state.

The following example demonstrates executing `clearGrouping` through an external button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/grid/grouping1-cs15" %}

## Grouping events

The Angular Data Grid provides two key events for handling grouping operations. These events enable the integration of custom logic before and after a grouping action:

- [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin): Triggered before a grouping action starts. It provides details such as the group field name and `requestType`, allowing conditional logic or cancellation.
- [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete): Triggered after a grouping action completes. It exposes the updated grid state for post-processing tasks like UI updates or data handling.

The following example demonstrates canceling grouping for the "Order ID" column using `actionBegin` and displaying a status message via `actionComplete`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, } from '@angular/core';
import { data } from './datasource';
import { GridModule, GroupService,GroupEventArgs, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [GroupService],
    standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:100px;"><p style="color:red;" id="message">{{message}}</p></div>
    <ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings' (actionComplete)='actionComplete($event)' (actionBegin)='actionBegin($event)' height='260px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>        
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupSettings?: GroupSettingsModel;
    public message?: string
    ngOnInit(): void {
        this.data = data;
    }

    actionBegin(args: GroupEventArgs) {
        if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
            args.cancel = true
            this.message = args.requestType + ' action is cancelled for ' + args.columnName + ' column';
        }
    }

    actionComplete(args: GroupEventArgs) {
        if (args.requestType === 'grouping') {
            this.message = args.requestType + ' action completed for ' + args.columnName + ' column';
        }
        else {
            this.message = ''
        }
    }

}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs6" %}

> The [args.requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs#requesttype) property represents the name of the current action being performed. For instance, during grouping, the `args.requestType` value will be "grouping".

## Limitations

Grouping is not compatible with autofill feature.

## See also

* [Exporting grouped records](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-export-options#exporting-grouped-records)
* [Lazy load grouping](./lazy-load-grouping)
* [Group and caption aggregates](./caption-template)
* [Aggregates overview](../aggregates/aggregates)