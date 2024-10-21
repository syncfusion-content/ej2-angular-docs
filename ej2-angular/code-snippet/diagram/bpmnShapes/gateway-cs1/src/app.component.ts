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
            <e-node id='node4' [offsetX]=150 [offsetY]=350 [shape]='shape4'></e-node>
            <e-node id='node5' [offsetX]=350 [offsetY]=350 [shape]='shape5'></e-node>
            <e-node id='node6' [offsetX]=550 [offsetY]=350 [shape]='shape6'></e-node>
            <e-node id='node7' [offsetX]=150 [offsetY]=550 [shape]='shape7'></e-node>
            <e-node id='node8' [offsetX]=350 [offsetY]=550 [shape]='shape8'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public shape1: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as None
        gateway: {
            type: 'None',
          },
    }
    public shape2: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Gateway',
       //Sets type of the gateway as Inclusive
       gateway: {
        type: 'Inclusive',
      },
    }
    public shape3: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Gateway',
       //Sets type of the gateway as Exclusive
       gateway: {
        type: 'Exclusive',
      },
    }
    public shape4: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Parallel
        gateway: {
            type: 'Parallel',
          },
    }
    public shape5: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as ParallelEventBased
        gateway: {
            type: 'ParallelEventBased',
          },
    }
    public shape6: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as EventBased
        gateway: {
            type: 'EventBased',
          },
    }
    public shape7: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as ExclusiveEventBased
        gateway: {
            type: 'ExclusiveEventBased',
          },
    }
    public shape8: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Complex
        gateway: {
            type: 'Complex',
          },
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}