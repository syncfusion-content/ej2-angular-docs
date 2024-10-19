import {
  DiagramModule,
  HierarchicalTreeService,
  DataBindingService,
  LayoutAnimationService,
  DiagramComponent,
  Diagram,
  NodeModel,
  ConnectorModel,
  SelectorModel,
  SelectorConstraints,
  SnapSettingsModel,
  LayoutModel,
  DataSourceModel,
  DecoratorModel,
  ShapeStyleModel,
  TreeInfo,
} from '@syncfusion/ej2-angular-diagrams';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
  imports: [DiagramModule],

  providers: [
    HierarchicalTreeService,
    DataBindingService,
    LayoutAnimationService,
  ],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" [snapSettings]="snapSettings" [selectedItems]="selectedItems" [layout]="layout" [dataSourceSettings]="dataSourceSettings">
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public selectedItems?: SelectorModel;
  public snapSettings?: SnapSettingsModel;
  public items?: DataManager;
  public layout?: LayoutModel;
  public dataSourceSettings?: DataSourceModel;
  //Initializes data source
  public data: object[] = [
    {
      Id: 'parent1',
      Name: 'Maria ',
      Designation: 'Managing Director',
      RatingColor: '#C34444',
    },
    {
      Id: 'parent',
      Name: ' sam',
      Designation: 'Managing Director',
      ReportingPerson: 'parent1',
      RatingColor: '#C34444',
    },
  ];
  //Sets the default properties for all the Nodes
  public getNodeDefaults(obj: NodeModel | any, diagram: Diagram): NodeModel {
    (obj.height = 40),
      (obj.width = 100),
      (obj.expandIcon = {
        shape: 'ArrowDown',
        width: 20,
        height: 20,
        fill: 'red',
        borderColor: 'blue',
        iconColor: 'white',
        cornerRadius: 7,
        borderWidth: 2.5,
        offset: {
          x: 0.5,
          y: 0.85,
        },
      });
    obj.collapseIcon = {
      offset: {
        x: 0.5,
        y: 0.85,
      },
      shape: 'ArrowUp',
      width: 20,
      height: 20,
      fill: 'green',
      borderColor: 'blue',
      iconColor: 'white',
      cornerRadius: 7,
      borderWidth: 2.5,
    };
    obj.collapseIcon.height = 15;
    obj.collapseIcon.width = 15;
    obj.collapseIcon.shape = 'Minus';
    obj.borderColor = 'white';
    obj.backgroundColor = '#6BA5D7';
    obj.borderWidth = 1;
    obj.style = {
      fill: 'transparent',
      strokeWidth: 2,
    };
    return obj;
  }
  //Sets the default properties for all the connectors
  public getConnectorDefaults(
    connector: ConnectorModel,
    diagram: Diagram
  ): ConnectorModel {
    connector.style = {
      strokeColor: '#6BA5D7',
      strokeWidth: 2,
    };
    (
      ((connector as ConnectorModel).targetDecorator as DecoratorModel)
        .style as ShapeStyleModel
    ).fill = '#6BA5D7';
    (
      ((connector as ConnectorModel).targetDecorator as DecoratorModel)
        .style as ShapeStyleModel
    ).strokeColor = '#6BA5D7';
    ((connector as ConnectorModel).targetDecorator as DecoratorModel).shape =
      'None';
    connector.type = 'Orthogonal';
    return connector;
  }
  ngOnInit(): void {
    this.selectedItems = {
      constraints: ~SelectorConstraints.ResizeAll,
    };
    this.snapSettings = {
      constraints: 0,
    };
    this.items = new DataManager(this.data as JSON[], new Query().take(7));
    //Uses layout to auto-arrange nodes on the Diagram page
    this.layout = {
      // set enableAnimation as true
      enableAnimation: true,
      type: 'HierarchicalTree',
      margin: {
        top: 20,
      }, // define the getLayoutInfo
      getLayoutInfo: (node: Node, tree: TreeInfo | any) => {
        if (!tree.hasSubTree) {
          tree.orientation = 'vertical';
          tree.type = 'alternate';
        }
      },
    };
    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'Id',
      parentId: 'ReportingPerson',
      dataSource: this.items,
    };
  }
}