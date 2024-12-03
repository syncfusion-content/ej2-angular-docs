import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent,LayerModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
             DiagramModule
    ],
providers: [ ],
standalone: true,
    selector: "app-container",
    template: `
    <button (click)="removeLayer()">removeLayer</button>
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
                    <e-node-annotation content="Layer 2 Object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
    </e-nodes>
    </ejs-diagram>`,
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
                id: 'layer2',
                objects:['node2']
            },
        ]
    }

    /**
     * Remove the layer from the existing diagram layer collection
     * layerId - representing the id of the layer to be removed from the diagram.
     */
     removeLayer() {
        (this.diagram as any).removeLayer('layer1');
    }
    
}