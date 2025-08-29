---
layout: post
title: Constraints in Angular Diagram Component | Syncfusion®
description: Learn here all about Constraints in Syncfusion® Angular Diagram Component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Constraints 
documentation: ug
domainurl: ##DomainURL##
---

# Constraints in Angular Diagram Component

Constraints enable or disable specific behaviors of diagrams, nodes, and connectors. These constraints are implemented as flagged enumerations, allowing multiple behaviors to be controlled simultaneously using Bitwise operators (`&, |, ~, <<, etc.`).

To learn more about Bitwise operators, refer to the [Bitwise Operations](#bitwise-operations) section.

## Diagram Constraints

Diagram constraints control the overall behavior and functionality of the diagram canvas.

| Constraints | Description |
| -------- | -------- |
|None|Disables all diagram functionalities.|
|Bridging|Enables bridging support for connectors in the diagram.|
|Undo/redo|Enables undo and redo functionality for diagram operations.|
|UserInteraction|Enables user interaction capabilities for the diagram.|
|ApiUpdate|Enables programmatic updates through API calls.|
|PageEditable|Enables editing within the page boundaries.|
|Zoom|Enables zooming functionality for the diagram.|
|PanX|Enables horizontal panning of the diagram.|
|PanY|Enables vertical panning of the diagram.|
|Pan|Enables both horizontal and vertical panning.|
|ZoomTextEdit|Enables text box zooming during text editing operations.|
|Tooltip|Enables tooltip display for diagram elements.|
|Virtualization|Enables virtualization support for large diagrams.|
|LineRouting|Enables automatic line routing for connectors.|
|Default|Enables all default constraints for the diagram.|

The following example demonstrates how to disable page editing using diagram constraints:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default & ~DiagramConstraints.PageEditable;
    }
}
```

The following example shows how to enable bridging constraint along with the default constraints:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default | DiagramConstraints.Bridging
    }
}
```

Multiple behaviors can be added or removed from the default constraints using Bitwise operations:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default & ~(DiagramConstraints.PageEditable | DiagramConstraints.Zoom);
    }
}
```

For more information about diagram constraints, refer to [DiagramConstraints](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramConstraints/).

N> By default, the following constraints are enabled in the diagram:
<br/>* Zoom
<br/>* ApiUpdate
<br/>* PanX
<br/>* PanY
<br/>* Pan
<br/>* Undo/Redo
<br/>* PageEditable
<br/>* Default

## Node Constraints

Node constraints control the behavior and interactions available for individual nodes within the diagram.

| Constraints | Description |
| -------- | -------- |
|None|Disables all node constraints.|
|Select|Enables node selection capability.|
|Drag|Enables node dragging functionality.|
|Rotate|Enables node rotation capability.|
|Shadow|Enables shadow display for the node.|
|PointerEvents|Enables pointer event handling for the node.|
|Delete|Enables node deletion capability.|
|InConnect|Enables incoming connections to the node.|
|OutConnect|Enables outgoing connections from the node.|
|AllowDrop|Enables drop operations on the node.|
|Individual|Enables individual resize handles for the node.|
|ResizeNorthEast|Enables resizing from the northeast corner.|
|ResizeEast|Enables resizing from the east side.|
|ResizeSouthEast|Enables resizing from the southeast corner.|
|ResizeSouth|Enables resizing from the south side.|
|ResizeSouthWest|Enables resizing from the southwest corner.|
|ResizeWest|Enables resizing from the west side.|
|ResizeNorthWest|Enables resizing from the northwest corner.|
|ResizeNorth|Enables resizing from the north side.|
|AspectRatio|Maintains aspect ratio during resize operations.|
|ReadOnly|Enables read-only mode for node annotations.|
|HideThumbs|Hides all resize thumbs for the node.|
|Tooltip|Enables tooltip display for the node.|
|InheritTooltip|Inherits tooltip settings from parent objects.|
|Resize|Enables overall resize functionality for the node.|
|Inherit|Inherits interaction settings from parent objects.|
|Expandable|Enables expand/collapse functionality for the node.|
|AllowMovingOutsideLane|Allows movement outside swim lane boundaries.|
|Default|Enables all default constraints for the node.|

The following example demonstrates how to disable rotation using node constraints:

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
        this.nodeConstraints = NodeConstraints.Default & ~NodeConstraints.Rotate;
    }
}
```

