// app.component.ts
import { Component } from '@angular/core';
import { SankeyAllModule } from '@syncfusion/ej2-angular-charts';
import {
  SankeyTooltipService,
  SankeyLegendService,
  SankeyExportService
} from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [SankeyAllModule],
  providers: [SankeyTooltipService, SankeyLegendService, SankeyExportService],
  template: `
    <div class="control-pane">
      <div class="control-section" id="sankey-container">
        <ejs-sankey
          [width]="'90%'"
          [height]="chartHeight"
          [title]="'California Energy Consumption in 2023'"
          [subTitle]="'Source: Lawrence Livermore National Laboratory'"
          [linkStyle]="linkStyle"
          [labelSettings]="labelSettings"
          [tooltip]="tooltip"
          [legendSettings]="legendSettings"
          (loaded)="onLoaded()"
        >
          <!-- Nodes -->
          <e-sankey-nodes>
            <e-sankey-node id="Electricity Generation" [offset]="-120"></e-sankey-node>
            <e-sankey-node id="Residential" [offset]="38"></e-sankey-node>
            <e-sankey-node id="Commercial" [offset]="36"></e-sankey-node>
            <e-sankey-node id="Industrial" [offset]="34"></e-sankey-node>
            <e-sankey-node id="Transportation" [offset]="32"></e-sankey-node>
            <e-sankey-node id="Rejected Energy" [offset]="-40"></e-sankey-node>
            <e-sankey-node id="Energy Services"></e-sankey-node>
            <e-sankey-node id="Solar"></e-sankey-node>
            <e-sankey-node id="Nuclear"></e-sankey-node>
            <e-sankey-node id="Wind"></e-sankey-node>
            <e-sankey-node id="Geothermal"></e-sankey-node>
            <e-sankey-node id="Natural Gas"></e-sankey-node>
            <e-sankey-node id="Coal"></e-sankey-node>
            <e-sankey-node id="Biomass"></e-sankey-node>
            <e-sankey-node id="Petroleum" [offset]="-10"></e-sankey-node>
          </e-sankey-nodes>

          <!-- Links -->
          <e-sankey-links>
            <e-sankey-link sourceId="Solar" targetId="Electricity Generation" [value]="454"></e-sankey-link>
            <e-sankey-link sourceId="Nuclear" targetId="Electricity Generation" [value]="185"></e-sankey-link>
            <e-sankey-link sourceId="Wind" targetId="Electricity Generation" [value]="47.8"></e-sankey-link>
            <e-sankey-link sourceId="Geothermal" targetId="Electricity Generation" [value]="40"></e-sankey-link>
            <e-sankey-link sourceId="Natural Gas" targetId="Electricity Generation" [value]="800"></e-sankey-link>
            <e-sankey-link sourceId="Coal" targetId="Electricity Generation" [value]="28.7"></e-sankey-link>
            <e-sankey-link sourceId="Biomass" targetId="Electricity Generation" [value]="50"></e-sankey-link>

            <e-sankey-link sourceId="Electricity Generation" targetId="Residential" [value]="182"></e-sankey-link>
            <e-sankey-link sourceId="Natural Gas" targetId="Residential" [value]="400"></e-sankey-link>
            <e-sankey-link sourceId="Petroleum" targetId="Residential" [value]="50"></e-sankey-link>

            <e-sankey-link sourceId="Electricity Generation" targetId="Commercial" [value]="351"></e-sankey-link>
            <e-sankey-link sourceId="Natural Gas" targetId="Commercial" [value]="300"></e-sankey-link>

            <e-sankey-link sourceId="Electricity Generation" targetId="Industrial" [value]="641"></e-sankey-link>
            <e-sankey-link sourceId="Natural Gas" targetId="Industrial" [value]="786"></e-sankey-link>
            <e-sankey-link sourceId="Biomass" targetId="Industrial" [value]="563"></e-sankey-link>
            <e-sankey-link sourceId="Petroleum" targetId="Industrial" [value]="300"></e-sankey-link>

            <e-sankey-link sourceId="Electricity Generation" targetId="Transportation" [value]="20"></e-sankey-link>
            <e-sankey-link sourceId="Natural Gas" targetId="Transportation" [value]="51"></e-sankey-link>
            <e-sankey-link sourceId="Biomass" targetId="Transportation" [value]="71"></e-sankey-link>
            <e-sankey-link sourceId="Petroleum" targetId="Transportation" [value]="2486"></e-sankey-link>

            <e-sankey-link sourceId="Residential" targetId="Rejected Energy" [value]="432"></e-sankey-link>
            <e-sankey-link sourceId="Commercial" targetId="Rejected Energy" [value]="351"></e-sankey-link>
            <e-sankey-link sourceId="Industrial" targetId="Rejected Energy" [value]="972"></e-sankey-link>
            <e-sankey-link sourceId="Transportation" targetId="Rejected Energy" [value]="1920"></e-sankey-link>

            <e-sankey-link sourceId="Residential" targetId="Energy Services" [value]="200"></e-sankey-link>
            <e-sankey-link sourceId="Commercial" targetId="Energy Services" [value]="300"></e-sankey-link>
            <e-sankey-link sourceId="Industrial" targetId="Energy Services" [value]="755"></e-sankey-link>
            <e-sankey-link sourceId="Transportation" targetId="Energy Services" [value]="637"></e-sankey-link>
          </e-sankey-links>
        </ejs-sankey>
      </div>
    </div>
  `
})
export class AppComponent {

  public chartHeight: string = Browser.isDevice ? '600px' : '450px';

  public linkStyle = {
    opacity: 0.6,
    curvature: 0.55,
    colorType: 'Source'
  };

  public labelSettings = {
    visible: !Browser.isDevice
  };

  public tooltip = {
    enable: true
  };

  public legendSettings = {
    visible: true,
    position: 'Bottom',
    itemPadding: 8
  };

  public onLoaded(): void {
    const element = document.getElementById('sankey-container');
    if (element) {
      element.setAttribute('title', '');
    }
  }
}