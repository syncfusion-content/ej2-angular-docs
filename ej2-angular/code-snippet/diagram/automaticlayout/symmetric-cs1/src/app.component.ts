


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, LayoutModel, DiagramModule,
  SymmetricLayout, SymmetricLayoutService, BasicShapeModel } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(SymmetricLayout);

@Component({
  imports: [DiagramModule],

  providers: [SymmetricLayoutService],
  standalone: true,
  selector: "app-container",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="590px" [nodes]="nodes"
  [connectors]="connectors" [layout]="layout"> </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public nodes: NodeModel[] = [];
  public connectors: ConnectorModel[] = [];
  public layout: LayoutModel = {};

  ngOnInit() {
    this.populateNodes();
    this.layout = {
      type: 'SymmetricalLayout',
      springLength: 80,
      springFactor: 0.8,
      maxIteration: 500,
      margin: { left: 20, top: 20 },
    }

  }

  private connectNodes(parentNode: NodeModel | any, childNode: NodeModel): ConnectorModel {
    const connector: ConnectorModel = {
      id: parentNode.id + childNode.id,
      sourceID: parentNode.id,
      targetID: childNode.id,
      targetDecorator: { shape: 'None' },
    };
    return connector;
  }

  private getRectangle(name: string): NodeModel {
    const shape: BasicShapeModel = {
      type: 'Basic',
      shape: 'Ellipse',
    };
    const node: NodeModel = {
      id: name,
      height: 25,
      width: 25,
      style: { fill: '#ff6329' },
      shape: shape,
    };
    return node;
  }

  private populateNodes() {
    const parentRect: NodeModel = this.getRectangle('p');
    this.nodes.push(parentRect);
    for (let i = 0; i < 2; i++) {
      const childRect_i: NodeModel = this.getRectangle('c' + i);
      this.nodes.push(childRect_i);
      for (let j = 0; j < 2; j++) {
        const childRect_j: NodeModel = this.getRectangle('c' + i + j);
        this.nodes.push(childRect_j);
        for (let k = 0; k < 6; k++) {
          const childRect_k: NodeModel = this.getRectangle('c' + i + j + k);
          this.nodes.push(childRect_k);
          this.connectors.push(this.connectNodes(childRect_j, childRect_k));
        }
        this.connectors.push(this.connectNodes(childRect_i, childRect_j));
      }
      this.connectors.push(this.connectNodes(parentRect, childRect_i));
    }
    return this.nodes;
  }

}