The following example shows how to add shadow constraint to the default node constraints:

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
        this.nodeConstraints = NodeConstraints.Default | NodeConstraints.Shadow;
    }
}
```

The following code example shows how to enable tooltip for a node:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { NodeConstraints, DiagramTooltipModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80 [constraints]='nodeConstraints' [tooltip]='tooltip'>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public nodeConstraints: NodeConstraints;
    public tooltip: DiagramTooltipModel;
    ngOnInit(): void {
        this.nodeConstraints = NodeConstraints.Default | NodeConstraints.Tooltip;
        this.tooltip = { content: 'Node' };
    }
}
```

Multiple behaviors can be added or removed from the default constraints using Bitwise operations:

```typescript
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
        this.nodeConstraints = NodeConstraints.Default & ~(NodeConstraints.Rotate | NodeConstraints.Resize);
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs1" %}

For more information about node constraints, refer to [NodeConstraints](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeConstraints/).

N>By default, the following constraints are enabled for nodes:
<br/>* Select
<br/>* Drag
<br/>* Resize
<br/>* Rotate
<br/>* InConnect
<br/>* OutConnect
<br/>* PointerEvents
<br/>* ResizeNorthEast
<br/>* ResizeEast
<br/>* ResizeSouthEast
<br/>* ResizeSouth
<br/>* ResizeSouthWest
<br/>* ResizeWest
<br/>* ResizeNorthWest
<br/>* ResizeNorth
<br/>* Inherit
<br/>* Expandable
<br/>* Individual
<br/>* InheritTooltip
<br/>* Default

## Connector Constraints

Connector constraints control the behavior and interactions available for connectors within the diagram.

| Constraints | Description |
| -------- | -------- |
|None|Disables all connector constraints.|
|Select|Enables connector selection capability.|
|Delete|Enables connector deletion capability.|
|Drag|Enables connector dragging functionality.|
|DragSourceEnd|Enables dragging of the connector's source endpoint.|
|DragTargetEnd|Enables dragging of the connector's target endpoint.|
|DragSegmentThumb|Enables dragging of segment control points.|
|Interaction|Enables general interaction capabilities for the connector.|
|AllowDrop|Enables drop operations on the connector.|
|Bridging|Enables bridging functionality for the connector.|
|InheritBridging|Inherits bridging settings from parent objects.|
|BridgeObstacle|Enables the connector to act as a bridge obstacle.|
|PointerEvents|Enables pointer event handling for the connector.|
|ConnectToNearByNode|Enables automatic connection to nearby nodes.|
|ConnectToNearByPort|Enables automatic connection to nearby ports.|
|Tooltip|Enables tooltip display for the connector.|
|LineRouting|Enables line routing functionality for the connector.|
|InheritLineRouting|Inherits line routing settings from parent objects.|
|InheritTooltip|Inherits tooltip settings from parent objects.|
|ConnectToNearByElement|Enables automatic connection to nearby elements.|
|InheritSegmentThumbShape|Inherits segment thumb shape from parent objects.|
|ReadOnly|Enables read-only mode for the connector.|
|Default|Enables all default constraints for the connector.|

The following code demonstrates how to disable selection using connector constraints:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ConnectorConstraints, PointModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint: PointModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.connectorConstraints = ConnectorConstraints.Default & ~ConnectorConstraints.Select;
    }
}
```

The following example shows how to add bridging constraint to the default connector constraints:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ConnectorConstraints, PointModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint: PointModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.connectorConstraints = ConnectorConstraints.Default | ConnectorConstraints.Bridging;
    }
}
```

N> To visualize connector bridging, inject the ConnectorBridging module.

The following example shows how to enable tooltip for connectors:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ConnectorConstraints, DiagramTooltipModel, PointModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints' [tooltip]='tooltip'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint: PointModel;
    public tooltip: DiagramTooltipModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.connectorConstraints = ConnectorConstraints.Default | ConnectorConstraints.Tooltip;
        this.tooltip = { content: 'Connector' };
    }
}
```

Multiple behaviors can be added or removed from the default constraints using Bitwise operations:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ConnectorConstraints, PointModel } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint: PointModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        // Removing multiple constraints from default
        this.connectorConstraints = ConnectorConstraints.Default & ~(ConnectorConstraints.DragSourceEnd | ConnectorConstraints.DragTargetEnd);
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs2" %}

For more information about connector constraints, refer to [ConnectorConstraints](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorConstraints/).

N>By default, the following constraints are enabled for connectors:
<br/>* Select
<br/>* Delete
<br/>* Drag
<br/>* Interaction
<br/>* ConnectToNearByNode
<br/>* ConnectToNearByPort
<br/>* ConnectToNearByElement
<br/>* BridgeObstacle
<br/>* InheritBridging
<br/>* PointerEvents
<br/>* InheritLineRouting
<br/>* InheritTooltip
<br/>* InheritSegmentThumbShape
<br/>* Default

## Port Constraints

