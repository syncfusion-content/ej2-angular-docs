import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { Diagram, NodeModel, ConnectorModel, FlowShapeModel, FlowchartLayout } from '@syncfusion/ej2-diagrams';

Diagram.Inject(FlowchartLayout);

@Component({
  imports: [
    DiagramModule
  ],

  providers: [],
  standalone: true,
  selector: "app-container",
  template: `
  <button (click)="loadMermaidFlowchart()">Load</button>
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
    if ((node.shape as FlowShapeModel).shape === 'Decision') {
      node.height = 80;
    }

    return node;
  }

  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  }

  public layout = { type: 'Flowchart' }

  public loadMermaidFlowchart() {
    const mermaidFlowchartData = `flowchart TD
        A[Start] --> B(Process)
        B -.- C{Decision}
        C --Yes--> D[Plan 1]
        C ==>|No| E[Plan 2]
        style A fill:#90EE90,stroke:#333,stroke-width:2px;
        style B fill:#4682B4,stroke:#333,stroke-width:2px;
        style C fill:#FFD700,stroke:#333,stroke-width:2px;
        style D fill:#FF6347,stroke:#333,stroke-width:2px;
        style E fill:#FF6347,stroke:#333,stroke-width:2px;`;

    // load the mermaid flowchart data to diagram
    //parameter: mermaidFlowchartData - mermaid format string data for flowchart
    this.diagram.loadDiagramFromMermaid(mermaidFlowchartData);
  }

}
