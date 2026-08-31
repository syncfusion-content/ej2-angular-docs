---
layout: post
title: Change menu items dynamically in Angular Context Menu | Syncfusion
description: Show different Angular Context Menu items per target area using beforeOpen with the hideItems and showItems methods for context-aware menus.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Change menu items dynamically in Angular Context Menu

The ContextMenu component supports dynamic menu item changes based on the target element where the context menu is triggered. This functionality enables context-aware menus that display different options depending on the specific area or element the user interacts with, enhancing user experience through relevant, targeted actions.

To implement dynamic menu items, initialize the ContextMenu with a comprehensive set of all possible items using the [`items`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#items) property. Then, use the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeopen) event to selectively show or hide specific items based on the target context. This approach leverages the [`hideItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#hideitems) and [`showItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#showitems) methods to control menu item visibility dynamically.

The [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeopen) event provides access to the target element through its event arguments, allowing you to determine the appropriate menu items to display based on element properties, classes, or other identifying attributes.

In the following example, the menu items change contextually based on the target area: the Clipboard div displays `Cut`, `Copy`, and `Paste` options, while the Editor div shows `Add`, `Edit`, and `Delete` actions. This dynamic behavior is implemented using the [`hideItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#hideitems) and [`showItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#showitems) methods within the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeopen) event handler.

The `beforeOpen` event provides the following arguments through `BeforeOpenCloseMenuEventArgs`:
- `element`: The popup element of the ContextMenu.
- `items`: The list of `MenuItemModel` items being rendered.
- `target`: The element on which the ContextMenu is being opened.
- `cancel`: Set to `true` to cancel the open.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/dynamic-cs1" %}