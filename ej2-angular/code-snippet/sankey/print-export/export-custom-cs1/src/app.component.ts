import { Component, ViewChild } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
import { SankeyTooltipService, SankeyLegendService, SankeyExportService } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [SankeyAllModule],
  providers: [SankeyTooltipService, SankeyLegendService, SankeyExportService],
  standalone: true,
  selector: 'app-container',
  template: `
  <div class="control-pane">
      <div class="control-section"  id="sankey-container">
    <button (click)="handleCustomExport()" style="margin-bottom:10px">Export with Custom Options</button>
    <ejs-sankey width="90%" height="450px">
      <e-sankey-nodes>
        <e-sankey-node id="Agricultural Waste"></e-sankey-node>
        <e-sankey-node id="Bio-conversion"></e-sankey-node>
        <e-sankey-node id="Liquid Biofuel"></e-sankey-node>
        <e-sankey-node id="Electricity"></e-sankey-node>
        <e-sankey-node id="Heat"></e-sankey-node>
      </e-sankey-nodes>
      <e-sankey-links>
        <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" [value]="124.729"></e-sankey-link>
        <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" [value]="0.597"></e-sankey-link>
        <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" [value]="26.862"></e-sankey-link>
        <e-sankey-link sourceId="Bio-conversion" targetId="Heat" [value]="280.845"></e-sankey-link>
      </e-sankey-links>
    </ejs-sankey>
        </div>
    </div>
  `
})
export class AppComponent {
  @ViewChild('sankey') public sankeyObj: any;

  public handleCustomExport(): void {
    this.sankeyObj?.export('PNG', 'CustomSankey', 0, true);
  }
}
