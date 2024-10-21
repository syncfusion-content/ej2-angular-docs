
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, HierarchicalTree, DiagramModule,
  HierarchicalTreeService, LayoutAnimation, LayoutAnimationService, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(HierarchicalTree, LayoutAnimation);

@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService, LayoutAnimationService],
  standalone: true,
  selector: "app-container",
  template: `
  <ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]="nodes" [connectors]="connectors"
  [layout]="layout" (animationComplete)="animationComplete()" > </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public layout: LayoutModel = {};

  //Initialize nodes
  public nodes: NodeModel[] = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 50,
      annotations: [{ content: 'Node1' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      expandIcon: {
        shape: 'ArrowDown',
        width: 20,
        height: 15,
      },
      collapseIcon: {
        shape: 'ArrowUp',
        width: 20,
        height: 15,
      },
    },
    {
      id: 'Init',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 140,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [{ content: 'Node2' }],
    },
    {
      id: 'Init2',
      width: 140,
      height: 50,
      offsetX: 100,
      offsetY: 140,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [{ content: 'Node3' }],
    },
    {
      id: 'Init3',
      width: 140,
      height: 50,
      offsetX: 150,
      offsetY: 140,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [{ content: 'Node4' }],
    },
  ];

  //Initialize connectors
  public connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      sourceID: 'Start',
      targetID: 'Init',
      type: 'Orthogonal',
    },
    {
      id: 'connector2',
      sourceID: 'Start',
      targetID: 'Init2',
      type: 'Orthogonal',
    },
    {
      id: 'connector3',
      sourceID: 'Init2',
      targetID: 'Init3',
      type: 'Orthogonal',
    },
  ];

  // Handle animation state changes
  public animationComplete() {

    console.log('Animation complete');
    (this.diagram.nodes[0].style as ShapeStyleModel).fill =
      (this.diagram.nodes[0].style as ShapeStyleModel).fill === '#6BA5D7' ? 'red' : '#6BA5D7';
    this.diagram.dataBind();

    //customize
  }

  ngOnInit(): void {
    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //Sets layout type
      type: 'HierarchicalTree',
    }
  }

};