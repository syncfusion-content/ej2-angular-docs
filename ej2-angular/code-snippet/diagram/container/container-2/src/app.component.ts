import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="500px" [nodes]='nodes'>
             </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  // Define a collection of nodes used in the diagram
  public nodes: NodeModel[] = [
    {
      id: 'node1',
      margin: { left: 50, top: 30 },
      width: 100, height: 100,
      style: { fill: '#357BD2', strokeColor: 'white' },
      annotations: [{ content: 'Node 1', style: { color: 'white', fontFamily: 'Arial' } }],
    },
    {
      id: 'node2',
      margin: { left: 200, top: 130 },
      width: 100, height: 100,
      style: { fill: '#357BD2', strokeColor: 'white' },
      annotations: [{ content: 'Node 2', style: { color: 'white', fontFamily: 'Arial' } }],
    },
    // Container Node
    {
      id: 'container',
      // Container Size
      width: 350, height: 300,
      // Container Position
      offsetX: 250, offsetY: 250,
      // Define Shape
      shape: {
        // Set type as Container
        type: 'Container',
        // Define header for container
        header: {
          annotation: {
            content: 'Container Title',
            // Style of container title text
            style: { fontSize: 18, bold: true, color: 'white' },
          },
          // Height of container header
          height: 40,
          // Style of container header
          style: { fill: '#3c63ac', strokeColor: '#30518f' },
        },
        // children of container
        children: ['node1', 'node2'],
      },
      // style of container
      style: { fill: 'white', strokeColor: '#30518f', strokeDashArray: '4 4' },
    },
  ];
}

