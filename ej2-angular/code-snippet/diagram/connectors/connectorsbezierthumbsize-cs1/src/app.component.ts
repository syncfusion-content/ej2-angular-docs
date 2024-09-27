import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ConnectorConstraints,NodeModel, ConnectorModel,ConnectorEditing,BezierSegmentModel, PointModel, OrthogonalSegmentModel } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="900px" height="500px" [getConnectorDefaults] ='getConnectorDefaults' [getNodeDefaults]  ='getNodeDefaults'  [segmentThumbSize]= 15>
          <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 > </e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=400 > </e-node>
            <e-node id='node3' [offsetX]=550 [offsetY]=150 > </e-node>
            <e-node id='node4' [offsetX]=800 [offsetY]=400 > </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Bezier' sourceID='node1'  targetID='node2' [segments]='segments1' [constraints]='Constraints1'>
            </e-connector>
            <e-connector id='connector2' type='Bezier' sourceID='node3'  targetID='node4' [segments]='segments2' [constraints]='Constraints2' [segmentThumbSize] = 20 >
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
    public segments?: OrthogonalSegmentModel;
    ngOnInit(): void {
        
    }
    public getConnectorDefaults(connector: ConnectorModel): void {
        connector.style = {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        }

    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
    public segments1 = [
        {
            type: 'Bezier',
            point: { x: 200, y: 300 },
        },
        {
            type: 'Bezier',
            point: { x: 320, y: 400 }
        }
    ]

    public segments2 = [
        {
            type: 'Bezier',
            point: { x: 600, y: 300 },
        },
        {
            type: 'Bezier',
            point: { x: 320, y: 400 }
        }
    ]

    public Constraints1 =  ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb

    public Constraints2 =  ConnectorConstraints.Default & ~(ConnectorConstraints.InheritSegmentThumbSize) | ConnectorConstraints.DragSegmentThumb

}


