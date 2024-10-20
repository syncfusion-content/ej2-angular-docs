import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ConnectorModel , ConnectorBridgingService, NodeModel, ShapeStyleModel, DiagramConstraints } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ConnectorBridgingService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px"  [nodes] = 'nodes' [connectors] = 'connectors' [getNodeDefaults] ='getNodeDefaults' [constraints]='diagramConstraints'></ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public diagramConstraints?: DiagramConstraints;
    ngOnInit(): void {
        this.diagramConstraints = DiagramConstraints.Default | DiagramConstraints.Bridging;
    }
    public nodes: NodeModel[] = [{
        id: 'Transaction',
        width: 150,
        height: 60,
        offsetX: 300,
        offsetY: 60,
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        },
        annotations: [{
            id: 'label1',
            content: 'Start Transaction',
            offset: { x: 0.5, y: 0.5 }
        }]
    },
    {
        id: 'Verification',
        width: 150,
        height: 60,
        offsetX: 300,
        offsetY: 250,
        shape: {
            type: 'Flow',
            shape: 'Process'
        },
        annotations: [{
            id: 'label2',
            content: 'Verification',
            offset: { x: 0.5, y: 0.5 }
        }]
    }];

    public connectors: ConnectorModel[] = [{
        id: 'connector1',
        type: 'Straight',
        sourceID: 'Transaction',
        targetID: 'Verification'
    },
    {
        id: 'connector2',
        type: 'Straight',
        sourcePoint: { x: 200, y: 130 },
        targetPoint: { x: 400, y: 130 }
    },
    {
        id: 'connector3',
        type: 'Straight',
        sourcePoint: { x: 200, y: 170 },
        targetPoint: { x: 400, y: 170 }
    }];

    public getNodeDefaults(node: NodeModel): void {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
    };
    
}