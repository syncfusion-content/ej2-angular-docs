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

The context menu in the Syncfusion Angular Gantt component provides right-click access to task and column operations, improving efficiency with contextual task actions. Menu items adapt based on the clicked element, such as task rows, column headers, or chart areas.

## Enabling context menu

To enable the context menu, set the [enableContextMenu](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablecontextmenu) property to `true` and import `ContextMenuService` from `@syncfusion/ej2-angular-gantt` in the provider section of `AppModule`.

The following items are available in the default context menu:

- `AutoFit`: Adjusts the current column width to fit its content.
- `AutoFitAll`: Adjusts all column widths to fit their content.
- `SortAscending`: Sorts the current column in ascending order.
- `SortDescending`: Sorts the current column in descending order.
- `TaskInformation`: Opens the editing dialog for the selected task.
- `Add`: Inserts a new task with sub-options: `Above`, `Below`, `Child`, `Milestone`.
- `Indent`: Moves the selected task one level inward.
- `Outdent`: Moves the selected task one level outward.
- `DeleteTask`: Deletes the selected task.
- `Save`: Commits changes to the edited task.
- `Cancel`: Discards changes to the edited task.
- `SplitTask`: Divides the selected task at the specified date.
- `MergeTask`: Combines split task segments with sub-options: `Left`, `Right`.
- `Convert`: Converts tasks with sub-options: `To Milestone` and `To Task`.
- `DeleteDependency`: Deletes the selected task dependency.

The following example demonstrates context menu implementation with default items, where menu options adapt based on the clicked element and `editSettings` configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/contextmenu/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/contextmenu/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/contextmenu/default-cs1" %}

> If a required feature is not enabled, the related context menu item will be disabled or hidden to prevent unsupported actions.

## Custom context menu items

Extend the context menu functionality by adding custom items using the [contextMenuItems](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuitems) property. Custom items are defined as a collection of [contextMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/contextMenuItemModel/) objects with properties for `id` (unique identifier), `text` (display label), `target` (CSS selector for appearance context), and `iconCss` (icon styling class).

The `target` property determines where custom menu items appear: `.e-content` for task-related operations, like add, delete, save, and cancel, `.e-gridheader` for column-related operations.

The [contextMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuopen) event enables dynamic modification, such as hiding items based on row selection. The [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuclick) event handles custom item actions, providing details like the selected item’s `id`, `text`, and row data.

The following sample shows context menu items for parent rows to expand or collapse child rows in the content area and a context menu item to hide columns in the header area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/contextmenu/custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/contextmenu/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/contextmenu/custom-cs1" %}

This implementation shows custom context menu integration with event handling. The `contextMenuClick` event receives parameters including the selected item's id, text, and the current row data, enabling specific actions based on the context.

## Touch interaction

On touch devices, context menu functionality is accessible through **long press** gestures. Long press on task rows, headers, or chart areas opens the context menu, while tapping menu items executes associated actions. Items with sub-menus (e.g., `Add`, `Convert`) expand additional options when tapped, and tapping outside the menu closes it without performing actions.

This touch interaction ensures consistent experience across different device types and input methods while maintaining full functionality through intuitive gesture-based navigation.

> For a comprehensive demonstration of context menu functionality, including default items, custom items, and sub-menus, explore the [interactive sample](https://ej2.syncfusion.com/angular/demos/#/tailwind3/gantt/context-menu).
