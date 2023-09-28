

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, PointModel,FlipDirection, ShapeStyleModel, BasicShapeModel  } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [shape]='shape'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        // Flip the node in Horizontal Direction
        node.flip = 'Horizontal';
        return node;
    }
    public shape: BasicShapeModel = {
       type: 'Basic',
        shape: 'RightTriangle',
    } as BasicShapeModel;
    public created(args: Object): void {
        //Add Node
        (this.diagram as Diagram).select([(this.diagram as Diagram).nodes[0]]);
    }
}


