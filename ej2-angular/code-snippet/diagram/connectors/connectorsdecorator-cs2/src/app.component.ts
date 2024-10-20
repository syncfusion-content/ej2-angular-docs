import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';



import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ConnectorModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-connectors>
        <e-connector id='connector1' type='Straight' flip='Horizontal'[sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1' >
            <e-connector-annotations>
                    <e-connector-annotation content="Horizontal Flip">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        
            <e-connector id='connector2' type='Straight' flip='Vertical' [sourcePoint]='sourcePoint2' [targetPoint]='targetPoint2' >
            <e-connector-annotations>
                    <e-connector-annotation content="Vertical Flip">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
       
            <e-connector id='connector3' type='Straight' flip='Both' [sourcePoint]='sourcePoint3' [targetPoint]='targetPoint3'>
            <e-connector-annotations>
                    <e-connector-annotation content="Both Flip">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint1?: PointModel;
    public targetPoint1?: PointModel;
    public sourcePoint2?: PointModel;
    public targetPoint2?: PointModel;
    public sourcePoint3?: PointModel;
    public targetPoint3?: PointModel;
    ngOnInit(): void {
        this.sourcePoint1 = { x: 100, y: 100 };
        this.targetPoint1 = { x: 200, y: 200 };
        this.sourcePoint2 = { x: 300, y: 100 };
        this.targetPoint2 = { x: 400, y: 200 };
        this.sourcePoint3 = { x: 500, y: 100 };
        this.targetPoint3 = { x: 600, y: 200 };
    }
}


