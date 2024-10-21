import { DiagramModule, BpmnDiagramsService, ShapeStyleModel, randomId,DiagramComponent, NodeModel, BpmnShapeModel  } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
imports: [
         DiagramModule
    ],

providers: [BpmnDiagramsService],
standalone: true,
    selector: "app-container",
    template: `<button (click)="addTextAnnotation()">Add text Annotation</button><button (click)="addTextAnnotationNode()">Add text Annotation Node</button><button (click)="addTextAnnotationAlone()">Add text Annotation Alone</button><ejs-diagram #diagram id="diagram" width="100%" height="700px" [getNodeDefaults] ='getNodeDefaults' >
        <e-nodes>
            <e-node id='event1' [offsetX]=200 [offsetY]=200 [width]="70" [height]="70"  [shape]='shape'></e-node>
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
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        return node;
    }

    public addTextAnnotation(): void {
        let event =  (this.diagram as DiagramComponent).nodes[0];
        let textAnnotation = {
          name: 'newAnnotation' + randomId(),
          angle: 0,
          length: 100,
          width: 100,
          height: 40,
          text: 'New Annotation',
        };
        /**
         * parameter 1 - TextAnnotation to be added
         * parameter 2 - The parent node where the text annotation will be added as a child.
         */
         (this.diagram as DiagramComponent).addTextAnnotation(textAnnotation, event);
    }

    public addTextAnnotationNode(): void {
        let textAnnotation = {
            id: 'textAnnotation' + randomId(),
            offsetX: 300,
            offsetY: 100,
            width: 100,
            height: 40,
            annotations: [{ content: 'Text Annotation' }],
            shape: {
              type: 'Bpmn',
              shape: 'TextAnnotation',
              textAnnotation: {
                //Parent node of text annotation
                textAnnotationTarget: 'event',
                textAnnotationDirection: 'Auto',
              },
            },
          };
          /**
           * parameter 1 - TextAnnotation to be added to the event node
           */
           (this.diagram as DiagramComponent).add(textAnnotation as any);
    }

    public addTextAnnotationAlone(): void {
        let textAnnotation = {
            id: 'textAnnotationAlone' + randomId(),
            offsetX: 300,
            offsetY: 300,
            width: 100,
            height: 70,
            annotations: [{ content: 'Text Annotation' }],
            shape: {
              type: 'Bpmn',
              shape: 'TextAnnotation',
            },
          };
          /**
           * parameter 1 - TextAnnotation to be added to diagram without parent
           */
           (this.diagram as DiagramComponent).add(textAnnotation as any);

    }   
}