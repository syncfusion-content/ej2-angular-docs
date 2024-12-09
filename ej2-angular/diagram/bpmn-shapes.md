---
layout: post
title: Bpmn shapes in Angular Diagram component | Syncfusion®
description: Learn here all about Bpmn shapes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Bpmn shapes 
documentation: ug
domainurl: ##DomainURL##
---

# Bpmn shapes in Angular Diagram component

BPMN shapes are used to represent the internal business procedure in a graphical notation and enable you to communicate the procedures in a standard manner. To create a BPMN shape, in the node property shape, type should be set as “bpmn” and its shape should be set as any one of the built-in shapes. The following code example illustrates how to create a simple business process.

N> If you want to use BPMN shapes in diagram, you need to inject BpmnDiagrams in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/bpmn-cs1/src/app.component.ts %}
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