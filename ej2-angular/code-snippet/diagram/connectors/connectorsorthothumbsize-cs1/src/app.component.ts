import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel,ConnectorEditing,ConnectorConstraints, OrthogonalSegmentModel, PointModel ,DiagramModule} from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(ConnectorEditing);

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="900px" height="500px" [getNodeDefaults]  ='getNodeDefaults'  [segmentThumbSize]= 15>
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


