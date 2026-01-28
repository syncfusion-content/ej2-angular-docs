import { DiagramModule,DiagramComponent, NodeModel, ConnectorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<button (click)="clock()">Rotate Clock Wise</button>
    <button (click)="antiClock()">Rotate Anti Clock Wise</button> <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100>
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
        node.height = 40;
        node.width = 70;
        return node;
    }
    public clock(): void {
        let node = (this.diagram as DiagramComponent).nodes[0];
        /**
         * paramter 1 - Rotate item
         * paramter 2 - angle to be rotated
         */
        (this.diagram as DiagramComponent).rotate(node, 45);
    }
    public antiClock(): void {

        let node = (this.diagram as DiagramComponent).nodes[0];
        /**
         * paramter 1 - Rotate item
         * paramter 2 - angle to be rotated
         */
        (this.diagram as DiagramComponent).rotate(node, -45);

    }
}
