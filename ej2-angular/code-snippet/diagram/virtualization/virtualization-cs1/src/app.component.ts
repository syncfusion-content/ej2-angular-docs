
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramConstraints, DiagramComponent, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [nodes]='nodes' [constraints]='constraints' ></ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  public nodes: NodeModel[] = [];
  @ViewChild('diagram')
  public diagram!: DiagramComponent;
  
  ngOnInit() {
    this.nodes = this.createNodes();
  }
  
  public constraints = DiagramConstraints.Default | DiagramConstraints.Virtualization;

  private createNodes(): NodeModel[] {
    const nodes: NodeModel[] = [];
    const nodeWidth = 50;
    const nodeHeight = 50;
    const space = 50;
    const nodesPerRow = 50;
    const totalNodes = 500;

    for (let i = 0; i < totalNodes; i++) {
      const row = Math.floor(i / nodesPerRow);
      const col = i % nodesPerRow;

      const node: NodeModel = {
        id: `node${i + 1}`,
        width: nodeWidth,
        height: nodeHeight,
        offsetX: col * (nodeWidth + space) + nodeWidth / 2,
        offsetY: row * (nodeHeight + space) + nodeHeight / 2,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: `${i + 1}` }],
      };
      nodes.push(node);
    }
    return nodes;
  }
}
