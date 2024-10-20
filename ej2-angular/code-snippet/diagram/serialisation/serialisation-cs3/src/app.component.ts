import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { Diagram, NodeModel, ConnectorModel, TextStyleModel, ShapeAnnotationModel,
  DecoratorModel, StrokeStyleModel, MindMap } from '@syncfusion/ej2-diagrams';

Diagram.Inject(MindMap);

@Component({
  imports: [
    DiagramModule
  ],

  providers: [],
  standalone: true,
  selector: "app-container",
  template: `
  <button (click)="loadMermaidMindmap()">Load</button>
  <ejs-diagram #diagram id="diagram" width="100%" height="600px" [getNodeDefaults]="getNodeDefaults"
  [getConnectorDefaults]="getConnectorDefaults" [layout]="layout"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;

  public getNodeDefaults(node: NodeModel): NodeModel {
    node.width = 120;
    node.height = 50;
    return node;
  }

  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    (connector.targetDecorator as DecoratorModel).shape = 'None';
    return connector;
  }

  public layout = {
    type: 'MindMap',
    verticalSpacing: 50,
    horizontalSpacing: 50,
    orientation: 'Horizontal',
  }

  public loadMermaidMindmap() {
    const mermaidMindmapData = `mindmap
                            root((mindmap))
                              Origins
                                Popularisation
                              Research
                                On effectivness<br/>and features
                                On Automatic creation
                              Tools
                                Pen and paper
                                Mermaid `;

    // load the mermaid mindmap data to diagram
    //parameter: mermaidMindmapData - mermaid format string data for mindmap
    this.diagram.loadDiagramFromMermaid(mermaidMindmapData);
  }

}
