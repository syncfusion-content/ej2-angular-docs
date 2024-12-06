import { DiagramModule,DiagramComponent, NodeModel, ShapeStyleModel  } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<label>( CTRL + G ) </label><button (click)="group()">Group</button>
   <label>( CTRL + Shift + U) </label> <button (click)="unGroup()">Un Group</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' >
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100>
            </e-node>
            <e-node id='node2' [offsetX]=300 [offsetY]=100>
            </e-node>
            <e-node id='node3' [offsetX]=200 [offsetY]=200>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourceID]='sourcePoint1' [targetID]='targetPoint1'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;

    sourcePoint1: any = "node1";
    targetPoint1: any = "node2";

    // public children = ['node1', 'node2', 'node3', 'connector'];
    public getNodeDefaults(node: NodeModel | any): NodeModel {
        node.height = 70;
        node.width = 100;
        return node;
    }
    public group(): void {
        //Selects the diagram
        (this.diagram as DiagramComponent).selectAll();
        //Groups the selected elements.
        (this.diagram as DiagramComponent).group();
    }

    public unGroup(): void {
        //unGroups the selected elements.
        (this.diagram as DiagramComponent).unGroup();
    }
}
