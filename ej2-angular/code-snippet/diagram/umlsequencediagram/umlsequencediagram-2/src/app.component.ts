import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { UmlSequenceDiagramModel, UmlSequenceMessageType, SnapSettingsModel, SnapConstraints, UmlSequenceParticipantStereotype } from "@syncfusion/ej2-diagrams";

@Component({
  imports: [DiagramModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="700px" (created)="diagramCreated()" [snapSettings]="snapSettings">
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
      // Define the UML Sequence Diagram model with participants and messages
      const umlSequenceDiagramModel: UmlSequenceDiagramModel = {
        // Defines the participants involved in the sequence diagram
        participants: [
          { id: "User", content: "User", stereotype: UmlSequenceParticipantStereotype.Actor }, // User as an actor
          { id: "System", content: "System", showDestructionMarker: true, }, // System participant
          { id: "Logger", content: "Logger", showDestructionMarker: true, }, // Logger participant
          { id: "SessionManager", content: "SessionManager" } // SessionManager participant
        ],
        // Define messages exchanged between participants
        messages: [
          // User sends login request to System via Synchronous message
          {
            id: "MSG1", content: "Login Request", fromParticipantID: "User", toParticipantID: "System",
            type: UmlSequenceMessageType.Synchronous
          },
          // System replies to User with login response via Reply message
          {
            id: "MSG2", content: "Login Response", fromParticipantID: "System", toParticipantID: "User",
            type: UmlSequenceMessageType.Reply
          },
          // System sends log event to Logger via Asynchronous message
          {
            id: "MSG3", content: "Log Event", fromParticipantID: "System", toParticipantID: "Logger",
            type: UmlSequenceMessageType.Asynchronous
          },
          // System requests SessionManager to create session via Create message
          {
            id: "MSG4", content: "Create Session", fromParticipantID: "System", toParticipantID: "SessionManager",
            type: UmlSequenceMessageType.Create
          },
          // System requests SessionManager to delete session via Delete message
          {
            id: "MSG5", content: "Delete Session", fromParticipantID: "System", toParticipantID: "SessionManager",
            type: UmlSequenceMessageType.Delete
          },
          // System validates inputs itself via Self message
          {
            id: "MSG6", content: "Validate Inputs", fromParticipantID: "System", toParticipantID: "System",
            type: UmlSequenceMessageType.Self
          }
        ],
      };
      // Specifies the model for the diagram
      this.diagram.model = umlSequenceDiagramModel;
      this.diagram.updateFromModel();
    }
  }
}