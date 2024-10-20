import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Left" [offset]="offset1">
                    </e-node-annotation>
                    <e-node-annotation id="label2" content="Center" [offset]="offset2">
                    </e-node-annotation>
                    <e-node-annotation id="label3" content="Right" [offset]="offset3">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='{ x: 300, y: 100 }' [targetPoint]='{ x: 400, y: 300 }'>
                <e-connector-annotations>
                    <e-connector-annotation content='connector Top' [offset]='0.2'>
                    </e-connector-annotation>
                    <e-connector-annotation content='connector Center' [offset]='0.6'>
                    </e-connector-annotation>
                    <e-connector-annotation content='connector Bottom' [offset]='0.8'>
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public offset1?: PointModel;
    public offset2?: PointModel;
    public offset3?: PointModel;
    ngOnInit(): void {
        this.offset1 = { x: 0.12, y: 0.1}
        this.offset2 = { x: 0.5, y: 0.5}
        this.offset3 = { x: 0.82, y: 0.9}
    }
}


