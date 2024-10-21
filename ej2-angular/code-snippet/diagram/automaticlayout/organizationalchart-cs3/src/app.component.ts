
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, SnapSettingsModel, LayoutModel, DataSourceModel, DiagramModule, DecoratorModel,
  HierarchicalTreeService, DataBindingService, TreeInfo, DataBinding, HierarchicalTree, SubTreeAlignments } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, HierarchicalTree);

@Component({
  imports: [ DiagramModule ],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `
  <label for="alignment">Alignment: </label>
    <select id="alignment" #alignment (change)="onAlignmentChange($event)">
      <option value="Center">Center</option>
      <option value="Right">Right</option>
      <option value="Left">Left</option>
      <option value="Balanced">Balanced</option>
    </select>
  <ejs-diagram #diagram id="diagram" width="100%" height="530px" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults"
  [snapSettings]="snapSettings" [layout]="layout" [dataSourceSettings]="dataSourceSettings"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public snapSettings?: SnapSettingsModel;
  public items?: DataManager;
  public layout?: LayoutModel;
  public dataSourceSettings?: DataSourceModel;

  //Initializes data source
  public data: object[] = [
    { Id: 1, Role: 'General Manager' },
    { Id: 2, Role: 'Assistant Manager', Team: 1 },
    { Id: 3, Role: 'Human Resource Manager', Team: 1 },
    { Id: 4, Role: 'Design Manager', Team: 1 },
    { Id: 5, Role: 'Operation Manager', Team: 1 },
    { Id: 6, Role: 'Marketing Manager', Team: 1 },
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.width = 150;
    node.height = 50;
    node.annotations = [{ content: (node.data as { Role: 'string' }).Role }];
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    (connector.targetDecorator as DecoratorModel).shape = 'None';
    return connector;
  }

  ngOnInit(): void {

    this.snapSettings = { constraints: 0 };
    this.items = new DataManager(this.data as JSON[], new Query().take(7));

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //Sets layout type
      type: 'OrganizationalChart',
      // define the getLayoutInfo
      getLayoutInfo: (node: Node, options: TreeInfo) => {
        if (!options.hasSubTree) {
          options.type = 'Center';
          options.orientation = 'Horizontal';
        }
      },
    };

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Id',
      parentId: 'Team',
      dataSource: this.items
    };
  };

  public onAlignmentChange(event: Event) {
    const args = event.target as HTMLInputElement;
    this.diagram.layout.getLayoutInfo = (node: Node, options: TreeInfo) => {
      if (!options.hasSubTree) {
        options.type = (args.value as SubTreeAlignments);
        options.orientation = 'Horizontal';
      }
    };
  };

}
