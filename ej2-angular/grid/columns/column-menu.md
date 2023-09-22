---
layout: post
title: Column menu in Angular Grid component | Syncfusion
description: Learn here all about Column menu in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Angular Grid component

The column menu in the Syncfusion Angular Grid component provides options to enable features such as sorting, grouping, filtering, column chooser, and autofit. When users click on the column header's menu icon, a menu will be displayed with these integrated features. To enable the column menu, you need to set the [showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumnmenu) property to **true** in the Grid configuration.

To use the column menu, inject the **ColumnMenuService** in the provider section of **AppModule**.

The default column menu items are displayed in following table.

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **Group** | Group the current column. |
| **Ungroup** | Ungroup the current column. |
| **AutoFit** | Autofit the current column. |
| **AutoFitAll** | Autofit all columns. |
| **ColumnChooser** | Choose the column visibility. |
| **Filter** | Show the filter option as given in [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#type) |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs6" %}

> You can disable column menu for a particular column by defining the [columns.showColumnMenu](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#showcolumnmenu) as false.

> You can customize the default items by defining the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) with required items.

## Add custom column menu item

The custom column menu item feature allows you to add additional menu items to the column menu in the Syncfusion Grid. These custom menu items can be defined using the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) property, which accepts a collection of [columnMenuItemModel](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuItemModel/) objects. You can define the actions for these custom items in the [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuclick) event.

Consider the following example, which demonstrates how to add a custom column menu item to clear the sorting of the Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs8" %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [columnMenuOpenEventArgs.hide](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuOpenEventArgs) as true in the [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **OrderID** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs9" %}

## Render nested column menu

The nested column menu feature provides an extended menu option in the grid column headers, allows you to access additional actions and options related to the columns.

To enable the nested column menu feature, you need to define the [columnMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) property in your component. The `columnMenuItems` property is an array that contains the items for the column menu. Each item can be a string representing a built-in menu item or an object defining a custom menu item.

Here is an example of how to configure the `columnMenuItems` property to include a nested menu:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-menu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/column-menu-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/column-menu-cs1" %}

## Customize the icon of column menu

To customize the column menu icon, you need to override the default grid class **.e-icons.e-columnmenu** with a custom CSS property called **content**. By specifying a Unicode character or an icon font's CSS class, you can change the icon displayed in the column menu.

To customize the column menu icon, follow these steps:

1.Add the necessary CSS code to override the default grid class:

```css
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
    content: "\e99a";
}
```

2.Import the required icon stylesheets. You can use either the material or bootstrap5 style, depending on your preference. Add the following code to import the stylesheets:

```html
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
```

Here is an example that demonstrates how to customize the column menu icon in the Syncfusion Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-column-menu-icon-cs1" %}

## Column menu events

The column menu in Syncfusion Angular Grid provides a set of events that allow customization of behavior and performing actions when the column menu is opened or clicked. The below events are helpful for adding additional functionality or implementing specific actions based on user interactions with the column menu.

1.The [columnMenuOpen](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuopen) event triggers before the column menu opens.

2.The [columnMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuclick) event triggers when the user clicks the column menu of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs7" %}
