---
layout: post
title: Setting cell size in Angular Dashboard Layout component | Syncfusion
description: Learn how to configure cell dimensions, spacing, and aspect ratios in Syncfusion Angular Dashboard Layout component to create responsive grid layouts.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# Setting cell size in Angular Dashboard Layout component

The entire layout dimensions are based on the height and width of the parent element. A responsive or static layout can be created by assigning percentage or static dimension values to the parent element. The layout automatically adapts to mobile resolutions by transforming into a stacked orientation so that the panels display in a vertical column.

The **Dashboard Layout** component uses a grid structure that divides into subsections of equal size called cells. The total number of cells in each row is defined using the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#columns) property of the component. The component auto-calculates the width of each cell based on the total number of cells in a row and the height of a cell will be same as that of its width. However, the height of these cells can also be configured to any desired size using the [`cellAspectRatio`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#cellaspectratio) property (cellwidth/cellheight ratio) which defines the cell width to height ratio.

The layout supports an unlimited number of rows based on the panel count and position. Panels act as data containers and are placed over these cells.

## Modifying cell dimensions

Dashboard panels may need to hold data of different sizes, requiring different cell dimensions in various scenarios. The size of grid cells can be modified using the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#columns) and [`cellAspectRatio`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#cellaspectratio) properties.

The following sample demonstrates how to modify cell size using the `columns` and `cellAspectRatio` properties. In this sample, the parent element width is divided into 5 equal cells based on the columns property value, resulting in each cell having a width of 100px. The cell height is 50px based on the cellAspectRatio value 100/50 (i.e., for every 100px of width, 50px will be the height of the cell).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/modifying-cell-size-cs1" %}

## Configuring cell spacing

The spacing between each panel in a row and column can be defined using the [`cellSpacing`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#cellspacing) property. Adding spacing between panels makes the layout more effective and provides clear data representation.


The following sample demonstrates the usage of the [`cellSpacing`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#cellspacing) property, which helps provide neat and clear data representation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/setting-cell-spacing-cs1" %}

## Graphical representation of layout

The cells collectively form a grid-structured layout that is initially hidden. This grid-structured layout can be made visible by enabling the [`showGridLines`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#showgridlines) property, which clearly displays the cell divisions within the layout. These gridlines are helpful for panel sizing and placement within the layout during the initial design of a dashboard.
In the following sample, the gridlines indicate the cells split-up of the layout and the data containers placed over these cells are known as panels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/graphical-representation-of-layout-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/graphical-representation-of-layout-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/graphical-representation-of-layout-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/graphical-representation-of-layout-cs1" %}

## Rendering component in right-to-left direction

The Dashboard Layout component can be rendered in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#enablertl) API to true.

The following sample demonstrates Dashboard Layout in right-to-left direction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/rtl-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/rtl-cs1" %}

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.
