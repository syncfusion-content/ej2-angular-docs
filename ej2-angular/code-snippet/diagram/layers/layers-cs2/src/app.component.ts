import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule,DiagramComponent,PointModel,LayerModel} from '@syncfusion/ej2-angular-diagrams';

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
                    <e-node-annotation content="Layer 1 object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='node2' [width]=100 [height]=100 [offsetX]=300 [offsetY]=100>
                <e-node-annotations>
                    <e-node-annotation content="Layer 2 object">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-connectors>
                <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
                <e-connector-annotations>
                    <e-connector-annotation content="Layer 2 object">
                    </e-connector-annotation>
                </e-connector-annotations>
                </e-connector>
            </e-connectors>
    </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public layers: LayerModel[] =[];
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;

    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 300 };
        this.targetPoint = { x: 200, y: 400 };
        this.layers = [
            {
                id: 'layer1',
                //Layer 1 visibility set as false.
                visible: false,
                objects: ['node1']
            },
            {
                id: 'layer2',
                //Layer 1 visibility set as true.
                visible: true,
                objects: ['node2', 'connector'],
            },
        ]
    }
}