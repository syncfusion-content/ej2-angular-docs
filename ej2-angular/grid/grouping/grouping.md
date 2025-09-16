---
layout: post
title: Grouping in Angular Grid component | Syncfusion
description: Learn all about grouping functionality in the Syncfusion Angular Grid component, including configuration, column grouping, custom event handling, limitations, and integration with other features.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Grid component

The grouping feature in the Syncfusion Angular Grid organizes data into a hierarchical structure for easier analysis and visualization. Data can be grouped by dragging and dropping column headers into the group drop area, or through API configuration. To enable grouping, set the [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowgrouping) property to **true** and optionally configure further behaviors using the [groupSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/) property.

To utilize grouping, inject **GroupService** in the provider section of your **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs2" %}

> * Group and ungroup columns with the [groupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#ungroupcolumn) methods.
> * Disable grouping for a particular column by setting [columns.allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowgrouping) to **false**.

## Initial group

Enable initial grouping in the Grid by assigning an array of column names to the [groupSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#columns) property. This is useful for large datasets, allowing organization and immediate analysis based on specific fields.

The following example demonstrates initial grouping of **CustomerID** and **ShipCity** columns using the `groupSettings.columns` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs3" %}

> Multiple columns can be grouped by specifying an array of column names in `groupSettings.columns`.

## Prevent grouping for particular column

To prevent grouping for a specific column, assign **false** to the [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowgrouping) property of that column configuration. This ensures only allowed fields participate in grouping.

The following example shows how to disable grouping for the **CustomerID** column.

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

The group drop area, shown by default, facilitates column drag-and-drop for grouping. To hide it, set [groupSettings.showDropArea](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#showdroparea) to **false**. This is useful for restricting changes to grouped columns after configuration.

The following sample uses the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) to control the visibility of the drop area by toggling the `groupSettings.showDropArea` property in response to user actions.

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

By default, grouped columns are hidden in the Grid view. To display them alongside grouped data, set [groupSettings.showGroupedColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#showgroupedcolumn) to **true**.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to hide or show the grouped columns. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered and the `groupSettings.showGroupedColumn` property of the grid is updated accordingly. 

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

Reorder grouped columns by dragging and dropping grouped header cells in the drag area. Changing the sequence updates the grouping hierarchy, and columns can be inserted at any group position. Enable this capability by setting [groupSettings.allowReordering](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#allowReordering) to **true**.

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

By default, grouped columns are sorted in ascending order. However, you can sort them in descending order during initial grouping by setting the [field](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#field) and [direction](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#direction-string) in the [sortSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings/#columns) property.

The following example demonstrates how to sort the **CustomerID** column by setting the `sortSettings.columns` property to **Descending** during the initial grouping of the grid.

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

Grouping can be combined with paging to aggregate and summarize visible items on the current page. By default, group footers and caption footers reflect only current page aggregates. To aggregate across the entire dataset, set [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#disablePageWiseAggregates) to **false**.

> With remote data, grouping requests may trigger additional queries for aggregates and item counts.

## Group by format

Group numeric or datetime columns based on formatted values using the [enableGroupByFormat](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#enablegroupbyformat) property for the column. This organizes records by format patterns, such as currency or date formats.

Below is an example demonstrating formatted grouping with the **OrderDate** and **Freight** columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs5" %}

> Group numeric columns by formats such as currency or percentage, and date columns by specific format patterns.

## Collapse all grouped rows at initial rendering

The Syncfusion Angular Grid allows you to expand or collapse grouped rows for summarized or detailed views. Collapse all grouped rows at initial render using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event in conjunction with the [collapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#collapseall) or [groupCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid/#groupcollapseall) methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/collapse-all-initial-cs1" %}

> You can also collapse all the grouped rows at the initial rendering using the [groupCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid/#groupcollapseall) method inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event. This is demonstrated in the below code snippet,

```typescript
    dataBound() {
        if (this.initial === true) {
            (this.grid as GridComponent).groupCollapseAll();
            this.initial = false;
        }
    }
```
> The collapse all approach is suggested for a limited number of records since collapsing every grouped record takes some time. If you have a large dataset, it is recommended to use [lazy-load grouping](https://ej2.syncfusion.com/angular/documentation/grid/grouping/lazy-load-grouping). This approach is also applicable for the [groupExpandAll](https://ej2.syncfusion.com/angular/documentation/api/grid/#groupexpandall) method.

## Group or ungroup column externally

Columns can also be grouped or ungrouped programmatically via [groupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/#ungroupcolumn) methods. This allows for dynamic grouping via external UI elements.

The following demonstration uses a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) for column selection and triggers group or ungroup actions with external buttons.

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

Control over group expansion and collapse can be achieved externally through the Grid's API.

### Expand or collapse all grouped rows

Grid provides an ability to expand or collapse grouped rows using [groupExpandAll](https://ej2.syncfusion.com/angular/documentation/api/grid/#groupexpandall) and [groupCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid/#groupcollapseall) methods respectively.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to expand or collapse grouped rows. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered and the `groupExpandAll` and `groupCollapseAll` methods are called to expand or collapse grouped rows. 

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

Expanding or collapsing selected grouped rows in a Syncfusion Angular Grid involves implementing the functionality to expand or collapse grouped records programatically.

To enable the expand and collapse functionality for grouped rows in a grid, you can utilize the [expandCollapseRows](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#expandcollapserows) method. This method is designed to handle two scenarios such as expanding collapsed grouped records and collapsing expanded grouped records.

To implement this functionality, follow these steps:

1. Include an `input` element to capture the grouped row index.
2. Add a `button` element with a **click** event binding to trigger the **onExpandCollapseButtonClick** method. This method retrieve the grouped rows from the grid's content table using the `querySelectorAll` method.
3. Check if there are any grouped rows available.
4. If grouped rows exist, locate the group caption element based on the entered row index.
5. Call the `expandCollapseRows` method of the grid's group module, passing the group caption element to toggle its expand/collapse state.

The following example demonstrates the function that collapses the selected row using an external button click. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'
import { FormsModule } from '@angular/forms'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        FormsModule,
        ButtonModule
    ],

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

Remove all grouped columns with the [clearGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/#cleargrouping) method. This provides a straightforward way to reset grouping and return to a standard view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/grid/grouping1-cs15" %}

## Grouping Events

The Syncfusion Angular Grid triggers events during grouping actions, including [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete). Use **actionBegin** to hook into the start of a group action (e.g., to cancel or modify the action), and **actionComplete** to run logic after completion (e.g., displaying messages or updating state).

1. **actionBegin event**: Triggered before a group action starts. Provides grid state, current group field, requestType, and more.
2. **actionComplete event**: Triggered after a group action completes. Includes grouped data and configuration in the event args.

Below, the `actionBegin` event cancels grouping for the **OrderID** column, while `actionComplete` displays a status message.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, } from '@angular/core';
import { data } from './datasource';
import { GroupEventArgs, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

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

> The [args.requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) property represents the name of the current action being performed. For instance, during grouping, the `args.requestType` value will be **grouping**.

## Limitations

* Grouping is not compatible with Autofill functionality.

## See also

* [Exporting grouped records](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-export-options#exporting-grouped-records)
* [How to enable lazy load grouping in Grid](https://www.syncfusion.com/blogs/post/how-to-enable-lazy-load-grouping-in-syncfusion-angular-data-grid.aspx)
* [How can I do client side grouping by async pipe in Angular Grid](https://www.syncfusion.com/forums/148079/how-can-i-do-client-side-grouping-by-async-pipe-in-angular-grid)
* [How to perform initial grouping by using the async pipe in Angular Grid](https://www.syncfusion.com/forums/160032/how-to-perform-initial-grouping-by-using-the-async-pipe-in-angular-grid)