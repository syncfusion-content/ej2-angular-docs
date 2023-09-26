---
layout: post
title: Column menu in Angular Treegrid component | Syncfusion
description: Learn here all about Column menu in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Angular Treegrid component

The column menu has options to integrate features like sorting, filtering, and autofit. It will show a menu with the integrated feature when users click on multiple icon of the column. To enable column menu, you need to define the [`showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showcolumnmenu) property as true.

To use the column menu, inject the `ColumnMenu` module in the treegrid.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `AutoFit` | Auto fit the current column. |
| `AutoFitAll` | Auto fit all columns. |
| `Filter` | Show the filter option as given in `filterSettings.type` |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs2" %}

## Column menu events

During the column menu open and column menu click, the tree grid component triggers the two events as follows:

1. The [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuopen) event triggers before the column menu opens.
2. The [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuclick) event triggers when the user clicks the column menu of the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs3" %}

## Custom column menu item

The Custom column menu items can be added by defining the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuitems) as a collection of the `columnMenuItemModel`.

Actions for these customized items can be defined in the [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuclick) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs4" %}

## Customize menu items for particular columns

Sometimes, you have a scenario that hides an item from the column menu for particular columns. In that case, define the [columnMenuOpenEventArgs.hide](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnMenuOpenEventArgs) as true in the [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuopen) event.

In the following sample, the **Filter** item was hidden in the column menu when opened for the **taskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs5" %}

> * You can disable column menu for a particular column by defining the [columns.showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#showcolumnmenu) as false.