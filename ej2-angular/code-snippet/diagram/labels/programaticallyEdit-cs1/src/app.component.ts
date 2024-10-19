import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <div class="button">
        <button id="textEdit" (click)='onClick($event)'>Start Text Edit</button>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation Text">
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
        //Pass the node which you want to edit
        (this.diagram as Diagram).startTextEdit((this.diagram as Diagram).nodes[0]);
    }
}
