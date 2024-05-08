import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule, BpmnDiagramsService } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, BpmnShapeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [BpmnDiagramsService],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="700px" >
        <e-nodes>
            <e-node id='event1' [offsetX]=400 [offsetY]=200 [width]="70" [height]="70"  [shape]='shape'></e-node>
            <e-node id='textNode1' [offsetX]=400 [offsetY]=400 [width]="70" [height]="70"  [shape]='shape1'>
                <e-node-annotations>
                    <e-node-annotation content='textNode1'></e-node-annotation>
                    </e-node-annotations>
            </e-node>
            <e-node id='textNode2' [offsetX]=600 [offsetY]=400 [width]="70" [height]="70"  [shape]='shape2'>
                <e-node-annotations>
                    <e-node-annotation content='textNode2'></e-node-annotation>
                    </e-node-annotations>
            </e-node>
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
        event: { event: 'Start', trigger: 'None' },
    }
    //Node with target
    public shape1: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'TextAnnotation',
        textAnnotation:{ textAnnotationDirection:'Auto',textAnnotationTarget:'event1'}
    }
    //Node without target
    public shape2: BpmnShapeModel = {
        type: 'Bpmn',
        shape: 'TextAnnotation',
        textAnnotation:{ textAnnotationDirection:'Auto',textAnnotationTarget:''}
    }
   
}


