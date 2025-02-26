---
layout: post
title: Bpmn Events in Angular Diagram component | Syncfusion®
description: Learn here all about Bpmn shapes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Bpmn Events 
documentation: ug
domainurl: ##DomainURL##
---

# Bpmn Events in Angular Diagram component

## Event

An [`event`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent) is a common BPMN process model element that represents something that happens during a business process and is notated with a circle. The type of events are as follows:

    * Start
    * Intermediate
    * NonInterruptingStart
    * NonInterruptingIntermediate
    * ThrowingIntermediate
    * End

The [`event`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent/#event)property of the node allows you to define the type of the event. The default value of the event is **start**. The following code example illustrates how to create a BPMN event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/event-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/event-cs1" %}

## BPMN event trigger

Event triggers are notated as icons inside the circle and they represent the specific details of the process. The [`trigger`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnEvent/#trigger) property of the node allows you to set the type of trigger and by default, it is set as **none**. The following table illustrates the type of event triggers.

| Triggers | Start | Non-Interrupting Start | Intermediate | Non-Interrupting Intermediate | Throwing Intermediate | End |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| None | ![NoneStartImage](images/None1.png)  | ![NonInteruptingImage](images/None2.png) | ![NoneIntermediateImage](images/None3.png) | ![NoneNonInteruptingIntermediateImage](images/None4.png) |![None ThrowingIntermediate](images/NoTriggerthrowingInterMediate.png) | ![NoneEndImage](images/None5.png) |
| Message | ![MessageStartImage](images/Message1.png) | ![MessageNonInteruptingImage](images/Message2.png) | ![MessageIntermediateImage](images/Message3.png) | ![MessageNonInteruptingIntermediateImage](images/Message4.png)|![Message](images/Message5.png) | ![Message](images/Message6.png) |
| Timer | ![TimerStartImage](images/Timer1.png) | ![TimerNonInteruptingImage](images/Timer2.png) | ![TimerIntermediateImage](images/Timer3.png)|![TimerNonInteruptingIntermediateImage](images/Timer4.png) |![TimerThrowingintermediate](images/endTimer.png) | ![TimerEndEventBPMNEndShape](images/endTimer.png) | |
| Conditional | ![ConditionalStartImage](images/Conditional1.png) | ![ConditionalNonInteruptingImage](images/Conditional2.png) | ![ConditionalIntermediate](images/Conditional3.png)|![ConditionalNonInteruptingIntermediateImage](images/Conditional4.png) | ![ConditionalThrowingintermediateBPMNShape](images/throwingConditional.png) | ![ConditionalEndBPMNshape](images/endConditional.png) 
| Link |![LinkStartBPMNShape](images/startLink.png) | ![Link  NonInterruptingStartBPMNShape](images/nonInterStartLink.png) | ![LinkIntermediateImage](images/Link1.png) |![LinkNonInterrupting intermediateBPMNShape](images/nonInterLink.png) | ![LinkThrowingIntermediateImage](images/Link2.png) | ![LinkEndBPMNShape](images/endLink.png) ||
| Signal | ![SignalStartImage](images/Signal1.png) | ![SignalNon-InterruptingImage](images/Signal2.png) | ![SignalImage](images/Signal3.png) | ![SignalNon-Interrupting IntermediateImage](images/Signal4.png)| ![SignalThrowing IntermediateImage](images/Signal5.png) | ![SignalEndImage](images/Signal6.png) |
| Error | ![ErrorStartImage](images/Error1.png) |![Error Trigger Start Event BPMN Shape](images/nonInterStartError.png) |  ![ErrorIntermediateImage](images/Error2.png)  |![Error Trigger NonInterrupting intermediate BPMN Shape](images/nonInterError.png) | ![Error Trigger Throwing intermediate BPMN Shape](images/throwingError.png) | ![ErrorEndImage](images/Error3.png)|
| Escalation | ![EscalationStartImage](images/Esclation1.png) | ![Non-InterruptingImage](images/Esclation2.png) | ![EscalationIntermediateImage](images/Esclation3.png)| ![EscalationNon-InterruptingImage](images/Esclation4.png)| ![EscalationThrowing IntermediateImage](images/Esclation5.png) |  ![EscalationEndImage](images/Esclation6.png)|
| Termination |![TerminationStartEventBPMNShape](images/startTerminate.png) | ![TerminationNonInterruptingStartEventBPMNShape](images/nonInterStartTerminate.png) | ![TerminationIntermediateEventBPMNShape](images/intermediateTerminate.png) | ![TerminationNonInteruptingIntermediateEventBPMNShape](images/nonInterTerminate.png) | ![TerminationThrowingintermediateEventBPMNShape](images/throwingTerminate.png) | ![TerminationEndImage](images/Termination1.png)|
| Compensation |![CompensationStartImage](images/Compensation1.png)  |  ![CompensationTriggerNonInterruptingStartEventBPMNShape](images/nonInterStartCompensation.png) | ![CompensationIntermediateImage](images/Compensation2.png) | ![CompensationNonInteruptingIntermediatEventBPMNShape](images/noninterCompensation.png) | ![CompensationThrowing IntermediateImage](images/Compensation3.png)|![CompensationEndImage](images/Compensation4.png) |
| Cancel |![CancelStartEventBPMNShape](images/startCancel.png) | ![CancelNonInterruptingStartEventBPMNShape](images/nonInterStartCancel.png) | ![CancelIntermediateImage](images/Cancel1.png) | ![Cancel  NonInteruptingIntermediateEventBPMNShape](images/nonInterCancel.png) | ![CancelThrowingIntermediateEventBPMNShape](images/throwingCancel.png) | ![CancelEndIamge](images/Cancel2.png) |
| Multiple | ![MultipleStartImage](images/Multiple1.png) | ![MultipleNon-InterruptingImage](images/Multiple2.png)  | ![MultipleIntermediateImage](images/Multiple3.png)| ![MultipleNon-InterruptingImage](images/Multiple4.png) | ![MultipleThrowing IntermediateImage](images/Multiple5.png)  | ![MultipleEndImage](images/Multiple6.png) |
| Parallel | ![ParallelStartImage](images/Parallel1.png) | ![ParallelNon-InterruptingImage](images/Parallel2.png) | ![ParallelIntermediateImage](images/Parallel3.png)| ![ParallelEndImage](images/Parallel4.png) | ![ParallelThrowingIntermediateEventBPMNShape](images/throwingParallel.png) | ![ParallelEndEventBPMN Shape](images/endParallel.png) |
