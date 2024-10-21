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
        <e-node id='node3' [offsetX]=150 [offsetY]=350 [shape]='shape3'></e-node>
        <e-node id='node4' [offsetX]=350 [offsetY]=350 [shape]='shape4'></e-node>        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public shape1: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Event',
        // set the event type as End
        event: {
            event: 'Start',
            trigger: 'None'
        }
    }
    public shape2: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Event',
        // set the event type as End
        event: {
            event: 'End',
            trigger: 'None'
        }
    }
    public shape3: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Event',
        // Sets event as NonInterruptingStart and trigger as Timer
        event: {
          event: 'NonInterruptingStart',
          trigger: 'Timer',
        }
    }
    public shape4: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'Event',
        // Sets event as NonInterruptingIntermediate and trigger as Escalation
        event: {
          event: 'NonInterruptingIntermediate',
          trigger: 'Escalation',
        }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}