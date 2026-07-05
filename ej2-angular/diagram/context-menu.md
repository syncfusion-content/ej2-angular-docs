---
layout: post
title: Context Menu in Angular Diagram Component | Syncfusion®
description: Learn here all about Context menu in Syncfusion® Angular Diagram Component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Context Menu in Angular Diagram Component

<!-- markdownlint-disable MD010 -->

In graphical user interfaces, a context menu appears when you perform a right-click operation, offering users a set of actions relevant to the current context. The Angular Diagram component provides extensive context menu customization capabilities through the [`contextMenuSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram#contextmenusettings) property.

The Diagram control includes built-in context menu items and allows you to define custom menu items. This flexibility enables you to tailor menus to specific application needs, including creating nested levels of menu items for complex user interactions.

## Prerequisites

To ensure the context menu renders correctly, include the necessary CSS references from the Syncfusion® `ej2-navigations` package by adding the following line to your `src/styles.css` file:

```css
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

## Default Context Menu

The Diagram component provides default context menu items for frequently used commands. Use the [`show`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettings#show) property to enable or disable the context menu.

The following code demonstrates how to enable the default context menu items:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/contextmenu-cs1" %}

## Customize Context Menu

You can customize context menus for individual nodes by defining specific menu items beyond the default options. To add custom context menu items, define and incorporate them into the [`items`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettingsModel#items) property of the context menu.

Each custom item can be configured with the following properties:
- [`text`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#text): Display text for the menu item
- [`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#id): Unique identifier for the menu item
- [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#iconCss): CSS class for font icons
- [`target`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#target): Specifies where the menu item should appear
- [`separator`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#separator): Adds visual separation between menu items

For nested menu structures, define child items within the [`items`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#items) property of a parent menu item.

### Display Custom Menu Only

To display only custom context menu items, set the [`showCustomMenuOnly`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettingsModel#showCustomMenuOnly) property to true.

### Context Menu Click

Handle custom menu item actions using the [`contextMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/diagram#contextmenuclick) event. This event triggers when a menu item is clicked and allows you to define specific actions based on the selected item.

The following example demonstrates context menu click handling for node cloning and color changes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/custom-cs1" %}

### Context Menu Open

You can conditionally hide specific menu items based on selected elements using the [`contextMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/diagram#contextmenuopen) event. When the context menu opens via right-click, this event triggers and allows you to create an array of menu items to hide for the selected element. Pass this array to the [`hiddenItems`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramBeforeMenuOpenEventArgs#hiddenitems) property of the contextMenuOpen event argument.

The following example shows how to display different custom menu items for nodes, connectors, and the diagram based on selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/custom-cs2" %}

### Context Menu with URL

Use the [`url`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#url) property of menu items to set website URLs that open when clicked.

The following example demonstrates context menu items with URLs for three websites:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/custom-cs3" %}

## Template Support for Context Menu

The Diagram component provides template support for context menu customization. Customize menu item templates before rendering using the [`contextMenuBeforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/diagram#contextmenubeforeitemrender) event, which triggers while rendering each menu item.

The following example renders menu items with shortcut key codes for specific actions. Key codes for cut, copy, and paste actions display in the right corner of menu items by adding a span element in the `contextMenuBeforeItemRender` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/menutemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/menutemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/menutemplate-cs1" %}

## Context Menu Events

The following events are available for context menu interactions:

|Event|Description|
|----|----|
|[`contextMenuBeforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/diagram#contextmenubeforeitemrender)|Triggers while initializing each menu item.|
|[`contextMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/diagram#contextmenuopen)|Triggers upon right-click before opening the context menu.|
|[`contextMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/diagram#contextmenuclick)|Triggers when a menu item is clicked.|

The following example demonstrates how to handle these events:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/events-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/events-cs1" %}

## See Also

* [How to open context menu on left click](https://support.syncfusion.com/kb/article/15097/how-to-perform-clipboard-operation-with-custom-context-menu-on-left-click-using-angular-diagram)