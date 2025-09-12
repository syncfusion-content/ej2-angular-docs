---
layout: post
title: Add custom item to context menu in Angular File Manager | Syncfusion
description: Learn how to add, configure, and handle custom context menu items in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to context menu in Angular File Manager component

The File Manager component allows you to customize the default context menu by adding new menu items, controlling visibility, and handling click events. This customization is especially useful when you need to implement application-specific actions in the File Manager interface.

## Overview of context menu customization

You can customize the context menu using three key API elements:

* [contextMenuSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#contextmenusettings) - Configure custom menu items and their visibility
* [menuOpen](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#menuopen) - Triggered before the context menu opens, allowing dynamic customization
* [menuClick](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#menuclick) - Triggered when any context menu item is clicked, enabling custom action handling

## Adding a custom context menu item

The following example demonstrates how to add a custom item to the context menu and handle its click event:

The [contextMenuSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#contextmenusettings) is used to add a new menu item. The [menuOpen](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#menuopen) event is used to add the icon to the new menu item. The [menuClick](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#menuclick) event is used to add an event handler to the new menu item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/contextmenu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/contextmenu-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/contextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/contextmenu-cs1" %}
