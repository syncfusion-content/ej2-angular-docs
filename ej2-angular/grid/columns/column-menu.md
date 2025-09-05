---
layout: post
title: Column menu in Angular Grid component | Syncfusion
description: Learn here all about Column menu in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Angular Grid component

The column menu in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides options to enable features such as sorting, grouping, filtering, column chooser, and autofit. When the column header's menu icon is clicked, a menu displays with these integrated features. To enable the column menu, set the [showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumnmenu) property to **true** in the Grid configuration.

To use the column menu, inject the **ColumnMenuService** in the provider section of **AppModule**.

The default column menu items are displayed in the following table:

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **Group** | Group the current column. |
| **Ungroup** | Ungroup the current column. |
| **AutoFit** | Autofit the current column. |
| **AutoFitAll** | Autofit all columns. |
| **ColumnChooser** | Choose the column visibility. |
| **Filter** | Show the filter option as given in [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#type) |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs6" %}

> * The column menu can be disabled for a particular column by setting [columns.showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#showcolumnmenu) to false.
> * The default items can be customized by defining the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) with required items.

## Prevent column menu for particular column

The Syncfusion Angular Grid component provides the ability to prevent the column menu from appearing for specific columns. This feature is useful when certain columns should not be customizable through the column menu.

To prevent the column menu for a particular column, set the [showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#showcolumnmenu) property to **false** for that specific column configuration. This disables the column menu options specifically for the designated column, while other columns retain the column menu functionality.

The following example demonstrates how to prevent the column menu for a specific column. In this example, the column menu is disabled for the **OrderID** column by setting the `showColumnMenu` property to **false**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/prevent-column-menu/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/prevent-column-menu/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/prevent-column-menu" %}

## Add custom column menu item

The custom column menu item feature allows addition of additional menu items to the column menu in the Syncfusion Grid. These custom menu items can be defined using the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) property, which accepts a collection of [columnMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuItemModel/) objects. Actions for these custom items can be defined in the [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuclick) event.

The following example demonstrates how to add a custom column menu item to clear the sorting of the Grid:

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

In scenarios where specific items need to be hidden from the column menu for particular columns, set the [columnMenuOpenEventArgs.hide](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuOpenEventArgs) property to true in the [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuopen) event.

The following example demonstrates hiding the **Filter** item in the column menu when it opens for the **OrderID** column:

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

The nested column menu feature provides an extended menu option in the grid column headers, allowing access to additional actions and options related to the columns.

To enable the nested column menu feature, define the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) property in the component. The `columnMenuItems` property is an array that contains the items for the column menu. Each item can be a string representing a built-in menu item or an object defining a custom menu item.

Here is an example of how to configure the `columnMenuItems` property to include a nested menu:

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

To customize the column menu icon, override the default grid class **.e-icons.e-columnmenu** with a custom CSS property called **content**. By specifying a Unicode character or an icon font's CSS class, the icon displayed in the column menu can be changed.

To customize the column menu icon, follow these steps:

1. Add the necessary CSS code to override the default grid class:

```css
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
    content: "\e99a";
}
```

2. Import the required icon stylesheets. Either the material or bootstrap5 style can be used, depending on preference. Add the following code to import the stylesheets:

```html
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
```

Here is an example that demonstrates how to customize the column menu icon in the Syncfusion Grid:

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

The column menu in Syncfusion Angular Grid provides a set of events that allow customization of behavior and performing actions when the column menu is opened or clicked. These events are helpful for adding additional functionality or implementing specific actions based on user interactions with the column menu.

1. The [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuopen) event triggers before the column menu opens.

2. The [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuclick) event triggers when the user clicks the column menu of the grid.

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