import {
    DiagramModule,
    DiagramComponent,
    NodeModel,
    ShapeStyleModel,
  } from '@syncfusion/ej2-angular-diagrams';
  import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
  
  @Component({
    imports: [DiagramModule],
  
    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]='nodes' [getNodeDefaults] ='getNodeDefaults'>
      </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
  })
  export class AppComponent {
    @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public nodes: NodeModel[] = [
      {
        id: 'node1',
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        zIndex: 2,
        annotations: [{ content: 'Node1' }],
        style: { fill: 'white', strokeColor: 'black' },
      },
      {
        id: 'node2',
        // Position of the node
        offsetX: 270,
        offsetY: 270,
        zIndex: 1,
        annotations: [{ content: 'Node2' }],
        style: { fill: 'white', strokeColor: 'black' },
      },
    ];
    public getNodeDefaults(node: NodeModel): NodeModel {
      node.height = 100;
      node.width = 100;
      ((node as NodeModel).style as ShapeStyleModel).fill = 'yellow';
      ((node as NodeModel).style as ShapeStyleModel).strokeColor = 'green';
      ((node as NodeModel).style as ShapeStyleModel).strokeWidth = 3;
      return node;
    }
  }  