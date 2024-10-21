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
    </ejs-diagram>
    <button (click)="addLayer()">addLayer</button>`,
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
            }
        ]
    }

    /**
     * Add the layers to the existing diagram layer collection
     * newLayer - representing the layer to be added to the diagram.
     * layerObject -  An optional array of objects associated with the layer.
     */
    addLayer() {
        (this.diagram as any).addLayer({
            id: 'newlayer',
            visible: true,
            lock: false,
        }, [{
            type: 'Straight',
            sourceID: 'node1',
            targetID: 'node2',
            
        }]);
    }
   
}