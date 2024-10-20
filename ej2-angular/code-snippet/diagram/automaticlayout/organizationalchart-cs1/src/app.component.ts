
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DataSourceModel, DiagramModule,
  HierarchicalTreeService, DataBindingService, DataBinding, HierarchicalTree } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, HierarchicalTree);

@Component({
  imports: [ DiagramModule ],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults"
  [getConnectorDefaults]="getConnectorDefaults" [layout]="layout" [dataSourceSettings]="dataSourceSettings">
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public items?: DataManager;
  public layout?: LayoutModel;
  public dataSourceSettings?: DataSourceModel;

  //Initializes data source
  public data: object[] = [
    {
      Id: 'parent',
      Role: 'Project Management',
    },
    {
      Id: 1,
      Role: 'R&D Team',
      Team: 'parent',
    },
    {
      Id: 3,
      Role: 'Philosophy',
      Team: '1',
    },
    {
      Id: 4,
      Role: 'Organization',
      Team: '1',
    },
    {
      Id: 5,
      Role: 'Technology',
      Team: '1',
    },
    {
      Id: 7,
      Role: 'Funding',
      Team: '1',
    },
    {
      Id: 8,
      Role: 'Resource Allocation',
      Team: '1',
    },
    {
      Id: 9,
      Role: 'Targeting',
      Team: '1',
    },
    {
      Id: 11,
      Role: 'Evaluation',
      Team: '1',
    },
    {
      Id: 156,
      Role: 'HR Team',
      Team: 'parent',
    },
    {
      Id: 13,
      Role: 'Recruitment',
      Team: '156',
    },
    {
      Id: 112,
      Role: 'Employee Relation',
      Team: '156',
    },
    {
      Id: 17,
      Role: 'Production & Sales Team',
      Team: 'parent',
    },
    {
      Id: 119,
      Role: 'Design',
      Team: '17',
    },
    {
      Id: 19,
      Role: 'Operation',
      Team: '17',
    },
    {
      Id: 20,
      Role: 'Support',
      Team: '17',
    },
    {
      Id: 21,
      Role: 'Quality Assurance',
      Team: '17',
    },
    {
      Id: 23,
      Role: 'Customer Interaction',
      Team: '17',
    },
    {
      Id: 24,
      Role: 'Support and Maintenance',
      Team: '17',
    },
    {
      Id: 25,
      Role: 'Task Coordination',
      Team: '17',
    }
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.annotations = [{ content: (node.data as { Role: 'string' }).Role }];
    node.width = 75;
    node.height = 40;
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  }

  ngOnInit(): void {

    this.items = new DataManager(this.data as JSON[], new Query().take(5));

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //set layout type
      type: 'OrganizationalChart'
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Id',
      parentId: 'Team',
      dataSource: this.items
    }
  }
}
