---
layout: post
title: How to initialize the Sidebar with ListView in Angular Sidebar | Syncfusion
description: Embed a Syncfusion ListView inside the Angular Sidebar to build navigable menus, content selectors, or collapsible lists.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# How to initialize the Sidebar with ListView in Angular Sidebar

The Sidebar component allows integration of any HTML elements or Syncfusion components within its content area, enabling dynamic and interactive layouts. This is particularly useful for incorporating components like ListView, TreeView in the Sidebar for navigation menus or collapsible lists.

## Integrating ListView with Sidebar

The ListView component can be embedded in the Sidebar to create a navigable list, such as a menu or content selector. To integrate:

1. Import the `ListViewModule` from `@syncfusion/ej2-angular-lists` and `SidebarModule` from `@syncfusion/ej2-angular-navigations` in your module or component.

2. Place the `<ejs-listview>` tag inside the `<ejs-sidebar>` content area.
The following sample demonstrates a Sidebar with an integrated ListView.
{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/sidebar/listview-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/listview-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/listview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/listview-cs1" %}