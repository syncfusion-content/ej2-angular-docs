import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, NodeModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [getNodeDefaults] ='getNodeDefaults' [nodes]='nodes' (created)='created($event)'>
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
      annotations: [{
        content: 'rectangle1',
      }],
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
      annotations: [{
        content: 'rectangle2',
      }],
    },
    {
      id: 'group',
      children: ['rectangle1', 'rectangle2'],
    },
  ];
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
    return node;
  }
  public created(args: Object): void {
    (this.diagram as DiagramComponent).select([(this.diagram as DiagramComponent).getObject('group')]);
  }
}

