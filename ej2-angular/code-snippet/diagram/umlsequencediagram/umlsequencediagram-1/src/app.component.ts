import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { UmlSequenceDiagramModel, SnapSettingsModel, SnapConstraints, UmlSequenceParticipantStereotype } from "@syncfusion/ej2-diagrams";

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
      const umlSequenceDiagramModel: UmlSequenceDiagramModel = {
        // Define the participants involved in the UML Sequence Diagram
        participants: [
          {
            id: "User", // Unique identifier for the participant
            content: "User", // Label or name of the participant
            stereotype: UmlSequenceParticipantStereotype.Actor // Indicates that the participant is an actor
          },
          {
            id: "System", // Unique identifier for the participant
            content: "System", // Label or name of the participant
            // Flag to show destruction marker at the end of the lifeline
            showDestructionMarker: true,
          }
        ],
      };
      // Specifies the model for the diagram
      this.diagram.model = umlSequenceDiagramModel;
      this.diagram.updateFromModel();
    }
  }
}