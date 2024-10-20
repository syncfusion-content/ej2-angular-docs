import { DiagramModule, DiagramComponent, NodeModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<button (click) = "select()">Select</button>
    <button (click) = "unSelect()">UnSelect</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=350 [offsetY]=250 ></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public style?: ShapeStyleModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
    select() {
        (this.diagram as any).select([(this.diagram as any).nodes[0]]);
    }
    unSelect() {
        (this.diagram as any).clearSelection()
    }
}