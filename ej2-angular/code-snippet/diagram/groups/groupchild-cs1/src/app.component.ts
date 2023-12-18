

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600" [nodes]="nodes" 
    (created)='create($event)'>
</ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public nodes?: NodeModel[];
    // public group?:NodeFilter;

    public create(args: Object): void {
        this.diagram.fitToPage();
        this.diagram.addChildToGroup('group1', 'node3');
        this.diagram.removeChildFromGroup('group1', 'node3');
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


