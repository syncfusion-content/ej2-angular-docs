import {
    DiagramModule,
    NodeConstraints, DiagramComponent, NodeModel
  } from '@syncfusion/ej2-angular-diagrams';
  import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
  
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
        offsetX: 200,
        offsetY: 100,
        annotations: [{ content: 'Select disabled' }],
        constraints: NodeConstraints.Default & ~NodeConstraints.Select,
      },
      {
        id: 'node2',
        offsetX: 500,
        offsetY: 100,
        annotations: [{ content: 'Rotate disabled' }],
        constraints: NodeConstraints.Default & ~NodeConstraints.Rotate,
      },
      {
        id: 'node3',
        offsetX: 200,
        offsetY: 400,
        annotations: [{ content: 'Resize disabled' }],
        constraints: NodeConstraints.Default & ~NodeConstraints.Resize,
      },
      {
        id: 'node4',
        offsetX: 500,
        offsetY: 400,
        annotations: [{ content: 'Drag disabled' }],
        constraints: NodeConstraints.Default & ~NodeConstraints.Drag,
      },
      {
        id: 'node5',
        offsetX: 350,
        offsetY: 250,
        annotations: [{ content: 'Tooltip disabled' }],
        constraints: NodeConstraints.Default & ~NodeConstraints.Tooltip,
        tooltip: { content: 'Node Tooltip', relativeMode: 'Object' },
      },
    ];
  
    public getNodeDefaults(node: NodeModel): NodeModel {
      node.height = 100;
      node.width = 100;
      node.pivot = { x: 0, y: 0 };
      return node;
    }
  }
  