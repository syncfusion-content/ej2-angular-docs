import { DiagramModule, BpmnDiagramsService, NodeConstraints, DiagramComponent, NodeModel, } from '@syncfusion/ej2-angular-diagrams'
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
            <e-node id='node1' [offsetX]=350 [offsetY]=230 [shape]='shape1'></e-node>
           
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public shape1 = {
        constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
        shape: 'Activity',
        type: 'Bpmn',
        activity: {
            activity: 'SubProcess',
            subProcess: {
                collapsed: false,
            },
        },

    }

    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 200;
        node.width = 400;
        return node;
    }

}


