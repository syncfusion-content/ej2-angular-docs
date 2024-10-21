import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, IElementDrawEventArgs, DiagramComponent, Diagram, NodeModel, BasicShapeModel, DiagramTools, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)' (elementDraw)='elementDraw($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public drawingshape?: BasicShapeModel;
    public node?: NodeModel;
    public elementDraw(args: IElementDrawEventArgs) {
        if (args.state === 'Completed') {
            // Example of alerting when a rectangle is drawn
            alert('Element draw - Rectangle');
        }
    }

    public created(args: Object): void {
        //JSON to create a rectangle
        this.drawingshape = { type: 'Basic', shape: 'Rectangle' };
        this.node = {
            shape: this.drawingshape
        };
        (this.diagram as Diagram).drawingObject = this.node;
        //To draw an object once, activate draw once
        (this.diagram as Diagram).tool = DiagramTools.ContinuousDraw;
        (this.diagram as Diagram).dataBind();
    }
}