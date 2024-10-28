import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]='nodes' (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public nodes: NodeModel[] = [
      {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: 'Node1' }],
      },
      {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 200,
        annotations: [{ content: 'Node2' }],
      },
      {
        id: 'node3',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 350,
        annotations: [{ content: 'Node3' }],
      },
      {
        id: 'node4',
        width: 100,
        height: 100,
        offsetX: 500,
        offsetY: 350,
        annotations: [{ content: 'Node4' }],
      },
      {
        id: 'group1',
        children: ['node1', 'node2'],
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
        style: { fill: 'green' },
      },
      {
        id: 'group2',
        children: ['node3', 'node4'],
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
        style: { fill: 'skyblue' },
      },
      // Nested Group
      {
        id: 'group3',
        children: ['group1', 'group2'],
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
        style: { fill: 'yellow' },
      }
    ];
    public created(args: Object): void {
        (this.diagram as DiagramComponent).select([(this.diagram as DiagramComponent).getObject('group3')]);
    }
}

