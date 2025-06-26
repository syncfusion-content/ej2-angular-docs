import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { UmlSequenceDiagramModel, UmlSequenceMessageType, SnapSettingsModel, SnapConstraints } from "@syncfusion/ej2-diagrams";

@Component({
  imports: [DiagramModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" (created)="diagramCreated()" [snapSettings]="snapSettings">
             </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram', { static: false })
  public diagram?: DiagramComponent;
  public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };
  diagramCreated() {
    // Check whether the diagram component is initialized
    if (this.diagram) {
      // Define the model for the UML Sequence Diagram
      // Define the UML Sequence Diagram model with participants and activation boxes
      const model: UmlSequenceDiagramModel = {
        // Defines the participants involved in the sequence diagram
        participants: [
          {
            id: "User",
            content: "User",
            isActor: true,
          },
          {
            id: "System",
            content: "System",
            isActor: false,
            showDestructionMarker: true,
            // Activation boxes for System
            activationBoxes: [
              {
                id: "ActSystem", // Unique identifier for the activation box
                startMessageID: "MSG1", // Message ID that marks the start of the activation
                endMessageID: "MSG2" // Message ID that marks the end of the activation
              }
            ]
          }
        ],
        // Define messages exchanged between participants
        messages: [
          {
            id: "MSG1", content: "Login Request", fromParticipantID: "User", toParticipantID: "System",
            type: UmlSequenceMessageType.Synchronous
          },
          {
            id: "MSG2", content: "Login Response", fromParticipantID: "System", toParticipantID: "User",
            type: UmlSequenceMessageType.Reply
          }
        ],
      };
      // Specifies the model for the diagram
      this.diagram.model = model;
      this.diagram.updateFromModel();
    }
  }
}