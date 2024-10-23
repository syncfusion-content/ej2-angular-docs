import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, NodeModel, PathModel, DiagramTools, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public node?: NodeModel;
    public created(args: Object): void {
        //JSON to create a path
        this.node = {
            id: "Path",
            style: { fill: "#fbe172" },
            annotations: [{
                content: "Path"
            }],
            shape: {
                type:'Path',
                data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z',
            } as PathModel
        };
        (this.diagram as Diagram).drawingObject = this.node;
        //To draw an object once, activate draw once
        (this.diagram as Diagram).tool = DiagramTools.ContinuousDraw;
        (this.diagram as Diagram).dataBind();
    }
}