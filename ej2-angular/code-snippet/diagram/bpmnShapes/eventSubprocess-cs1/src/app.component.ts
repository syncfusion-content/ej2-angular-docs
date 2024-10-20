import { DiagramModule, BpmnDiagramsService , DiagramComponent, NodeModel, BpmnShapeModel } from '@syncfusion/ej2-angular-diagrams'
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
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [shape]='shape'></e-node>
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
        //Sets activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Sets the collapsed as false and type as Event
            subProcess: {
                collapsed: false,
                type: 'Event',
            //Sets event as Start and trigger as Message
            events: [
                {
                  id: 'event',
                  event: 'Start',
                  trigger: 'Message',
                  offset: { x: 0.5, y: 0 },
                },
              ],  
            }
        }
    } as BpmnShapeModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}
