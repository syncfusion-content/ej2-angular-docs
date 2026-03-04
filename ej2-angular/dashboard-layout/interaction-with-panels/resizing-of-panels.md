---
layout: post
title: Resizing of panels in Angular Dashboard layout component | Syncfusion
description: Learn here all about Resizing of panels in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL## 
---

# Resizing of panels in Angular Dashboard layout component

The Dashboard Layout component enables dynamic panel resizing functionality through the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#allowresizing) property. This functionality allows users to dynamically resize panels using resizing handles that control panel dimensions in various directions.

By default, panels can be resized only in the south-east direction. However, panels can also be resized in east, west, north, south, and south-west directions by specifying the required directions with the [`resizableHandles`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#resizablehandles) property.

## Resize events

The Dashboard Layout triggers the following events during panel resize operations:


| API Reference | Description | Use Case |
|---------------|-------------|----------|
|[resizeStart](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#resizestart) | Triggers when panel resize begins | Useful for capturing initial panel dimensions |
|[resize](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#resize) | Triggers continuously during panel resizing | Ideal for real-time updates or validation |
|[resizeStop](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#resizestop) | Triggers when panel resize completes | Perfect for saving final panel state |


The following sample demonstrates how to enable and disable panel resizing in the Dashboard Layout component with different directional handles:
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

## Programmatic panel resizing

Dashboard Layout panels can be resized programmatically using the [resizePanel](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#resizepanel) method. The method is invoked as follows,
### Method signature

```js
resizePanel(id, sizeX, sizeY)

```

### Parameters
* id - ID of the panel which needs to be resized.
* sizeX - New panel width in cells count for resizing the panel.
* sizeY - New panel height in cells count for resizing the panel.

The following sample demonstrates how to resize panels programmatically during the Dashboard Layout's [created](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#created) event:

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

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/dashboard-layout/default) to learn how to present and manipulate data.