---
layout: post
title: Connectors in Angular Diagram component | Syncfusion®
description: Learn here all about Connectors in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Connectors 
documentation: ug
domainurl: ##DomainURL##
---

# Connectors in Angular Diagram component

Connectors are objects used to create link between two points, nodes or ports to represent the relationships between them.

## Create connector

Connector can be created by defining the source and target point of the connector. The path to be drawn can be defined with a collection of segments. To explore the properties of a [`connector`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/), refer to [`Connector Properties`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#properties).The [`id`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorModel/#id) property of a connector is used to define its unique identifier and can later be used to find the connector at runtime for customization.

```typescript
<e-connectors>
                <e-connector id='connector1' type='Straight' sourcePoint='sourcePoint' targetPoint='sourcePoint'></e-connector>
</e-connectors>  
```
N> Note: There should not be any white-spaces in the ID string while setting the ID.

To create and customize the connectors easily in the Angular Diagram component, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=fwK8CWWBwZ4" %}

## Add connectors through connectors collection

The [`sourcePoint`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#sourcepoint) and [`targetPoint`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#targetpoint) properties of connector allow you to define the end points of a connector.

The following code example illustrates how to add a connector through connector collection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectors-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectors-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectors-cs1" %}

## Add/Remove connector at runtime

Connectors can be added at runtime by using public method,  [`add`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#add) and can be removed at runtime by using public method, [`remove`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#remove).

The following code example illustrates how to add connector at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsatruntime-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsatruntime-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsatruntime-cs1" %}

## Add collection of connectors at runtime

The collection of connectors can be dynamically added using [`addElements`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#addelements) method.Each time an element is added to the diagram canvas, thethe [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iCollectionChangeEventArgs/) event will be triggered.

The following code illustrates how to add connectors collection at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorcollection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorcollection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorcollection-cs1" %}

## Add Connectors from palette

Connectors can be predefined and added to the symbol palette. You can drop those connectors into the diagram, when required.

The following code example illustrates how to add connectors in palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorfrompalette-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorfrompalette-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorfrompalette-cs1" %}

## Draw connectors

Connectors can be interactively drawn by clicking and dragging the diagram surface.

To draw a shape, you have to activate the drawing tool by setting `DrawOnce` or `ContinuousDraw` to the [`tool`](https://ej2.syncfusion.com/documentation/api/diagram/#tool) property and you need to set the `connector` object by using the [`drawingObject`](https://ej2.syncfusion.com/documentation/api/diagram/#drawingobject) property. The following code example illustrates how to draw a connector at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectordrawtool-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectordrawtool-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectordrawtool-cs1" %}

For more information about drawing connectors, refer to [`Draw Connectors`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#drawingobject).

## Update connector at runtime

Various connector properties such as `sourcePoint`, `targetPoint`, `style`, `sourcePortID`, `targetPortID`, etc., can be updated at the runtime.

The following code example illustrates how to update a connector's source point, target point, styles properties at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsupdate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsupdate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsupdate-cs1" %}

## Clone connector at runtime

Cloning a connector creates a new connector instance with identical properties and attributes.

The following code example illustrates how to clone a connector

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorclone-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorclone-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorclone-cs1" %}

## Get Connector defaults

Get Connector defaults helps to define default properties of the connector. It is triggered when the diagram is initialized. In this event, you can customize the connector properties.

The following code example explains how to customize the connector using [`getConnectorDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#getconnectordefaults).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectordefaults-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectordefaults-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectordefaults-cs1" %}

## Connections

### Connection with nodes

* The [`sourceID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#sourceid) and [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#targetid) properties allow to define the nodes to be connected.

The following code example illustrates how to connect two nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectNode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectNode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectNode-cs1" %}

* When you remove NodeConstraints [`InConnect`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeConstraints/) from Default, the node accepts only an outgoing connection to dock in it. Similarly, when you remove NodeConstraints [`OutConnect`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeConstraints/) from Default, the node accepts only an incoming connection to dock in it.

* When you remove both InConnect and OutConnect NodeConstraints from Default, the node restricts connector to establish connection in it.

* The following code illustrates how to disable InConnect constraints.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { NodeConstraints } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [constraints]='nodeConstraints'>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public nodeConstraints: NodeConstraints;
    ngOnInit(): void {
        //Disable InConnect constraints
        this.nodeConstraints = NodeConstraints.Default & ~NodeConstraints.InConnect;
    }
}
```

## Connections with ports

The [`sourcePortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#sourceportid) and [`targetPortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#targetportid) properties allow to create connections between some specific points of source/target nodes.

The following code example illustrates how to create port to port connections.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsport-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsport-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsport-cs1" %}

Similarly, the `sourcePortID` or `targetPortID` can be changed at the runtime by changing the port [`sourcePortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#sourceportid) or [`targetPortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#targetportid).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsportupdate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsportupdate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsportupdate-cs1" %}

* When you set PortConstraints to [`InConnect`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portConstraints/), the port accepts only an incoming connection to dock in it. Similarly, when you set PortConstraints to [`OutConnect`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portConstraints/), the port accepts only an outgoing connection to dock in it.

* When you set PortConstraints to None, the port restricts connector to establish connection in it.

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { PointPortModel, PortConstraints } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [ports]='port1'>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public port1: PointPortModel[];
    ngOnInit(): void {
        this.port1 = [{
            id: 'port1',
            shape: 'Circle',
            offset: { x: 0, y: 0.5 },
            text: 'In - 1',
            //Enable portConstraints Inconnect
            constraints: PortConstraints.InConnect
        }];
    }
}
```

## Automatic line routing

Diagram provides additional flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it. Routing adjusts the geometry of connectors to prevent them from overlapping with any nearby nodes in their path. This feature can be activated by adding the LineRouting constraints property to the diagram.

* Dependency LineRouting module should be injected to the application as the following code snippet.

```typescript

import {  LineRouting, Diagram } from '@syncfusion/ej2-diagrams';
/**
 * Injecting the automatic line routing module.
 */
Diagram.Inject(LineRouting);

```

* Now, the line routing constraints must be included to the default diagram constraints to enable automatic line routing support like below.

```html

 <!--
   Initialize the Diagram
  -->
  <ejs-diagram #diagram [constraints]='constraints'>

```

```typescript
  // Enable line routing constraints.
 public constraints: DiagramConstraints = DiagramConstraints.Default | DiagramConstraints.LineRouting;

```

* The following code block shows how to create the diagram with specifying nodes, connectors, constraints, and necessary modules for line routing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorslinerouting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorslinerouting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorslinerouting-cs1" %}

The following gif illustrates how the connector automatically re-routes the segments. 

![LineRouting GIF](images/lineRouting.GIF.gif)

* In some situations, automatic line routing enabled diagram needs to ignore a specific connector from automatic line routing. So, in this case, auto routing feature can be disabled to the specific connector using the [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#constraints) property of the connector like the following code snippet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorslineroutingdisabled-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorslineroutingdisabled-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorslineroutingdisabled-cs1" %}

## Avoid line overlapping

The diagram provides flexibility to prevent connectors from overlapping, ensuring better clarity and readability. This feature intelligently adjusts connector paths to avoid stacking orthogonal connectors on top of each other, reducing visual clutter and enhancing diagram structure. It is especially useful in complex diagrams with multiple orthogonal connectors, where overlapping lines can make interpretation difficult.

To enable this feature, inject the `AvoidLineOverlapping` module and add its constraints to the diagram.

N> The `AvoidLineOverlapping` feature applies only to orthogonal connectors and requires the `LineRouting` module to be injected with its constraints enabled.
 
* Inject both the `LineRouting` and `AvoidLineOverlapping` modules into the application.

    ```typescript

    import { LineRouting, AvoidLineOverlapping, Diagram } from '@syncfusion/ej2-diagrams';
    /**
     * Injecting the line routing and avoid line overlapping module.
     */
    Diagram.Inject(LineRouting, AvoidLineOverlapping);

    ```
* Add `LineRouting` and `AvoidLineOverlapping` constraints to the diagram constraints to enable line routing with avoid line overlapping support.

    ```html

    <!--
    Initialize the Diagram
    -->
    <ejs-diagram #diagram [constraints]='constraints'>

    ```

    ```typescript
    // Enable line routing and avoid line overlapping constraints.
    public constraints: DiagramConstraints = DiagramConstraints.Default | DiagramConstraints.LineRouting | DiagramConstraints.AvoidLineOverlapping;

    ```

The following example demonstrates how to enable the AvoidLineOverlapping feature in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/AvoidLineOverlappings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/AvoidLineOverlappings/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/AvoidLineOverlappings" %}

The following image illustrates how the connector automatically avoid overlapping with other connectors.  

![AvoidLineOverlapping GIF](images/avoidconnectoroverlap.gif)

## See Also

* [How to add annotations to the connector](./labels)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add connectors to the symbol palette](./symbol-palette)
* [How to perform the interaction on the connector](./interaction#connection-editing)
* [How to create diagram connectors using drawing tools](./tools)