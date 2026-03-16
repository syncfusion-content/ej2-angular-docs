import { Component, OnInit } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [SankeyAllModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">

        <ejs-sankey width="90%" height="450px" [nodeStyle]="nodeStyle">
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
export class AppComponent implements OnInit {
  public nodeStyle?: Object;

  ngOnInit(): void {
    this.nodeStyle = {
      fill: '#4472C4',
      opacity: 0.8,
      border: { width: 2, color: '#2E5090' }
    };
  }
}