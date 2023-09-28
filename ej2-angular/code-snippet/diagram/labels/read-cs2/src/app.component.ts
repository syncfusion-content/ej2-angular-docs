

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, PointModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Left" [offset]="offset1">
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Center" [offset]="offset2">
                    </e-node-annotation>
                    <e-node-annotation id="label3" content="Right" [offset]="offset3">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public offset1?: PointModel;
    public offset2?: PointModel;
    public offset3?: PointModel;
    ngOnInit(): void {
        this.offset1 = { x: 0.5, y: 1}
        this.offset2 = { x: 0.5, y: 1}
        this.offset3 = { x: 0.5, y: 1}
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
}


