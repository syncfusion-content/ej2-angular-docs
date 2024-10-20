import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ConnectorModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <button (click)="add()">add</button>
    <button (click)="remove()">remove</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public connectors: ConnectorModel = { id: 'connector1', sourcePoint: { x: 100, y: 100 }, targetPoint: { x: 150, y: 150 } } as ConnectorModel;
    public connector: ConnectorModel = {id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 150, y: 170 }, targetPoint: { x: 300, y: 300 } } as ConnectorModel;
    public connector1: ConnectorModel = { id: 'connector3', type: 'Bezier', sourcePoint: { x: 320, y: 320 }, targetPoint: { x: 400, y: 400 } } as ConnectorModel;
    add() {
        (this.diagram as any).add(this.connector as any)
    }
    remove() {
        (this.diagram as any).remove(this.connector as any);
    }
   
}


