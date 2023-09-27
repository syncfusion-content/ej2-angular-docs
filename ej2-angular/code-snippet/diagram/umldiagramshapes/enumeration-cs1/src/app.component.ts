

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { NodeModel, UmlClassifierShapeModel } from '@syncfusion/ej2-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [nodes]='nodes'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;

    public nodes: NodeModel[] = [
   {
    id: "Patient",
    offsetX: 200,
    offsetY: 200,
    shape: {
      type: "UmlClassifier",
      //Define enumeration object
      enumeration: {
        name: "AccountType",
        //set the members of enumeration
        members: [
          {
            name: "Checking Account",
          },
          {
            name: "Savings Account"
          },
          {
            name: "Credit Account"
          }
        ]
      },
      classifier: "Enumeration"
    } as UmlClassifierShapeModel
  }
 ];
}


