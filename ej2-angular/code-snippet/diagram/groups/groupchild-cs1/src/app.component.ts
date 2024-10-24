import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <button (click)="addChild()">addChild</button>
    <button (click)="removeChild()">removeChild</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="600" [nodes]="nodes" >
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public nodes?: NodeModel[];

    addChild() {
        (this.diagram as any).addChildToGroup(
          (this.diagram as any).nodes[2],
          'node3'
        );
    }
    removeChild() {
        (this.diagram as any).removeChildFromGroup(
          (this.diagram as any).nodes[2],
          'node3'
        );
    }
  
    ngOnInit(): void {

        this.nodes = [
            {
                id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
            }, {
                id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
            }, {
                id: 'group1', children: ['node1', 'node2']
            }, {
                id: 'node3', width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
            }
        ];

    }
}