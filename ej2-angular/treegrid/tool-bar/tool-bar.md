---
layout: post
title: Tool bar in Angular TreeGrid component | Syncfusion
description: Learn about using and customizing the toolbar in the Syncfusion Angular TreeGrid component, including enabling/disabling items, adding toolbars at different positions, and toolbar templates.
platform: ej2-angular
control: Tool bar
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar in Angular TreeGrid component

The TreeGrid provides toolbar support to handle various actions. The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property accepts a collection of built-in toolbar items, [`ItemModel`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/) objects for custom items, or the HTML element ID for a toolbar template.

To use the toolbar, inject the `Toolbar` module in the TreeGrid.

## Enable or disable toolbar items

Use the `enableItems` method to enable or disable toolbar items.

Alternatively, you can use the [`enableToolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enabletoolbaritems) method to enable or disable toolbar items. Pass the toolbar item names and the `isEnable` (boolean) parameter to control item state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs39/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs39" %}

## Add toolbar at the bottom of the TreeGrid

You can add a toolbar to the bottom of the TreeGrid by configuring it within the [created](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#created) event.

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

* [Toolbar Component Getting Started](../../toolbar/getting-started)

> Refer to Syncfusion<sup style="font-size:70%">&reg;</sup> [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. Also, explore Syncfusion<sup style="font-size:70%">&reg;</sup> [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to know how to present and manipulate data.