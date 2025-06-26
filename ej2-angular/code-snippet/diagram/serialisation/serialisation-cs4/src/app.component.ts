import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: "app-container",
  template: `
  <button (click)="loadMermaidSeqDiagram()">Load Mermaid</button>
  <ejs-diagram #diagram id="diagram" width="100%" height="600px"></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public loadMermaidSeqDiagram() {
    const mermaidData: string = `
 sequenceDiagram
    participant User
    participant Controller
    participant Service
    participant Database

    User->>Controller: sendRequest()
    activate Controller

    Controller->>Service: processRequest()
    activate Service

    Service->>Database: queryData()
    activate Database
    Database-->>Service: returnData()
    deactivate Database

    Service-->>Controller: returnResponse()
    deactivate Service

    Controller-->>User: sendResponse()
    deactivate Controller`;

    // load the mermaid sequence diagram data to diagram
    //parameter: mermaidData - mermaid format string data for UML Sequence Diagram
    this.diagram.loadDiagramFromMermaid(mermaidData);
  }

}
