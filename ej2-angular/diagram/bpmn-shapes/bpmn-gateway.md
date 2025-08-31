---
layout: post
title: BPMN Gateway in Angular Diagram component | Syncfusion®
description: Learn how to create and configure BPMN gateways in Syncfusion Angular Diagram component to control process flows with various gateway types.
platform: ej2-angular
control: Bpmn Gateway 
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Gateway in Angular Diagram Component

## Overview

BPMN (Business Process Model and Notation) gateways are crucial elements that control the flow of processes in business workflow diagrams. Gateways determine how process flows diverge or converge based on specific conditions, making them essential for modeling complex business logic and decision points.

## Gateway

A gateway is represented as a diamond shape and serves as a decision point that controls the sequence flow within a process. Gateways can split a single incoming flow into multiple outgoing flows or merge multiple incoming flows into a single outgoing flow.

To create a gateway in the Angular Diagram component, set the shape property of the node to "gateway" and configure the [`gateway`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnGateway/) property with the appropriate gateway type. The following code example demonstrates how to create a basic BPMN gateway.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/gateway-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/gateway-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/gateway-cs1" %}

N> By default, the gateway type is set to **none**.

## Gateway Types

The Angular Diagram component supports various gateway types, each serving specific process control requirements:

| Gateway Type | Visual Representation | Use Case |
| ------------ | -------------------- | -------- |
| Exclusive | ![Exclusive Gateway](../images/Exclusive.png) | Creates alternative paths where only one path can be taken based on conditions |
| Parallel | ![Parallel Gateway](../images/Parallel.png) | Splits flow into concurrent paths or synchronizes multiple incoming flows |
| Inclusive | ![Inclusive Gateway](../images/Inclusive.png) | Allows multiple paths to be taken simultaneously based on conditions |
| Complex | ![Complex Gateway](../images/Complex.png) | Handles complex routing scenarios with custom expressions |
| EventBased | ![Event-Based Gateway](../images/EventBased.png) | Routes flow based on events rather than data conditions |
| ExclusiveEventBased | ![Exclusive Event-Based Gateway](../images/EEBased.png) | Waits for one of several possible events to occur |
| ParallelEventBased | ![Parallel Event-Based Gateway](../images/PEBased.png) | Waits for multiple events to occur simultaneously |
