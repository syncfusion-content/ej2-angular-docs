import { Component } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [SankeyAllModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">
        <ejs-sankey  id="sankey-container"  width="90%" height="420px"  >
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
  `,
})
export class AppComponent {

}
