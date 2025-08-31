---
layout: post
title: Ports in Angular Diagram component | Syncfusion®
description: Learn here all about Ports in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Ports 
documentation: ug
domainurl: ##DomainURL##
---

# Ports in Angular Diagram Component

Ports are specialized connection points on nodes that provide precise control over where connectors attach. Unlike node-to-node connections that automatically adjust their attachment points, ports maintain fixed connection locations even when nodes are moved, rotated, or resized. This makes ports essential for creating stable, predictable diagram layouts and professional flowcharts.

![Port](../images/Port1.png)

## Types of connections

The Diagram component supports two distinct connection methods, each serving different use cases depending on the level of connection control required.

### Node to node connection

Node to node connections automatically find the optimal attachment point on a node's boundary. When either connected node moves, the connector dynamically repositions to maintain the shortest path between nodes. This connection type works best for simple diagrams where precise connection points are not critical.

When a connector is connected between two nodes, its end points are automatically docked to the node's nearest boundary as shown in the following gif.

![Node to Node](../images/node-node-gif.gif)

### Port to port connection

Port to port connections attach to specific, predefined points on nodes. These connections remain fixed to their designated ports regardless of node movement, ensuring consistent diagram appearance and reliable connector behavior. This connection type is ideal for technical diagrams, flowcharts, and any scenario requiring precise connector placement.

![Port to port](../images/port-port-gif.gif)

## Create port

Ports are defined as objects within a node's [`ports`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointPortModel/) collection. The [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointPortModel/#offset) property accepts fractional values (0 to 1) that determine the port's position relative to the node's bounds, where (0,0) represents the top-left corner and (1,1) represents the bottom-right corner.

The following code demonstrates how to add ports during node initialization:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/port-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/port-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/port-cs1" %}

N> When setting a port's ID, ensure that it does not contain white spaces, does not start with numbers or special characters, and does not include special characters like underscores (_) or spaces.

## Add ports at runtime

The [`addPorts`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#addports) method enables dynamic port creation after the diagram has been initialized. This functionality is useful for interactive applications where users can customize node connection points or when ports need to be added based on business logic.

The port's ID property defines a unique identifier that can be used to reference the port in subsequent operations. If no ID is specified, the system automatically generates a default ID.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/add-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/add-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/add-cs1" %}

## Remove ports at runtime

The [`removePorts`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#removeports) method allows dynamic removal of ports from nodes. When a port is removed, any connectors attached to that port are automatically disconnected. This method is particularly useful for creating adaptive interfaces or cleaning up unused connection points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/remove-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/remove-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/remove-cs1" %}

## Update port at runtime

Port properties can be modified at runtime by directly updating the port object and calling the [`dataBind`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#databind) method to apply the changes. This approach enables dynamic customization of port appearance, position, and behavior based on application state or user interactions.

The following code example illustrates how to change port properties dynamically:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/node-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/node-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/node-cs1" %}


## Specify connection direction to port

The [`connectionDirection`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port/#connectiondirection) property controls the allowed connection flow through a port. This property accepts values that specify whether connectors can connect to the port (incoming), from the port (outgoing), or both directions. This feature is essential for creating directional flowcharts and enforcing proper data flow in technical diagrams.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/connectionPort/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/connectionPort/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/connectionPort" %}

![Connection Direction Example](../images/connectionDirection.png)

## Incoming and outgoing edges of ports

Each port maintains collections of its connected connectors through read-only properties. The [`inEdges`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointPortModel/#inedges) property contains the IDs of all connectors that terminate at the port, while [`outEdges`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointPortModel/#outedges) contains the IDs of connectors that originate from the port. These properties are automatically maintained by the diagram and provide valuable information for traversing connection relationships.

The following code example demonstrates how to access the incoming and outgoing connections of a port:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/edges-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/edges-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/edges-cs1" %}

## Additional information to port

The [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointPortModel/#addinfo) property allows attachment of custom metadata to ports. This property accepts any object and is useful for storing application-specific data, configuration settings, or contextual information that needs to be associated with particular ports. The stored information persists with the port throughout its life cycle and can be accessed when processing port-related events or operations.

The following code example shows how to attach additional information to a port:

```typescript
public port: PointPortModel = {
    id: 'port1',
    offset: { x: 0.5, y: 0 },
    addInfo: { position: 'TopCenter', id: 'port1' }
};
```