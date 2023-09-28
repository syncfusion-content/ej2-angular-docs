


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, DiagramComponent, NodeModel, ConnectorModel } from '@syncfusion/ej2-angular-diagrams';
import { NodeConstraints, LineRouting, DiagramConstraints, ConnectorConstraints, SnapConstraints, SnapSettingsModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(LineRouting);

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="645px" [nodes]='nodes' [connectors]='connectors' [getNodeDefaults]='getNodeDefaults' [constraints]='constraints'>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public constraints: DiagramConstraints = DiagramConstraints.Default | DiagramConstraints.LineRouting;
  public nodes: NodeModel[] = [
    { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
    { id: 'shape2', offsetX: 350, offsetY: 300, width: 120, height: 50 },
    { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 },
    { id: 'shape4', offsetX: 300, offsetY: 200, width: 120, height: 50 }
  ];

  public connectors: ConnectorModel[] = [
    { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal', annotations: [{ offset: .7, content: ' Routing \n enabled', style: { fill: "white" } }] },
    { id: 'connector2', sourceID: 'shape1', targetID: 'shape2', annotations: [{ offset: .6, content: ' Routing \n disabled', style: { fill: "white" } }], type: 'Orthogonal', constraints: ConnectorConstraints.Default & ~ConnectorConstraints.InheritLineRouting }
  ];
  public getNodeDefaults(obj: NodeModel): NodeModel {
    obj = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } };
    return obj;
  }
}



