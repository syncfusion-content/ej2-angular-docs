

import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';

@Component({
  selector: 'app-container',
  // specifies the template string for the maps component
  template:
    `<ejs-maps id='rn-container' [mapsArea]='mapsArea'>
     <e-layers>
         <e-layer [shapeData]='shapeData' [shapeSettings]="shapeSettings"></e-layer>
    </e-layers>
    </ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public mapsArea: object = {
        background: '#CCD1D1',
        border: {
            width: 2,
            color: 'green'
        }
    };
    public shapeData = world_map;
    public shapeSettings = {
        autofill: true
    }
}


