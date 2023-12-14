---
layout: post
title: Bpmn shapes in Angular Diagram component | Syncfusion
description: Learn here all about Bpmn shapes in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bpmn shapes 
documentation: ug
domainurl: ##DomainURL##
---

# Bpmn shapes in Angular Diagram component

BPMN shapes are used to represent the internal business procedure in a graphical notation and enable you to communicate the procedures in a standard manner. To create a BPMN shape, in the node property shape, type should be set as “bpmn” and its shape should be set as any one of the built-in shapes. The following code example illustrates how to create a simple business process.

>Note: If you want to use BPMN shapes in diagram, you need to inject BpmnDiagrams in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/bpmn-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/bpmn-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/bpmn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/bpmn-cs1" %}

>Note : The default value for the property `shape` is “event”.

The list of BPMN shapes are as follows:

| Shape | Image |
| -------- | -------- |
| Event | ![EventImage](images/Event.png) |
| Gateway | ![GatewayImage](images/Gateway.png) |
| Task | ![TaskImage](images/Task.png) |
| Message | ![MessageImage](images/Message.png) |
| DataSource | ![DatasourceImage](images/Datasource.png) |
| DataObject | ![DataobjectImage](images/Dataobject.png) |
| Group | ![GroupImage](images/Group.png) |

The BPMN shapes and its types are explained as follows.

<!-- markdownlint-disable MD033 -->

## Event

An [`event`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent/) is notated with a circle and it represents an event in a business process. The type of events are as follows:

* Start
* End
* Intermediate

The event property of the node allows you to define the type of the event. The default value of the event is **Start**. The following code example illustrates how to create a BPMN event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/event-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/event-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/event-cs1" %}

