
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DataSourceModel, DiagramModule, HierarchicalTreeService,
  DataBindingService, DataBinding, HierarchicalTree, HorizontalAlignment, VerticalAlignment } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, HierarchicalTree);

@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `
  <label for="horizontalAlignment">Horizontal Alignment : </label>
  <select id="horizontalAlignment" (change)="onHorizontalChange($event)">
      <option value="Left">Left</option>
      <option value="Center">Center</option>
      <option value="Right">Right</option>
    </select>
  <label for="verticalAlignment">Vertical Alignment : </label>
    <select id="verticalAlignment" (change)="onVerticalChange($event)">
      <option value="Top">Top</option>
      <option value="Center">Center</option>
      <option value="Bottom">Bottom</option>
    </select>
  <ejs-diagram #diagram id="diagram" width="100%" height="550px" [getNodeDefaults]="getNodeDefaults"
  [getConnectorDefaults]="getConnectorDefaults" [layout]="layout" [dataSourceSettings]="dataSourceSettings"> </ejs-diagram>`,
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
  public getNodeDefaults(node: NodeModel, diagram: Diagram): NodeModel {
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
      //set layout alignments
      horizontalAlignment: 'Left',
      verticalAlignment: 'Top'
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataSource: this.items
    }

  }

  onHorizontalChange(event: Event) {
    const horizontalAlignment = (event.target as HTMLSelectElement).value as HorizontalAlignment;
    this.diagram.layout.horizontalAlignment = horizontalAlignment;
    this.diagram.dataBind();
  }

  onVerticalChange(event: Event) {
    const verticalAlignment = (event.target as HTMLSelectElement).value as VerticalAlignment;
    this.diagram.layout.verticalAlignment = verticalAlignment;
    this.diagram.dataBind();
  }

}