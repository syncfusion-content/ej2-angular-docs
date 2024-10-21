import { DiagramModule, DiagramRegions, IExportOptions, PageSettingsModel, PrintAndExport,
  DiagramComponent, Diagram, NodeModel  } from '@syncfusion/ej2-angular-diagrams';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

Diagram.Inject(PrintAndExport);

@Component({
  imports: [DiagramModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `
    <label for="region">Region: </label>
    <select id="region"  #regionSelect>
      <option value="PageSettings">PageSettings</option>
      <option value="Content">Content</option>
    </select>
    <button (click)="onPrintClick(regionSelect.value)">Print</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [nodes] ='nodes' [pageSettings] ='pageSettings'>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram!: DiagramComponent;
  public exportOptions: IExportOptions = {};
  public pageSettings: PageSettingsModel = { width: 200, height: 200 };

  public nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      annotations: [{ content: 'Node 1' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 130,
      annotations: [{ content: 'Node 2' }],
    },
  ];

  // Function to handle the print button click
  onPrintClick(region: string) {
    this.exportOptions = {
      region: region as DiagramRegions,
    };
    this.diagram.print(this.exportOptions);
  }
  
}
