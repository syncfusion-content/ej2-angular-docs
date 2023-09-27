---
layout: post
title: Context menu in Angular Diagram component | Syncfusion
description: Learn here all about Context menu in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Angular Diagram component

<!-- markdownlint-disable MD010 -->

In graphical user interface (GUI), a context menu is a type of menu that appears when you perform right-click operation. Nested level of context menu items can be created.
Diagram provides some in-built context menu items and allows to define custom menu items through the [`contextMenuSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram#contextMenuSettings) property

## Customize context menu

The [`show`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettings#show-boolean) property helps you to enable/disable the context menu. Diagram provides some default context menu items to ease the execution of some frequently used commands.
The following code illustrates how to enable the default context menu items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/contextmenu-cs1" %}

Context menu can be defined for individual node with the desired context menu items.

* Apart from the default context menu items, define some additional context menu items. Those additional items have to be defined and added to the [`items`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettingsModel#items) property of the context menu.

* Set text and ID for context menu item using the context menu [`text`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#text-string) and [`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#id-string) properties respectively.

* Set an image for the context menu item using the context menu [url](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#url) property.

* The [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#iconCss-string) property defines the class/multiple classes separated by a space for the menu item that is used to include an icon. Menu item can include font icon and sprite image.

* The [`target`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#target-string) property used to set the target to show the menu item.

* The [`separator`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuItemModel#separator-boolean) property defines the horizontal lines that are used to separate the menu items. You cannot select the separators. You can enable separators to group the menu items using the separator property.

The following code example illustrates how to add custom context menu items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/custom-cs1" %}

To display the custom context menu items alone, set  the [`showCustomMenuOnly`](https://ej2.syncfusion.com/angular/documentation/api/diagram/contextMenuSettingsModel#showCustomMenuOnly) property to true.

## Template Support for Context menu

* Diagram provides template support for context menu. The context menu items can be customized by using the `contextMenuBeforeItemRender` event. The contextMenuBeforeItemRender event triggers while rendering each menu item.

* In the following sample, the menu item is rendered with key code for specified action in ContextMenu using the template. Here, the key code is specified for the cut and copy at right corner of the menu items by adding a span element in the `contextMenuBeforeItemRender` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/menutemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/contextmenu/menutemplate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/menutemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/menutemplate-cs1" %}

## Context menu events

You would be notified with events, when you try to open the context menu items [`contextMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramBeforeMenuOpenEventArgs#DiagramBeforeMenuOpenEventArgs) and when you click the menu items `contextMenuClick`.
The following code example illustrates how to define those events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/contextmenu/events-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/contextmenu/events-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/contextmenu/events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/contextmenu/events-cs1" %}