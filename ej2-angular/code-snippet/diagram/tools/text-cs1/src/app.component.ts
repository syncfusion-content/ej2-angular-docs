import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, NodeModel, TextModel, DiagramTools, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public node?: NodeModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
    public created(args: Object): void {
        //JSON to create a path
        this.node = {
            shape: {
                type:'Text',
            } as TextModel
        };
        (this.diagram as Diagram).drawingObject = this.node;
        //To draw an object once, activate draw once
        (this.diagram as Diagram).tool = DiagramTools.ContinuousDraw;
        (this.diagram as Diagram).dataBind();
    }
}


