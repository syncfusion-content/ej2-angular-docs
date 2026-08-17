---
layout: post
title: Overview in Angular Diagram | Syncfusion®
description: Add the Angular Diagram Overview (mini-map) panel for one-click navigation, panning, and zoom-to-area in large canvases through a small reference control.
platform: ej2-angular
control: Overview 
documentation: ug
domainurl: ##DomainURL##
---

# Overview in Angular Diagram

The Overview component provides a miniature preview of the entire diagram content, enabling efficient navigation and viewport management for large diagrams. This component displays a scaled-down version of the diagram with a highlighted rectangle representing the current viewport, allowing users to quickly navigate to specific areas without manual zooming and panning.

## When to Use Overview

The Overview component is essential when working with:

* Large diagrams that exceed the visible viewport
* Complex flowcharts or organizational charts requiring frequent navigation
* Multi-section diagrams where users need to jump between different areas
* Applications where users need spatial awareness of their current position within the diagram


## Create Overview Component

To implement an overview, configure the [`sourceID`](https://ej2.syncfusion.com/angular/documentation/api/overview/overviewModel#sourceID) property to reference the target diagram's identifier. This establishes the connection between the overview and the main diagram. The [`OverviewComponent`](https://ej2.syncfusion.com/angular/documentation/api/overview) class hosts these properties.

Define the overview dimensions using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/overview/overviewModel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/overview/overviewModel#height) properties to ensure optimal visibility and performance.

See the [Overview API](https://ej2.syncfusion.com/angular/documentation/api/overview/overviewModel) for the complete list of properties.

See [Getting Started](https://ej2.syncfusion.com/angular/documentation/diagram/getting-started) for project setup and module bootstrap.

The following code demonstrates basic overview implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/overview/overview-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/overview/overview-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/overview/overview-cs2" %}

## Overview Interactions

The overview displays the current viewport as a red rectangle overlay. This rectangle serves as an interactive control for diagram navigation and zoom operations. The viewport rectangle color is fixed and cannot be customized.

### Available Interactions

* **Resize the rectangle**: Adjusts diagram zoom level proportionally
* **Drag the rectangle**: Pans the diagram to follow rectangle movement
* **Click a position**: Instantly navigates to the clicked location
* **Click and drag to select**: Defines a specific region for navigation and zoom

### Interactive Navigation Example

The following demonstration shows overview interaction capabilities:

![Overview interaction demonstration](images/overview-interaction.gif)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/overview/overview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/overview/overview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/overview/overview-cs1" %}
