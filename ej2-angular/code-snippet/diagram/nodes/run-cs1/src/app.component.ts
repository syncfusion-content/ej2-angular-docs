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
    template: `<div>
        <button (click)="addNode()">Add Node</button>
        <button (click)="deleteNode()">Delete Node</button>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public node: NodeModel = {
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
    };
    public addNode(): void {
        (this.diagram as Diagram).add(this.node);
    }
    public deleteNode(): void {
        if ((this.diagram as Diagram).nodes.length > 0) {
            (this.diagram as Diagram).remove((this.diagram as Diagram).nodes[0]);
        }
    }
}


