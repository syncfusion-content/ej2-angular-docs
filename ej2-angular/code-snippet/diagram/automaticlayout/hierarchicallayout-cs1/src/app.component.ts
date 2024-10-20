
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DiagramModule,
  HierarchicalTreeService, HierarchicalTree } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(HierarchicalTree);

@Component({
  imports: [ DiagramModule ],

  providers: [HierarchicalTreeService],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes" [connectors]="connectors"
  [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" [layout]="layout"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public layout?: LayoutModel;

  //Initialize nodes for diagram
  public nodes: NodeModel[] = [
    {
      id: 'Steve-Ceo',
    },
    {
      id: 'Kevin-Manager',
    },
    {
      id: 'Peter-Manager',
    },
    {
      id: 'John-Manager',
    },
    {
      id: 'Mary-CSE',
    },
    {
      id: 'Jim-CSE',
    },
    {
      id: 'Martin-CSE',
    },
  ];

  //Initialize connectors for diagram
  public connectors: ConnectorModel[] = [
    {
      id: 'Steve-Ceo_Kevin-Manager',
      sourceID: 'Steve-Ceo',
      targetID: 'Kevin-Manager',
    },
    {
      id: 'Steve-Ceo_Peter-Manager',
      sourceID: 'Steve-Ceo',
      targetID: 'Peter-Manager',
    },
    {
      id: 'Peter-Manager_John-Manager',
      sourceID: 'Peter-Manager',
      targetID: 'John-Manager',
    },
    {
      id: 'Peter-Manager_Mary-CSE',
      sourceID: 'Peter-Manager',
      targetID: 'Mary-CSE',
    },
    {
      id: 'Kevin-Manager_Jim-CSE',
      sourceID: 'Kevin-Manager',
      targetID: 'Jim-CSE',
    },
    {
      id: 'Kevin-Manager_Martin-CSE',
      sourceID: 'Kevin-Manager',
      targetID: 'Martin-CSE',
    },
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.annotations = [{ content: node.id }];
    node.width = 100; node.height = 40;
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  }
  ngOnInit(): void {
    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //Sets layout type
      type: 'HierarchicalTree'
    }
  }
}