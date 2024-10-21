
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DataSourceModel, HierarchicalTree, PaletteModel, NodeConstraints,
  IDropEventArgs, randomId, DiagramModule, HierarchicalTreeService, DataBindingService, DataBinding, SymbolPaletteModule } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ExpandMode } from '@syncfusion/ej2-navigations';

Diagram.Inject(DataBinding, HierarchicalTree);


@Component({
  imports: [DiagramModule, SymbolPaletteModule],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `<div style="height: 600px; width: 150px; float: left">
  <ejs-symbolpalette id="symbolpalette" width="100%" height="600px" [expandMode]="expandMode" [palettes]="palettes" [symbolHeight]=50 [symbolWidth]=100>
  </ejs-symbolpalette></div>
  <ejs-diagram #diagram id="diagram" width="80%" height="600px" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" 
  [layout]="layout" [dataSourceSettings]="dataSourceSettings" (drop)="drop($event)"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public items?: DataManager;
  public layout?: LayoutModel;
  public dataSourceSettings?: DataSourceModel;
  public expandMode: ExpandMode = 'Multiple';

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

  //Initialize shapes for symbol palette
  public palettes: PaletteModel[] = [
    {
      title: 'Basic shapes',
      id: 'basicShapes',
      symbols: [
        {
          id: 'Node',
          width: 100,
          height: 50,
          data: { Name: 'New Node' },
        },
      ],
    },
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.width = 100; node.height = 40;
    node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  }

  // Handle drop event that create a connection between the source and target item
  public drop(args: IDropEventArgs) {
    setTimeout(() => {
      //Argument element is used to get the dropped node.
      let node: NodeModel = args.element as NodeModel;
      let bottomNode: NodeModel = args.target as NodeModel;
      //Gets the connector that connected to dropped node
      let edges: string[] = this.diagram.getEdges(node);
      if (edges && edges.length > 0) {
        let connector: ConnectorModel = this.diagram.getObject(edges[0]);
        //Argument target is used to get the hovered node
        connector.sourceID = (args.target as NodeModel).id;
        this.diagram.dataBind();
      } else {
        let newCon: ConnectorModel = {
          id: 'newcon' + randomId(),
          sourceID: (args.target as NodeModel).id,
          targetID: (args.element as NodeModel).id,
        };
        if (newCon.sourceID === undefined) {
          newCon.sourceID = this.diagram.nodes[0].id;
        }
        this.diagram.dataBind();
        this.diagram.add(newCon);
      }
      this.diagram.doLayout();
    }, 100);
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

}