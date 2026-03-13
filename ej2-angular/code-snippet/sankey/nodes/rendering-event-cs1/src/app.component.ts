// app.component.ts
import { Component } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
import {
  SankeyTooltipService,
  SankeyLegendService
} from '@syncfusion/ej2-angular-charts';
import { SankeyNodeRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [SankeyAllModule],
  providers: [SankeyTooltipService, SankeyLegendService],
  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">

        <ejs-sankey
          width="90%"
          height="450px"
          [tooltip]="tooltip"
          [legendSettings]="legendSettings"
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
export class AppComponent {

  public tooltip = {
    enable: true
  };

  public legendSettings = {
    visible: true
  };

  onNodeRendering(args: SankeyNodeRenderEventArgs): void {
    const nodeId = args.node.id;

    if (nodeId === 'Bio-conversion') {
      args.node.color = '#FF6B6B';
    } else if (nodeId === 'Liquid Biofuel') {
      args.node.color = '#4ECDC4';
    } else if (nodeId === 'Electricity') {
      args.node.color = '#45B7D1';
    } else if (nodeId === 'Heat') {
      args.node.color = '#FFA07A';
    } else {
      args.node.color = '#98D8C8';
    }
  }
}