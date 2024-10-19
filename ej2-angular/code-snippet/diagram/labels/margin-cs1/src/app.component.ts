import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, VerticalAlignment, HorizontalAlignment, MarginModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

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
                    <e-node-annotation id="label1" content="Annotation" [offset]="offset" [horizontalAlignment]="horizontalAlignment" [verticalAlignment]="verticalAlignment" [margin]="margin">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
                <e-connector-annotations>
                    <e-connector-annotation content='annotation' [offset]=0.2 [margin]="marginConnector">
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
    public margin?: MarginModel;
    public offset?: PointModel;
    public verticalAlignment?: VerticalAlignment;
    public horizontalAlignment?: HorizontalAlignment;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;
    public marginConnector?: MarginModel;
    ngOnInit(): void {
        // Sets the margin for the content
        this.margin = { top: 10 }
        this.horizontalAlignment = 'Center'
        this.verticalAlignment = 'Top'
        this.offset = { x: 0.5, y: 1}
        this.sourcePoint = { x: 300, y: 150 };
        this.targetPoint = { x: 500, y: 300 };
        this.marginConnector = { left:40 }
    }
}