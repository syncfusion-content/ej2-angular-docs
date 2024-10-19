import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramModule, UndoRedoService, DiagramComponent, Diagram, ShapeStyleModel } from "@syncfusion/ej2-angular-diagrams";
@Component({
imports: [
         DiagramModule
    ],

providers: [UndoRedoService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram  #diagram id="diagram" width="100%" height="580px" (created)='created($event)'>
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
    public created(args: Object): void {
        //Start to group the changes
        (this.diagram as Diagram).startGroupAction();
        //Makes the changes
        let color: string[] = ['black', 'red', 'green', 'yellow'];
        for (var i = 0; i < color.length; i++) {
            // Updates the fillColor for all the child elements.
            ((this.diagram as Diagram).nodes[0].style as ShapeStyleModel).fill = color[i];
            (this.diagram as Diagram).dataBind();
        }
        //Ends grouping the changes
        (this.diagram as Diagram).endGroupAction();
    }
}



