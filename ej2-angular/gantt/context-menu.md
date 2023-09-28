---
layout: post
title: Context menu in Angular Gantt component | Syncfusion
description: Learn here all about Context menu in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Angular Gantt component

The Gantt control allows you to perform quick actions by using context menu. When right-clicking the context menu, the context menu options are shown. To enable this feature, set the [`enableContextMenu`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablecontextmenu) to true. The default context menu options are enabled using the [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editsettings) property. The context menu options can be customized using the [`contextMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuitems) property.

To use the context menu, inject the `ContextMenuService` in the provider section of `AppModule`.

The default items are listed in the following table.

Items| Description
----|----
`AutoFit`|  Auto-fits the current column.
`AutoFitAll` | Auto-fits all columns.
`SortAscending` | Sorts the current column in ascending order.
`SortDescending` | Sorts the current column in descending order.
`TaskInformation`|  Edits the current task.
`Add` | Adds a new row to the Gantt.
`Indent` | Indent the selected record to one level.
`Outdent` | Outdent the selected record to one level.
`DeleteTask` | Deletes the current task.
`Save` | Saves the edited task.
`Cancel` | Cancels the edited task.
`DeleteDependency` | Deletes the current dependency task link.
`Convert` | Converts current task to milestone or vice-versa.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/contextmenu/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/contextmenu/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/contextmenu/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/contextmenu/default-cs1" %}

## Custom context menu items

The custom context menu items can be added by defining the [`contextMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuitems) as a collection of [`contextMenuItemModel`](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuItemModel/).
Actions for the customized items can be defined in the [`contextMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuclick) event and the visibility of customized items can be defined in the [`contextMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuopen) event.

To create custom context menu items for header area, define the target property as `.e-gridheader`.

The following sample shows context menu item for parent rows to expand or collapse child rows in the content area and a context menu item to hide columns in the header area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/contextmenu/custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/contextmenu/custom-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/contextmenu/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/contextmenu/custom-cs1" %}

> You can show an specific item in context menu for header/content area in the Gantt control by defining the `target` property.