Port constraints control the behavior and connection capabilities of ports attached to nodes.

| Constraints | Description |
| -------- | -------- |
|None|Disables all port constraints.|
|Draw|Enables connection creation when hovering over the port.|
|Drag|Enables port dragging functionality.|
|InConnect|Enables incoming connections to the port only.|
|OutConnect|Enables outgoing connections from the port only.|
|ToolTip|Enables tooltip display for the port.|
|InheritTooltip|Inherits tooltip settings from parent objects.|
|Default|Enables all default constraints for the port.|

The following code demonstrates how to disable connection creation with a port:

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
            constraints: PortConstraints.None
        }];
    }
}
```

The following code example shows how to configure port constraints to accept only incoming connections:

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
            constraints: PortConstraints.InConnect
        }];
    }
}
```

Multiple behaviors can be combined using Bitwise operations:

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
            constraints: PortConstraints.Default | PortConstraints.Draw
        }];
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs3" %}

For more information about port constraints, refer to [PortConstraints](https://ej2.syncfusion.com/angular/documentation/api/diagram/portConstraints/).

N> By default, the following constraints are enabled for ports:
<br/>* InConnect
<br/>* OutConnect

## Annotation Constraints

Annotation constraints control the behavior and edit ability of text annotations on nodes and connectors.

| Constraints | Description |
| -------- | -------- |
|ReadOnly|Enables read-only mode for the annotation.|
|InheritReadOnly|Inherits read-only settings from parent objects.|
|Select|Enables selection capability for the annotation.|
|Drag|Enables dragging functionality for the annotation.|
|Resize|Enables resize capability for the annotation.|
|Rotate|Enables rotation capability for the annotation.|
|Interaction|Enables general interaction capabilities for the annotation.|
|None|Disables all constraints for the annotation.|

The following code demonstrates how to enable read-only mode for annotations:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { AnnotationConstraints } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80>
                <e-node-annotations>
                    <e-node-annotation content='Start' [constraints]='annotationConstraints'></e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public annotationConstraints: AnnotationConstraints;
    ngOnInit(): void {
        this.annotationConstraints = AnnotationConstraints.ReadOnly;
    }
}
```

The following example shows how to enable multiple interactions for annotations:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { AnnotationConstraints } from "@syncfusion/ej2-angular-diagrams";

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=60 [width]=100 [offsetX]=300 [offsetY]=80>
                <e-node-annotations>
                    <e-node-annotation content='Start' [constraints]='annotationConstraints'></e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public annotationConstraints: AnnotationConstraints;
    ngOnInit(): void {
        this.annotationConstraints = AnnotationConstraints.Select | AnnotationConstraints.Drag | AnnotationConstraints.Resize | AnnotationConstraints.Rotate;
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs4" %}

For more details about annotation constraints, refer to [AnnotationConstraints](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationConstraints/#AnnotationConstraints/).

## Selector Constraints

Selector constraints control the visibility and behavior of selection handles and thumbs that appear when elements are selected.

| Constraints | Description |
| -------- | -------- |
|None|Hides all selector elements.|
|ConnectorSourceThumb|Shows or hides the connector's source thumb.|
|ConnectorTargetThumb|Shows or hides the connector's target thumb.|
|ResizeSouthEast|Shows or hides the bottom-right resize handle.|
|ResizeSouthWest|Shows or hides the bottom-left resize handle.|
|ResizeNorthEast|Shows or hides the top-right resize handle.|
|ResizeNorthWest|Shows or hides the top-left resize handle.|
|ResizeEast|Shows or hides the middle-right resize handle.|
|ResizeWest|Shows or hides the middle-left resize handle.|
|ResizeSouth|Shows or hides the bottom-center resize handle.|
|ResizeNorth|Shows or hides the top-center resize handle.|
|Rotate|Shows or hides the rotation handle.|
|UserHandle|Shows or hides custom user handles.|
|ToolTip|Shows or hides tooltips during drag, resize, and rotate operations.|
|ResizeAll|Shows or hides all resize handles.|
|All|Shows all available handles.|

The following code demonstrates how to hide the rotation handle:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SelectorModel, SelectorConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [selectedItems]='selectedItems'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public selectedItems: SelectorModel;
    ngOnInit(): void {
        this.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.Rotate };
    }
}
```

