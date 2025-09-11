---
layout: post
title: Use case scenarios in Angular Menu component | Syncfusion
description: Learn here all about Use case scenarios in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Use case scenarios in Angular Menu component

This section demonstrates practical use cases for the Angular Menu component, including scrollable menus, toolbar integration, hamburger menus, and mobile views.

## Scrollable menu

The menu component supports horizontal and vertical scrolling to render large menus and submenus in an adaptive way. This can be achieved by enabling the [`enableScrolling`](https://ej2.syncfusion.com/angular/documentation/api/menu/#enablescrolling) property and by restricting the corresponding menu/submenu size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/scroll-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/scroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/scroll-cs1" %}

## Menu in toolbar

Building on the Menu component’s integration capabilities, the following example demonstrates how to integrate the Menu with the Toolbar component. Note that the `ToolbarModule` must be imported from `@syncfusion/ej2-angular-navigations` to use the Toolbar alongside the Menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/toolbar-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/toolbar-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/toolbar-menu-cs1" %}

## Hamburger menu

The following example demonstrates a hamburger menu integrating the Menu component with the Accordion component within a SideBar, where the Accordion organizes menu items vertically and the SideBar provides a collapsible navigation panel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/sidebar-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/sidebar-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/sidebar-menu-cs1" %}

## Mobile view

The following example demonstrates the use case of the Menu in mobile mode using the ListView component with a hamburger icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/listview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/listview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/listview-cs1" %}