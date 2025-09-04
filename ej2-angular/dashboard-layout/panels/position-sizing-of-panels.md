---
layout: post
title: Position and size in Angular Dashboard layout component | Syncfusion
description: Learn here all about Position sizing of panels in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# Panel positioning and sizing in Angular Dashboard layout component

Panels serve as the fundamental building blocks of the Dashboard Layout component, functioning as containers for data visualization and content presentation. The component provides comprehensive control over panel positioning and sizing through a flexible grid-based system that enables precise layout management and responsive design implementation.

The following table details all available panel properties and their specific functions in layout management:

| **Property** | **Type** | **Description** |
| --- | --- | --- |
| `id` | string | Unique identifier for the panel, essential for state management and event handling |
| `row` | number | Grid row position where the panel begins (0-based indexing) |
| `col` | number | Grid column position where the panel begins (0-based indexing) |
| `sizeX` | number | Panel width measured in grid cells |
| `sizeY` | number | Panel height measured in grid cells |
| `minSizeX` | number | Minimum allowed width in cells, prevents excessive resizing |
| `minSizeY` | number | Minimum allowed height in cells, maintains content visibility |
| `maxSizeX` | number | Maximum allowed width in cells, controls layout boundaries |
| `maxSizeY` | number | Maximum allowed height in cells, prevents layout overflow |
| `header` | string | Header template content for panel identification |
| `content` | string | Main content template containing panel data |
| `cssClass` | string | Custom CSS classes for styling and theming |

## Positioning of panels

The panels within the layout can be easily positioned or ordered using the [`row`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#row) and [`col`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#col) properties of the panels. Positioning panels is beneficial for representing data in any desired order.

The following sample demonstrates the positioning of panels within the dashboard layout using the row and column properties of the panels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/positioning-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/positioning-of-panels-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/positioning-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/positioning-of-panels-cs1" %}

## Sizing of panels

A panel's size can be varied easily by defining the [`sizeX`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#sizex) and [`sizeY`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#sizey) properties. The `sizeX` property defines the width and the `sizeY` property defines height of a panel in cells count. These properties are helpful in designing a dashboard, where the content of each panel may vary in size.

The following sample demonstrates the sizing of panels within the dashboard layout using the sizeX and sizeY properties of the panels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/sizing-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/sizing-of-panels-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/sizing-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/sizing-of-panels-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.
