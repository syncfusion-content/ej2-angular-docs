

import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';

@Component({
  selector: 'app-container',
  // specifies the template string for the maps component
  template:
    `<ejs-maps id='rn-container' [background]='background' [border]='border' [margin]='margin'>
     <e-layers>
         <e-layer [shapeData]='shapeData' [shapeSettings]="shapeSettings"></e-layer>
    </e-layers>
    </ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public background: string = '#CCD1D1';
    public border: object = {
        color: 'green',
        width: 2
    };
    public margin: object = {
        bottom: 10,
        left: 20,
        right: 20,
        top: 10
    }
    public shapeData = world_map;
    public shapeSettings = {
        autofill: true
    }
}


