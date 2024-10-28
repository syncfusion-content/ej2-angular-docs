---
layout: post
title: Bpmn Flows in Angular Diagram component | Syncfusion
description: Learn here all about Bpmn shapes in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bpmn Flows 
documentation: ug
domainurl: ##DomainURL##
---

# BPMN flows in Angular Diagram control

[`BPMN Flows`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow#BpmnFlow) are lines that connects BPMN flow objects.

* Association
* Sequence
* Message

## Association flow

[`BPMN Association`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow#association) flow is used to link flow objects with its corresponding text or artifact. An association is represented as a dotted graphical line with opened arrow. The types of association are as follows:

* Directional
* BiDirectional
* Default

The `association` property allows you to define the type of association. The following code example illustrates how to create an association.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/association-cs1/src/app.component.ts %}
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

N> The default value for the property `association` is **default**.

## Sequence flow

A [`Sequence`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow#sequence) flow shows the order in which the activities are performed in a BPMN process and is represented by a solid graphical line. The types of sequence are as follows:

* Normal
* Conditional
* Default

The sequence property allows you to define the type of sequence. The following code example illustrates how to create a sequence flow.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/sequence-cs1/src/app.component.ts %}
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

N> The default value for the property `sequence` is **normal**.

## Message flow

A [`Message`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnFlow#message) flow shows the flow of messages between two participants and is represented by dashed line. The types of message are as follows:

* InitiatingMessage
* NonInitiatingMessage
* Default

The message property allows you to define the type of message. The following code example illustrates how to define a message flow.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/message-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/message-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/message-cs1" %}

The following table contains various representation of message flows.

| Message | Image |
| -------- | -------- |
| Default | ![DefaultImage](images/Message-default.png) |
| InitiatingMessage | ![InitiatingMessageImage](images/IMessage.png) |
| NonInitiatingMessage | ![NonInitiatingMessageImage](images/NIMessage.png) |

N> The default value for the property `message` is **default**.
