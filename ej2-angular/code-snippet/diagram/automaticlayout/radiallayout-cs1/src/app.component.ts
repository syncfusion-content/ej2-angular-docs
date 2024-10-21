
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, SnapSettingsModel, LayoutModel, DataSourceModel, DataBinding,
  DiagramModule, RadialTreeService, DataBindingService, RadialTree, ConnectorModel, DecoratorModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, RadialTree);

@Component({
  imports: [DiagramModule],

  providers: [RadialTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="590px" [snapSettings]="snapSettings" [getNodeDefaults]="getNodeDefaults"
    [getConnectorDefaults]="getConnectorDefaults" [layout]="layout" [dataSourceSettings]="dataSourceSettings"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public snapSettings?: SnapSettingsModel;
  public items?: DataManager;
  public layout?: LayoutModel;
  public dataSourceSettings?: DataSourceModel;

  //Initializes data source
  public data: object[] = [
    {
      Id: 'parent',
      Name: 'Maria Anders',
      Designation: 'Managing Director'
    },
    {
      Id: '1',
      Name: 'Ana Trujillo',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '2',
      Name: 'Lino Rodri',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '3',
      Name: 'Philip Cramer',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '4',
      Name: 'Pedro Afonso',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '15',
      Name: 'Paul Henriot',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '18',
      Name: 'Laura Callahan',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '5',
      Name: 'Anto Moreno',
      Designation: 'Project Lead',
      ReportingPerson: '1',
    },
    {
      Id: '6',
      Name: 'Elizabeth Roel',
      Designation: 'Project Lead',
      ReportingPerson: '1',
    },
    {
      Id: '7',
      Name: 'Aria Cruz',
      Designation: 'Project Lead',
      ReportingPerson: '18',
    },
    {
      Id: '8',
      Name: 'Eduardo Roel',
      Designation: 'Project Lead',
      ReportingPerson: '18',
    },
    {
      Id: '9',
      Name: 'Howard Snyd',
      Designation: 'Project Lead',
      ReportingPerson: '2',
    },
    {
      Id: '10',
      Name: 'Daniel Tonini',
      Designation: 'Project Lead',
      ReportingPerson: '2',
    },
    {
      Id: '11',
      Name: 'Nardo Batista',
      Designation: 'Project Lead',
      ReportingPerson: '3',
    },
    {
      Id: '12',
      Name: 'Michael Holz',
      Designation: 'Project Lead',
      ReportingPerson: '3',
    },
    {
      Id: '13',
      Name: 'Kloss Perrier',
      Designation: 'Project Lead',
      ReportingPerson: '4',
    },
    {
      Id: '14',
      Name: 'Liz Nixon',
      Designation: 'Project Lead',
      ReportingPerson: '4',
    },
    {
      Id: '16',
      Name: 'Paula Parente',
      Designation: 'Project Lead',
      ReportingPerson: '15',
    },
    {
      Id: '17',
      Name: 'Matti Kenna',
      Designation: 'Project Lead',
      ReportingPerson: '15',
    }
  ];

  //Sets the default properties for nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 20;
    node.width = 20;
    return node;
  }

  //Sets the default properties for connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    (connector.targetDecorator as DecoratorModel).shape = 'None';
    connector.type = 'Straight';
    return connector;
  }

  ngOnInit(): void {
    this.snapSettings = { constraints: 0 }
    this.items = new DataManager(this.data as JSON[], new Query().take(7));

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //set layout type
      type: 'RadialTree',
      root: 'parent'
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Id',
      parentId: 'ReportingPerson',
      dataSource: this.items
    }
  }
}
