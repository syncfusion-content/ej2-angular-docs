---
layout: post
title: Bpmn Flows in Angular Diagram component | Syncfusion®
description: Learn here all about Bpmn flows in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Bpmn Flows 
documentation: ug
domainurl: ##DomainURL##
---

# BPMN flows in Angular Diagram control

## Overview

[`BPMN Flows`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow/) are connecting lines that define relationships and information flow between BPMN elements in business process diagrams. These flows are essential for modeling how activities, events, and gateways interact within a process workflow.

BPMN flows are categorized into three main types:

* **Association** - Links flow objects with supporting text or artifacts
* **Sequence** - Shows the execution order of activities in a process
* **Message** - Represents communication between different process participants

## Association flow

[`BPMN Association`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow/) flows connect BPMN flow objects with their corresponding text annotations or artifacts. Association flows are represented as dotted lines with open arrowheads and do not affect the sequence or execution of the process.

The association flow supports three types:

* **Directional** - Shows a one-way association from source to target
* **BiDirectional** - Indicates a two-way association between elements
* **Default** - A simple association without directional emphasis

The `association` property allows you to define the type of association. The following code example illustrates how to create an association flow:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/association-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/association-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/association-cs1" %}

The following table demonstrates the visual representation of association flows:

| Association | Image |
| -------- | -------- |
| Default | ![DefaultImage](../images/Default1.png) |
| Directional | ![DirectionalImage](../images/Directional1.png) |
| BiDirectional | ![BiDirectionalImage](../images/BiDirectional.png) |

N> The default value for the property `association` is **default**.

## Sequence flow

A [`Sequence`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow/) flow defines the execution order of activities, events, and gateways within a BPMN process. Sequence flows are represented by solid lines with closed arrowheads and control the flow of the process from one element to the next.

The sequence flow supports three types:

* **Normal** - Standard flow path without special conditions
* **Conditional** - Flow that occurs only when specific conditions are met
* **Default** - Alternative flow path when conditional flows are not satisfied

The `sequence` property allows you to define the type of sequence flow. The following code example illustrates how to create a sequence flow:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/sequence-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/sequence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/sequence-cs1" %}

The following table contains various representations of sequence flows:

| Sequence | Image |
| -------- | -------- |
| Default | ![DefaultImage](../images/Default1.png) |
| Directional | ![DirectionalImage](../images/Directional1.png) |
| BiDirectional | ![BiDirectionalImage](../images/BiDirectional.png) |

N> The default value for the property `sequence` is **normal**.

## Message flow

A [`Message`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow/) flow represents the exchange of messages between different participants or pools in a BPMN process. Message flows are depicted as dashed lines and show communication that crosses organizational boundaries.

The message flow supports three types:

* **InitiatingMessage** - Message that starts a process or triggers an activity
* **NonInitiatingMessage** - Message that provides information but does not start a process
* **Default** - Standard message flow without special initiation properties

The `message` property allows you to define the type of message flow. The following code example illustrates how to define a message flow:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/message-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/message-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/message-cs1" %}

The following table contains various representations of message flows:

| Message | Image |
| -------- | -------- |
| Default | ![DefaultImage](../images/Message-default.png) |
| InitiatingMessage | ![InitiatingMessageImage](../images/IMessage.png) |
| NonInitiatingMessage | ![NonInitiatingMessageImage](../images/NIMessage.png) |

N> The default value for the property `message` is **default**.

## Flow Usage Guidelines

When designing BPMN diagrams, consider the following best practices for using flows:

* Use **sequence flows** to connect activities, events, and gateways within the same pool or participant
* Use **message flows** to show communication between different pools or participants
* Use **association flows** to attach text annotations, data objects, or other artifacts to flow elements
* Ensure flow directions clearly indicate the intended process path and information exchange

Understanding these flow types and their proper usage helps create clear, standardized business process models that effectively communicate process logic and participant interactions.