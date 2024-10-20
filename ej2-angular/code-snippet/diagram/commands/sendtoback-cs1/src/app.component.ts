import { DiagramModule,DiagramComponent, NodeModel, ConnectorModel, ShapeStyleModel  } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<button (click)="sendToBack()">Send To Back</button><ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=120 [offsetY]=100>
            </e-node>
            <e-node id='node2' [offsetX]=150 [offsetY]=120>
            </e-node>
            <e-node id='node3' [offsetX]=170 [offsetY]=150>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public selArray: (NodeModel | ConnectorModel)[] = [];
    public getNodeDefaults(node: NodeModel | any): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
    public sendToBack(): void {
        //send to back
        (this.diagram as DiagramComponent).sendToBack();
    }
}
