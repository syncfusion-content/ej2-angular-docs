// app.component.ts
import { Component } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
import {
  SankeyTooltipService,
  SankeyLegendService
} from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [SankeyAllModule],
  providers: [SankeyTooltipService, SankeyLegendService ],
  standalone: true,
  selector: 'app-container',
  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">

        <ejs-sankey
          width="90%"
          height="450px"
          [linkStyle]="linkStyle"
          [tooltip]="tooltip"
          [legendSettings]="legendSettings">

          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste" color="#FF6B6B"></e-sankey-node>
            <e-sankey-node id="Biomass Residues" color="#FFA07A"></e-sankey-node>
            <e-sankey-node id="Bio-conversion" color="#4ECDC4"></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel" color="#45B7D1"></e-sankey-node>
            <e-sankey-node id="Electricity" color="#FFA07A"></e-sankey-node>
            <e-sankey-node id="Heat" color="#98D8C8"></e-sankey-node>
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
  public linkStyle = {
    colorType: 'Blend'
  };

  public tooltip = {
    enable: true
  };

  public legendSettings = {
    visible: true
  };
}