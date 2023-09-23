

import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';

@Component({
  selector: 'app-container',
  // specifies the template string for the maps component
  template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer [shapeData]='shapeData' [shapePropertyPath]='shapePropertyPath' [shapeDataPath]='shapeDataPath'  [dataSource]='dataSource' [shapeSettings]="shapeSettings"></e-layer>
    </e-layers>
  </ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public shapeData = world_map;
    public shapePropertyPath = 'continent';
    public shapeDataPath = 'continent';
    public dataSource = [
        { continent: "North America", color: '#71B081' },
        { continent: "South America", color: '#5A9A77' },
        { continent: "Africa", color: '#498770' },
        { continent: "Europe", color: '#39776C' },
        { continent: "Asia", color: '#266665' },
        { continent: "Oceania", color: '#124F5E' }
    ]
    public shapeSettings = {
        colorValuePath: 'color'
  };
}


