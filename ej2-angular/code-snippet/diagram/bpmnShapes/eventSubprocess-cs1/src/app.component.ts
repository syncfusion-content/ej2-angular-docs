

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, BpmnShapeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
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
        shape: 'Event',
        //Sets activity as Task
        activity: {
            activity: 'SubProcess',
            //Sets the collapsed as true and type as Event
            subProcess: {
                collapsed: true,
                type: 'Event',
                //Sets event as Start and trigger as Message
                event: {
                    event: 'Start',
                    trigger: 'Message'
                }
            }
        }
    } as BpmnShapeModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}


