import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, ShapeStyleModel, IKeyEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (keyDown)="keyDown($event)">
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
    color = 'Pink';
    public keyDown(args: IKeyEventArgs): void {
        if (this.color === 'pink') {
            this.color = 'yellow';
            ((this.diagram as Diagram).nodes[0].style as ShapeStyleModel).fill = 'red';
            (this.diagram as Diagram).dataBind();
          } else {
            this.color = 'pink';
            ((this.diagram as Diagram).nodes[0].style as ShapeStyleModel).fill = 'pink';
            (this.diagram as Diagram).dataBind();
          }
    }
}
