import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DiagramComponent, DiagramModule, NodeModel, NodeConstraints, ShapeStyleModel, ConnectorConstraints, DiagramConstraints, PointModel
} from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults"  [tooltip]="tooltip" [constraints]="constraints">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150  [tooltip]="tooltip2" [constraints]="constraints1">
                <e-node-annotations>
                    <e-node-annotation content="Node">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
        <e-connector id="connector" type="Straight" [sourcePoint]="sourcePoint" [targetPoint]="targetPoint" [constraints]="constraints2" [tooltip]="tooltip1">
        </e-connector>
      </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 150, y: 250 };
        this.targetPoint = { x: 200, y: 300 };
    }
    public tooltip = {
        content: 'Diagram',
        position: 'BottomRight',
        relativeMode: 'Object'
    }
    public tooltip2 = {
        content: 'Node'
    }
    public tooltip1 = {
        content: 'connector'
    }
    public constraints1 = NodeConstraints.Default | NodeConstraints.InheritTooltip;
    public constraints2 = ConnectorConstraints.Default | ConnectorConstraints.InheritTooltip;
    public constraints = DiagramConstraints.Default | DiagramConstraints.Tooltip
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = '#6BA5D7';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'White';
        return node;
    }
}


