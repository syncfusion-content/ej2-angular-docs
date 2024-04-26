import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule, DiagramContextMenuService } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { NodeModel, UmlClassifierShapeModel } from '@syncfusion/ej2-diagrams';
@Component({
imports: [
         DiagramModule
    ],

providers: [DiagramContextMenuService],
standalone: true,
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
    //Position of the node
    offsetX: 200,
    offsetY: 200,
    style: {
      fill: '#26A0DA',
    },
    shape: {
      type: "UmlClassifier",
      //Define interface object
      interfaceShape: {
        name: "Patient",
        //Define interface attributes
        attributes: [{ name: "owner", type: "String[*]" }],
        //Define interface methods
        methods: [
          {
            name: "deposit",
            parameters: [
              {
                name: "amount",
                type: "Dollars"
              }
            ]
          }
        ]
      },
      classifier: "Interface"
     } as UmlClassifierShapeModel
   }
 ];
}


