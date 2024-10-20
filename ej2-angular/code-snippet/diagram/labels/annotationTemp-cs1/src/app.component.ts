import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent,  PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <ng-template #annotationTemplate >
                <input type = "button" value= 'button' >
        </ng-template>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [height]=100 [width]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" >
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
                <e-connector-annotations>
                    <e-connector-annotation>
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
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 300, y: 150 };
        this.targetPoint = { x: 500, y: 300 };
    }
}


