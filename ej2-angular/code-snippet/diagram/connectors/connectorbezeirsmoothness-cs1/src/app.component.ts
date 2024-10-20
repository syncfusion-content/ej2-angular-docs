import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, DiagramModule, NodeModel, ConnectorModel, BezierSmoothness, PointPortModel, PortVisibility, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing)

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [getNodeDefaults]='getNodeDefaults' [getConnectorDefaults] ='getConnectorDefaults'>
    <e-nodes>
       <e-node id='Start' [offsetX]=250 [offsetY]=150 [ports]='StartPort'>
           <e-node-annotations>
               <e-node-annotation content="Start">
               </e-node-annotation>
           </e-node-annotations>
       </e-node>
       <e-node id='End' [offsetX]=250 [offsetY]=350 [ports]='EndPort'>
           <e-node-annotations>
               <e-node-annotation content="End">
               </e-node-annotation>
           </e-node-annotations>
       </e-node>
   </e-nodes>
   <e-connectors>
       <e-connector id='connector1' type='Bezier' sourceID='Start' targetID='End' sourcePortID='StartPort'targetPortID='EndPort' >
       </e-connector>
   </e-connectors>
</ejs-diagram>`,
encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public StartPort?: PointPortModel[];
    public EndPort?: PointPortModel[];

    ngOnInit(): void {
        this.StartPort = [{
            id: 'StartPort',
            visibility: PortVisibility.Visible,
            shape: 'Circle',
            offset: { x: 1, y: 0.5 },
            style: { strokeColor: '#366F8C', fill: '#366F8C' }
        }];
        this.EndPort = [{
            id: 'EndPort',
            visibility: PortVisibility.Visible,
            shape: 'Circle',
            offset: { x: 0, y: 0.5 },
            style: { strokeColor: '#366F8C', fill: '#366F8C' }
        }];
    };

    public getNodeDefaults(node: NodeModel): void {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style = { fill: '#6BA5D7', strokeColor: 'white' };
    };

    public getConnectorDefaults(connector: ConnectorModel): void {
        connector.targetDecorator = { shape: 'None' };
        connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
        connector.bezierSettings = { smoothness: BezierSmoothness.Default };
    };
}


