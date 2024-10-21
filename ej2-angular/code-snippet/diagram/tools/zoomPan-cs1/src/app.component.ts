import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DiagramComponent,
  Diagram,
  ConnectorModel,
  DiagramTools,
  BasicShapeModel,
  DiagramModule,
  NodeModel,
} from '@syncfusion/ej2-angular-diagrams';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)' [nodes]='nodes' [connectors]='connector'>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public drawingshape?: BasicShapeModel;
  public nodes: NodeModel[] = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 200,
      offsetY: 200,
      annotations: [
        {
          id: 'label1',
          content: 'Start',
        },
      ],
      shape: {
        type: 'Flow',
        shape: 'Terminator',
      },
    },
    {
      id: 'Init',
      width: 140,
      height: 50,
      offsetX: 400,
      offsetY: 400,
      annotations: [
        {
          id: 'label2',
          content: 'End',
        },
      ],
      shape: {
        type: 'Flow',
        shape: 'Process',
      },
    },
  ];
  public connector: ConnectorModel[] = [
    {
      // Name of the connector
      id: 'connector1',
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2,
      },
      targetDecorator: {
        style: {
          fill: '#6BA5D7',
          strokeColor: '#6BA5D7',
        },
      },
      // ID of the source and target nodes
      sourceID: 'Start',
      targetID: 'Init',
      type: 'Orthogonal',
    },
  ];
  public created(args: Object): void {
    (this.diagram as Diagram).tool = DiagramTools.ZoomPan;
  }
}