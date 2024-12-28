---
layout: post
title: Resizing of panels in Angular Dashboard layout component | Syncfusion
description: Learn here all about Resizing of panels in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Resizing of panels 
documentation: ug
domainurl: ##DomainURL##
---

# Resizing of panels in Angular Dashboard layout component

The DashboardLayout component also provides resizing functionality, which can be enabled using the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#allowresizing) property. This functionality allows you to resize the panels dynamically using the resizing handlers which controls the resizing of panels in various directions.

Initially, the panels can be resized only in south-east direction. However, panels can also be resized in east, west, north, south, and south-west directions by defining the required directions with the [`resizableHandles`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#resizablehandles) property.

When resizing a panel in the Dashboard Layout, the following events are triggered:
* [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#resizestart) - Triggers when panel resize starts
* [resize](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#resize) - Triggers when panel is being resized
* [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#resizestop) - Triggers when panel resize stops

The following sample demonstrates how to enable and disable the resizing of panels in the DashboardLayout component in different directions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/resizing-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/resizing-of-panels-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/resizing-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/resizing-of-panels-cs1" %}

## Resizing panels programmatically

The Dashboard Layout panels can also be resized programmatically by using the [resizePanel](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#resizepanel) method. The method is invoked as follows,

```js
resizePanel(id, sizeX, sizeY)

```

Where,
* id - ID of the panel which needs to be resized.
* sizeX - New panel width in cells count for resizing the panel.
* sizeY - New panel height in cells count for resizing the panel.

The following sample demonstrates how to resize panels programmatically in the Dashboard Layout's [created](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#created) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/resize-panel-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/dashboard-layout/default) to knows how to present and manipulate data.
