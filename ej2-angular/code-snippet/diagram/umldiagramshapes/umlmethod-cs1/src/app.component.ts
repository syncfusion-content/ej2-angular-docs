import { DiagramModule, DiagramContextMenuService,DiagramComponent } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { NodeModel } from '@syncfusion/ej2-diagrams';

@Component({
  imports: [
    DiagramModule
  ],

  providers: [DiagramContextMenuService],
  standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `
  <button (click)="addMethod()">addMethod</button>
  <button (click)="addAttribute()">addAttribute</button>
  <button (click)="addMember()">addMember</button>
  <ejs-diagram #diagram id="diagram" width="100%" height="600" [nodes]="nodes" >
  </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent | undefined;
  addMethod() {
    let node: any = (this.diagram as any).nodes[0];
    let methods: any = {
      name: 'getHistory',
      style: { color: 'red' },
      parameters: [{ name: 'Date', style: {} }],
      type: 'History',
    };
    (this.diagram as any).addChildToUmlNode(node, methods, 'Method');
  }

  addAttribute() {
    let node: any = (this.diagram as any).nodes[0];
    let attributes: any = { name: 'accepted', type: 'Date', style: { color: "red", } };
    (this.diagram as any).addChildToUmlNode(node, attributes, "Attribute");
  }
  addMember() {
    let node: any = (this.diagram as any).nodes[1];
    let members: any = { name: 'Checking new', style: { color: "red", } };
    (this.diagram as any).addChildToUmlNode(node, members, "Member");
  }
  public nodes: NodeModel[] = [
    {
      id: 'node1',
      offsetX: 150,
      offsetY: 150,
      style: {
        fill: '#26A0DA',
      },
      shape: {
        type: 'UmlClassifier',
        classShape: {
          attributes: [{ name: 'accepted', type: 'Date' }],
          methods: [
            {
              name: 'getHistory',
              style: {},
              parameters: [{ name: 'Date', style: {} }],
              type: 'History',
            },
          ],
          name: 'Patient',
        },
        classifier: 'Class',
      },
    },
    {
      id: 'node2',
      offsetX: 400,
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