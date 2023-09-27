

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Diagram, DiagramComponent, NodeModel, ConnectorModel,ConnectorConstraints  } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" enableConnectorSplit:true [nodes]='nodes' [connectors]='connectors'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public constraints?: ConnectorConstraints;
    public nodes: NodeModel[] = [
    { id: 'node1', offsetX: 150, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: 'node2', offsetX: 650, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'node3', offsetX: 490, offsetY: 290, width: 100, height: 100, annotations: [{ content: 'node3' }] }
  ];
    public connectors: ConnectorModel[] = [{
        id: 'connector1',sourceID:"node1",targetID:"node2",
        constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
    }
  ];
}


