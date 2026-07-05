---
layout: post
title: Lane in Angular Diagram component | Syncfusion®
description: Learn here all about Swim lane in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Lane
documentation: ug
domainurl: ##DomainURL##
---

# Lane Management in Angular Diagram Component

## Overview

A lane is a functional unit or responsible department of a business process that helps to map a process within the functional unit or between other functional units. In swimlane diagrams, lanes represent different actors, departments, or systems that participate in the process workflow.

The number of [`lanes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel) can be added to a swimlane. The lanes are automatically stacked inside the swimlane based on the order they are added.

### Prerequisites

Before working with lanes, ensure that a swimlane container exists in the diagram. Lanes cannot exist independently and must be contained within a swimlane.

### Create an empty lane

The lane `id` is used to define the name of the lane and is further used to find the lane at runtime for any customization.

The following code example illustrates how to define a swimlane with a lane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/emptylane-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/emptylane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/emptylane-cs1" %}

### Create lane header

The [`header`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#header) property of a lane allows you to textually describe the lane and customize the appearance of the description.

The following code example illustrates how to define a lane header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/laneheader-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/laneheader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/laneheader-cs1" %}

### Customizing lane and lane header

The size of a lane can be controlled by using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#height) properties of the lane.

The appearance of a lane can be customized by using the [`style`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#style) properties.

The appearance of the header annotation can be customized by using the `style` property of the header annotation.

The following code example illustrates how to customize the lane header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/laneheadercustomize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/laneheadercustomize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/laneheadercustomize-cs1" %}

#### Dynamic customization of lane header

Lane header style and text properties can be customized dynamically. The following code illustrates how to dynamically customize the lane header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/dynamiclaneheader-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/dynamiclaneheader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/dynamiclaneheader-cs1" %}

### Add and remove lanes at runtime

Lanes can be added at runtime by using the [`addLanes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#addlanes) method and removed at runtime using the [`removeLane`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#removelane) method. The following code illustrates how to dynamically add and remove lanes in a swimlane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/addlanes-cs1" %}

### Add children to lane

To add nodes to a lane, you should add them to the [`children`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#children) collection of the lane.

The following code example illustrates how to add nodes to a lane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/lanechildern-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/lanechildern-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/lanechildern-cs1" %}

#### Add child dynamically into the lane

Child nodes can be inserted into a lane at runtime by using the [`addNodeToLane`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#addnodetolane) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/lanechildren-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/lanechildren-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/lanechildren-cs2" %}


Nodes can also be dragged from the palette or diagram and dropped inside the lane.

![Add child into lane](../images/addChildToSwimlane.gif)

### Prevent child movement outside lane

To prevent child nodes from moving outside their designated lanes, specific constraints can be used. By default, nodes are allowed to move freely. To restrict their movement, the constraints need to be set accordingly.

Here is an example of how to apply these constraints:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/lanechildren-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/lanechildren-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/lanechildren-cs3" %}


### Additional information storage

Additional information storage for lanes is similar to nodes. Additional information about a specific lane can be stored by using the [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#addInfo) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/addinfo-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/addinfo-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/addinfo-cs1" %}


### Lane interaction

#### Resizing lane

Lanes can be resized in the bottom and left directions.
Lanes can be resized by using the resize selector of the lane.
Once a lane is resized, the swimlane will be resized automatically.
The lane can be resized either by using the resize selector or the tight bounds of the child object. If the child node moves to the edge of the lane, it can be automatically resized. The following image illustrates how to resize the lane.

![Lane Resizing](../images/lane-resize.gif)

#### Lane swapping

Lanes can be swapped by dragging the lanes over another lane.
A helper should indicate the insertion point while lane swapping. The following image illustrates how to swap lanes.

![Lane Swapping](../images/swapping.gif)

#### Disable swimlane lane swapping

Swimlane lane swapping can be disabled by using the property called `canMove`.

The following code illustrates how to disable a swimlane lane swapping.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/addlanes-cs2" %}

#### Resize helper

A special resize helper will be used to resize the lanes.
The resize cursor will be available on the left and bottom directions only.
Once the lane is resized, the swimlane will be resized automatically.

#### Children interaction in lanes

Child nodes can be resized within swimlanes.
Child nodes can be dragged within lanes.
Child nodes can be interchanged from one lane to another lane.
Child nodes can be dragged and dropped from lanes to the diagram.
Child nodes can be dragged and dropped from the diagram to lanes.
Based on the child node interactions, the lane size should be updated.

The following image illustrates children interaction in lanes.

![Lane Children Interaction](../images/child-interaction.gif)
  
#### Lane header editing

The diagram provides support to edit lane headers at runtime. Header editing is achieved by double-click events. Double-clicking the header label will enable the editing of that header.

The following image illustrates how to edit the lane header.

![Lane Header Editing](../images/lane-header-edit.gif)