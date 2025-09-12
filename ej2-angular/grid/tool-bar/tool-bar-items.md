---
layout: post
title: Tool bar items in Angular Grid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool bar items 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar items in Angular Grid component

The Syncfusion Angular Grid features a flexible toolbar that supports both built-in and custom items. This toolbar, positioned above the grid, allows quick access to various actions and functionalities.

## Built-in Toolbar Items

Use built-in toolbar items in the Syncfusion Angular Grid to provide standard operations. Add these items by configuring the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property as a collection of item names. Each built-in item appears as a button with an icon and a label. The following table lists built-in toolbar items and their default actions:

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new row to the Grid.|
| Edit | Enables editing mode for the selected row in the Grid.|
| Update | Saves any changes made during editing mode.|
| Delete | Deletes the selected record from the Grid.|
| Cancel | Discards modifications made during editing mode.|
| Search | Displays a search box to filter Grid records.|
| Print | Prints the Grid content.|
| ColumnChooser | Opens a dialog to select column visibility.|
| PdfExport | Exports Grid data as a PDF file.|
| ExcelExport | Exports Grid data as an Excel file.|
| CsvExport | Exports Grid data as a CSV file.|

The example below enables built-in toolbar items like **Print** and **Search**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs1" %}

> The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property supports configuring both built-in and custom items.

### Show Only Icons in Built-in Toolbar Items

Display only icons for built-in toolbar buttons by hiding button text with the following CSS:

```css
.e-grid .e-toolbar .e-tbar-btn-text, 
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
    display: none;   
}
```

This is demonstrated in the following sample:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbaricon-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbaricon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbaricon-cs1" %}

### Customize Built-in Toolbar Items

The Syncfusion Angular Grid enables customization of built-in toolbar items—such as adding, removing, or updating their actions and behavior. Handle toolbar button actions using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

The example below disables the default **Add** button action and displays a custom message when it is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [GridModule],

providers: [ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:180px"><p style="color:red;" id="message">{{message}}</p></div>
    <ejs-grid id='Grid' [dataSource]='data' height='270px' [toolbar]='toolbar' [editSettings]='editSettings' (toolbarClick)='clickHandler($event)'>
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
    public toolbar?: ToolbarItems[] | object;
    public editSettings?: EditSettingsModel;
    public message?: string;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_add') { // 'Grid_add' -> Grid component id + _ + toolbar item name
            args.cancel = true;
            const newRecord = {
                OrderID: 10247,
                CustomerID: 'TOMSP',
                ShipName: 'Hanari Carnes',
                ShipCity: 'Lyon',
            };
            (this.grid as GridComponent).addRecord(newRecord);
            this.message = 'The default adding action is cancelled, and a new record is added using the addRecord method.';
        }
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-customization/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-customization" %}

## Custom Toolbar Items

Custom toolbar items enable the addition of defined functionality and UI controls to the Grid toolbar. Define the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property with an array of [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/) objects. Assign actions to each custom item through the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

By default, custom items are aligned to the **left** of the toolbar. Change their position using the [align](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#align) property. The example below aligns the **Collapse All** item to the **right**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-toolbar-cs1" %}

> * The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property supports built-in and custom items.
> * If a toolbar item does not match a built-in name, it is treated as a custom toolbar item.

## Both Built-in and Custom Items in Toolbar

Combine built-in and custom toolbar items for full flexibility. Specify the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property as an array containing both strings (for built-in items) and objects (for custom items). For instance, use built-in items like **Add**, **Edit**, **Delete**, **Update**, **Cancel**, and a custom button **Click**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems,EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:180px"><p style="color:red;" id="message">{{message}}</p></div>
    <ejs-grid [dataSource]='data' height='270px' [toolbar]='toolbar' [editSettings]='editSettings' (toolbarClick)='clickHandler($event)'>
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
    public toolbar?: ToolbarItems[] | object;
    public editSettings?: EditSettingsModel;
    public message?: string;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel',
         { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }];
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'Click') {
            this.message = `Custom Toolbar Clicked`;
        }
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs4" %}

## Add Custom Components to the Grid Toolbar Using Template

Add components such as [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started) to the Grid toolbar using the [template](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#template) property of the [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/). With `ng-template` and Angular's **@ViewChild**, you can embed interactive controls such as dropdowns or search fields. In the sample below, an AutoComplete is shown in the toolbar for filtering Grid records by ShipCity:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs5" %} 

## Custom Toolbar Items in a Specific Position

Adjust the alignment of custom toolbar items using the [align](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#align) property. In the next sample, **Collapse All** is right-aligned, **Expand All** is left-aligned, and **Search** is center-aligned:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-toolbar-cs2" %}  
