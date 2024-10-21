import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ConnectorModel, DiagramTools, NodeModel, DiagramModule } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
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
        (this.diagram as Diagram).tool = DiagramTools.ContinuousDraw;
        (this.diagram as Diagram).dataBind();
    }
}


