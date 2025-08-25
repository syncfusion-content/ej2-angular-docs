---
layout: post
title: Column menu in Angular TreeGrid component | Syncfusion
description: Learn here all about Column menu in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Angular TreeGrid component

The column menu in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component provides options to enable features such as sorting, filtering, column chooser, and autofit. When the column header's menu icon is clicked, a menu displays with these integrated features. To enable the column menu, set the [showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showcolumnmenu) property to **true** in the TreeGrid configuration.

To use the column menu, inject the **ColumnMenuService** in the provider section of **AppModule**.

The default column menu items are displayed in the following table:

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `AutoFit` | Auto fit the current column. |
| `AutoFitAll` | Auto fit all columns. |
| `ColumnChooser` | Choose the column visibility. |
| `Filter` | Show the filter option as given in `filterSettings.type` |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-menu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-menu-cs1" %}

> Column menu can be disabled for a particular column by defining the [column.showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#showcolumnmenu) as false.

> The default items can be customized by defining the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuitems) with required items.

## Add custom column menu item

The custom column menu item feature allows adding additional menu items to the column menu in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid. These custom menu items can be defined using the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuitems) property, which accepts a collection of [columnMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuItemModel/) objects. Actions for these custom items can be defined in the [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuclick) event.

The following example demonstrates how to add a custom column menu item to clear the sorting of the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-menu-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-menu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-menu-cs2" %}

## Customize menu items for particular columns

In some scenarios, specific items need to be hidden from the column menu for particular columns. This can be achieved by defining the [columnMenuOpenEventArgs.hide](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnMenuOpenEventArgs) as true in the [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuopen) event.

In the following example, the **Filter** item is hidden in the column menu when opened for the **taskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-menu-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-menu-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-menu-cs3" %}

> * Column menu can be disabled for a particular column by defining the [column.showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#showcolumnmenu) as false.

## Customize the icon of column menu

To customize the column menu icon, override the default TreeGrid class **.e-icons.e-columnmenu** with a custom CSS property called **content**. By specifying a Unicode character or an icon font's CSS class, the icon displayed in the column menu can be changed.

To customize the column menu icon, follow these steps:

1. Add the necessary CSS code to override the default TreeGrid class:

```css
.e-treegrid .e-columnheader .e-icons.e-columnmenu::before {
    content: "\e99a";
}
```

2. Import the required icon stylesheets. Either the material or bootstrap5 style can be used, depending on preference. Add the following code to import the stylesheets:

```html
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
```

The following example demonstrates how to customize the column menu icon in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-menu-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-menu-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-menu-cs5" %}

## Render nested column menu

The nested column menu feature provides an extended menu option in the TreeGrid column headers, allowing access to additional actions and options related to the columns.

To enable the nested column menu feature, define the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuitems) property in the component. The `columnMenuItems` property is an array that contains the items for the column menu. Each item can be a string representing a built-in menu item or an object defining a custom menu item.

The following example demonstrates how to configure the `columnMenuItems` property to include a nested menu:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-menu-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-menu-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-menu-cs4" %}

## Column menu events

The column menu in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid provides a set of events that allow customization of behavior and performing actions when the column menu is opened or clicked. These events are helpful for adding additional functionality or implementing specific actions based on interactions with the column menu.

1. The [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuopen) event triggers before the column menu opens.
2. The [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columnmenuclick) event triggers when the column menu of the TreeGrid is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-menu-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-menu-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-menu-cs6" %}