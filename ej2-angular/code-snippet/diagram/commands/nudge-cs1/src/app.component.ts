import { DiagramModule,DiagramComponent, NodeModel, ConnectorModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<label> Nudge </label><button (click)="right()">Right</button>
    <button (click)="left()">Left</button>
    <button (click)="up()">Up</button>
    <button (click)="down()">Down</button><ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
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
    public right(): void {
        //nudge to right
        (this.diagram as DiagramComponent).nudge("Right");
    }

    public left(): void {
        //nudge to Left
        (this.diagram as DiagramComponent).nudge("Left");
    }

    public up(): void {
        //nudge to Up
        (this.diagram as DiagramComponent).nudge("Up");
    }
    public down(): void {
        //nudge to Down
        (this.diagram as DiagramComponent).nudge("Down");
    }
}