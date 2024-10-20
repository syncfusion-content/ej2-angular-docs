

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, DataBindingService, FlowchartLayoutService, NodeModel,
  ConnectorModel, Diagram, DataBinding, LayoutModel, FlowchartLayout } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, FlowchartLayout);

@Component({
  imports: [DiagramModule],

  providers: [FlowchartLayoutService, DataBindingService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="650px" [getNodeDefaults]='nodeDefaults' 
  [getConnectorDefaults]='connectorDefaults' [layout]='layout' [dataSourceSettings]='dataSource' ></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

  //Initializes data source
  public data: Object[] =
    [
      {
        "id": "1",
        "name": "Start",
        "shape": "Terminator",
        "color": "#6CA0DC"
      },
      {
        "id": "2",
        "name": "Input",
        "parentId": ["1"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
      },
      {
        "id": "3",
        "name": "Decision?",
        "parentId": ["2"],
        "shape": "Decision",
        "color": "#6CA0DC"
      },
      {
        "id": "4",
        "label": ["No"],
        "name": "Process1",
        "parentId": ["3"],
        "shape": "Process",
        "color": "#6CA0DC"
      },
      {
        "id": "5",
        "label": ["Yes"],
        "name": "Process2",
        "parentId": ["3"],
        "shape": "Process",
        "color": "#6CA0DC"
      },
      {
        "id": "6",
        "name": "Output",
        "parentId": ["5"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
      },
      {
        "id": "7",
        "name": "Output",
        "parentId": ["4"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
      },
      {
        "id": "8",
        "name": "End",
        "parentId": ["6", "7"],
        "shape": "Terminator",
        "color": "#6CA0DC"
      }
    ]

  //Configures data source for Diagram
  public dataSource: Object = {
    id: 'id', parentId: 'parentId',
    dataManager: new DataManager(this.data as JSON[], new Query().take(7))
  };

  //Sets the default properties for all the Nodes
  public nodeDefaults(node: NodeModel): NodeModel {
    node.width = 120; node.height = 50;
    if ((node.shape as any).shape === 'Decision') {
      node.height = 80;
    }
    return node;
  };

  //Sets the default properties for all the Connector
  public connectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  };

  //Uses layout to auto-arrange nodes on the Diagram page
  public layout: LayoutModel = {
    //Sets layout type
    type: 'Flowchart',
  };

}
