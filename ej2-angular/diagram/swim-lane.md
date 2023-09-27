---
layout: post
title: Swim lane in Angular Diagram component | Syncfusion
description: Learn here all about Swim lane in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Swim lane 
documentation: ug
domainurl: ##DomainURL##
---

# Swim lane in Angular Diagram component

Swimlane is a type of diagram nodes,which is typically used to visualize the relationship between a business process and the department responsible for it by focusing on the logical relationships between activities.

## Create a swimlane

To create a swimlane,the type of shape should be set as [`swimlane`](https://ej2.syncfusion.com/angular/documentation/api/diagram/swimLaneModel).By Default swimlane's are arranged vertically.

The following code example illustrates how to define a swimlane object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/swimlaneheader-cs1" %}

### Headers

Header was the primary element for swimlanes. The [`header`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel) property of swimlane allows you to define its textual description and to customize its appearance.

>Note: By using this header,the swimlane interaction will be performed,like selection, dragging,etc.

The following code example illustrates how to define a swimlane header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/swimlaneheader-cs2" %}

### Customization of headers

The height and width of swimlane header can be customized with [`weight`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel#height) properties of swimlane header. set fill color of header by using the [`style`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel#style) property. The orientation of swimlane can be customized with the [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/swimLaneModel#header) property of the header.

>Note: By default the swimlane orientation has Horizontal.

The following code example illustrates how to customize the swimlane header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/headercustomise-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/headercustomise-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/headercustomise-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/headercustomise-cs1" %}

### Dynamic customization of swimlane header

You can customize the swimlane header style and text properties dynamically. The following code illustrates how to dynamically customize the lane header.

 {% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/dynamicheader-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/dynamicheader-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/dynamicheader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/dynamicheader-cs1" %}

### Header editing

Diagram provides the support to edit swimlane headers at runtime. We achieve the header editing by double click event. Double clicking the header label will enables the editing of that.

The following image illustrates how to edit the swimlane header.

![Header Editing](images/swimlane-header-edit.gif)

## Lanes

Lane is a functional unit or a responsible department of a business process that helps to map a  process within the functional unit or in between other functional units.

The number of [`lanes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel) can be added to swimlane. The lanes are automatically stacked inside  swimlane based on the order they are added.

### Create an empty lane

* The lane `id` is used to define the name of the lane and its further used to find the lane at runtime and do any customization.

* We can provide additional information to the lane by using the [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#addInfo) property of the lane.

The following code example illustrates how to define a swimlane with lane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/emptylane-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/emptylane-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/emptylane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/emptylane-cs1" %}

### Create lane header

* The [`header`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#header) property of lane allows you to textually describe the lane and to customize the appearance of the description.

The following code example illustrates how to define a lane header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/laneheader-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/laneheader-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/laneheader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/laneheader-cs1" %}

### Customizing lane header

* The size of lane can be controlled by using [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel#height) properties of lane.
* The appearance of lane can be set by using the [`style`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel#style) properties.

The following code example illustrates how to customize the lane header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/laneheadercustomize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/laneheadercustomize-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/laneheadercustomize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/laneheadercustomize-cs1" %}

### Dynamic customization of lane header

 We can customize the lane header style and text properties dynamically. The following code illustrates how to dynamically customize the lane header..
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/dynamiclaneheader-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/dynamiclaneheader-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/dynamiclaneheader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/dynamiclaneheader-cs1" %}

### Add lane at runtime

You can add the a lane at runtime by using the client side API method called `addLanes`. The following code illustrates how to dynamically add lane to swimlane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/addlanes-cs1" %}

### Add children to lane

To add nodes to lane,you should add [`children`](https://ej2.syncfusion.com/angular/documentation/api/diagram/laneModel#children) collection of the lane.

The following code example illustrates how to add nodes to lane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/lanechildern-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/lanechildern-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/lanechildern-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/lanechildern-cs1" %}

### Lane interaction

### Resizing lane

* Lane can be resized in the bottom and left direction.
* Lane can be resized by using resize selector of the lane.
* Once you can resize the lane,the swimlane will be resized automatically.
* The lane can be resized either resizing the selector or the tight bounds of the child object. If the child node   move to edge of the lane it can be automatically resized.

The following image illustrates how resize the lane.
![Lane Resizing](images/lane-resize.gif)

### Lane swapping

* Lanes can be swapped using drag the lanes over another lane.
* Helper should intimate the insertion point while lane swapping.

 The following image illustrates how swapping the lane.
![Lane Swapping](images/swapping.gif)

### Disable Swimlane Lane swapping

You can disable swimlane lane swapping by using the property called `canMove`.

The following code illustrates how to disable swimlane lane swapping.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/addlanes-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/addlanes-cs2" %}

### Resize helper

* The special resize helper will be used to resize the lanes.
* The resize cursor will be available on the left and bottom direction alone.
* Once resize the lane the swimlane will be resized automatically.

### Children interaction in lanes

* You can resize the child node within swimlanes.
* You can drag the child nodes within lane.
* Interchange the child nodes from one lane to another lane.
* Drag and drop the child nodes from lane to diagram.
* Drag and drop the child nodes from diagram to lane.
* Based on the child node interactions,the lane size should be updated.

The following image illustrates children interaction in lane.
![Lane Children Interaction](images/child-interaction.gif)
  
### Lane header editing

Diagram provides the support to edit Lane headers at runtime. We achieve the header editing by double click event. Double clicking the header label will enables the editing of that.

The following image illustrates how to edit the lane header.

![Lane Header Editing](images/lane-header-edit.gif)

## Phase

Phase are the subprocess which will split each lanes as horizontally or vertically based on the swimlane orientation. The multiple number of [`Phase`](https://ej2.syncfusion.com/angular/documentation/api/diagram/phaseModel) can be added to swimlane.

The following code example illustrates how to add phase at swimlane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/phase-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/phase-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/phase-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/phase-cs1" %}

### Dynamically add phase to lane

You can add the a phase at runtime by using client side API method called `addPhases`. The following code example illustrates how to add phase at run time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/addphases-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/addphases-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/addphases-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/addphases-cs1" %}

### Customizing phase

* The length of region can be set by using the  [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/phaseModel#offset) property of the phase.
* Every phase region can be textually described with the [`header`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel) property of the phase.
* You can increase the width of phase by using [`phaseSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/swimLaneModel#phasesize) property of swimlane.
* We can provide additional information to the phase by using the [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/phaseModel#addInfo) property of the phase.

The following code example illustrates how to customize the phase in swimlane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/phasecustomize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/phasecustomize-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/phasecustomize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/phasecustomize-cs1" %}

### Phase interaction

### Resizing

* The phase can be resized by using its helper.
* You must select the phase header to enable the phase selection.
* Once the phase can be resized, the lane size will be updated automatically.

### Resizing helper

* The special resize helper will be used to resize the phase.
* The resize cursor will be available on the left and bottom direction for horizontal, and the top and bottom direction for vertical swimlane.

### Phase header editing

Diagram provides the support to edit phase headers at runtime. We achieve the header editing by double click event. Double clicking the header label will enables the editing of that.

The following image illustrates how to edit the swimlane header.

![Phase Header Editing](images/phase-header-edit.gif)

## Add swimlane to palette

Diagram provides the support to add swimlane and phases to symbol palette. The following code sample illustrate how to add swimlane and phases to palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/palette-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/swimlane/palette-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/palette-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/palette-cs1" %}

### Drag and drop swimlane to palette

* The drag and drop support for swimlane shapes has been provided.
* When you drag and drop the lane shape,if the diagram already contains swimlane with the same orientation, the lane will be added and stacked inside a swimlane based on the order. Otherwise, it will be added a new swimlane.
* The phase will only drop on swimlane shape with same orientation.

The following image illustrates how to drag symbol from palette.
![Drag Symbol from Palette](images/symbol-palette.gif)

## Limitations

* Connectors cannot be canceled when added directly to swimlane. we must initialize the connector through connector collection.
* We cannot edit the phase line style.