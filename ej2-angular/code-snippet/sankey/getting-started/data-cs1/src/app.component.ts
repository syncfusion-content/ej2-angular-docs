import { Component } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
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
      <div class="control-section" id="sankey-container">

        <ejs-sankey
          width="90%"
          height="420px"
          title="Energy Flow Diagram">

          <e-sankey-nodes>
            <e-sankey-node id="Energy Input" [label]="{ text: 'Energy Input' }"></e-sankey-node>
            <e-sankey-node id="Generation" [label]="{ text: 'Generation' }"></e-sankey-node>
            <e-sankey-node id="Distribution" [label]="{ text: 'Distribution' }"></e-sankey-node>
            <e-sankey-node id="Consumption" [label]="{ text: 'Consumption' }"></e-sankey-node>
          </e-sankey-nodes>

          <e-sankey-links>
            <e-sankey-link sourceId="Energy Input" targetId="Generation" [value]="500"></e-sankey-link>
            <e-sankey-link sourceId="Generation" targetId="Distribution" [value]="450"></e-sankey-link>
            <e-sankey-link sourceId="Distribution" targetId="Consumption" [value]="400"></e-sankey-link>
          </e-sankey-links>

        </ejs-sankey>

      </div>
    </div>
  `
})
export class AppComponent {}