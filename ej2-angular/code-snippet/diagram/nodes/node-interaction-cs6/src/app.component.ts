import {
  DiagramModule, PointPortModel, PortVisibility, DiagramComponent,
  NodeModel,
} from '@syncfusion/ej2-angular-diagrams';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='label' [offsetX]=350 [offsetY]=250 [ports]='ports'>
            <e-node-annotations>
                    <e-node-annotation content="Flip by Label">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='port' [offsetX]=550 [offsetY]=250 [ports]='ports'>
            <e-node-annotations>
                    <e-node-annotation content="Flip by Port">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='all' [offsetX]=350 [offsetY]=450 [ports]='ports'>
            <e-node-annotations>
                    <e-node-annotation content="Flip by All">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
            <e-node id='none' [offsetX]=550 [offsetY]=450 [ports]='ports'>
            <e-node-annotations>
                    <e-node-annotation content="Flip by None">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;
  public ports: PointPortModel[] = [{
    // Sets the position for the port
    offset: {
      x: 0,
      y: 0.5
    },
    visibility: PortVisibility.Visible
  }]
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.shape = {
      type: 'Basic',
      shape: 'RightTriangle',
    };
    node.height = 100;
    node.width = 100;
    node.flip = 'Horizontal';
    if (node.id === 'port') {
      (node as any).flipMode = 'Port';
    }
    else if (node.id === 'label') {
      (node as any).flipMode = 'Label';
    }
    else if (node.id === 'all') {
      (node as any).flipMode = 'All';
    }
    else {
      (node as any).flipMode = 'None';
    }
    return node;
  }
}
