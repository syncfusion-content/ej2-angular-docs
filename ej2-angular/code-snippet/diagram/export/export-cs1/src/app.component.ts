
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Diagram, NodeModel, PrintAndExport, DiagramComponent, SnapConstraints, DiagramModule,
  FileFormats, IExportOptions, SnapSettingsModel } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(PrintAndExport);

@Component({
  selector: 'app-container',

  template: `
    <select id="format" (change)="onExportFormatChange($event)">
      <option value="JPG">JPG</option>
      <option value="PNG">PNG</option>
      <option value="SVG">SVG</option>
    </select>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px"
    [nodes]='nodes' [snapSettings]="snapSettings"></ejs-diagram> `,

  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [DiagramModule],
})

export class AppComponent implements OnInit {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

  public nodes: NodeModel[] = [];
  public snapSettings!: SnapSettingsModel;
  public exportOptions!: IExportOptions;

  ngOnInit() {
    // Initialize nodes
    this.nodes = [
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
    ];

    this.snapSettings = { constraints: SnapConstraints.None };
  }

  onExportFormatChange(event: Event) {
    const selectedFormat = (event.target as HTMLSelectElement).value as FileFormats;
    this.exportOptions = {
      format: selectedFormat,
      fileName: 'Export',
    };
    this.diagram.exportDiagram(this.exportOptions);
  }
}
