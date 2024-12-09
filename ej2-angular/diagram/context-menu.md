---
layout: post
title: Context menu in Angular Diagram component | Syncfusion®
description: Learn here all about Context menu in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Angular Diagram component

<!-- markdownlint-disable MD010 -->

In a graphical user interface (GUI), a context menu is a type of menu that appears when you perform a right-click operation. It offers users a set of actions relevant to the current context. In diagrams, context menus can be customized extensively. The Diagram control provides built-in context menu items while also allowing users to define custom menu items through the[`contextMenuSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#contextmenusettings) property. This flexibility enables tailoring menus to specific application needs, including creating nested levels of menu items for more intricate user interactions.


## Default context menu

Diagram provides some default context menu items to ease the execution of some frequently used commands. The [`show`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettings#show) property helps you to enable/disable the context menu.

The following code illustrates how to enable the default context menu items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/contextmenu-cs1" %}

## Customize context menu

Context menus can be customized for individual nodes by defining specific menu items beyond the default options. To add additional context menu items, you need to define and incorporate them into the [`items`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettingsModel#items) property of the context menu.

Each custom item can be defined with specific text and ID using the [`text`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#text) and [`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#id)  properties, respectively. Additionally, you can enhance visual cues by associating icons through the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#iconCss) for enabling the use of font icons. The [`target`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#target) property specifies where each menu item should appear, and separators can be included using the [`separator`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#separator) property to visually group menu items. This flexibility allows for a tailored user interface that meets specific application needs efficiently. Nested menu items are defined within the [`items`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel/#items) property of a parent menu item.

### To Display custom menu alone

To display the custom context menu items alone, set the [`showCustomMenuOnly`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettingsModel#showCustomMenuOnly)property to true.

### Context menu click

Upon clicking custom menu items, actions are handled using the [`contextMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#contextmenuclick) event in the diagram. This event allows you to define actions based on which menu item is clicked. For instance, in the example below, the cloning of nodes and the change of fill color for nodes and annotations are efficiently managed and implemented through this event.

The following code illustrates context menu click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/custom-cs1" %}

### Context menu open

In certain situations, you may want to hide specific menu items based on the selected elements in the diagram. This can be achieved using the [`contextMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramBeforeMenuOpenEventArgs#DiagramBeforeMenuOpenEventArgs) event. When the context menu is opened via right-click, the `contextMenuOpen` event is triggered. Within this event, you can create an array of menu items to hide for the selected element and pass it to the [`hiddenItems`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramBeforeMenuOpenEventArgs/#hiddenitems) property of the contextMenuOpen event argument. 

The following example demonstrates how to display different custom menu items for nodes, connectors, and the diagram based on the selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/custom-cs2" %}

### Context menu with Url

[`url`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel/#url) property of the menu item is used to set the url of any website which will be opened upon clicking on them. 

The following example shows the context menu with url for three websites.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/custom-cs3" %}

## Template Support for Context menu

Diagram provides template support for the context menu. The template for the context menu items can be customized before rendering by using the [`contextMenuBeforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#contextmenubeforeitemrender) event, which triggers while rendering each menu item.

In the following example, menu items are rendered with shortcut key codes for specific actions in the context menu using a template. The key codes for cut, copy, and paste actions are displayed at the right corner of the menu items by adding a span element in the `contextMenuBeforeItemRender` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/menutemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/menutemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/menutemplate-cs1" %}

## Context menu events

|Event|Description|
|----|----|
|[`contextMenuBeforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#contextmenubeforeitemrender)|Triggers while initializing each menu item.|
|[`contextMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramBeforeMenuOpenEventArgs#DiagramBeforeMenuOpenEventArgs)|Triggers upon right-click before opening the context menu.|
|[`contextMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#contextmenuclick)|Triggers when a menu item is clicked.|

The following example shows how to get these events.

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
