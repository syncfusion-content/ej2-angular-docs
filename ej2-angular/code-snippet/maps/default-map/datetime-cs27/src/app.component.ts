

import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';
import { Maps, ProjectionType } from '@syncfusion/ej2-angular-maps';

@Component({
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


