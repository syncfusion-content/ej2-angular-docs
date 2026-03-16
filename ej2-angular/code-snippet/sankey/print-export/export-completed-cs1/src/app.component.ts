// app.component.ts
import { Component, ViewChild } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
import {
  SankeyComponent,
  SankeyTooltipService,
  SankeyLegendService,
  SankeyExportService
} from '@syncfusion/ej2-angular-charts';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [SankeyAllModule],
  providers: [
    SankeyTooltipService,
    SankeyLegendService,
    SankeyExportService
  ],
  template: `
    <div class="control-pane">
      <div class="control-section"  id="sankey-container">
        <button (click)="exportCustom()" style="margin-bottom: 10px;">
          Export
        </button>

        <ejs-sankey
          width="90%"
          height="450px"
        >
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
  `,
  styles: [`
    .control-pane { padding: 20px; }
    .control-section { max-width: 1400px; margin: 0 auto; }
  `]
})
export class AppComponent {
  @ViewChild('sankeyChart') sankeyChart!: SankeyComponent;

  public tooltip = {
    enable: true
  };

  public legendSettings = {
    visible: true
  };

  exportCustom(): void {
    if (this.sankeyChart) {
      this.sankeyChart.export('PNG', 'CustomSankey');
    }
  }
}