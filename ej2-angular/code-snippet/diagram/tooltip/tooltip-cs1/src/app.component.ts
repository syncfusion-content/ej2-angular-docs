import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel, NodeConstraints, ShapeStyleModel,ConnectorConstraints, ConnectorModel, PointModel} from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults">
        <e-nodes>
            <e-node id='node1' [offsetX]=200 [offsetY]=300  [tooltip]="tooltip" [constraints]="constraints1">
            <e-node-annotations>
                    <e-node-annotation content="Node">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [tooltip]="tooltip1" [constraints]="constraints2">
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public constraints?: NodeConstraints;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
    }
    public tooltip = {
        content: 'Node',
        relativeMode: 'Object'
    }
    public tooltip1 = {
        content: 'connector',
       relativeMode: 'Object'
    }
    public constraints1 = NodeConstraints.Default | NodeConstraints.Tooltip;
    public constraints2 = ConnectorConstraints.Default | ConnectorConstraints.Tooltip;
}