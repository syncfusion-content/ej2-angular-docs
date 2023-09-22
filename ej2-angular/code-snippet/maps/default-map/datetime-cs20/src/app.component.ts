

import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';

@Component({
  selector: 'app-container',
  // specifies the template string for the maps component
  template:
    `<ejs-maps id='rn-container' [titleSettings]='titleSettings'>
     <e-layers>
         <e-layer [shapeData]='shapeData' [shapeSettings]="shapeSettings"></e-layer>
    </e-layers>
    </ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public titleSettings: object = {
        text: 'Maps Control',
        textStyle: {
            color: 'red',
            fontStyle: 'italic',
            fontWeight: 'regular',
            fontFamily: 'arial',
            size: '14px'
        },
        alignment: 'Center'
    };
    public shapeData = world_map;
    public shapeSettings = {
        autofill: true
    }
}


