import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel, ConnectorModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" [connectors]="connectors">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public nodes: NodeModel[] = [
        {
            id: 'node1', offsetX: 150, offsetY: 150, width:100, height:100,
            annotations: [{ id:"label1", template:'<div><input type="button" value="Submit"></div>' }],
        }
    ]
    public connectors: ConnectorModel[] = [
        {
            id: 'connector', sourcePoint: { x: 300, y: 100 }, targetPoint: { x: 400, y: 300 },
            annotations: [{ id:"label1", height: 60, width: 100, offset: 0.5, template:'<div><input type="button" value="Submit"></div>' }],
        }
    ]
    ngOnInit(): void {
        
    }
}


