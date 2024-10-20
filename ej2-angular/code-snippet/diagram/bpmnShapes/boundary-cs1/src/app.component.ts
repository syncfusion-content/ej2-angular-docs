import { DiagramModule, BpmnDiagramsService, DiagramComponent, NodeModel, BpmnShapeModel } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    imports: [
        DiagramModule
    ],

    providers: [BpmnDiagramsService],
    standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [shape]='shape'></e-node>
            <e-node id='node2' [offsetX]=450 [offsetY]=250 [shape]='shape1'></e-node>
            <e-node id='node3' [offsetX]=650 [offsetY]=250 [shape]='shape2'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public shape: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and boundary as Call
            subProcess: {
                collapsed: true,
                boundary: 'Call'
            }
        },
    }
    public shape1: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and boundary as Event
            subProcess: {
                collapsed: true,
                boundary: 'Event'
            }
        },
    }
    public shape2: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and boundary as Default
            subProcess: {
                collapsed: false,
                boundary: 'Default'
            }
        },
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}
