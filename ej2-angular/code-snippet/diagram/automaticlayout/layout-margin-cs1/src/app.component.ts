
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DataSourceModel, DecoratorModel, ShapeStyleModel, HierarchicalTree, TextModel,
  DiagramModule, HierarchicalTreeService, DataBindingService, DataBinding, Rect, MarginModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, HierarchicalTree);


@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `
  <label for="marginLeft">Margin Left : </label>
  <input type="number" id="marginLeft" value="100" (change)="onLeftChange($event)">
  <label for="marginTop">Margin Top : </label>
  <input type="number" id="marginTop" value="100" (change)="onTopChange($event)">
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
      //Sets layout alignment
      horizontalAlignment: 'Left',
      verticalAlignment: 'Top',
      margin: { left: 100, top: 100 },
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataSource: this.items
    }

  }

  onLeftChange(event: Event) {
    let leftValue = Number((event.target as HTMLSelectElement).value);
    if (leftValue < 20) {
      leftValue = 20;
    }
    if (leftValue > 500) {
      leftValue = 500;
    }
    (this.diagram.layout.margin as MarginModel).left = leftValue;
    this.diagram.dataBind();
  }

  onTopChange(event: Event) {
    let topValue = Number((event.target as HTMLSelectElement).value);
    if (topValue < 20) {
      topValue = 20;
    }
    if (topValue > 500) {
      topValue = 500;
    }
    (this.diagram.layout.margin as MarginModel).top = topValue;
    this.diagram.dataBind();
  }

}