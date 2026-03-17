
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NodeModel, ConnectorModel, Diagram, DataBinding, ComplexHierarchicalTree, LayoutModel, LineDistribution,
  ConnectionPointOrigin, DiagramModule, HierarchicalTreeService, DataBindingService, DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, ComplexHierarchicalTree, LineDistribution);


@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="590px"
    [getNodeDefaults]='nodeDefaults' [getConnectorDefaults]='connectorDefaults'
    [layout]='layout' [dataSourceSettings]='source'></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;

  //Initializes data source
  public data: Object[] = [
    { "Name": "node11" },
    { "Name": "node12", "ReportingPerson": ["node114"] },
    { "Name": "node13", "ReportingPerson": ["node12"] },
    { "Name": "node14", "ReportingPerson": ["node12"] },
    { "Name": "node15", "ReportingPerson": ["node12"] },
    { "Name": "node116", "ReportingPerson": ["node22", "node12"] },
    { "Name": "node16", "ReportingPerson": [] },
    { "Name": "node18", "ReportingPerson": [] },
    { "Name": "node21" },
    { "Name": "node22", "ReportingPerson": ["node114"] },
    { "Name": "node23", "ReportingPerson": ["node22"] },
    { "Name": "node24", "ReportingPerson": ["node22"] },
    { "Name": "node25", "ReportingPerson": ["node22"] },
    { "Name": "node26", "ReportingPerson": [] },
    { "Name": "node28", "ReportingPerson": [] },
    { "Name": "node31" },
    { "Name": "node114", "ReportingPerson": ["node11", "node21", "node31"] }
  ];

  //Configures data source for diagram
  public source: Object = {
    id: 'Name', parentId: 'ReportingPerson',
    dataSource: new DataManager(this.data as JSON[], new Query().take(7))
  };

  //Sets the default properties for all the Nodes
  public nodeDefaults(node: NodeModel): NodeModel {
    node.width = 40; node.height = 40;
    return node;
  };

  //Sets the default properties for all the connectors
  public connectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    connector.cornerRadius = 7;
    return connector;
  };

  //Uses layout to auto-arrange nodes on the Diagram page
  public layout: LayoutModel = {
    //Sets layout type
    type: 'ComplexHierarchicalTree',
    connectionPointOrigin: ConnectionPointOrigin.DifferentPoint,
  };

}
