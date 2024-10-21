import { DiagramModule, BpmnDiagramsService, DiagramComponent, NodeModel, BpmnShapeModel} from '@syncfusion/ej2-angular-diagrams'
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
            <e-node id='node1' [offsetX]=100 [offsetY]=100 [shape]='shape1'></e-node>
            <e-node id='node2' [offsetX]=300 [offsetY]=100 [shape]='shape2'></e-node>
            <e-node id='node3' [offsetX]=500 [offsetY]=100 [shape]='shape3'></e-node>
            <e-node id='node4' [offsetX]=700 [offsetY]=100 [shape]='shape4'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public shape1: BpmnShapeModel = {
        
        type: 'Bpmn',
        shape: 'Activity',
        
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets loop of the task as Standard
            task: {
                loop: 'Standard'
            }
        },
    }
    public shape2: BpmnShapeModel = {
        
        type: 'Bpmn',
        shape: 'Activity',
        
        //Sets activity as Task
        activity: {
            activity: 'SubProcess',
          //Sets collapsed as true and loop as None
          subProcess: {
            collapsed: true,
            loop: 'None',
          },
        },
    }
    public shape3: BpmnShapeModel = {
        
        type: 'Bpmn',
        shape: 'Activity',
        
        //Sets activity as Task
        activity: {
            activity: 'SubProcess',
          //Sets collapsed as true and loop as ParallelMultiInstance
          subProcess: {
            collapsed: true,
            loop: 'ParallelMultiInstance',
          },
        },
    }
    public shape4: BpmnShapeModel = {
        
        type: 'Bpmn',
        shape: 'Activity',
        
        //Sets activity as Task
        activity: {
            activity: 'SubProcess',
          //Sets collapsed as true and loop as SequenceMultiInstance
          subProcess: {
            collapsed: true,
            loop: 'SequenceMultiInstance',
          },
        },
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}