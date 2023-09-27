

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ConnectorModel, DiagramTools, NodeModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public connectors?: ConnectorModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
    public created(args: Object): void {
        //JSON to create a path
        this.connectors = {
            id: 'connector1',
            type: 'Straight',
            segments: [{ type: "polyline" }]
        } as any as ConnectorModel;
        (this.diagram as Diagram).drawingObject = this.connectors;
        //To draw an object once, activate draw once
        (this.diagram as Diagram).tool = DiagramTools.DrawOnce;
        (this.diagram as Diagram).dataBind();
    }
}


