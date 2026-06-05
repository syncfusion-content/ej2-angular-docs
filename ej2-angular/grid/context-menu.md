---
layout: post
title: Angular Grid - Context Menu | Syncfusion
description: Angular Grid context menu supports, adding custom actions, and managing events to enhance interactions for rows and cells.
platform: ej2-angular
control: Context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Context Menu in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) component includes a context menu that appears on right-click anywhere within the grid. The context menu provides quick access to actions such as sorting, filtering, and editing without navigating away from the grid.

Enable the context menu by configuring the grid's [contextMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#contextmenuitems) property. The property accepts the default set of menu items or a custom collection of objects.

To use the context menu, inject the `ContextMenuService` to the providers array.

```typescript
import { ContextMenuService } from '@syncfusion/ej2-angular-grids';

@Component({
  providers: [ContextMenuService]
})
```

The context menu appears when right-clicking different areas of the grid, including:

- **Header**: the grid header section.
- **Content**: the main grid content area.
- **Pager**: the pager section.

Context menu items vary by the clicked area; header items differ from content or pager items.

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

The following example demonstrates enabling the context menu feature in the grid:

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

The Angular Data Grid supports adding custom context menu items to the default menu.

Custom items are defined by setting the `contextMenuItems` property to a collection of [contextMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#contextmenumodule) objects. Menu item actions are handled through the [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#contextmenuclick) event.

The following example demonstrates adding custom context menu items in the Grid component:

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

This functionality can be implemented using the [created](https://ej2.syncfusion.com/angular/documentation/api/grid#created) event and the context menu's [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/context-menu/index-default#beforeopen) event.

Using the Grid's `onclick` event listener, the clicked position values are captured through the `ngAfterViewInit` method, which is ideal for DOM related interactions and operations requiring access to rendered elements. These captured positions are then passed to the context menu's open method within the `onclick` event. Additionally, the default right‑click behavior is prevented using the Grid's `created` event.

The following example demonstrates showing the context menu on left click using the `created` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/context-menu-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/context-menu-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/context-menu-cs3" %}

> Control the visibility of a context menu item for a particular grid area by setting the [target](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuItemModel#target) property.

## Enable or disable context menu items

The Angular Data Grid supports enabling or disabling default and custom context menu items via the context menu's [enableItems](https://ej2.syncfusion.com/angular/documentation/api/context-menu/index-default#enableitems) method. Call `enableItems` with `true` to enable items or `false` to disable them.

The example below uses the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component to toggle a menu item. When the switch changes state, the `change` event updates the `Copy` item by calling `enableItems`.

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

The Angular Data Grid supports showing or hiding default and custom context menu items using the context menu's [showItems](https://ej2.syncfusion.com/angular/documentation/api/context-menu/index-default#showitems) and [hideItems](https://ej2.syncfusion.com/angular/documentation/api/context-menu/index-default#hideitems) methods. Pass the target items as an argument to these methods.

The example below demonstrates the use of the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component. Its `change` event triggers either `showItems` or `hideItems` to modify the `Edit Record` and `Delete Record` items accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/context-menu-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/context-menu-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/context-menu-cs5" %}