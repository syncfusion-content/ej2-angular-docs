

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, MarginModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100>
            </e-node>
            <e-node id='node2' [offsetX]=200 [offsetY]=200>
            </e-node>
            <e-node id='node3' [offsetX]=400 [offsetY]=300 >
            </e-node>
            <e-node id='group' [children]='children' [padding]="padding">
            </e-node>
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
        return node;
    }
    public children?: string[];
    public padding: MarginModel = {left:10,right:10,top:10,bottom:10}
    ngOnInit(): void {
        this.children = ['node1', 'node2']
    }
    public created(args: Object): void {
        (this.diagram as DiagramComponent).selectAll();
        // Adding the third node into the existing group
        (this.diagram as DiagramComponent).group();
    }
}


