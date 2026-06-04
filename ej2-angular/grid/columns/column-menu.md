---
layout: post
title: Angular Grid - Column Menu | Syncfusion
description: Angular Grid column menu describes configuring column menus, adding actions like sorting and filtering, and customizing menu items and icons.
platform: ej2-angular
control: Column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) provides a built-in column menu that offers quick access to essential column operations, such as sorting, grouping, filtering, column chooser, and autofit. This menu appears when the menu icon in a column header is clicked, enabling streamlined interaction with grid data. The column menu can be enabled by setting the [showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/grid#showcolumnmenu) property to `true` in the Grid configuration and injecting the `ColumnMenuService` module to the providers array.

The default column menu items are displayed in the following table.

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `Group` | Group the current column. |
| `Ungroup` | Ungroup the current column. |
| `AutoFit` | Autofit the current column. |
| `AutoFitAll` | Autofit all columns. |
| `ColumnChooser` | Choose the column visibility. |
| `Filter` | Show the filter option as given in [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings#type). |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs6" %}

> * The column menu can be disabled for a particular column by setting [columns.showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/grid/column#showcolumnmenu) to `false`.
> * The default items can be customized by defining the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid#columnmenuitems) with required items.

## Prevent column menu for particular column

The column menu in Grid can be controlled at both the Grid level and the column level. When the Grid's `showColumnMenu` property is enabled, every column displays its menu by default. To prevent the menu from appearing for a particular column, the column definition itself must explicitly set the `showColumnMenu` property to `false`.

The following example demonstrates disabling the column menu for the "Order ID" column by setting the `showColumnMenu` property to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/prevent-column-menu/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/prevent-column-menu/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/prevent-column-menu" %}

## Adding custom column menu items

The custom column menu item feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid allows extending the default column menu with additional options or replacing it entirely with custom items, depending on requirements. These items are defined using the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid#columnmenuitems) property, which accepts a collection of [columnMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuItemModel) objects. Each object specifies attributes such as `text`, `id`, and `iconCss` to represent the custom menu item.

The functionality of these items is implemented through the [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid#columnmenuclick) event. This event is triggered whenever a menu item is selected, enabling identification of the item by its `id` and execution of the corresponding action.

The following example demonstrates adding a custom column menu item to clear sorting in the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs8" %}

## Customize menu items for particular columns

The Grid allows menu items to be shown or hidden for individual columns, ensuring that only relevant options are displayed. This customization is achieved through the [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/grid#columnmenuopen) event, where the [ColumnMenuOpenEventArgs.ColumnMenuItemModel.hide](https://ej2.syncfusion.com/angular/documentation/api/grid/columnmenuitemmodel) property can be set to `true` for any item that should not appear in the menu of a particular column. This approach provides fine-grained control, making the column menu context aware and preventing unnecessary actions from being presented in columns where they are not applicable.

The following example demonstrates hiding the `Filter` item in the column menu for the "Order ID" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs9" %}

## Render nested column menu

Nested column menus in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid provide an organized way to display extended options within column headers. Instead of listing all actions at the same level, items can be grouped into sub-menus, making the menu easier to navigate and more structured. This feature is enabled through the `columnMenuItems` property, which accepts an array of built-in menu item strings or custom menu item objects. By defining items with nested structures, additional actions related to a column can be grouped logically under sub-menus.

The `columnMenuItems` property can be set up to include a nested menu, such as "Sub Menu", alongside the existing default column menu items. This allows the column menu to display both the standard options and additional grouped actions within a structured sub-menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/column-menu-cs1" %}

## Customize the icon of column menu

The column menu icon in Grid can be changed by overriding the default CSS class `.e-icons.e-columnmenu`. This is done using the CSS `content` property, where either a Unicode character or an icon font class can be specified to replace the default icon.

**Customization steps:**

1. Add the CSS code to override the default grid class:

    ```css
    .e-grid .e-columnheader .e-icons.e-columnmenu::before {
        content: "\e99a";
    }
    ```

2. Import the required icon stylesheets (material or bootstrap5 style):

    ```html
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material3.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
    ```

Here is an example that demonstrates customizing the column menu icon in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-column-menu-icon-cs1" %}

## Column menu events

Column menu events in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid provide ways to customize behavior when the menu is opened or when an item is clicked. These events make it possible to extend functionality or apply specific logic based on user interactions.

| Event | Description |
|-------|-------------|
| [`columnMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/grid#columnmenuopen) | Triggers before the column menu opens. |
| [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid#columnmenuclick) | Triggers when a column menu item is clicked. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SortService, GroupService, ColumnMenuService, PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { GroupSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

standalone: true,
    selector: 'app-root',
    template: `<p id='message'>{{ message }}</p><ejs-grid [dataSource]='data' id="gridcomp" allowPaging='true' allowGrouping='true' allowSorting='true' showColumnMenu='true'
               [groupSettings]='groupOptions' allowFiltering='true' [filterSettings]='filterSettings'
         (columnMenuOpen)="columnMenuOpen()" (columnMenuClick)="columnMenuClick()">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>`,
    providers: [SortService, GroupService, ColumnMenuService, PageService, FilterService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    public filterSettings?: FilterSettingsModel;
    public message?: string;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showGroupedColumn: true };
        this.filterSettings = { type: 'CheckBox' };
    }
    columnMenuOpen() {
        this.message = `columnMenuOpen event triggered`;
    }
    columnMenuClick() {
        this.message = `columnMenuClick event triggered`;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs7" %}