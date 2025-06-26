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
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="500px" [nodes]='nodes' (created)='created($event)'>
             </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  // Define a collection of nodes used in the diagram
  public nodes: NodeModel[] = [
    // First rectangle node
    {
      id: 'node1',
      // Margin from the left and top
      margin: { left: 50, top: 30 },
      width: 100, height: 100,
      style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
      shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 4 },
      annotations: [{ content: 'Node 1' }]
    },
    // Second rectangle node
    {
      id: 'node2',
      // Margin from the left and top
      margin: { left: 200, top: 130 },
      width: 100, height: 100,
      style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
      shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 4 },
      annotations: [{ content: 'Node 2' }]
    },
    // Container node configuration to contain node1 and node2
    {
      id: 'container',
      width: 350, height: 280, // Width and height of the container
      offsetX: 250, offsetY: 250, // Position of the container
      shape: {
        // Define the type as a container
        type: 'Container',
        // Includes node1 and node2 as children
        children: ['node1', 'node2'],
      },
      // Style properties for the container
      style: { fill: '#E9EEFF', strokeColor: '#2546BB', strokeWidth: 1 }
    },
  ];

  public created(args: Object): void {
    (this.diagram as DiagramComponent).select([(this.diagram as DiagramComponent).getObject('container')]);
  }
}

