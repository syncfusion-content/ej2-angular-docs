// app.component.ts
import { Component } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
import {
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
      <div class="control-section" id="sankey-container">

        <ejs-sankey
          width="90%"
          height="450px"
          orientation="Horizontal"
          [tooltip]="tooltip"
          [legendSettings]="legendSettings">

          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste" offset={-11}></e-sankey-node>
            <e-sankey-node id="Biomass Residues"offset={-20} ></e-sankey-node>
            <e-sankey-node id="Bio-conversion" offset={-20}></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel" offset={17}></e-sankey-node>
            <e-sankey-node id="Electricity" offset={8}></e-sankey-node>
            <e-sankey-node id="Heat" ></e-sankey-node>
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
  public tooltip = {
    enable: true
  };

  public legendSettings = {
    visible: true
  };
}