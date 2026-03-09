---
layout: post
title: Angular Grid - Toolbar Items| Syncfusion
description: Angular Grid custom toolbar offers full layout and appearance control with templates, enabling integration of custom components and interactive behaviors.
platform: ej2-angular
control: Toolbar items 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar items in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid includes a customizable toolbar positioned above the grid for accessing various actions and functionalities. Both built-in and custom toolbar items can be added to meet specific application requirements.

## Built-in Toolbar Items

Built-in toolbar items in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provide predefined actions to perform standard operations within the grid. These items can be added by defining the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property as a collection of built-in items. Each item is rendered as a button with an icon and text. The following table lists the built-in toolbar items and their respective actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| `Add` | Adds a new row to the grid.|
| `Edit` | Enables editing mode for the selected row in the grid.|
| `Update` | Saves any changes made during editing mode.|
| `Delete` | Deletes the selected record from the grid.|
| `Cancel` | Discards modifications made during editing mode.|
| `Search` | Displays a search box to filter grid records.|
| `Print` | Prints the grid content.|
| `ColumnChooser` | Opens a dialog to select column visibility.|
| `PdfExport` | Exports grid data as a PDF file.|
| `ExcelExport` | Exports grid data as an Excel file.|
| `CsvExport` | Exports grid data as a CSV file.|

The following example demonstrates enabling built-in toolbar items such as `Print` and `Search` in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs1" %}

> The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property supports configuring both built-in and custom items.

### Show Only Icons in Built-in Toolbar Items

To display only icons in the built-in toolbar items of the grid, use CSS to hide the text portion of the buttons. Add the following CSS style to the application:

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component allows customization of the built-in toolbar items to meet specific requirements. This customization can include adding, removing, or modifying toolbar items, as well as handling custom actions when toolbar buttons are clicked.

Customization of built-in toolbar items is achieved using the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event of the grid. This event is triggered when any toolbar button is clicked, allowing custom logic to be implemented.

The following example demonstrates customizing the toolbar by disabling and canceling the `Add` button functionality and showing a custom message when the `Add` button of toolbar is clicked.

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

Custom toolbar items in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid allow addition of personalized functionality to the toolbar. These items can be added by defining the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property as a collection of [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) objects. These objects define the custom items and their corresponding actions. The actions for customized toolbar items are defined in the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event.

By default, custom toolbar items are positioned on the left side of the toolbar. The position can be changed by using the [align](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel#align) property of the `ItemModel`. The following example demonstrates applying the `align` property with the value `Right` for the "Collapse All" toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-toolbar-cs1" %}

> * The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property supports built-in and custom items.
> * If a toolbar item does not match a built-in name, it is treated as a custom toolbar item.

## Both Built-in and Custom Items in Toolbar

The toolbar in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports a combination of built-in and custom toolbar items to provide standard and custom actions within the same toolbar.

To use both types of toolbar items, define the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) property of the grid as an array that includes both built-in and custom items. Built-in items are specified as strings, while custom items are defined as objects with properties such as [text](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemmodel#text), [prefixIcon](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemmodel#prefixicon), and [id](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemmodel#id) within the toolbar component.

The following example demonstrates both built-in and custom toolbar items in the grid. The built-in toolbar items include `Add`, `Edit`, `Delete`, `Update`, and `Cancel`, while the custom toolbar item is `Click`.

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
imports: [GridModule],
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

The Syncfusion Angular Grid provides the flexibility to customize its toolbar by embedding custom components using the [template](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel#template) property of the [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel). Custom UI elements such as buttons, dropdowns, or input controls can be added directly into the toolbar, alongside built-in actions like `Add`, `Edit`, and `Delete` to enhance user interaction and provide seamless integration with grid operations.

In the following example, an [AutoComplete](https://ej2.syncfusion.com/angular/documentation/auto-complete/getting-started) is rendered in the toolbar using an Angular `ng-template`, which is passed to the toolbar item's `template` property through a "TemplateRef". The `AutoComplete` is populated with unique "Ship City" values from the grid’s data. When a value is selected from the `AutoComplete`, the grid is updated by invoking its `search` method, dynamically filtering the displayed records in the "Ship City" column based on the input. Using `ng-template` together with Angular’s "@ViewChild" enables embedding interactive controls such as dropdowns or search fields and controlling the grid programmatically.

 Additionally, the [change](https://ej2.syncfusion.com/angular/documentation/api/auto-complete#change) event of the `AutoComplete` is used to trigger a search operation within the grid. When a value is selected or typed, the event handler invokes the grid's [search](https://ej2.syncfusion.com/angular/documentation/api/grid#search) method, dynamically filtering the displayed records in the "Ship City" column based on the input.

{% tabs %}y
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs5" %} 

## Custom Toolbar Items in a Specific Position

Custom toolbar items in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid can be positioned in specific locations by modifying the default placement. This enables precise control of each custom toolbar item's positioning according to specific requirements and desired layout within the grid.

By default, custom toolbar items in the Grid component are aligned on the left side of the toolbar. The position of custom toolbar items can be modified by utilizing the [align](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel#align) property of the [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel).

In the following sample, the "Collapse All" toolbar item is positioned on the `Right`, the "Expand All" toolbar item is positioned on the left, and the `Search` toolbar item is positioned at the `Center`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-toolbar-cs2" %}  
