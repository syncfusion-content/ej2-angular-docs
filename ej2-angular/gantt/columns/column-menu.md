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

The column menu in the Syncfusion Angular Gantt chart component provides options to enable features such as sorting, filtering, column chooser, and autofit. When click on the column header's menu icon, a menu will be displayed with these integrated features. To enable the column menu, you need to set the [showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/gantt/#showcolumnmenu) property to **true** in the Gantt configuration.

To use the column menu, inject the **ColumnMenuService** in the provider section of **AppModule**.

The default column menu items are displayed in following table.

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `AutoFit` | Autofit the current column. |
| `AutoFitAll` | Autofit all columns. |
| `ColumnChooser` | Choose the column visibility. |
| `Filter` | Show the filter options as given in [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/gantt/filterSettings/#type) |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-cs1" %}

> You can disable column menu for a particular column by defining the [columns.showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#showcolumnmenu) as false.

> You can customize the default items by defining the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuitems) with required items.

## Add custom column menu item

The custom column menu item feature allows you to add additional menu items to the column menu in the Syncfusion Gantt chart. These custom menu items can be defined using the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuitems) property, which accepts a collection of [columnMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuItemModel/) objects. You can define the actions for these custom items in the [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuclick) event.

Consider the following example, which demonstrates how to add a custom column menu item to clear the sorting of the gantt:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/column/columnmenu-cs2" %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the `columnMenuOpenEventArgs.hide` property as true in the [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **TaskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-cs3" %}

> * You can disable column menu for a particular column by defining the [column.showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#showcolumnmenu) as false.

## Render nested column menu

The nested column menu feature provides an extended menu option in the gantt chart column headers, allows you to access additional actions and options related to the columns.

To enable the nested column menu feature, you need to define the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuitems) property in your component. The `columnMenuItems` property is an array that contains the items for the column menu. Each item can be a string representing a built-in menu item or an object defining a custom menu item.

Here is an example of how to configure the `columnMenuItems` property to include a nested menu:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-cs6" %}

## Customize the icon of column menu

To customize the column menu icon, you need to override the default gantt class **.e-icons.e-columnmenu** with a custom CSS property called **content**. By specifying a Unicode character or an icon font's CSS class, you can change the icon displayed in the column menu.

To customize the column menu icon, follow these steps:

1.Add the necessary CSS code to override the default gantt class:

```css
.e-gantt .e-columnheader .e-icons.e-columnmenu::before {
  content: "\e99a";
}
```

2.Import the required icon stylesheets. You can use either the material or bootstrap5 style, depending on your preference. Add the following code to import the stylesheets:

```html
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
```

Here is an example that demonstrates how to customize the column menu icon in the Syncfusion Gantt chart:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-cs5" %}

## Column menu events

The column menu in Syncfusion Angular Gantt chart provides a set of events that allow customization of behavior and performing actions when the column menu is opened or clicked. The below events are helpful for adding additional functionality or implementing specific actions based on user interactions with the column menu.

1.The [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuopen) event triggers before the column menu opens.

2.The [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columnmenuclick) event triggers when the user clicks the column menu of the gantt chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnmenu-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnmenu-cs4" %}