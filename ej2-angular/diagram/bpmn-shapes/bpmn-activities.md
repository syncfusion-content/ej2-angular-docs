---
layout: post
title: BPMN Activities in Angular Diagram Component | Syncfusion®
description: Learn about BPMN activity shapes including tasks, subprocesses, loops, compensation, and boundaries in Syncfusion® Angular Diagram component.
platform: ej2-angular
control: Bpmn Activity 
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Activities in Angular Diagram Component

## Overview

BPMN (Business Process Model and Notation) activities represent work performed within a business process. An [`activity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnActivities) appears as a rounded rectangle and serves as the fundamental unit of work in process modeling.

Activities fall into two main categories:

* **Task**: A single unit of work that cannot be broken down into smaller components within the process model
* **Subprocess**: A compound activity that contains other activities and can be expanded to show additional detail

To create a BPMN activity, set the shape property to **Activity**. Specify the activity type using the `shape.activity` property of the node. The default activity type is **Task**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/activity-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/activity-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/activity-cs1" %}

## Tasks

The [`task`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask) property of [`bpmn activity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnActivities) defines specific task types such as user tasks, service tasks, or message tasks. The default task type is **None**. Different task types indicate the nature of work being performed and who or what performs it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/task-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/task-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/task-cs1" %}

The following table shows the available BPMN task types:

| Shape | Image |
| -------- | -------- |
| Service | ![Service task icon showing a gear symbol](../images/Service.png) |
| Send | ![Send task icon showing an arrow pointing right](../images/Send.png) |
| Receive | ![Receive task icon showing an arrow pointing left](../images/Receive.png) |
| Instantiating Receive | ![Instantiating receive task icon with thick border](../images/InsService.png) |
| Manual | ![Manual task icon showing a hand symbol](../images/Manual.png) |
| Business Rule | ![Business rule task icon showing a table symbol](../images/Bussiness.png) |
| User | ![User task icon showing a person symbol](../images/User.png) |
| Script | ![Script task icon showing a document with script](../images/Script.png) |

## Subprocesses

Subprocesses represent activities that contain other processes or activities within them. They provide a way to organize complex processes hierarchically and can be expanded or collapsed to show or hide internal details.

### Collapsed Subprocess

A [`collapsed subprocess`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess#collapsed) appears as a single activity but contains additional process details that remain hidden. This approach helps maintain process diagram clarity while preserving detailed information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/subprocess-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/subprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/subprocess-cs1" %}

## Loop Characteristics

[`Loop`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnLoops) characteristics indicate that an activity repeats until a specified condition is met. The loop property of bpmn activity defines the repetition behavior. The default value is **none**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/loop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/loop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/loop-cs1" %}

The following table shows the available loop types for both tasks and subprocesses:

| Loops | Task | Subprocess |
| -------- | -------- | --------|
| Standard | ![Standard loop marker on task](../images/Standard1.png)  | ![Standard loop marker on subprocess](../images/Standard2.png) |
| SequenceMultiInstance | ![Sequential multi-instance marker on task](../images/Sequence1.png) |  ![Sequential multi-instance marker on subprocess](../images/Sequence2.png)|
| ParallelMultiInstance | ![Parallel multi-instance marker on task](../images/PMultiInstance1.png) | ![Parallel multi-instance marker on subprocess](../images/PMultiInstance2.png) |

## Compensation

[`Compensation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask#compensation) indicates that an activity can undo or compensate for work performed by another activity. This becomes relevant when a process fails after partial completion and requires cleanup activities. Enable compensation using the compensation property of the bpmn activity. The default value is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/compensation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/compensation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/compensation-cs1" %}

## Call Activity

A [`call`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask#call) activity references a global process or subprocess that exists outside the current process definition. This promotes reusable across multiple processes. Enable call activity behavior using the call property of the task. The default value is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/call-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/call-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/call-cs1" %}

N> The call property applies only to task-type activities.

## Ad-hoc

An [`adhoc`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess#adhoc) subprocess contains activities that performers can execute in any order or skip entirely, provided the overall objective is achieved. Enable ad hoc behavior using the adhoc property of the subprocess. The default value is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/adhoc-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/adhoc-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/adhoc-cs1" %}

## Boundary Types

The [`boundary`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess#boundary) property defines the visual boundary style of a subprocess, indicating different subprocess characteristics. The default value is **default**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/boundary-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/boundary-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/boundary-cs1" %}

The following table shows the available boundary types:

| Boundary | Image |
| -------- | -------- |
| Call | ![Call activity with thick border](../images/Call.png) |
| Event | ![Event subprocess with dashed border](../images/Eventtask.png) |
| Default | ![Default subprocess with standard border](../images/DefaultBoundary.png) |

## Specialized Subprocess Types

BPMN defines two specialized subprocess types for specific business scenarios:

### Event Subprocess

An event subprocess executes when triggered by a specific event rather than following the normal process flow. Event subprocesses reside within other subprocesses but remain outside the main sequence flow until activated.

Configure an event subprocess using the [`event`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent#event) and [`trigger`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent#trigger) properties. The [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess#type) property determines whether the subprocess is an event subprocess or transaction subprocess.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/eventSubprocess-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/eventSubprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/eventSubprocess-cs1" %}

#### Transaction Subprocess

A [`transaction`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTransactionSubProcessModel) subprocess represents a group of activities that must all complete successfully or the entire transaction is undone. Transaction results include Successful Completion, Unsuccessful Completion (Cancel), or Hazard (Exception).

The [`event`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent) property allows representation of these results as events attached to the subprocess. Configure event properties as follows:

* **Event type**: Defines the triggering event type for the subprocess
* **Event name**: Identifies the event during runtime
* **Offset**: Sets the event shape position relative to the parent (as a fraction/ratio)
* **Trigger**: Specifies the event trigger type
* **Ports and labels**: Define additional interaction points and descriptive text

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/transitionSubprocess-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/transitionSubprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/transitionSubprocess-cs1" %}