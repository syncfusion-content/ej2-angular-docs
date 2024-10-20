import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, ShapeAnnotationModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <div class="button">
        <button id="addButton" (click)='onClick($event)'>Add Annotation</button>
    </div>
        <ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public annotation?: ShapeAnnotationModel[];
    onClick = (args: MouseEvent) => {
        this.annotation = [{
            id: 'label1',
            content: 'Annotation'
        }];
        //Method to add labels at run time
        (this.diagram as Diagram).addLabels((this.diagram as Diagram).nodes[0], this.annotation);
        (this.diagram as Diagram).dataBind();
    }
}


