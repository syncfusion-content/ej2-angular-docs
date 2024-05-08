import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule, PolygonService, SelectionService, HighlightService } from '@syncfusion/ej2-angular-maps'



import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],

providers: [PolygonService, SelectionService, HighlightService],
standalone: true,
  selector: 'app-container',
  template: `<div class="control-section">
  <div align='center'>
  <ejs-maps id='container' style="display:block;">
  <e-layers>
  <e-layer [shapeData]='shapeData' [polygonSettings]='polygonSettings'></e-layer>
  </e-layers>
  </ejs-maps>
  </div>
  </div>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public shapeData?: object;
  public polygonSettings?: object;
  ngOnInit(): void {
    this.polygonSettings = {
      polygons: [
        {
          points: [
            { longitude: -1.8920678947185365, latitude: 35.06195799239681 },
            { longitude: -1.6479633699113947, latitude: 33.58989612266137 },
            { longitude: -1.4201220366858252, latitude: 32.819439646045254 },
            { longitude: -1.197974596225663, latitude: 32.26940895444655 },
            { longitude: -2.891112397949655, latitude: 32.10303058820031 },
            { longitude: -3.8246984550501963, latitude: 31.34551662687602 },
            { longitude: -3.720166273688733, latitude: 30.758086682848685 },
            { longitude: -5.6571886081189575, latitude: 29.613582597203006 },
            { longitude: -7.423353242214745, latitude: 29.44328441403087 },
            { longitude: -8.6048931685323, latitude: 28.761444633616776 },
            { longitude: -8.695726975465703, latitude: 27.353491085576195 },
            { longitude: 3.837867279970908, latitude: 19.15916564839422 },
            { longitude: 6.0705408799045415, latitude: 19.48749097192868 },
            { longitude: 12.055736352807713, latitude: 23.694596786078293 },
            { longitude: 11.272522332402986, latitude: 24.289329186946034 },
            { longitude: 10.30872578261932, latitude: 24.65419958524693 },
            { longitude: 9.910236690050027, latitude: 25.48943950947175 },
            { longitude: 9.432639882414293, latitude: 26.398372489836902 },
            { longitude: 9.898266456582292, latitude: 26.73489453809293 },
            { longitude: 9.560243026853641, latitude: 30.31040379467153 },
            { longitude: 8.943853847283322, latitude: 32.350324876652195 },
            { longitude: 7.57004059025715, latitude: 33.75071049019398 },
            { longitude: 8.0906322609153, latitude: 34.69043151009983 },
            { longitude: 8.363285449347273, latitude: 35.38654406371319 },
            { longitude: 8.26139549449448, latitude: 36.44751078733985 },
            { longitude: 8.61100824823302, latitude: 36.881913362940196 },
            { longitude: 7.4216488925819135, latitude: 37.021408008916254 },
            { longitude: 6.461182254165351, latitude: 36.99092409199429 },
            { longitude: 5.297178918070159, latitude: 36.69985479014656 },
            { longitude: 3.6718056161224695, latitude: 36.86470546831693 },
            { longitude: 1.2050052555659931, latitude: 36.57658056301722 },
            { longitude: -0.26968570003779746, latitude: 35.806903541813625 },
            { longitude: -0.995191786435754, latitude: 35.58466127904214 },
            { longitude: -1.8920678947185365, latitude: 35.06195799239681 }
          ],
          fill: 'blue',
          opacity: 0.7,
          borderColor: 'green',
          borderWidth: 2,
          borderOpacity: 0.7
        }
      ],
      highlightSettings: {
        enable: true,
        fill: 'blue',
        opacity: 0.7,
        border: {
          color: 'green',
          width: 2,
          opacity: 0.7
        }
      },
      selectionSettings: {
        enable: true,
        fill: 'violet',
        enableMultiSelect: false,
        opacity: 0.8,
        border: {
          color: 'cyan',
          opacity: 1,
          width: 7
        }
      }
    };
    this.shapeData = world_map;
  }
}
