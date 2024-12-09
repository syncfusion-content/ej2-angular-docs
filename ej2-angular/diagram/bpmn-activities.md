---
layout: post
title: Bpmn activity in Angular Diagram component | Syncfusion®
description: Learn here all about Bpmn shapes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Bpmn activity 
documentation: ug
domainurl: ##DomainURL##
---

# BPMN activity in Angular Diagram control

### Activity

The [`activity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnActivities) is the task that is performed in a business process. It is represented by a rounded rectangle.

There are two types of activities. They are listed as follows:

* Task: Occurs within a process and it is not broken down to a finer level of detail.
* Subprocess: Occurs within a process and it is broken down to a finer level of detail.

To create a BPMN activity, set the shape as **activity**. You also need to set the type of the BPMN activity by using the activity property of the node. By default, the type of the activity is set as **task**. The following code example illustrates how to create an activity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/activity-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/activity-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/activity-cs1" %}

The different activities of BPMN process are listed as follows.


### Tasks

The [`task`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask) property of the [`bpmn activity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnActivities) allows you to define the type of task such as sending, receiving, user based task, etc. By default, the type property of task is set as **none**. The following code illustrates how to create different types of
BPMN tasks

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/task-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/task-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/task-cs1" %}

The various types of BPMN tasks are tabulated as follows.

| Shape | Image |
| -------- | -------- |
| Service | ![ServiceBPMNImage](images/Service.png) |
| Send | ![SendBPMNImage](images/Send.png) |
| Receive | ![ReceiveBPMNImage](images/Receive.png) |
| Instantiating Receive | ![Instantiating ReceiveBPMNImage](images/InsService.png) |
| Manual |![ManualBPMNImage](images/Manual.png) |
| Business Rule | ![Business RuleBPMNImage](images/Bussiness.png) |
| User | ![UserBPMNImage](images/User.png) |
| Script | ![ScriptBPMNImage](images/Script.png) |

### Collapsed Subprocess

A [`Collapsed sub-process`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess/#collapsed) is a group of tasks, which is used to hide or reveal details of additional levels. The following code explains how to create a Collapsed Sub-Process.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/subprocess-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/subprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/subprocess-cs1" %}

### Loop

[`Loop`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnLoops) is a task that is internally being looped. The loop property of `bpmn activity` allows you to define the type of loop. The default value for `loop` is **none**. You can define the loop property in subprocess BPMN shape as shown in the following code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/loop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/loop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/loop-cs1" %}

The following table contains various types of BPMN loops.

| Loops | Task | Subprocess |
| -------- | -------- | --------|
| Standard | ![StandardTaskImage](images/Standard1.png)  | ![StandardSubprocessImage](images/Standard2.png) |
| SequenceMultiInstance | ![SequenceMultiInstanceTaskImage](images/Sequence1.png) |  ![SequenceMultiInstanceSubprocessImage](images/Sequence2.png)|
| ParallelMultiInstance | ![ParallelMultiInstanceTaskImage](images/PMultiInstance1.png) | ![ParallelMultiInstanceSubprocessImage](images/PMultiInstance2.png)

### Compensation

[`Compensation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask/#compensation) is triggered, when operation is partially failed and enabled it with the compensation property of the `bpmn activity`.
By default, the `compensation` is set to false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/compensation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/compensation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/compensation-cs1" %}

### Call

A [`call`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask/#call)  activity is a global subprocess that is reused at various points of the business flow and set it with the call property of the task.
By default, the call property is false.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/call-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/call-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/call-cs1" %}

N> This Property is only applicable for task Type activity.

### Adhoc

An adhoc subprocess is a group of tasks that are executed in any order or skipped in order to fulfill the end condition and set it with the [`adhoc`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess/#adhoc) property of subprocess.By default, the adhoc property is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/adhoc-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/adhoc-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/adhoc-cs1" %}

## Boundary

Boundary represents the type of task that is being processed. The [`boundary`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess/#boundary) property of subprocess allows you to define the type of boundary. By default, it is set as **default**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/boundary-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/boundary-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/boundary-cs1" %}

The following table contains various types of BPMN boundaries.

| Boundary | Image |
| -------- | -------- |
| Call | ![CallImage](images/Call.png) |
| Event | ![EventImage](images/Eventtask.png) |
| Default | ![DefaultImage](images/DefaultBoundary.png) |


#### SubProcess types

The different types of subprocess are as follows:

    * Event subprocess
    * Transaction

##### Event subprocess

A subprocess is defined as an event subprocess, when it is triggered by an event. An event subprocess is placed within another subprocess which is not part of the normal flow of its parent process. You can set event to a subprocess with the [`event`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent) and [`trigger`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent/#trigger) property of the subprocess. The [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess/#type) property of subprocess allows you to define the type of subprocess whether it should be event subprocess or transaction subprocess.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/eventSubprocess-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/eventSubprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/eventSubprocess-cs1" %}

##### Transaction subprocess

* [`transaction`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTransactionSubProcessModel) is a set of activities that logically belong together, in which all contained activities must complete their parts of the transaction; otherwise the process is undone. The execution result of a transaction is one of Successful Completion, Unsuccessful Completion (Cancel), and Hazard (Exception). The [`event`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent) property of subprocess allows to represent these results as an event attached to the subprocess.

* The event object allows you to define the type of event by which the subprocess will be triggered. The name of the event can be defined to identify the event at runtime.

* The event’s offset property is used to set the fraction/ratio (relative to parent) that defines the position of the event shape.

* The trigger property defines the type of the event trigger.

* You can also use define ports and labels to subprocess events by using event’s ports and labels properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/transitionSubprocess-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/transitionSubprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/transitionSubprocess-cs1" %}
