import { Component } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
import { SankeyTooltipService, SankeyLegendService } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [SankeyAllModule],
  providers: [ SankeyTooltipService, SankeyLegendService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-sankey id="sankey-container" width="90%" height="450px" [tooltip]="tooltip" [legendSettings]="legendSettings">
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
</ejs-sankey>`
})
export class AppComponent {
 
public tooltip: Object = {
    enable: true,
    nodeFormat: '${name} : ${value:n2} TBtu',
    linkFormat: '${start.name} : ${start.out:n2} TBtu → ${target.name} : ${target.in:n2} TBtu<br>Flow: ${value:n2} TBtu'
  };

  public legendSettings: Object = {
    visible: true
  };
}