import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, PointModel, ShapeAnnotationModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <div class="button">
        <button id="UpdateOffset" (click)='onClick($event)'>Update Offset</button>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation" [offset]="offset">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public offset?: PointModel;
    onClick = (args: MouseEvent) => {
        ((this.diagram as Diagram).nodes[0].annotations as ShapeAnnotationModel[])[0].offset = {x:0, y:0.5};
       (this.diagram as Diagram).dataBind();
   }
}


