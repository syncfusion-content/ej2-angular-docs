import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public node: NodeModel =[
        { id: 'node16', offsetX: 35, offsetY: 260 },
        { id: 'node17', offsetX: 140, offsetY: 260 },
        { id: 'node18', offsetX: 240, offsetY: 260 }] as NodeModel;
        public created(args: Object): void {
            //Add Nodes collection
            (this.diagram as Diagram).addElements(this.node as any);
        }
    }