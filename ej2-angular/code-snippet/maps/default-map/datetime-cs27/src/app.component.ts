import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'



import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],
standalone: true,
  selector: 'app-container',
  // specifies the template string for the maps component
  template:
    `<div>
      <div>
        <ejs-maps id='maps' #maps style="display:block;" projectionType="Miller">
          <e-layers>
            <e-layer [shapeData]='shapeData'></e-layer>
          </e-layers>
        </ejs-maps>
      </div>
  </div>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public shapeData = world_map;
}


