
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, HierarchicalTree, DiagramModule,
  HierarchicalTreeService, IExpandStateChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(HierarchicalTree);

@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService],
  standalone: true,
  selector: "app-container",
  template: `
  <ejs-diagram #diagram id="diagram" width="100%" height="550px" [nodes]="nodes" [connectors]="connectors"
  [layout]="layout" (expandStateChange)="expandStateChange($event)" > </ejs-diagram>`,
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
  ];

  //Initialize connectors
  public connectors: ConnectorModel[] = [{
    // Unique name for the connector
    id: 'connector1',
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
  }];

  // Handle expand/collapse state changes
  public expandStateChange(args: IExpandStateChangeEventArgs) {
    //We can get the expanded or collapsed state in args
    console.log('Expanded ' + args.state);
  }

  ngOnInit(): void {
    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //Sets layout type
      type: 'HierarchicalTree',
    }
  }

};