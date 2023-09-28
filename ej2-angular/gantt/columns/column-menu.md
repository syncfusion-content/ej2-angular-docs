---
layout: post
title: Column menu in Angular Gantt component | Syncfusion
description: Learn here all about Column menu in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Angular Gantt component

The column menu has options to integrate features like sorting, filtering, and autofit. It will show a menu with the integrated feature when users click the Multiple icon of the column. To enable the column menu, you should set the [`showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#showcolumnmenu) property to `true`.

The default items are displayed in the following table:

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `AutoFit` | Auto fit the current column. |
| `AutoFitAll` | Auto fit all columns. |
| `Filter` | Show the filter option as given in `filterSettings.type` |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-cs1" %}

> You can disable the column menu for a particular column by setting the [`columns.showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#showcolumnmenu) to false.

## Column menu events

During the resizing action, the gantt component triggers the below two events.

1. The [`columnMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuopen) event triggers before the column menu opens.
2. The [`columnMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuclick) event triggers when the user clicks the column menu of the gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-events-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnmenu-events-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-events-cs1" %}

## Custom Column Menu Item

Custom column menu items can be added by defining the [`columnMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuitems).
Actions for this customized items can be defined in the [`columnMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuclick) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cust-item-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cust-item-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cust-item-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-cust-item-cs1" %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [`columnMenuOpenEventArgs.hide`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuOpenEventArgs) as true in the [`columnMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **Task Name** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cust-action-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cust-action-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cust-action-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-cust-action-cs1" %}