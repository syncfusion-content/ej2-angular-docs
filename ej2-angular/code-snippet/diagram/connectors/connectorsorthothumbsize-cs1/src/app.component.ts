import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel,ConnectorEditing, ConnectorModel,ConnectorConstraints, OrthogonalSegmentModel, PointModel } from '@syncfusion/ej2-angular-diagrams';
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
            <e-node id='node1' [offsetX]=200 [offsetY]=200 > </e-node>
            <e-node id='node2' [offsetX]=400 [offsetY]=400 > </e-node>
            <e-node id='node3' [offsetX]=600 [offsetY]=200 > </e-node>
            <e-node id='node4' [offsetX]=800 [offsetY]=400 > </e-node>
        </e-nodes>
        <e-connectors>
            <e-connector id='connector1' type='Orthogonal' sourceID='node1'  targetID='node2' [segments]='segments1' [constraints]='Constraints1'>
            </e-connector>
            <e-connector id='connector2' type='Orthogonal' sourceID='node3'  targetID='node4' [segments]='segments2' [constraints]='Constraints2' [segmentThumbSize] = 20 >
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
            type: 'Orthogonal',
            direction: "Right",
            length: 70
        },
        {
            type: 'Orthogonal',
            direction: "Bottom",
            length: 50
        }
    ]

    public segments2 = [
        {
            type: 'Orthogonal',
            direction: "Right",
            length: 70
        },
        {
            type: 'Orthogonal',
            direction: "Bottom",
            length: 50
        }
    ]

    public Constraints1 =  ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb

    public Constraints2 =  ConnectorConstraints.Default & ~(ConnectorConstraints.InheritSegmentThumbSize) | ConnectorConstraints.DragSegmentThumb
}


