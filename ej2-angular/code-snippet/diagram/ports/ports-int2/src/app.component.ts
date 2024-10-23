import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, ConnectorModel, PointPortModel, PortVisibility,PortConstraints, PointModel, PathPortModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],
providers: [ ],
standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getConnectorDefaults]='getConnectorDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [width]=100 [height]=100 [ports]='ports'></e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [ports]='ports1'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public sourcePoint?: PointModel;
    public targetPoint?: PointModel;

    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 300, y: 120 };
    }
    
    public ports: PointPortModel[] = [
        {
            offset: {
                x: 1,
                y: 0.5
            },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default | PortConstraints.Draw,
        },
    ]
    public ports1: PathPortModel[] = [
        {
           offset: 0.5,
           visibility: PortVisibility.Visible,
           constraints: PortConstraints.Default | PortConstraints.Draw,
        },
    ]

    public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
        connector.type = 'Bezier';
        return connector;
    }

}


