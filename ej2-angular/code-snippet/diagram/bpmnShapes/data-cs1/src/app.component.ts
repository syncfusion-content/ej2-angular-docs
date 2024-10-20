import { DiagramModule, BpmnDiagramsService,DiagramComponent, NodeModel, BpmnShapeModel} from '@syncfusion/ej2-angular-diagrams'
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
            <e-node id='node2' [offsetX]=350 [offsetY]=150 [shape]='shape1'></e-node>
            <e-node id='node3' [offsetX]=550 [offsetY]=150 [shape]='shape2'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public shape: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'DataObject',
        //Sets collection as true and type as Input
        dataObject: {
            collection: true,
            type: 'Input'
        }
    }
    public shape1: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'DataObject',
        //Sets collection as false and type as Output
        dataObject: {
            collection: false,
            type: 'Output'
        }
    }
    public shape2: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'DataObject',
        //Sets collection as false and type as None
        dataObject: {
            collection: false,
            type: 'None'
        }
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }
}


