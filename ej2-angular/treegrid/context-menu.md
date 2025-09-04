---
layout: post
title: Context menu in Angular TreeGrid component | Syncfusion
description: Learn about the context menu in the Syncfusion Angular TreeGrid component, including default and custom menu items, dynamic enable/disable, and API integration for advanced actions.
platform: ej2-angular
control: Context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Angular TreeGrid component

The Syncfusion Angular TreeGrid supports a context menu that appears on right-click, enabling users to quickly access built-in or custom actions. To enable this feature, define default or custom items using the [`contextMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#contextmenuitems) property. Inject the `ContextMenu` module into the TreeGrid to use context menus.

The following table lists the default context menu items:

| Item            | Description                                                  |
|-----------------|--------------------------------------------------------------|
| `AutoFit`       | Auto-fits the current column.                                |
| `AutoFitAll`    | Auto-fits all columns.                                       |
| `Edit`          | Edits the current record.                                    |
| `Delete`        | Deletes the current record.                                  |
| `Save`          | Saves the edited record.                                     |
| `Cancel`        | Cancels edit mode.                                           |
| `PdfExport`     | Exports TreeGrid data as a PDF document.                     |
| `ExcelExport`   | Exports TreeGrid data as an Excel document.                  |
| `CsvExport`     | Exports TreeGrid data as a CSV document.                     |
| `SortAscending` | Sorts the current column in ascending order.                 |
| `SortDescending`| Sorts the current column in descending order.                |
| `FirstPage`     | Navigates to the first page.                                 |
| `PrevPage`      | Navigates to the previous page.                              |
| `LastPage`      | Navigates to the last page.                                  |
| `NextPage`      | Navigates to the next page.                                  |
| `AddRow`        | Adds a new row to the TreeGrid.                              |
| `Indent`        | Indents the record by one hierarchical level.                |
| `Outdent`       | Outdents the record by one hierarchical level.               |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/context-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/context-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/context-menu-cs1" %}

## Custom context menu items

You can add custom context menu items by defining the [`contextMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#contextmenuitems) property as a collection of [`contextMenuItemModel`](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuItemModel/). Assign actions to these custom items in the [`contextMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#contextmenuclick) event.

In the sample below, a context menu item is added for parent rows to expand or collapse child rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/context-menu-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/context-menu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/context-menu-cs2" %}

## Enable and disable context menu items dynamically

Context menu items can be enabled or disabled dynamically using the [`enableItems`](https://ej2.syncfusion.com/documentation/api/menu/#enableitems) method within the [`contextMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#contextmenuopen) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/context-menu-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/context-menu-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/context-menu-cs3" %}

> To show or hide a context menu item for specific areas within the TreeGrid, use the [`target`](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuItemModel/#target) property.
> For a complete overview of features, visit the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid). Explore the [Angular TreeGrid example](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to see how data can be presented and manipulated.