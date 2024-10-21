
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, SnapSettingsModel, LayoutModel,
  DataSourceModel, DiagramModule, DataBindingService, DataBinding, FlowchartLayout, FlowchartLayoutService } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, FlowchartLayout);

@Component({
  imports: [DiagramModule],

  providers: [FlowchartLayoutService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults"
  [getConnectorDefaults]="getConnectorDefaults" [snapSettings]="snapSettings" [layout]="layout" [dataSourceSettings]="dataSourceSettings">
    </ejs-diagram>`,
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
      Name: "Steve-Ceo",
    },
    {
      Name: "Kevin-Manager",
      ReportingPerson: "Steve-Ceo"
    },
    {
      Name: "Peter-Manager",
      ReportingPerson: "Steve-Ceo"
    },
    {
      Name: "John- Manager",
      ReportingPerson: "Peter-Manager"
    },
    {
      Name: "Mary-CSE ",
      ReportingPerson: "Peter-Manager"
    },
    {
      Name: "Jim-CSE ",
      ReportingPerson: "Kevin-Manager"
    },
    {
      Name: "Martin-CSE",
      ReportingPerson: "Kevin-Manager"
    }
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel, diagram: Diagram): NodeModel {
    node.annotations = [{ content: (node.data as { Name: 'string' }).Name }];
    node.width = 100; node.height = 40;
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel, diagram: Diagram): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  }

  ngOnInit(): void {
    this.items = new DataManager(this.data as JSON[], new Query().take(7));

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      type: 'Flowchart',
      fixedNode:'Steve-Ceo'
    }
    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataSource: this.items
    }
  }
}
