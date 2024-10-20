
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, HierarchicalTreeService, DataBindingService,  NodeModel, ConnectorModel, Diagram,
  DataBinding, ComplexHierarchicalTree, LayoutModel, DiagramComponent } from '@syncfusion/ej2-angular-diagrams'
import { DataManager } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, ComplexHierarchicalTree);

@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="1000px" [getNodeDefaults]='nodeDefaults'
  [getConnectorDefaults]='connectorDefaults' [layout]='layout' [dataSourceSettings]='data'></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;

  //Initializes data source
  public data: Object = {
    id: 'Name', parentId: 'ReportingPerson',
    dataSource: new DataManager([
      { "Name": "node11" },
      { "Name": "node12", "ReportingPerson": ["node114"] },
      { "Name": "node13", "ReportingPerson": ["node12"] },
      { "Name": "node14", "ReportingPerson": ["node12"] },
      { "Name": "node15", "ReportingPerson": ["node12"] },
      { "Name": "node16", "ReportingPerson": [] },
      { "Name": "node17", "ReportingPerson": ["node13", "node14", "node15"] },
      { "Name": "node18", "ReportingPerson": [] },
      { "Name": "node19", "ReportingPerson": ["node16", "node17", "node18"] },
      { "Name": "node110", "ReportingPerson": ["node16", "node17", "node18"] },
      { "Name": "node111", "ReportingPerson": ["node16", "node17", "node18", "node116"] },
      { "Name": "node21" },
      { "Name": "node22", "ReportingPerson": ["node114"] },
      { "Name": "node23", "ReportingPerson": ["node22"] },
      { "Name": "node24", "ReportingPerson": ["node22"] },
      { "Name": "node25", "ReportingPerson": ["node22"] },
      { "Name": "node26", "ReportingPerson": [] },
      { "Name": "node27", "ReportingPerson": ["node23", "node24", "node25"] },
      { "Name": "node28", "ReportingPerson": [] },
      { "Name": "node29", "ReportingPerson": ["node26", "node27", "node28", "node116"] },
      { "Name": "node210", "ReportingPerson": ["node26", "node27", "node28"] },
      { "Name": "node211", "ReportingPerson": ["node26", "node27", "node28"] },
      { "Name": "node31" },
      { "Name": "node114", "ReportingPerson": ["node11", "node21", "node31"] },
      { "Name": "node116", "ReportingPerson": ["node12", "node22"], }
    ],)
  };

  //Sets the default properties for all the Nodes
  public nodeDefaults(node: NodeModel): NodeModel {
    node.width = 70; node.height = 70;
    return node;
  };

  //Sets the default properties for all the connectors
  public connectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  };
 
  //Uses layout to auto-arrange nodes on the Diagram page
  public layout: LayoutModel = {
    //Sets layout type
    type: 'ComplexHierarchicalTree',
  };
}
