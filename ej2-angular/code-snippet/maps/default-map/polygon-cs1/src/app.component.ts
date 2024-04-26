import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule, PolygonService } from '@syncfusion/ej2-angular-maps'



import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],

providers: [PolygonService],
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
            { longitude: 34.88539587371454, latitude: 28.181421087099537 },
            { longitude: 37.50029619722466, latitude: 24.299419888989462 },
            { longitude: 39.22241423764024, latitude: 22.638529461838658 },
            { longitude: 38.95650769309776, latitude: 21.424998160017495 },
            { longitude: 40.19963938650778, latitude: 20.271205391339606 },
            { longitude: 41.76547269134551, latitude: 18.315451049867193 },
            { longitude: 42.78452077838921, latitude: 16.097235052947966 },
            { longitude: 43.36984949591576, latitude: 17.188572054533054 },
            { longitude: 44.12558191797012, latitude: 17.407258102232234 },
            { longitude: 46.69027032797584, latitude: 17.33342243475734 },
            { longitude: 47.09312386141585, latitude: 16.97087769526452 },
            { longitude: 48.3417299826302, latitude: 18.152700711188004 },
            { longitude: 49.74762591400318, latitude: 18.81544363931681 },
            { longitude: 52.41428026336621, latitude: 18.9035706497573 },
            { longitude: 55.272683129240335, latitude: 20.133861012918544 },
            { longitude: 55.60121336079203, latitude: 21.92042703112351 },
            { longitude: 55.08204399107967, latitude: 22.823302662258882 },
            { longitude: 52.743894337844154, latitude: 22.954463486477437 },
            { longitude: 51.47035908651375, latitude: 24.35818837668566 },
            { longitude: 51.122553219055874, latitude: 24.666679732426346 },
            { longitude: 51.58731671256831, latitude: 25.173806925822717 },
            { longitude: 51.35950585992913, latitude: 25.84556484481108 },
            { longitude: 51.088770529661275, latitude: 26.168494193631147 },
            { longitude: 50.78527056538036, latitude: 25.349051242147596 },
            { longitude: 50.88330288802666, latitude: 24.779242606720743 },
            { longitude: 50.19702490702369, latitude: 25.66825106363693 },
            { longitude: 50.066461167339924, latitude: 26.268905608606616 },
            { longitude: 49.645896067213215, latitude: 27.15116474192905 },
            { longitude: 48.917371072320805, latitude: 27.55738830340198 },
            { longitude: 48.3984720209192, latitude: 28.566207269716173 },
            { longitude: 47.68851714518985, latitude: 28.5938991332588 },
            { longitude: 47.45059089191449, latitude: 29.009321449856984 },
            { longitude: 44.73549453609391, latitude: 29.157358362696385 },
            { longitude: 41.79487372890989, latitude: 31.23489959729713 },
            { longitude: 40.36977176033773, latitude: 31.9642352513131 },
            { longitude: 39.168270913149826, latitude: 32.18348471414393 },
            { longitude: 37.019253492546454, latitude: 31.47710220862595 },
            { longitude: 37.99644645508337, latitude: 30.4851028633376 },
            { longitude: 37.67756530485232, latitude: 30.3636358598429 },
            { longitude: 37.50181466030105, latitude: 29.960155516804974 },
            { longitude: 36.700288181129594, latitude: 29.882136586478993 },
            { longitude: 36.100009274845206, latitude: 29.15308642012721 },
            { longitude: 34.85774476486728, latitude: 29.3103032832622 },
            { longitude: 34.64498583263142, latitude: 28.135787235699823 },
            { longitude: 34.88539587371454, latitude: 28.181421087099537 }
          ],
          fill: 'red',
          opacity: 0.7,
          borderColor: 'green',
          borderWidth: 2,
          borderOpacity: 0.7
        }
      ]
    };
    this.shapeData = world_map;
  }
}
