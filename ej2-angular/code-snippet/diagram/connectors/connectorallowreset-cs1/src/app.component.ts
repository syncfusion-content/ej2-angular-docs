import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, Diagram, NodeModel, ConnectorModel, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);

@Component({
    imports: [
        DiagramModule
    ],

    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [getNodeDefaults]='getNodeDefaults' [getConnectorDefaults] ='getConnectorDefaults'>
         <e-nodes>
            <e-node id= 'Start' [offsetX]=250 [offsetY]=150>
                <e-node-annotations>
                    <e-node-annotation content="Start">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='End' [offsetX]=450 [offsetY]=300>
                <e-node-annotations>
                    <e-node-annotation content="End">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Bezier' sourceID='Start' targetID='End' [segments]="segments">
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public getNodeDefaults(node: NodeModel): void {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style = { fill: '#6BA5D7', strokeColor: 'white' };
    };

    public segments = [{
        type: 'Bezier',
        point1: { x: 450, y: 150 },
        point2: { x: 250, y: 250 },
    }];

    public getConnectorDefaults(connector: ConnectorModel): void {
        connector.targetDecorator = { shape: 'None' };
        connector.bezierSettings = { allowSegmentsReset: false };
        connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    };
};



