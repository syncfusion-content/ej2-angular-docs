---
layout: post
title: Tool bar in Angular Treegrid component | Syncfusion
description: Learn here all about Tool bar in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar in Angular Treegrid component

The TreeGrid provides ToolBar support to handle treegrid actions. The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property accepts either the collection of built-in toolbar items and [`ItemModel`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/) objects for custom toolbar items or HTML element ID for toolbar template.

To use ToolBar, inject `Toolbar` module in the treegrid.

## Enable or disable toolbar items

Enable or disable toolbar items by using the `enableItems` method.

You can also use the [`enableToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enabletoolbaritems) method to enable or disable the tool bar items. In this method, you need to pass the toolbar items and isEnable as parameters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs39/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs39" %}

## Add toolbar at the bottom of tree grid

Add the toolbar component at the bottom of the tree grid using the [created](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#created) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs40/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs40" %}

## See also

* [To know more about Toolbar Component](../../toolbar/getting-started)

> Refer to Syncfusion<sup style="font-size:70%">&reg;</sup> [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. Also, explore Syncfusion<sup style="font-size:70%">&reg;</sup> [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to know how to present and manipulate data.