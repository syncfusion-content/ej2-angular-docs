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

The Syncfusion Angular Grid offers a flexible toolbar that enables the addition of custom toolbar items or modification of existing ones. This customizable toolbar is positioned above the grid, providing a convenient way to access various actions and functionalities

## Built-in toolbar items

Built-in toolbar items in the Syncfusion Angular Grid component involves utilizing pre-defined actions to perform standard operations within the Grid.

These items can be added by defining the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property as a collection of built-in items. Each item is rendered as a button with an icon and text. The following table lists the built-in toolbar items and their respective actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new row to the Grid.|
| Edit | Enables editing mode for the selected row in the Grid.|
| Update | Saves the changes made during the editing mode.|
| Delete | Deletes the selected record from the Grid.|
| Cancel | Discards the changes made during the editing mode.|
| Search | Displays a search box to filter the Grid records.|
| Print | Print the Grid content.|
| ColumnChooser | Choose the column's visibility.|
| PdfExport | Exports the Grid data to a PDF file.|
| ExcelExport | Exports the Grid data to an Excel file.|
| CsvExport | Exports the Grid data to a CSV file.|

The following example demonstrates how to enable built-in toolbar items such as **Print** and **Search** in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs1" %}

> The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.

### Show only icons in built-in toolbar items

Showing only icons in the built-in toolbar items of the Grid involves customizing the appearance of the toolbar to display icons without text.

To display only icons in the built-in toolbar items of the Grid, you can use CSS to hide the text portion of the buttons using the following CSS style.

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

### Customize the built-in toolbar items

The Syncfusion Angular Grid component allows you to customize the built-in toolbar items to meet your specific requirements. This can include adding, removing, or modifying toolbar items, as well as handling custom actions when toolbar buttons are clicked.

To customize the built-in toolbar items, you can use the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event of the grid.

The following example demonstrate how to customize the toolbar by disabling and canceling the **Add** button functionlity and showing a custom message when the **Add** button of toolbar is clicked.

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

## Custom toolbar items

Adding custom toolbar items to the Syncfusion Angular Grid involves incorporating personalized functionality into the toolbar.

Custom toolbar items can be added to the Grid component by defining the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property as a collection of [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) objects. These objects define the custom items and their corresponding actions. The actions for the customized toolbar items are defined in the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

By default, custom toolbar items are positioned on the **left** side of the toolbar. However, you can change the position by using the [align](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#align) property of the `ItemModel`. The following example demonstrates how to apply the `align` property with the value **Right** for the **Collapse All** toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-toolbar-cs1" %}

> * The [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match with built-in items, it will be treated as custom toolbar item.

## Both built-in and custom items in toolbar

Built-in and custom items in a toolbar within the Syncfusion Angular Grid provides the flexibility to create a customized toolbar with a combination of standard actions and custom actions.

To use both types of toolbar items, you can define the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property of the Grid as an array that includes both built-in and custom items. The built-in items are specified as strings, while the custom items are defined as objects with properties such as [text](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemDirective/#text), [prefixIcon](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemDirective/#prefixicon), and [id](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemDirective/#id) within the toolbar component.

The following example demonstrates, how to use both built-in and custom toolbar items in the grid. The built-in toolbar items includes **Add**, **Edit**, **Delete**, **Update**, and **Cancel**, while the custom toolbar item is **Click**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-cs4" %}

## Custom toolbar items in a specific position

Customizing the position of a custom toolbar within the Syncfusion Angular Grid involves modifying the default placement of the custom toolbar items. This enables you to precisely control the positioning of each custom toolbar item according to your specific requirements and desired layout within the Grid.

By default, custom toolbar items in Grid component are aligned on the left side of the toolbar. However, you have the ability to modify the position of the custom toolbar items by utilizing the [align](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) property of the [ItemModel](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel).

In the following sample, the **Collapse All** toolbar item is positioned on the **Right**, the **Expand All** toolbar item is positioned on the **Left**, and the **Search** toolbar item is positioned at the **Center**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-toolbar-cs2" %}  
