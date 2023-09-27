

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, NodeConstraints, DiagramTooltipModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150  [tooltip]="tooltip" [constraints]="constraints">
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public tooltip?: DiagramTooltipModel;
    public constraints?: NodeConstraints;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    ngOnInit(): void {
        this.tooltip = {
            //Sets the content of the Tooltip
            content: 'Node1',
            //Sets the position of the Tooltip
            position: 'BottomRight',
            //Sets the tooltip position relative to the node
            relativeMode: 'Object'
        }
        this.constraints = NodeConstraints.Default | NodeConstraints.Tooltip
    }
}


