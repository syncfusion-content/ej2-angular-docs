import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
    <button (click)="addChild()">addChildToGroup</button>
    <button (click)="removeChild()">removeChildFromGroup</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="600" [nodes]="nodes" >
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public nodes?: NodeModel[];
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
    addChild() {
        // Adds the specified diagram object to the specified group node.
        /**
         * parameter 1 - The group node to which the diagram object will be added.
         * parameter 2 - The diagram object to be added to the group.
         */
        (this.diagram as DiagramComponent).addChildToGroup(
            (this.diagram as DiagramComponent).getObject('group1'),
            'node3'
        );
    }
    removeChild() {
        // Removes the specified diagram object from the specified group node.
        /**
         * parameter 1 - The group node from which the diagram object will be removed.
         * parameter 2 - The diagram object to be removed from the group.
         */
        (this.diagram as DiagramComponent).removeChildFromGroup(
            (this.diagram as DiagramComponent).getObject('group1'),
            'node3'
        );
    }
}