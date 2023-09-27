

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
    id: "UmlDiagram",
    //Set node size
    width: 100,
    height: 100,
    //position the node
    offsetX: 200,
    offsetY: 200,
    shape: {
      type: "UmlActivity",
      //Define UmlActivity shape
      shape: "Action"
    }
   }
 ];
}


