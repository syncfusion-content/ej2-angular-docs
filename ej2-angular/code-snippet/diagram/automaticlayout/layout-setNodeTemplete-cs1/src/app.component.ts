
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DataSourceModel, DecoratorModel, DiagramModule, HierarchicalTreeService,
  DataBindingService, DataBinding, ImageElement, StackPanel, TextElement, Container, HierarchicalTree } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, HierarchicalTree);


@Component({
  imports: [DiagramModule],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `
  <ejs-diagram #diagram id="diagram" width="100%" height="550px" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" 
  [setNodeTemplate]="setNodeTemplate" [layout]="layout" [dataSourceSettings]="dataSourceSettings"> </ejs-diagram>`,
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
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo", color: 'darkcyan' },
    { Name: "Peter-Manager", ReportingPerson: "Steve-Ceo", color: 'white' },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager", color: 'darkcyan' },
    { Name: "Mary-CSE", ReportingPerson: "Peter-Manager", color: 'white' },
    { Name: "Jim-CSE", ReportingPerson: "Kevin-Manager", color: 'darkcyan' },
    { Name: "Martin-CSE ", ReportingPerson: "Kevin-Manager", color: 'white' },
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.width = 200; node.height = 60;
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    (connector.targetDecorator as DecoratorModel).shape = 'None';
    return connector;
  }

  //Function to add the Template of the Node.
  public setNodeTemplate(node: NodeModel): Container {

    // Create an outer StackPanel as container to contain image and text elements
    let container = new StackPanel();
    container.width = 200;
    container.height = 60;
    container.cornerRadius = 10;
    container.style.fill = 'skyblue';
    container.horizontalAlignment = 'Left';
    container.orientation = 'Horizontal';
    container.id = (node.data as any).Name + '_StackContainter';

    // Create an inner image element to displaying image
    let innerContent = new ImageElement();
    innerContent.id = (node.data as any).Name + '_innerContent';
    innerContent.width = 40;
    innerContent.height = 40;
    innerContent.margin.left = 20;
    innerContent.style.fill = 'lightgrey';

    // Create a inner text element for displaying employee details
    let text = new TextElement();
    text.content = 'Name: ' + (node.data as any).Name;
    text.margin = { left: 10, top: 5 };
    text.id = (node.data as any).Name + '_textContent';
    text.style.fill = 'green';
    text.style.color = 'white';
    if ((node.data as any).Name === 'Steve-Ceo') {
      text.style.fill = 'black';
      text.style.color = 'white';
    }

    // Add inner image and text element to the outer StackPanel
    container.children = [innerContent, text];
    return container;
  }


  ngOnInit(): void {
    this.items = new DataManager(this.data as JSON[], new Query().take(7));

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //Sets layout type
      type: 'HierarchicalTree',
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataSource: this.items
    }

  }

};