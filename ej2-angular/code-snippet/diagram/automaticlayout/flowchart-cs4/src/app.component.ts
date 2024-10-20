
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel, DiagramModule, DataBindingService, FlowchartLayoutService,
  ConnectorModel, Diagram, DataBinding, LayoutModel, FlowchartLayout } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(DataBinding, FlowchartLayout);

@Component({
  imports: [DiagramModule],

  providers: [FlowchartLayoutService, DataBindingService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="650px" [nodes]='nodes' [connectors]='connectors'
  [getNodeDefaults]='nodeDefaults' [getConnectorDefaults]='connectorDefaults' [layout]='layout' ></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})


export class AppComponent {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

  //Initialize nodes
  public nodes = [
    { id: '1', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'Start' }], style: { fill: '#6CA0DC' } },
    { id: '2', shape: { type: 'Flow', shape: 'Decision' }, annotations: [{ content: 'Decision?' }], style: { fill: '#6CA0DC' } },
    { id: '3', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process1' }], style: { fill: '#6CA0DC' } },
    { id: '4', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process2' }], style: { fill: '#6CA0DC' } },
    { id: '5', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'End' }], style: { fill: '#6CA0DC' } }
  ];

  //Initialize connectors
  public connectors = [
    { id: 'connector1', sourceID: '1', targetID: '2' },
    { id: 'connector2', sourceID: '2', targetID: '3', annotations: [{ content: 'Reject' }] },
    { id: 'connector3', sourceID: '2', targetID: '4', annotations: [{ content: 'Accept' }] },
    { id: 'connector4', sourceID: '4', targetID: '5', },
  ];

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

    //Customizes the flowchart layout
    flowchartLayoutSettings: {
      //Sets the yes branch values
      yesBranchValues: ["Yes", "Accept"],
      //Sets the no branch values
      noBranchValues: ["No", "Reject"]
    }
  }
  
}
