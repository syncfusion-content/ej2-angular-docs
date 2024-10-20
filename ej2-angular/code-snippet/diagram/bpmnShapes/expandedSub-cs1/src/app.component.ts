
import { DiagramModule, BpmnDiagramsService, NodeConstraints,DiagramComponent } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
@Component({
    imports: [
        DiagramModule
    ],

    providers: [BpmnDiagramsService],
    standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-nodes>
            <e-node id='node1' [offsetX]=355 [offsetY]=230 [shape]='shape1' [height]=250 [width]=520></e-node>
            <e-node id='start'  [shape]='shape2'[height]=50 [width]=50 [margin]='margin' > </e-node>
           
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public margin = { left: 50, top: 50 }
    public shape2 = {
        type: 'Bpmn', shape: 'Event',
    }
    public shape1 = {
        constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
        shape: 'Activity',
        type: 'Bpmn',
        activity: {
            activity: 'SubProcess',
            subProcess: {
                collapsed: false,
                processes: ['start'],

            },
        },
    }

}


