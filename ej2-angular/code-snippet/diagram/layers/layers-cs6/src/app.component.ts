import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule,DiagramComponent, LayerModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
             DiagramModule
    ],
providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [layers]="layers">
    <e-nodes>
            <e-node id='node1' [width]=100 [height]=100 [offsetX]=100 [offsetY]=100 >
                <e-node-annotations>
                    <e-node-annotation content="Layer 1 Object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [width]=100 [height]=100 [offsetX]=100 [offsetY]=300>
                <e-node-annotations>
                    <e-node-annotation content="Layer 1 Object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [width]=100 [height]=100 [offsetX]=300 [offsetY]=300>
                <e-node-annotations>
                    <e-node-annotation content="Layer 2 Object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
    </e-nodes>
    </ejs-diagram>
    <button (click)="moveObjects()">moveObjects</button>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public layers: LayerModel[] =[];

    ngOnInit(): void {
        this.layers = [
            {
                id: 'layer1',
                objects: ['node1','node2']
            },
            {
                id: 'layers2',
                objects:['node3']
            },
        ]
    }

    /**
     * Move objects from one layer to another layer
     * Parameter 1 - An array of object IDs represented as strings to be moved
     * parameter 2 -  The ID of the target layer to which the objects should be moved.
     */
     moveObjects() {
        (this.diagram as any).moveObjects(['node1'], 'layer2');
    }
}