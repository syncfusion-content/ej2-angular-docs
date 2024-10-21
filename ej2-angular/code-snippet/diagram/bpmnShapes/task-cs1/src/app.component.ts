import { DiagramModule, BpmnDiagramsService,DiagramComponent, NodeModel, BpmnShapeModel  } from '@syncfusion/ej2-angular-diagrams'
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
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [shape]='shape1'></e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150 [shape]='shape2'></e-node>
            <e-node id='node3' [offsetX]=550 [offsetY]=150 [shape]='shape3'></e-node>
            <e-node id='node4' [offsetX]=750 [offsetY]=150 [shape]='shape4'></e-node>
            <e-node id='node5' [offsetX]=150 [offsetY]=350 [shape]='shape5'></e-node>
            <e-node id='node6' [offsetX]=350 [offsetY]=350 [shape]='shape6'></e-node>
            <e-node id='node7' [offsetX]=550 [offsetY]=350 [shape]='shape7'></e-node>
            <e-node id='node8' [offsetX]=750 [offsetY]=350 [shape]='shape8'></e-node>
            <e-node id='node9' [offsetX]=450 [offsetY]=550 [shape]='shape9'></e-node>
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
          //Sets the type of the task as Send
          task: {
            type: 'Send',
          },
        },
      
    }
    public shape2: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets the type of the task as Send
            task: {
                type: 'Service'
            }
        },
    }
    public shape3: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets the type of the task as Send
            task: {
                type: 'BusinessRule'
            }
        },
    }
    public shape4: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets the type of the task as Send
            task: {
                type: 'Receive'
            }
        },
    }
    public shape5: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets the type of the task as Send
            task: {
                type: 'InstantiatingReceive'
            }
        },
    }
    public shape6: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets the type of the task as Send
            task: {
                type: 'Manual'
            }
        },
    }
    public shape7: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets the type of the task as Send
            task: {
                type: 'Script'
            }
        },
    }
    public shape8: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets the type of the task as Send
            task: {
                type: 'User'
            }
        },
    }
    public shape9: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets the type of the task as Send
            task: {
                type: 'None'
            }
        },
    }

    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}