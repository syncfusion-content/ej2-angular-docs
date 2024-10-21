import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, OrthogonalSegmentModel,  ConnectorEditing, PointModel, ConnectorConstraints, HierarchicalTree, DiagramModule,ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing,HierarchicalTree);

@Component({
imports: [ 
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
     <button (click)="resetSegments()">resetSegments</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px"   [getNodeDefaults] ='getNodeDefaults' 
>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150
            >
            <e-node-annotations>
                    <e-node-annotation content="node 1">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=350>
            <e-node-annotations>
                    <e-node-annotation content="node 2">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
        <e-connector id='connector' type='Orthogonal' sourceID='node1' sourcrPortID='port1' targetID='node2' targetPortID='port2' [constraints]='constraints'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public segments?: OrthogonalSegmentModel;
    public maxSegmentThumb?: number;
   

    ngOnInit(): void {
        this.sourcePoint = { x: 300, y: 100 };
        this.targetPoint = { x: 350, y: 150 };
        this.segments = [
            { type: 'Orthogonal', direction: 'Bottom', length: 150 },
            { type: 'Orthogonal', direction: 'Right', length: 150 },
            { type: 'Orthogonal', direction: 'Top', length: 100 },
            { type: 'Orthogonal', direction: 'Left', length: 100 }
        ];
    };
    public getNodeDefaults(node: NodeModel| any): void {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        node.expandIcon = {
            height: 15,
            width: 15,
            shape: "Plus",
            fill: 'lightgray',
            offset: {
                x: .5,
                y: .85
            }
        };
        node.collapseIcon.offset = {
            x: .5,
            y: .85
        };
        node.collapseIcon.height = 15;
        node.collapseIcon.width = 15;
        node.collapseIcon.shape = "Minus";

    }
        constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    resetSegments() {
        (this.diagram as any).resetSegments();
    }
};