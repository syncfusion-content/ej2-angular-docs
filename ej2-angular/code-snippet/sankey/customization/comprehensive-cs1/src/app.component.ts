import { Component, OnInit } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
import {
  SankeyTooltipService,
  SankeyLegendService,
  SankeyExportService,
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
      <div class="control-section" id="sankey-container">

        <ejs-sankey
          width="90%"
          height="450px"
          title="Comprehensive Sankey Customization"
          [margin]="margin"
          [nodeStyle]="nodeStyle"
          [linkStyle]="linkStyle"
          [labelSettings]="labelSettings"
          [tooltip]="tooltip"
          [legendSettings]="legendSettings">

          <e-sankey-nodes>
            <e-sankey-node id="Agricultural Waste" fill="#FF6B6B"></e-sankey-node>
            <e-sankey-node id="Biomass Residues"></e-sankey-node>
            <e-sankey-node id="Bio-conversion" fill="#4ECDC4"></e-sankey-node>
            <e-sankey-node id="Liquid Biofuel" fill="#45B7D1"></e-sankey-node>
            <e-sankey-node id="Electricity" fill="#FFA07A"></e-sankey-node>
            <e-sankey-node id="Heat" fill="#98D8C8"></e-sankey-node>
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
export class AppComponent implements OnInit {
  public margin?: Object;
  public nodeStyle?: Object;
  public linkStyle?: Object;
  public labelSettings?: Object;
  public tooltip?: Object;
  public legendSettings?: Object;

  ngOnInit(): void {
    this.margin = { left: 40, right: 40, top: 40, bottom: 40 };
    this.nodeStyle = { opacity: 0.85 };
    this.linkStyle = { opacity: 0.6, curvature: 0.5 };
    this.labelSettings = { visible: true, color: 'black' };
    this.tooltip = {
      enable: true,
      format: '<b>${sourceNodeName} → ${targetNodeName}</b><br/>Value: ${value}'
    };
    this.legendSettings = { visible: true, position: 'Bottom' };
  }
}