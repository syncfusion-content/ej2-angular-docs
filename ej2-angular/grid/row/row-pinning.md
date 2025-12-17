---
layout: post
title: Row Pinning in Angular Grid Component | Syncfusion
description: Learn here all about Row pinning in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row pinning 
documentation: ug
domainurl: ##DomainURL##
---

# Row Pinning in Angular Grid Control

The Syncfusion <sup style="font-size:70%">&reg;</sup> Angular Grid control provides option to pin specific rows at the top, ensuring important information remains visible while scrolling vertically. This feature is useful when you want to keep specific rows always visible for quick reference or priority viewing, regardless of user interactions.

To enable the row pinning feature, set the [isRowPinned](https://ej2.syncfusion.com/angular/documentation/api/grid/#isrowpinned) callback function, which returns  returns **true** or **false** based on your condition. This callback function receives each row's data as an argument, allowing you to define the pinning logic. This feature executes the `isRowPinned` callback function only during initial rendering, so any condition defined inside this callback function applies exclusively at that stage.  

Also, this feature does not alter the grid's overall content height, ensuring that the content area remains fully visible and scrollable even when multiple rows are pinned. This behavior prevents pinned rows from overlapping or hiding the scrollable content, maintaining a consistent layout and smooth scrolling experience. Regardless of how many rows are pinned, the grid preserves its original height and displays pinned rows in a separate fixed region above the content area, allowing users to view and interact with all other rows without obstruction.

The following example pins rows with "Critical" priority and "Open" status at the top using the `isRowPinned` callback function.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule  } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' [isRowPinned]="isRowPinned">
                    <e-columns>                  
                        <e-column field="Title" headerText="Title" isPrimaryKey="true" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data.slice(0, 7);
    }
    public isRowPinned=( data: Object)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-pinning-cs1" %}

> Pinning rows requires a primary key column for mapping the pinned rows to their original records. To define the primary key, set [columns->isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) to **true** in particular column.

## Paging with row pinning

The row pinning feature in the Grid control keeps important rows always visible at the top while navigating through pages. Pinned rows count won't be included in the number of rows shown per page. They stay fixed at the top of the grid, so they're always visible. For example, if the [pageSettings->pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pagesettings#pagesize) is set to 10 and 2 rows are pinned, those 2 rows remain at the top, and the grid will display 10 other rows below them. When navigating to another page, the pinned rows stay at the top while the next 10 records will be rendered below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule,PageService  } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' [allowPaging]="true" [pageSettings]="pageSettings" [isRowPinned]="isRowPinned">
                    <e-columns>                  
                        <e-column field="Title" headerText="Title" isPrimaryKey="true" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings: PageSettingsModel;
    ngOnInit(): void {
        this.data = data.slice(0, 7);
        this.pageSettings={pageSize:10};
    }
    public isRowPinned=( data: Object)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-pinning-cs2" %}

## Selecting the pinned rows

The row pinning feature allows selection on the pinned rows just like normal rows, and their selection state always mirrors the original rows through its primary key value. This design ensures consistent selection across all grid actions such as paging, sorting, and filtering. Whether users select rows using the mouse, keyboard, or checkbox selection, pinned rows accurately reflect the same state as their corresponding data rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule,PageService  } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' [allowPaging]="true" [pageSettings]="pageSettings" [isRowPinned]="isRowPinned">
                    <e-columns>
                        <e-column type="checkbox" width="70"></e-column>        
                        <e-column field="Title" headerText="Title" isPrimaryKey="true" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings: PageSettingsModel;
    ngOnInit(): void {
        this.data = data.slice(0, 7);
        this.pageSettings={pageSize:10};
    }
    public isRowPinned=( data: Object)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-pinning-cs3" %}

> The [selectionSettings->persistSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionsettings#persistselection) will be automatically enabled when pinning the rows using the `isRowPinned` callback function.

## Filtering and sorting with pinned rows

The row pinning feature ensures that pinned rows remain fully integrated with filtering and sorting operations. When a filter is applied, both the pinned section and the scrollable grid content display only rows matching the filter criteria, maintaining clarity and consistency. Similarly, when sorting is applied to any column, pinned rows are reordered using the same criteria while staying at the top of the grid. This unified behavior delivers a seamless and intuitive experience, allowing users to refine and organize data without losing sight of important pinned records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, SortService, FilterService, PageSettingsModel, FilterSettingsModel  } from '@syncfusion/ej2-angular-grids';

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' [allowPaging]="true" [pageSettings]="pageSettings" [allowSorting]="true" [allowFiltering]="true" [filterSettings]="filterSettings" [isRowPinned]="isRowPinned" height="200">
                    <e-columns>                  
                        <e-column field="Title" headerText="Title" isPrimaryKey="true" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings: PageSettingsModel;
    public filterSettings: FilterSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.pageSettings={ pageSize: 10 };
        this.filterSettings={ type: 'Menu' };
    }
    public isRowPinned=( data: Object)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}


{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-pinning-cs4" %}

## CRUD operations with row pinning

The row pinning feature fully supports CRUD operations by mirroring changes between the pinned row and its corresponding original row. When a pinned row is edited, updated, or deleted, the same changes are reflected in the original row, and vice versa, ensuring data consistency across both views.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, EditService, EditSettingsModel, PageSettingsModel  } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data'  [isRowPinned]="isRowPinned"  [allowPaging]="true" [pageSettings]="pageSettings" [editSettings]="editSettings" height="200">
                    <e-columns>                  
                        <e-column field="Title" headerText="Title" isPrimaryKey="true" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings: PageSettingsModel = { pageSize: 15};
    public editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };    
    ngOnInit(): void {
        this.data = data;
    }
    public isRowPinned=( data: Object)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-pinning-cs5" %}

## Dynamic row pinning

Row pinning provides dynamic control through the built-in context menu, allowing quick actions to pin or remove pinned rows. Using options such as `PinRow` and `UnpinRow`, any row can be right-clicked to pin it to the top or quickly remove it from the pinned section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, PageSettingsModel, ContextMenuService  } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, ContextMenuService],
standalone: true,
    selector: 'app-root',
    template: `<div>
                 <ejs-grid [dataSource]='data' [isRowPinned]="isRowPinned" height='200' [allowPaging]="true" [pageSettings]="pageSettings" [contextMenuItems]="contextMenuItems">
                    <e-columns>                  
                        <e-column field="Title" headerText="Title" isPrimaryKey="true" width="100"></e-column>
                        <e-column field="Status" headerText="Status" width="100"></e-column>
                        <e-column field="Assignee" headerText="Assignee" width="100"></e-column>
                        <e-column field="Priority" headerText="Priority" width="100"></e-column>
                    </e-columns>
                 </ejs-grid>
            </div>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems: string[] = ['PinRow', 'UnpinRow'];
    public pageSettings: PageSettingsModel = { pageSize: 15 };

    ngOnInit(): void {
        this.data = data;
    }
    public isRowPinned=( data: Object)=>
    {
        if (data && data.Status === 'Open' && data.Priority === 'Critical') {
            return true;
        }
        return false;
    }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-pinning-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-pinning-cs6" %}