import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { UmlSequenceDiagramModel, UmlSequenceMessageType, UmlSequenceFragmentType, SnapSettingsModel, SnapConstraints, UmlSequenceParticipantStereotype } from "@syncfusion/ej2-diagrams";

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
      // Define the UML Sequence Diagram model
      const model: UmlSequenceDiagramModel = {
        // Define the space between participants
        spaceBetweenParticipants: 300,
        participants: [
          { id: "Customer", content: "Customer", stereotype: UmlSequenceParticipantStereotype.Actor },
          { id: "OrderSystem", content: "Order System"},
          { id: "PaymentGateway", content: "Payment Gateway" }
        ],
        // Define the messages passed between participants
        messages: [
          {
            id: "MSG1", content: "Place Order", fromParticipantID: "Customer", toParticipantID: "OrderSystem",
            type: UmlSequenceMessageType.Synchronous
          },
          {
            id: "MSG2", content: "Check Stock Availability", fromParticipantID: "OrderSystem", toParticipantID: "OrderSystem",
            type: UmlSequenceMessageType.Synchronous
          },
          {
            id: "MSG3", content: "Stock Available", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
            type: UmlSequenceMessageType.Reply
          },
          {
            id: "MSG4", content: "Process Payment", fromParticipantID: "OrderSystem", toParticipantID: "PaymentGateway",
            type: UmlSequenceMessageType.Synchronous
          },
          {
            id: "MSG5", content: "Payment Successful", fromParticipantID: "PaymentGateway", toParticipantID: "OrderSystem",
            type: UmlSequenceMessageType.Reply
          },
          {
            id: "MSG6", content: "Order Confirmed and Shipped", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
            type: UmlSequenceMessageType.Reply
          },
          {
            id: "MSG7", content: "Payment Failed", fromParticipantID: "PaymentGateway", toParticipantID: "OrderSystem",
            type: UmlSequenceMessageType.Reply
          },
          {
            id: "MSG8", content: "Retry Payment", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
            type: UmlSequenceMessageType.Reply
          }
        ],
        // Define fragments for conditional visual representation
        fragments: [
          // Child Fragment 1 (Optional)
          {
            id: 1,
            type: UmlSequenceFragmentType.Optional,
            conditions: [
              {
                content: "if item is in stock",
                messageIds: ["MSG4"]
              }
            ]
          },
          // Child Fragment 2 (Alternative)
          {
            id: 2,
            type: UmlSequenceFragmentType.Alternative,
            conditions: [
              {
                content: "if payment is successful",
                messageIds: ["MSG5", "MSG6"]
              },
              {
                content: "if payment fails",
                messageIds: ["MSG7", "MSG8"]
              }
            ]
          },
          // Parent Fragment (Loop)
          {
            id: 3,
            type: UmlSequenceFragmentType.Loop,
            conditions: [
              {
                content: "while attempts less than 3",
                // Use IDs of child fragments for nested conditions
                fragmentIds: ['1', '2'],
              }
            ]
          },
        ],
      };
      // Specifies the model for the diagram
      this.diagram.model = model;
      this.diagram.updateFromModel();
    }
  }
}