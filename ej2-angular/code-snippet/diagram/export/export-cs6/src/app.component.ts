
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Diagram, NodeModel, PrintAndExport, DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(PrintAndExport);

@Component({
  selector: 'app-container',

  template: `
  <button (click)="getDiagramContent()">DiagramContent</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]="nodes"></ejs-diagram> `,

  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [DiagramModule],
})

export class AppComponent implements OnInit {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

  public nodes: NodeModel[] = [];

  ngOnInit() {
    // Initialize nodes
    this.nodes = [
      {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 100,
        style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' },
        annotations: [{ content: 'Node 1' }],
      },
    ];
  }

  getDiagramContent() {
    /**
     * parameter (Optional) -  defines the collection of style files to be considered while exporting.
     */
    const content = this.diagram.getDiagramContent();
    console.log(content);
  }
  
}

