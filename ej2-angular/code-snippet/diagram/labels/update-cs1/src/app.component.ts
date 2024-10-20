import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, NodeModel, ShapeStyleModel, ShapeAnnotationModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <div class="button">
        <button id="UpdateButton" (click)='onClick($event)'>Update Annotation</button>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation">
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
    onClick = (args: MouseEvent) => {
        ((this.diagram as Diagram).nodes[0].annotations as ShapeAnnotationModel[])[0].content = 'Updated Annotation';
        (this.diagram as Diagram).dataBind();
    }
}


