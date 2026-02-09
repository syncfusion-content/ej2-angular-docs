
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel, ConnectorModel, Diagram, DataBinding,
  ComplexHierarchicalTree, LayoutModel } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(DataBinding, ComplexHierarchicalTree);

@Component({
  imports: [ DiagramModule ],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="500px" [nodes]='nodes' [connectors]='connectors'
  [getConnectorDefaults]='connectorDefaults' [getNodeDefaults]='nodeDefaults' [layout]='layout'></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;

  //Initialize nodes for diagram
  public nodes: NodeModel[] = [
    { id: 'node1' },
    { id: 'node2' },
    { id: 'node3' },
    { id: 'node4' },
    { id: 'node5' },
    { id: 'node6' },
    { id: 'node7' },
  ];

  //Initialize connectors for diagram
  public connectors: ConnectorModel[] = [
    { id: 'node1-node4', sourceID: 'node1', targetID: 'node4' },
    { id: 'node2-node4', sourceID: 'node2', targetID: 'node4' },
    { id: 'node3-node4', sourceID: 'node3', targetID: 'node4' },
    { id: 'node4-node5', sourceID: 'node4', targetID: 'node5' },
    { id: 'node4-node6', sourceID: 'node4', targetID: 'node6' },
    { id: 'node5-node6', sourceID: 'node6', targetID: 'node7' },
  ];

  //Uses layout to auto-arrange nodes on the Diagram page
  public layout: LayoutModel = {
    //Sets layout type
    type: 'ComplexHierarchicalTree',
  };

  //Sets the default properties for all the Nodes
  public nodeDefaults(node: NodeModel): NodeModel {
    node.width = 70; node.height = 70;
    node.annotations = [{ content: node.id }];
    return node;
  };

  //Sets the default properties for all the connectors
  public connectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  };
   
}
