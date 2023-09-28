


import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramComponent, Diagram, NodeModel, ShapeStyleModel } from "@syncfusion/ej2-angular-diagrams";
@Component({
    selector: "app-container",
    template: `<ejs-diagram  #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height =  100;
        node.width =  100;
        ((node as NodeModel).style as ShapeStyleModel).fill =  '#6BA5D7';
        ((node as NodeModel).style as ShapeStyleModel).strokeColor =  'white';
        return  node;
    };
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



