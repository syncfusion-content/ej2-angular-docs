import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, NodeModel, BasicShapeModel, DiagramTools, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

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
    public drawingshape?: BasicShapeModel;
    public node?: NodeModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "Black";
        return node;
    }
    public created(args: Object): void {
        //JSON to create a rectangle
        this.drawingshape = { type: 'Basic', shape: 'Polygon' };
        this.node = {
            shape: this.drawingshape
        };
        (this.diagram as Diagram).drawingObject = this.node;
        //To draw an object once, activate draw once
        (this.diagram as Diagram).tool = DiagramTools.DrawOnce;
        (this.diagram as Diagram).dataBind();
    }
}