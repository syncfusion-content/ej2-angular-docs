---
layout: post
title: Sidebar with TreeView in Angular Sidebar component | Syncfusion
description: Learn here all about Sidebar with TreeView in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar 
documentation: ug
domainurl: ##DomainURL##
---

# TreeView integration in Angular Sidebar component

The Sidebar component can host other Syncfusion components like TreeView to create hierarchical navigation menus or collapsible content structures. Integrating TreeView with the Sidebar’s dock state, enabled via the [`enableDock`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#enabledock) property (default: `false`), allows a compact view (e.g., showing only icons) when collapsed and full content (e.g., text and icons) when expanded.
The following sample demonstrates a Sidebar in dock state with an integrated TreeView, showing only icons when collapsed and full text content when expanded.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/treeview-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/treeview-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/treeview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/treeview-cs1" %}
