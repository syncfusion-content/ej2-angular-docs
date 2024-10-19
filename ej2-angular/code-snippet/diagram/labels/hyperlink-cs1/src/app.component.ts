import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, PointModel, HyperlinkModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px">
        <e-nodes>
            <e-node id='node1' [height]=100 [width]=100 [offsetX]=150 [offsetY]=150 >
                <e-node-annotations>
                    <e-node-annotation [hyperlink]="hyperlink">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
                <e-connector-annotations>
                    <e-connector-annotation [hyperlink]="hyperlink">
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
    public hyperlink: HyperlinkModel = {
      content: 'Google', link: 'https://google.com',
      //Set the link to open in the current tab
      hyperlinkOpenState:'CurrentTab'
    }
    ngOnInit(): void {
        this.sourcePoint = { x: 300, y: 150 };
        this.targetPoint = { x: 500, y: 300 };
    }
}


