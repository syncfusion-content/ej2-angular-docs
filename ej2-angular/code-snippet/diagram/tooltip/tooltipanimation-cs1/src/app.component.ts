

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
            content: 'Node1',
            position: 'BottomCenter',
            relativeMode: 'Object',
            animation: {
                //Animation settings to be applied on the Tooltip, while it is being shown over the target.
                open: {
                    //Animation effect on the Tooltip is applied during open and close actions.
                    effect: 'ZoomIn',
                    //Duration of the animation that is completed per animation cycle.
                    duration: 1000,
                    //Indicating the waiting time before animation begins.
                    delay: 0
                },
                //Animation settings to be applied on the Tooltip, when it is closed.
                close: {
                    effect: 'ZoomOut',
                    duration: 500,
                    delay: 0
                }
            }
        }
        this.constraints = NodeConstraints.Default | NodeConstraints.Tooltip
    }
}


