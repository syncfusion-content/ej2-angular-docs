import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel, FlipDirection } from '@syncfusion/ej2-angular-diagrams';

@Component({
  imports: [
    DiagramModule
  ],

  providers: [],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]='nodes'>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 70,
      height: 70,
      offsetX: 100,
      offsetY: 100,
      //Sets the flip mode as LabelText
      flipMode: 'LabelText',
      annotations: [{ content: 'Node1', offset: { x: 0, y: 0.8 } }],
      shape: {
        type: 'Basic',
        shape: 'RightTriangle',
      },
      style: {
        fill: '#6BA5D7',
      },
    },
    {
      id: 'node2',
      width: 70,
      height: 70,
      offsetX: 180,
      offsetY: 180,
      shape: {
        type: 'Basic',
        shape: 'RightTriangle',
      },
      style: {
        fill: '#6BA5D7',
      },

    },
    {
      id: 'group',
      children: ['node1', 'node2',],
      padding: { left: 20, right: 20, top: 20, bottom: 20 },
      annotations: [{ content: 'Group', offset: { x: 0, y: 0.8 } }],
      //Sets the flip as Horizontal
      flip: FlipDirection.Horizontal,
      //Sets the flip mode as Label
      flipMode: 'Label',
    }
  ];
}

