import { DiagramModule, BpmnDiagramsService,DiagramComponent, NodeModel, BpmnShapeModel } from '@syncfusion/ej2-angular-diagrams'
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
        //Sets type as Bpmn and shape as activity
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
          activity: 'SubProcess',
          //Sets the collapsed as true and type as Event
          subProcess: {
            collapsed: true,
            type: 'Transaction',
            //Sets transaction
            transaction: {
              success: {
                id: 'success',
                event: 'Start',
                trigger: 'None',
              },
              failure: {
                id: 'failure',
                event: 'ThrowingIntermediate',
                trigger: 'Error',
              },
              cancel: {
                id: 'cancel',
                event: 'End',
                trigger: 'Cancel',
              },
            },
          },
        },
      }
    
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}