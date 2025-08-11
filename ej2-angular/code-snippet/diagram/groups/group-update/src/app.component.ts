import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  imports: [
    DiagramModule
  ],

  providers: [],
  standalone: true,
  selector: "app-container",
  template: `<button (click)="updatePadding()">updateGroupPadding</button>
      <button (click)="updateStyle()">updateGroupStyle</button>
      <ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]='nodes'>
      </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public nodes: NodeModel[] = [
    {
      id: 'rectangle1',
      offsetX: 100,
      offsetY: 100,
      width: 100,
      height: 100,
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
      },
      annotations: [
        {
          content: 'rectangle1',
        },
      ],
    },
    {
      id: 'rectangle2',
      offsetX: 200,
      offsetY: 200,
      width: 100,
      height: 100,
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
      },
      annotations: [
        {
          content: 'rectangle2',
        },
      ],
    },
    {
      id: 'group',
      children: ['rectangle1', 'rectangle2'],
      style: { strokeColor: 'green' },
    },
  ];
  updatePadding() {
    let group: NodeModel = (this.diagram as DiagramComponent).getObject('group');
    (group.padding = { left: 10, right: 10, top: 10, bottom: 10 }), group.style;
    (this.diagram as DiagramComponent).dataBind();
  }
  updateStyle() {
    let group: NodeModel = (this.diagram as DiagramComponent).getObject('group');
    group.style = { fill: 'green' };
    (this.diagram as DiagramComponent).dataBind();
  }
}

