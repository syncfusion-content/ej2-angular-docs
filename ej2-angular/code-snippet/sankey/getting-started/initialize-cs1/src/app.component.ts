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
          title="Sankey Chart">

          <e-sankey-nodes>
            <e-sankey-node id="A"></e-sankey-node>
            <e-sankey-node id="B"></e-sankey-node>
            <e-sankey-node id="C"></e-sankey-node>
          </e-sankey-nodes>

          <e-sankey-links>
            <e-sankey-link sourceId="A" targetId="B" [value]="100"></e-sankey-link>
            <e-sankey-link sourceId="B" targetId="C" [value]="80"></e-sankey-link>
          </e-sankey-links>

        </ejs-sankey>

      </div>
    </div>
  `
})
export class AppComponent {}