---
layout: post
title: Dynamically Change Items in Angular Context Menu | Syncfusion
description: Learn here all about Change menu items dynamically in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Change menu items dynamically in Angular Context menu component

The ContextMenu component supports dynamic menu item changes based on the target element where the context menu is triggered. This functionality enables context-aware menus that display different options depending on the specific area or element the user interacts with, enhancing user experience through relevant, targeted actions.

To implement dynamic menu items, initialize the ContextMenu with a comprehensive set of all possible items using the [`items`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#items) property. Then, use the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#beforeopen) event to selectively show or hide specific items based on the target context. This approach leverages the [`hideItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#hideitems) and [`showItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#showitems) methods to control menu item visibility dynamically.

The [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#beforeopen) event provides access to the target element through its event arguments, allowing you to determine the appropriate menu items to display based on element properties, classes, or other identifying attributes.

In the following example, the menu items change contextually based on the target area: the Clipboard div displays `Cut`, `Copy`, and `Paste` options, while the Editor div shows `Add`, `Edit`, and `Delete` actions. This dynamic behavior is implemented using the [`hideItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#hideitems) and [`showItems`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#showitems) methods within the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#beforeopen) event handler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/dynamic-cs1" %}