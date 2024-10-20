import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Connector, DiagramModule, DiagramComponent, NodeModel, ConnectorModel,ConnectorConstraints,ICollectionChangeEventArgs,Node  } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [enableConnectorSplit]="enableConnectorSplit" [nodes]='nodes' [connectors]='connectors' [getConnectorDefaults] ='getConnectorDefaults' (collectionChange)="collectionChange($event)">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public enableConnectorSplit: boolean = true;

    public nodes: NodeModel[] = [
    { id: 'node1', offsetX: 150, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: 'node2', offsetX: 650, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'node3', offsetX: 490, offsetY: 290, width: 100, height: 100, annotations: [{ content: 'node3' }] }
  ];
    public connectors: ConnectorModel[] = [{
        id: 'connector1',sourceID:"node1",targetID:"node2", style:{strokeColor: 'red', strokeWidth: 2, strokeDashArray: '3,3' },
       
    }
  ];
  public getConnectorDefaults(obj: ConnectorModel): void {
    obj.constraints =  ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
  
  }
  public collectionChange(args: ICollectionChangeEventArgs): void {
    if (args.state === 'Changed' && args.element instanceof Connector) {
      let sourceNode: Node | null = this.diagram?.getObject(args.element.sourceID) as Node;
      if (sourceNode) {
        sourceNode.inEdges.forEach((edgeId) => {
          let initialConnector = this.diagram?.getObject(edgeId) as ConnectorModel;
          if (initialConnector) {
            args.element.style = initialConnector.style  
          }
        });
      }
    }
    this.diagram?.dataBind();
  }

}


