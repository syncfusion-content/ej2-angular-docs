import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DiagramComponent, DiagramModule, NodeModel, Diagram, SnapConstraints,
  IExportOptions, PrintAndExport } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(PrintAndExport);

@Component({
  selector: 'app-container',
  template: `
  <div> <button (click)="onPrintClick()">Print</button>
  <div id="element"></div></div>`,
  imports: [
    DiagramModule
  ],
  providers: [],
  standalone: true,
  encapsulation: ViewEncapsulation.None

})

export class AppComponent {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;
  public diagramInstance!: Diagram;
  constructor() { }
  public nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 100,
      height: 50,
      offsetX: 100,
      offsetY: 100,
      style: { strokeColor: '#868686', fill: '#d5f5d5' },
      annotations: [{ content: 'Node 1' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 75,
      offsetX: 100,
      offsetY: 225,
      shape: { type: 'Basic', shape: 'Diamond' },
      style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
      annotations: [{ content: 'Node 2' }],
    },
    {
      id: 'node3',
      width: 135,
      height: 50,
      offsetX: 400,
      offsetY: 425,
      style: { strokeColor: '#a8a8a8', fill: '#faebee' },
      annotations: [{ content: 'Node 3' }],
    },
    {
      id: 'node4',
      width: 125,
      height: 50,
      offsetX: 400,
      offsetY: 525,
      shape: { type: 'Basic', shape: 'Ellipse' },
      style: { strokeColor: '#a8a8a8', fill: '#fef0db' },
      annotations: [{ content: 'Node 4' }],
    },
  ];

  ngOnInit(): void {
    // Programmatically create the Diagram component
    this.diagramInstance = new Diagram({
      width: '100%',
      height: '580px',
      nodes: this.nodes,
      snapSettings: { constraints: SnapConstraints.None },
    });

    this.diagramInstance.appendTo('#element');
  }

  onPrintClick() {
    const printOptions: IExportOptions = {};
    printOptions.margin = { left: 400, top: 100 };
    this.diagramInstance.print(printOptions);
  };

}
