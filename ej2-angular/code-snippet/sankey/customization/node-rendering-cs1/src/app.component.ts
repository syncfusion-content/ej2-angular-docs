// app.component.ts
import { Component, OnInit } from '@angular/core';
import {
  SankeyAllModule,
  SankeyNodeRenderEventArgs
} from '@syncfusion/ej2-angular-charts';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [SankeyAllModule],
  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">

        <ejs-sankey
          width="90%"
          height="450px"
          (nodeRendering)="onNodeRendering($event)">

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
  ngOnInit(): void {}

  onNodeRendering(args: SankeyNodeRenderEventArgs): void {
    if (args.node.id === 'Agricultural Waste') {
      args.fill = '#FF6B6B';
    } else if (args.node.id === 'Bio-conversion') {
      args.fill = '#4ECDC4';
    }
  }
}