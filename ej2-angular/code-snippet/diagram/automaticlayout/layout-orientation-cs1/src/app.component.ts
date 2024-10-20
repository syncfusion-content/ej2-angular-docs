
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DataSourceModel, DiagramModule,
  HierarchicalTree, LayoutOrientation, HierarchicalTreeService, DataBindingService, DataBinding } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, HierarchicalTree);


@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `
  <label for="orientation">Orientation : </label>
  <select id="orientation" (change)="onOrientationChange($event)">
      <option value="TopToBottom">TopToBottom</option>
      <option value="BottomToTop">BottomToTop</option>
      <option value="LeftToRight">LeftToRight</option>
      <option value="RightToLeft">RightToLeft</option>
    </select>

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
    { Name: "Peter-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE", ReportingPerson: "Peter-Manager" },
    { Name: "Jim-CSE", ReportingPerson: "Kevin-Manager" },
    { Name: "Martin-CSE ", ReportingPerson: "Kevin-Manager" },
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
      //Sets layout alignment
      horizontalAlignment: 'Left',
      verticalAlignment: 'Top',
      orientation: 'TopToBottom',
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataSource: this.items
    }

  }

  onOrientationChange(event: Event) {
    let orientation = (event.target as HTMLSelectElement).value as LayoutOrientation;
    this.diagram.layout.orientation = orientation;
    this.diagram.dataBind();
  }

}