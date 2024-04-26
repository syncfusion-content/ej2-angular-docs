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
  template: `
  <button (click)="addMember()">addMember</button>
  <ejs-diagram #diagram id="diagram" width="100%" height="600" [nodes]="nodes" >
  </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent | undefined;
  addMember() {
    let node: any = (this.diagram as any).nodes[0];
    let members:any = { name: 'Checking new', style: { color: "red", } };
    (this.diagram as any).addChildToUmlNode(node, members, "Member");
  }
  public nodes: NodeModel[] = [
    {
      id: 'node1',
      offsetX: 150,
      offsetY: 150, style: {
          fill: '#26A0DA',
      }, borderColor: 'white',
      shape: {
          type: 'UmlClassifier',
          enumerationShape: {
              name: 'AccountType',
              members: [
                  {
                      name: 'Checking Account', 
                  },
              ]
          },
          classifier: 'Enumeration'
      },
    }
  ];
}


