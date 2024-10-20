
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DataSourceModel, DecoratorModel, DiagramModule, DataBindingService, SnapSettingsModel,
  SelectorModel, SelectorConstraints, TreeInfo, DataBinding, HierarchicalTree, HierarchicalTreeService } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, HierarchicalTree);

@Component({
  imports: [
    DiagramModule
  ],

  providers: [HierarchicalTreeService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `
  <ejs-diagram #diagram id="diagram" width="100%" height="590px" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" 
  [layout]="layout" [snapSettings]="snapSettings" [selectedItems]="selectedItems" [dataSourceSettings]="dataSourceSettings"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public items?: DataManager;
  public layout: LayoutModel = {};
  public dataSourceSettings: DataSourceModel = {};
  public snapSettings: SnapSettingsModel = {};
  public selectedItems: SelectorModel = {};

  //Initialize data source
  public data: object[] = [
    {
      'Id': 'parent1',
      'Name': 'Maria ',
      'Designation': 'Managing Director',
      'RatingColor': '#C34444'
    },
    {
      'Id': 'parent',
      'Name': ' sam',
      'Designation': 'Managing Director',
      'ReportingPerson': 'parent1',
      'RatingColor': '#C34444'
    },
    {
      'Id': 'parent3',
      'Name': ' sam geo',
      'Designation': 'Managing Director',
      'ReportingPerson': 'parent1',
      'RatingColor': '#C34444'
    },
    {
      'Id': '80',
      'Name': ' david',
      'Designation': 'Managing Director',
      'ReportingPerson': 'parent3',
      'RatingColor': '#C34444'
    },
    {
      'Id': '82',
      'Name': ' pirlo',
      'Designation': 'Managing Director',
      'ReportingPerson': 'parent',
      'RatingColor': '#C34444'
    }
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.expandIcon = {
      height: 15,
      width: 15,
      shape: "Plus",
      fill: 'lightgray',
      offset: { x: .5, y: .85 }
    }
    node.collapseIcon = {
      height: 15,
      width: 15,
      shape: "Minus",
      offset: { x: .5, y: .85 },
    }
    node.height = 50; node.width = 50; 
    return node;
  }

  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    (connector.targetDecorator as DecoratorModel).shape = "None";
    return connector;
  }

  ngOnInit(): void {

    this.selectedItems = { constraints: ~SelectorConstraints.ResizeAll }
    this.snapSettings = { constraints: 0 }
    this.items = new DataManager(this.data as JSON[], new Query().take(7));

    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      //Sets layout type
      type: 'OrganizationalChart',
      // define the getLayoutInfo
      getLayoutInfo: (tree: TreeInfo | any) => {
        if (!tree.hasSubTree) {
          tree.orientation = 'vertical';
          tree.type = 'alternate';
        }
      }
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Id',
      parentId: 'ReportingPerson',
      dataSource: this.items
    }

  }

}