---
layout: post
title: Overview in Angular Diagram component | Syncfusion
description: Learn here all about Overview in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Overview 
documentation: ug
domainurl: ##DomainURL##
---

# Overview in Angular Diagram component

Overview control allows you to see a preview or an overall view of the entire content of a Diagram. This helps you to look at the overall picture of a large Diagram and also to navigate, pan, or zoom, on a particular position of the page.

When you work on a very large Diagram, you may not know the part you are actually working on, or navigation from one part to another might be difficult. One solution for navigation is to zoom out the entire Diagram and find where you are. Then, you can zoom in a particular area you want to. This solution is not suitable when you need some frequent navigation.

Overview control solves these problems by showing you a preview, that is, an overall view of the entire Diagram. A rectangle indicates viewport of the Diagram. Navigation becomes easy by dragging this rectangle.

## Create overview

The `sourceID` property of overview should be set with the corresponding Diagram ID for you need the overall view.

The `width` and `height` property of the overview allows you to define the size of the overview.

The following code illustrates how to create overview.

### Zoom and Pan

In overview, the view port of the Diagram is highlighted with a red colored rectangle. Diagram can be zoomed/panned by interacting with that. You can interact with overview as follows.

* Resize the rectangle - Zooms in/out the Diagram
* Drag the rectangle - Pans the Diagram
* Click at a position - Navigates to the clicked region
* Choose a particular region by clicking and dragging - Navigates to the specified region

The following image shows how the Diagram is zoomed/panned with overview.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/overview/overview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/overview/overview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/overview/overview-cs1" %}
