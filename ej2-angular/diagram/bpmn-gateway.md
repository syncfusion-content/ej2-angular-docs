---
layout: post
title: Bpmn Gateway in Angular Diagram component | Syncfusion®
description: Learn here all about Bpmn shapes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Bpmn Gateway 
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Gateway in Angular Diagram control

## Gateway

Gateway is used to control the flow of a process and it is represented as a diamond shape. To create a gateway, the shape property of the node should be set as “gateway” and the [`gateway`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/bpmnGateway/#bpmngateway) property can be set with any of the appropriate gateways. The following code example illustrates how to create a BPMN Gateway.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/gateway-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/gateway-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/gateway-cs1" %}

N> By default, the `gateway` will be set as **none**.

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