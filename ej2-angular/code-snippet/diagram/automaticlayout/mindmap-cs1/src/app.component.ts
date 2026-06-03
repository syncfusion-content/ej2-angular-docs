import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule, MindMapService, DataBindingService, DataBinding } from '@syncfusion/ej2-angular-diagrams'


import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DiagramComponent, Diagram, NodeModel, ConnectorModel, MindMap, LayoutModel, DataSourceModel,
  TextModel, DecoratorModel, ShapeStyleModel
} from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, MindMap);

@Component({
  imports: [DiagramModule],

  providers: [MindMapService, DataBindingService],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults"
  [getConnectorDefaults]="getConnectorDefaults" [layout]="layout" [dataSourceSettings]="dataSourceSettings"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public items?: DataManager;
  public layout?: LayoutModel;
  public dataSourceSettings?: DataSourceModel;

  //Initializes data source
  public data: Object[] = [
    {
      id: 1,
      Label: 'StackPanel'
    },
    {
      id: 2,
      Label: 'Label',
      parentId: 1
    },
    {
      id: 3,
      Label: 'ListBox',
      parentId: 1
    },
    {
      id: 4,
      Label: 'StackPanel',
      parentId: 2
    },
    {
      id: 5,
      Label: 'Border',
      parentId: 2
    },
    {
      id: 6,
      Label: 'Border',
      parentId: 4
    },
    {
      id: 7,
      Label: 'Button',
      parentId: 4
    },
    {
      id: 8,
      Label: 'ContentPresenter',
      parentId: 5
    },
    {
      id: 9,
      Label: 'Text Block',
      parentId: 5
    },
  ];

  //Sets the default properties for all the Nodes
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.annotations = [{ content: (node.data as { Label: string }).Label }];
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
      type: 'MindMap',
      orientation: 'Horizontal'
    }

    //Configures data source for Diagram
    this.dataSourceSettings = {
      id: 'id',
      parentId: 'parentId',
      dataSource: this.items,
      root: String(1)
    }
  }
}
