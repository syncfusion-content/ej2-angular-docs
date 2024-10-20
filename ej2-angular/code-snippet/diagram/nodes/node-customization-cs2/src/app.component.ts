import {
    Diagram,
    DiagramModule,
    DiagramComponent,
    NodeModel,
  } from '@syncfusion/ej2-angular-diagrams';
  import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
  
  @Component({
    imports: [DiagramModule],
  
    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" (created)='created($event)'>
      </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
  })
  export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public node1: NodeModel = {
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      visible: true,
      style: {
        fill: '#6AA8D7',
        strokeColor: 'white',
        strokeWidth: 5,
        strokeDashArray: '3',
        opacity: 0.7,
      },
      // Text(label) added to the node
    };
    public node2: NodeModel = {
      // Position of the node
      offsetX: 450,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      visible: false,
      style: {
        fill: '#6AA8D7',
        strokeColor: 'white',
        strokeWidth: 5,
        strokeDashArray: '3',
        opacity: 0.7,
      },
      // Text(label) added to the node
    };
    public created(args: Object): void {
      //Add Node
      (this.diagram as Diagram).add(this.node1);
      (this.diagram as Diagram).add(this.node2);
    }
  }  