---
layout: post
title: Context menu in Angular Grid component | Syncfusion
description: Learn here all about Context menu in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Angular Grid component

The Syncfusion Angular Grid component provides a context menu feature that appears on right-click within the grid. This feature enhances the experience by offering quick access to relevant actions and operations for the displayed data.

Manage interactions with custom items using the [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuclick) event. This property accepts either an array of predefined context menu item names or an array of [contextMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuItemModel) objects for custom items.

To use the context menu, inject the **ContextMenuService** in the provider section of **AppModule**.

```typescript
import { ContextMenuService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  providers: [ContextMenuService]
})
```

## Context menu areas

The context menu appears when right-clicking on different grid areas:

* **Header**: Right-click on column headers
* **Content**: Right-click on data rows and cells  
* **Pager**: Right-click on pagination controls

## Default context menu items

### Header area items

The default context menu items available in the grid header are:

| Items            | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `AutoFit`        | Automatically adjust the column width to fit the content.    |
| `AutoFitAll`     | Automatically adjust all column widths to fit their content. |
| `Group`          | Group the data based on the current column.                  |
| `Ungroup`        | Remove grouping for the current column.                      |
| `SortAscending`  | Sort the current column in ascending order.                  |
| `SortDescending` | Sort the current column in descending order.                 |

### Content area items

The default context menu items available in the grid content area are:

| Items         | Description                                                         |
| ------------- | ------------------------------------------------------------------- |
| `Edit`        | Edit the currently selected record in the grid.                     |
| `Delete`      | Delete the currently selected record.                               |
| `Save`        | Save the changes made to the edited record.                         |
| `Cancel`      | Cancel the edit state and revert changes made to the edited record. |
| `Copy`        | Copy the selected records to the clipboard.                         |
| `PdfExport`   | Export the grid data as a PDF document.                             |
| `ExcelExport` | Export the grid data as an Excel document.                          |
| `CsvExport`   | Export the grid data as a CSV document.                             |

### Pager area items

The default context menu items available in the grid pager area are:

| Items       | Description                                |
| ----------- | ------------------------------------------ |
| `FirstPage` | Navigate to the first page of the grid.    |
| `PrevPage`  | Navigate to the previous page of the grid. |
| `LastPage`  | Navigate to the last page of the grid.     |
| `NextPage`  | Navigate to the next page of the grid.     |

The following example demonstrates how to enable the context menu feature in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/context-menu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/context-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/context-menu-cs1" %}

## Custom context menu items

The Syncfusion Angular Grid allows you to add custom context menu items to the default context menu. These customized options enable you to tailor the context menu to meet your application's specific requirements.

To add custom context menu items, configure the [contextMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuitems) property with an array of [contextMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuItemModel) objects. This allows you to define the appearance and behavior of additional context menu items.

Handle user interactions with custom items using the [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuclick) event. This event provides access to the clicked menu item and enables you to execute specific actions when custom items are selected.

The following example demonstrates how to add custom context menu items in the Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/context-menu-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/context-menu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/context-menu-cs2" %}

## Show context menu on left click

The Syncfusion Angular Grid provides the ability to display context menu items on a left mouse click instead of the default right mouse click action.

This functionality can be implemented using the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event and the context menu's `beforeOpen` event.

Using the `onclick` event listener of the Grid, you can capture clicked position values through the `ngAfterViewInit` method. This method is suitable for DOM interactions and operations requiring access to rendered elements. The captured positions are then passed to the `open` method of the context menu within the `onclick` event. Additionally, the default right-click behavior is prevented using the `created` event of the Grid.

The following example demonstrates how to show the context menu on left click using the `created` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/context-menu-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/context-menu-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/context-menu-cs3" %}

> You can hide or show an item in the context menu for specific areas inside the grid by defining the [target](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuItemModel/#target) property.

## Enable or disable context menu items

The Syncfusion Angular Grid enables dynamic enabling or disabling of both default and custom context menu items. This feature offers flexibility to control the behavior of context menu items based on specific conditions or interactions within the application.

This functionality is achieved using the [enableItems](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#enableitems) method of the context menu. Set the enable parameter to **true** to enable context menu items, or **false** to disable them. You can conditionally enable or disable context menu items using the `enableItems` method based on your specific requirements.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to enable and disable context menu items using the `enableItems` method. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered, and the **Copy** item is updated accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/context-menu-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/context-menu-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/context-menu-cs4" %}

## Show or hide context menu items

The Syncfusion Angular Grid enables dynamic showing or hiding of both default and custom context menu items. This feature allows customization of context menu items based on various conditions or interactions.

This functionality is achieved using the [showItems](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#showitems) and [hideItems](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#hideitems) methods of the context menu. Specify the item you want to show or hide as an argument to these methods.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to show or hide context menu items using the `showItems` and `hideItems` methods. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered, and the **Edit** and **Delete** items are updated accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/context-menu-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/context-menu-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/context-menu-cs5" %}