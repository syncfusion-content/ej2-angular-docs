import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, NodeModel, ShapeAnnotationModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <div class="button">
    <button id="clearButton" (click)='onClick($event)'>Remove Annotation</button>
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
    public annotation: ShapeAnnotationModel[] = [
    {
       id: 'label1', content: 'Annotation'
    }
];
    onClick = (args: MouseEvent) => {
    (this.diagram as Diagram).removeLabels(((this.diagram as Diagram).nodes as NodeModel[])[0] as any, this.annotation);
    }
}


