---
layout: post
title: Phase in Angular Diagram component | Syncfusion®
description: Learn here all about Swim lane in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Phase
documentation: ug
domainurl: ##DomainURL##
---

# Phase in Angular Diagram Component

## Overview

Phases are subprocesses that split each lane horizontally or vertically based on the swimlane orientation. Phases help organize workflow stages within lanes, making it easier to visualize process steps and milestones. Multiple [`Phase`](https://ej2.syncfusion.com/angular/documentation/api/diagram/phaseModel) objects can be added to a swimlane to represent different stages of a process.

The following code example illustrates how to create a phase.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/phase-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/phase-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/phase-cs1" %}

### Dynamically add and remove phases from lanes

Phases can be added at runtime using the [`addPhases`](https://ej2.syncfusion.com/angular/documentation/api/diagram#addphases) method and removed using the [`removePhase`](https://ej2.syncfusion.com/angular/documentation/api/diagram#removephase) method. This dynamic functionality allows for flexible workflow management as process requirements change.

The following code example illustrates how to add and remove phases at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/addphases-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/addphases-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/addphases-cs1" %}

### Customizing phase appearance and properties

Phase appearance and behavior can be customized through several properties:

* The length of each region can be controlled using the [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/phaseModel#offset) property of the phase.
* Each phase region can include descriptive text through the [`header`](https://ej2.syncfusion.com/angular/documentation/api/diagram/headerModel) property of the phase.
* The height of phases can be increased using the [`phaseSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/swimLaneModel#phasesize) property of the swimlane.
* Additional information can be stored with phases using the [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/phaseModel#addinfo) property of the phase.

The following code example illustrates how to customize phases in a swimlane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/phasecustomize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/phasecustomize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/phasecustomize-cs1" %}

#### Dynamic customization of phases

Phase style and text properties can be customized dynamically during runtime. This capability enables responsive design adjustments based on user interactions or changing data requirements.

The following code example illustrates how to customize phases at runtime.

 {% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/swimlane/phasecustomize-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/swimlane/phasecustomize-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/swimlane/phasecustomize-cs2" %}

### Phase interaction capabilities

#### Resizing phases

* Phases can be resized using their selection handles.
* The phase header must be selected first to enable phase selection.
* When a phase is resized, the associated lane size updates automatically to maintain layout consistency.

#### Resizing helper functionality

* A specialized resize selector is used for phase resizing operations.
* The resize cursor appears in different directions based on swimlane orientation: left and bottom directions for horizontal swimlanes, and top and bottom directions for vertical swimlanes.

#### Phase header editing

The diagram component provides support for editing phase headers at runtime through double-click interaction. Double-clicking the header label enables inline editing functionality, allowing users to modify phase titles directly within the diagram.

The following image illustrates the phase header editing process:

![Phase Header Editing](../images/phase-header-edit.gif)