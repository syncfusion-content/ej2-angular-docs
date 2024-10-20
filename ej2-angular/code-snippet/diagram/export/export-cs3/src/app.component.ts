
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Diagram, NodeModel, PrintAndExport, DiagramComponent, SnapConstraints, DiagramModule,
  IExportOptions, SnapSettingsModel, DiagramRegions, Rect } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(PrintAndExport);

@Component({
  selector: 'app-container',

  template: `
  <button (click)="exportDiagram(regionSelect.value)">Export</button>
  <label for="Region"> Region: </label>
    <select #regionSelect>
        <option value="Content">Content</option>
        <option value="PageSettings">PageSettings</option>
        <option value="CustomBounds">Custom Bounds</option>
    </select>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes]='nodes'
    [snapSettings]='snapSettings'></ejs-diagram> `,

  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [DiagramModule],
})
export class AppComponent implements OnInit {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;

  public nodes: NodeModel[] = [];
  public snapSettings: SnapSettingsModel = {};

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

  exportDiagram(region: string) {
    // Sets the region for the exported image.
    const exportOptions: IExportOptions = {}
    exportOptions.region = region as DiagramRegions;
    if (region === 'CustomBounds') {
      exportOptions.bounds = new Rect(0, 0, 300, 300);
    } else if (region === 'Content') {
      this.diagram.pageSettings = {};
    } else {
      this.diagram.pageSettings = { width: 500, height: 500 };
    }
    this.diagram.exportDiagram(exportOptions);
  }
  
}
