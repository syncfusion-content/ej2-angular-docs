import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<button (click)="group()">group selected nodes</button>
     <ejs-diagram #diagram id="diagram" width="100%" height="900px" [nodes]='nodes' (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public nodes: NodeModel[] = [
        {
            id: 'node1', height: 100, width: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
        },
        {
            id: 'node2', height: 100, width: 100, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
        },
        {
            id: 'node3', height: 100, width: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
        },
    ];
    public created(args: Object): void {
        (this.diagram as DiagramComponent).selectAll();
    }
    public group(): void {
        // Groups the selected nodes and connectors in the diagram.
        (this.diagram as DiagramComponent).group();
    }
}


