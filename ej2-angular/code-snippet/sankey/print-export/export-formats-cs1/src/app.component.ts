import { Component, ViewChild } from '@angular/core';
import { SankeyAllModule, SankeyComponent } from '@syncfusion/ej2-angular-charts';
import {
  SankeyTooltipService,
  SankeyLegendService,
  SankeyExportService
} from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [SankeyAllModule],
  providers: [
    SankeyTooltipService,
    SankeyLegendService,
    SankeyExportService
  ],
  standalone: true,
  selector: 'app-container',
  template: `
    <div class="control-pane">
      <div class="control-section"  id="sankey-container">
        <button (click)="exportPNG()" style="margin-right: 5px;">Export PNG</button>
        <button (click)="exportPDF()" style="margin-right: 5px;">Export PDF</button>
        <button (click)="exportSVG()" style="margin-bottom: 10px;">Export SVG</button>

        <ejs-sankey
          #sankeyChart
          id="sankey-container"
          width="90%"
          height="450px">
          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste"></e-sankey-node>
            <e-sankey-node id="Biomass Residues"></e-sankey-node>
            <e-sankey-node id="Bio-conversion"></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel"></e-sankey-node>
            <e-sankey-node id="Electricity"></e-sankey-node>
            <e-sankey-node id="Heat"></e-sankey-node>
          </e-sankey-nodes>
          <e-sankey-links>
            <e-sankey-link sourceId="Agricultural Waste" targetId="Bio-conversion" [value]="84.152"></e-sankey-link>
            <e-sankey-link sourceId="Biomass Residues" targetId="Bio-conversion" [value]="24.152"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Liquid Biofuel" [value]="10.597"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Electricity" [value]="36.862"></e-sankey-link>
            <e-sankey-link sourceId="Bio-conversion" targetId="Heat" [value]="60.845"></e-sankey-link>
          </e-sankey-links>
        </ejs-sankey>
      </div>
    </div>
  `
})
export class AppComponent {
  @ViewChild('sankeyChart') sankeyChart?: SankeyComponent;

  exportPNG() {
    if (this.sankeyChart) {
      this.sankeyChart.export('PNG', 'Sankey');
    }
  }

  exportPDF() {
    if (this.sankeyChart) {
      this.sankeyChart.export('PDF', 'Sankey');
    }
  }

  exportSVG() {
    if (this.sankeyChart) {
      this.sankeyChart.export('SVG', 'Sankey');
    }
  }
}