The following code shows how to hide the default tooltip during drag, resize, and rotate operations:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SelectorModel, SelectorConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [selectedItems]='selectedItems'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public selectedItems: SelectorModel;
    ngOnInit(): void {
        this.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.Tooltip };
    }
}
```

The following code example shows how to disable user handle functionality:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SelectorModel, SelectorConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [selectedItems]='selectedItems'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public selectedItems: SelectorModel;
    ngOnInit(): void {
        this.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.UserHandle };
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs5" %}

For more information about selector constraints, refer to [SelectorConstraints](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorConstraints/).

N> By default, the following constraints are enabled for selected items:
<br/>* Rotate
<br/>* UserHandle
<br/>* ResizeAll
<br/>* All
<br/>* ToolTip

## Snap Constraints

Snap constraints control the visibility of gridlines and enable or disable snapping functionality for precise element positioning.

| Constraints | Description |
| -------- | -------- |
|None|Disables snapping for all diagram elements.|
|ShowHorizontalLines|Displays horizontal gridlines in the diagram.|
|ShowVerticalLines|Displays vertical gridlines in the diagram.|
|ShowLines|Displays both horizontal and vertical gridlines.|
|SnapToHorizontalLines|Enables snapping to horizontal gridlines only.|
|SnapToVerticalLines|Enables snapping to vertical gridlines only.|
|SnapToLines|Enables snapping to both horizontal and vertical gridlines.|
|SnapToObject|Enables snapping to other objects in the diagram.|
|All|Shows gridlines and enables all snapping functionality.|

The following code demonstrates how to show only horizontal gridlines:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SnapSettingsModel, SnapConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public snapSettings: SnapSettingsModel;
    ngOnInit(): void {
        this.snapSettings = {
            constraints: SnapConstraints.ShowHorizontalLines
        };
    }
}
```

Multiple snap behaviors can be combined using Bitwise operations:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SnapSettingsModel, SnapConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public snapSettings: SnapSettingsModel;
    ngOnInit(): void {
        this.snapSettings = {
            constraints: SnapConstraints.ShowHorizontalLines | SnapConstraints.ShowVerticalLines
        };
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs6" %}

For more information about snap constraints, refer to [SnapConstraints](https://ej2.syncfusion.com/angular/documentation/api/diagram/snapConstraints/).

N> By default, the following constraints are enabled for snap functionality:
<br/>* ShowLines
<br/>* ShowVerticalLines
<br/>* ShowHorizontalLines
<br/>* SnapToLines
<br/>* SnapToHorizontalLines
<br/>* SnapToVerticalLines
<br/>* SnapToObject
<br/>* All

## Boundary Constraints

Boundary constraints define the interaction boundaries for diagram elements, controlling where users can perform operations.

| Constraints | Description |
| -------- | -------- |
|Infinity|Allows interactions at infinite height and width.|
|Diagram|Limits interactions within the diagram's height and width.|
|Page|Limits interactions within the page boundaries.|

The following code demonstrates how to limit interactions within page boundaries:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { PageSettingsModel, BoundaryConstraints } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [pageSettings]='pageSettings'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public pageSettings: PageSettingsModel;
    ngOnInit(): void {
        this.pageSettings = {
            boundaryConstraints: 'Page'
        };
    }
}
```

Refer sample below

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/constraints/constraints-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/constraints/constraints-cs7" %}

For more information about boundary constraints, refer to [BoundaryConstraints](https://ej2.syncfusion.com/angular/documentation/api/diagram/boundaryConstraints/).

## Inherit Behaviors

When behaviors are defined at both the specific object level (node/connector) and diagram level, inheritance options determine the actual behavior applied.

The following code example demonstrates how to inherit line bridging behavior from the diagram model:

```typescript
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramConstraints, ConnectorBridging, ConnectorConstraints, PointModel } from "@syncfusion/ej2-angular-diagrams";
Diagram.Inject(ConnectorBridging);

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'>
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint: PointModel;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default | DiagramConstraints.Bridging;
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.connectorConstraints = ConnectorConstraints.Default | ConnectorConstraints.InheritBridging;
    }
}
```

## Bitwise Operations

Bitwise operations manipulate flagged enumerations to enable precise control over multiple constraint behaviors simultaneously.

### Add operation

Use the Bitwise `|` (OR) operator to add or enable multiple values:

```typescript
node.constraints = NodeConstraints.Select | NodeConstraints.Rotate;
```

This example enables both selection and rotation operations for the node.

### Remove operation

Use the Bitwise `&~` (XOR) operator to remove or disable specific values:

```typescript
node.constraints = node.constraints & ~(NodeConstraints.Rotate);
```

This example disables rotation while maintaining other enabled constraints.

### Check operation

Use the Bitwise `&` (AND) operator to verify if specific values are enabled:

```typescript
if ((node.constraints & (NodeConstraints.Rotate)) == (NodeConstraints.Rotate));
```

This example checks whether rotation constraints are enabled for a node. When the node has rotation constraints enabled, the expression returns the rotate constraint value.