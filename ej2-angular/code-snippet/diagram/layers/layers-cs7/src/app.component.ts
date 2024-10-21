import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, LayerModel } from '@syncfusion/ej2-angular-diagrams';

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
            <e-node id='node2' [width]=100 [height]=100 [offsetX]=130 [offsetY]=130>
                <e-node-annotations>
                    <e-node-annotation content="Layer 2 Object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [width]=100 [height]=100 [offsetX]=160 [offsetY]=160>
                <e-node-annotations>
                    <e-node-annotation content="Layer 3 Object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
    </e-nodes>
    </ejs-diagram>
    <button (click)="bringLayerForward()">bringLayerForward</button>
    <button (click)="sendLayerBackward()">sendLayerBackward</button>`,
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
                objects: ['node1']
            },
            {
                id: 'layers2',
                objects:['node2']
            },
            {
                id: 'layers3',
                objects:['node3']
            }
        ]
    }

    /**
     * Move the layer forward
     * Parameter 1 -A string representing the id of the layer to be moved forward.
     */
    bringLayerForward() {
        (this.diagram as any).bringLayerForward('layer1');
    }

    /**
     * Move the layer Backward
     * Parameter 1 - A string representing the id of the layer to be  moved backward.
     */
    sendLayerBackward() {
        (this.diagram as any).sendLayerBackward('layer1');
    }
    
}