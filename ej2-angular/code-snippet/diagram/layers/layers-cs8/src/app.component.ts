import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule , LayerModel, DiagramComponent } from '@syncfusion/ej2-angular-diagrams'

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
            <e-node id='node2' [width]=100 [height]=100 [offsetX]=160 [offsetY]=360>
                <e-node-annotations>
                    <e-node-annotation content="Layer 2 Object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node3' [width]=100 [height]=100 [offsetX]=300 [offsetY]=100>
                <e-node-annotations>
                    <e-node-annotation content="Layer 1 Object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
    </e-nodes>
    </ejs-diagram>
    <button (click)="clonelayer()">clonelayer</button>`,
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
                objects: ['node1', 'node3']
            },
            {
                id: 'layers2',
                objects:['node2']
            }
        ]
    
    }
    /**
     * To Clone the layer
     * Parameter 1 - A string representing the name of the  layer to be cloned.
     */
    clonelayer() {
        (this.diagram as any).cloneLayer('layer1');
    }
    
}