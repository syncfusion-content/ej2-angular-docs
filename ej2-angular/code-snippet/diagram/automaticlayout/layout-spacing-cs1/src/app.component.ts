
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DataSourceModel, DiagramModule,
  HierarchicalTreeService, DataBindingService, DataBinding, HierarchicalTree } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, HierarchicalTree);

@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `
  <label for="horizontalSpacing">Horizontal Spacing : </label>
  <input type="number" id="horizontalSpacing" value="30" (change)="onHorizontalChange($event)">
  <label for="verticalSpacing">Vertical Spacing : </label>
  <input type="number" id="verticalSpacing" value="30" (change)="onVerticalChange($event)">
  <ejs-diagram #diagram id="diagram" width="100%" height="550px" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" 
  [layout]="layout" [dataSourceSettings]="dataSourceSettings"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public items?: DataManager;
  public layout?: LayoutModel;
  public dataSourceSettings?: DataSourceModel;

  //Initialize data source
  public data: object[] = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Kevin-Manager" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE ", ReportingPerson: "Peter-Manager" },
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.annotations = [{ content: (node.data as { Name: 'string' }).Name }];
    node.width = 100; node.height = 40;
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  }

  ngOnInit(): void {
    this.items = new DataManager(this.data as JSON[], new Query().take(7));

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //Sets layout type
      type: 'HierarchicalTree',
      //set layout spacing
      horizontalSpacing: 30,
      verticalSpacing: 30,
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataSource: this.items
    }

  }

  onHorizontalChange(event: Event) {
    let horizontalSpacing = Number((event.target as HTMLSelectElement).value);
    if (horizontalSpacing < 20) {
      horizontalSpacing = 20;
    }
    if (horizontalSpacing > 100) {
      horizontalSpacing = 100;
    }
    this.diagram.layout.horizontalSpacing = horizontalSpacing;
    this.diagram.dataBind();
  }

  onVerticalChange(event: Event) {
    let verticalSpacing = Number((event.target as HTMLSelectElement).value);
    if (verticalSpacing < 20) {
      verticalSpacing = 20;
    }
    if (verticalSpacing > 100) {
      verticalSpacing = 100;
    }
    this.diagram.layout.verticalSpacing = verticalSpacing;
    this.diagram.dataBind();
  }

}