Event triggers are notated as icons inside the circle and they represent the specific details of the process. The [`trigger`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent/#trigger) property of the node allows you to set the type of trigger and by default, it is set as **none**. The following table illustrates the type of event triggers.

| Triggers | Start | Non-Interrupting Start | Intermediate | Non-Interrupting Intermediate | Throwing Intermediate | End |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| None | ![NoneStartImage](images/None1.png)  | ![NonInteruptingImage](images/None2.png) | ![NoneIntermediateImage](images/None3.png) | ![NoneNonInteruptingIntermediateImage](images/None4.png) | | ![NoneEndImage](images/None5.png) |
| Message | ![MessageStartImage](images/Message1.png) | ![MessageNonInteruptingImage](images/Message2.png) | ![MessageIntermediateImage](images/Message3.png) | ![MessageNonInteruptingIntermediateImage](images/Message4.png)|![Message](images/Message5.png) | ![Message](images/Message6.png) |
| Timer | ![TimerStartImage](images/Timer1.png) | ![TimerNonInteruptingImage](images/Timer2.png) | ![TimerIntermediateImage](images/Timer3.png)|![TimerNonInteruptingIntermediateImage](images/Timer4.png) | | |
| Conditional | ![ConditionalStartImage](images/Conditional1.png) | ![ConditionalNonInteruptingImage](images/Conditional2.png) | ![ConditionalIntermediate](images/Conditional3.png)|![ConditionalNonInteruptingIntermediateImage](images/Conditional4.png) | | |
| Link | | |![LinkIntermediateImage](images/Link1.png) | | ![LinkThrowingIntermediateImage](images/Link2.png) | |
| Signal | ![SignalStartImage](images/Signal1.png) | ![SignalNon-InterruptingImage](images/Signal2.png) | ![SignalImage](images/Signal3.png) | ![SignalNon-Interrupting IntermediateImage](images/Signal4.png)| ![SignalThrowing IntermediateImage](images/Signal5.png) | ![SignalEndImage](images/Signal6.png) |
| Error | ![ErrorStartImage](images/Error1.png) | | ![ErrorIntermediateImage](images/Error2.png)  | | | ![ErrorEndImage](images/Error3.png)|
| Escalation | ![EscalationStartImage](images/Esclation1.png) | ![Non-InterruptingImage](images/Esclation2.png) | ![EscalationIntermediateImage](images/Esclation3.png)| ![EscalationNon-InterruptingImage](images/Esclation4.png)| ![EscalationThrowing IntermediateImage](images/Esclation5.png) |  ![EscalationEndImage](images/Esclation6.png)|
| Termination | | | | | | ![TerminationEndImage](images/Termination1.png)|
| Compensation |![CompensationStartImage](images/Compensation1.png)  | | ![CompensationIntermediateImage](images/Compensation2.png) | | ![CompensationThrowing IntermediateImage](images/Compensation3.png)|![CompensationEndImage](images/Compensation4.png) |
| Cancel | | | ![CancelIntermediateImage](images/Cancel1.png) | | | ![CancelEndIamge](images/Cancel2.png) |
| Multiple | ![MultipleStartImage](images/Multiple1.png) | ![MultipleNon-InterruptingImage](images/Multiple2.png)  | ![MultipleIntermediateImage](images/Multiple3.png)| ![MultipleNon-InterruptingImage](images/Multiple4.png) | ![MultipleThrowing IntermediateImage](images/Multiple5.png)  | ![MultipleEndImage](images/Multiple6.png) |
| Parallel | ![ParallelStartImage](images/Parallel1.png) | ![ParallelNon-InterruptingImage](images/Parallel2.png) | ![ParallelIntermediateImage](images/Parallel3.png)| ![ParallelEndImage](images/Parallel4.png) | | |

## Gateway

Gateway is used to control the flow of a process and it is represented as a diamond shape. To create a gateway, the shape property of the node should be set as “gateway” and the [`gateway`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnGateway/) property can be set with any of the appropriate gateways. The following code example illustrates how to create a BPMN Gateway.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/gateway-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/gateway-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/gateway-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/gateway-cs1" %}

>Note: By default, the `gateway` will be set as **none**.

There are several types of gateways as tabulated:

| Shape | Image |
| -------- | -------- |
| Exclusive | ![ExclusiveGateWayeImage](images/Exclusive.png) |
| Parallel | ![ParallelGateWayeImage](images/Parallel.png) |
| Inclusive | ![InclusiveGateWayeImage](images/Inclusive.png) |
| Complex | ![ComplexGateWayeImage](images/Complex.png) |
| EventBased | ![EventBasedGateWayeImage](images/EventBased.png) |
| ExclusiveEventBased | ![ExclusiveEventBasedGateWayeImage](images/EEBased.png) |
| ParallelEventBased | ![ParallelEventBasedGateWayeImage](images/PEBased.png) |

## Activity

The [`activity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnActivities/) is the task that is performed in a business process. It is represented by a rounded rectangle.

There are two types of activities. They are listed as follows:

* **Task**: Occurs within a process and it is not broken down to a finer level of detail.
* **Subprocess**: Occurs within a process and it is broken down to a finer level of detail.

To create a BPMN activity, set the shape as **activity**. You also need to set the type of the BPMN activity by using the activity property of the node. By default, the type of the activity is set as **task**. The following code example illustrates how to create an activity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/activity-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/activity-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/activity-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/activity-cs1" %}

The different activities of BPMN process are listed as follows.

## Tasks

The [`task`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask/) property of the node allows you to define the type of task such as sending, receiving, user based task, etc. By default, the [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask/#type) property of task is set as **none**. The following code illustrates how to create different types of BPMN tasks.
The events property of tasks allow to represent these results as an event attached to the task.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/task-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/task-cs1/src/app.module.ts %}
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

## Subprocess

A [`sub-process`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess/) is a group of tasks, which is used to hide or reveal details of additional levels using the [`collapsed`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess/#collapsed-boolean)  property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/subprocess-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/subprocess-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/subprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/subprocess-cs1" %}

The different types of subprocess are as follows:

* Event subprocess
* Transaction

## Event subprocess

A subprocess is defined as an event subprocess, when it is triggered by an event. An event subprocess is placed within another subprocess which is not part of the normal flow of its parent process. You can set event to a subprocess with the [`event`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent/) and [`trigger`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent/#trigger) property of the subprocess. The [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess/#type) property of subprocess allows you to define the type of subprocess whether it should be event subprocess or transaction subprocess.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/eventSubprocess-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/eventSubprocess-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/eventSubprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/eventSubprocess-cs1" %}

## Transaction subprocess

* [`transaction`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTransactionSubProcessModel/) is a set of activities that logically belong together, in which all contained activities must complete their parts of the transaction; otherwise the process is undone. The execution result of a transaction is one of Successful Completion, Unsuccessful Completion (Cancel), and Hazard (Exception). The `events` property of subprocess allows to represent these results as an event attached to the subprocess.

* The event object allows you to define the type of event by which the subprocess will be triggered. The name of the event can be defined to identify the event at runtime.

* The event’s offset property is used to set the fraction/ratio (relative to parent) that defines the position of the event shape.

* The trigger property defines the type of the event trigger.

* You can also use define ports and labels to subprocess events by using event’s ports and labels properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/transitionSubprocess-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/transitionSubprocess-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/transitionSubprocess-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/transitionSubprocess-cs1" %}

## Process

Processes is an array collection that defines the children values for BPMN subprocess.

## Loop

[`Loop`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnLoops/) is a task that is internally being looped. The loop property of task allows you to define the type of loop. The default value for `loop` is **none**.

You can define the loop property in subprocess BPMN shape as shown in the following code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/loop-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/loop-cs1/src/app.module.ts %}
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

## Compensation

[`Compensation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask/#compensation) is triggered, when operation is partially failed and enabled it with the compensation property of the task and the subprocess.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/compensation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/compensation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/compensation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/compensation-cs1" %}

## Call

A [`call`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnTask/#call) activity is a global subprocess that is reused at various points of the business flow and set it with the call property of the task.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/call-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/call-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/call-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/call-cs1" %}

## Adhoc

An adhoc subprocess is a group of tasks that are executed in any order or skipped in order to fulfill the end condition and set it with the [`adhoc`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcess/#adhoc) property of subprocess.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/adhoc-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/adhoc-cs1/src/app.module.ts %}
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/boundary-cs1/src/app.module.ts %}
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

## Data

A data object represents information flowing through the process, such as data placed into the process, data resulting from the process, data that needs to be collected, or data that must be stored. To define a [`data object`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnDataObject/), set the shape as **DataObject** and the type property defines whether data is an input or an output. You can create multiple instances of data object with the collection property of data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/data-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/data-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/data-cs1" %}

The following table contains various representation of BPMN data object.

| Boundary | Image |
| -------- | -------- |
| Call | ![CallImage](images/Call.png) |
| Event | ![EventImage](images/Eventtask.png) |
| Default | ![DefaultImage](images/DefaultBoundary.png) |

## Datasource

Datasource is used to store or access data associated with a business process. To create a datasource, set the shape as **datasource**. The following code example illustrates how to create a datasource.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/dataSource-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/dataSource-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/dataSource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/dataSource-cs1" %}

## Artifact

Artifact is used to show additional information about a process in order to make it easier to understand. There are two types of artifacts in BPMN.

* Text annotation
* Group

## Text annotation

* A BPMN object can be associated with a text annotation which does not affect the flow but gives details about objects within a flow. The annotation property of the node is used to connect an annotation element to the BPMN node.

* The annotation element can be displaced into a different position interactively by dragging the annotation to a particular position.

* The annotation element can be switched from a BPMN node to another BPMN node simply by dragging the source end of the annotation connector into the other BPMN node.

* The annotation angle property is used to set the angle between the BPMN shape and the annotation.

* The annotation direction property is used to set the direction of the text annotation.

* To set the size for text annotation, use width and height properties.

* The annotation length property is used to set the distance between the BPMN shape and the annotation.

* The annotation text property defines the additional information about the flow object in a BPMN process.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/text-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/text-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/text-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/text-cs1" %}

## Group

A group is used to frame a part of the diagram, shows that elements included in it are logically belong together and does not have any other semantics other than organizing elements. To create a group, the shape property of the node should be set as **group**. The following code example illustrates how to create a BPMN group.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/group-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/group-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/group-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/group-cs1" %}

## BPMN flows

[`BPMN Flows`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow/#BpmnFlow) are lines that connects BPMN flow objects.

## Association

[`BPMN Association`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow/#association) flow is used to link flow objects with its corresponding text or artifact. An association is represented as a dotted graphical line with opened arrow. The types of association are as follows:

* Directional
* BiDirectional
* Default

The association property allows you to define the type of association. The following code example illustrates how to create an association.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/association-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/association-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/association-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/association-cs1" %}

The following table demonstrates the visual representation of association flows.

| Association | Image |
| -------- | -------- |
| Default | ![DefaultImage](images/Default1.png) |
| Directional | ![DirectionalImage](images/Directional1.png) |
| BiDirectional | ![BiDirectionalImage](images/BiDirectional.png) |

> The default value for the property `association` is **default**.

## Sequence

A [`Sequence`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow/#sequence) flow shows the order in which the activities are performed in a BPMN process and is represented by a solid graphical line. The types of sequence are as follows:

* Normal
* Conditional
* Default

The sequence property allows you to define the type of sequence. The following code example illustrates how to create a sequence flow.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/sequence-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/sequence-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/sequence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/sequence-cs1" %}

The following table contains various representation of sequence flows.

| Sequence | Image |
| -------- | -------- |
| Default | ![DefaultImage](images/Default1.png) |
| Directional | ![DirectionalImage](images/Directional1.png) |
| BiDirectional | ![BiDirectionalImage](images/BiDirectional.png) |

>Note: The default value for the property `sequence` is **normal**.

## Message

A [`Message`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow/#message) flow shows the flow of messages between two participants and is represented by dashed line. The types of message are as follows:

* InitiatingMessage
* NonInitiatingMessage
* Default

The message property allows you to define the type of message. The following code example illustrates how to define a message flow.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/message-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/bpmnShapes/message-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/message-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/message-cs1" %}

The following table contains various representation of message flows.

| Message | Image |
| -------- | -------- |
| Default | ![DefaultImage](images/Default1.png) |
| InitiatingMessage | ![InitiatingMessageImage](images/IMessage.png) |
| NonInitiatingMessage | ![NonInitiatingMessageImage](images/NIMessage.png) |

>Note: The default value for the property `message` is **default**.
