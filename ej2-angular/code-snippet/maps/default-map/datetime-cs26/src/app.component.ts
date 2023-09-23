

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
        { continent: "North America", color: '#71B081', borderColor: '#CCFFE5', width: 2 },
        { continent: "South America", color: '#5A9A77', borderColor: 'red', width: 2 },
        { continent: "Africa", color: '#498770', borderColor: '#FFCC99', width: 2 },
        { continent: "Europe", color: '#39776C', borderColor: '#66B2FF', width: 2 },
        { continent: "Asia", color: '#266665', borderColor: '#999900', width: 2 },
        { continent: "Oceania", color: '#124F5E', borderColor: 'blue', width: 2 }
    ]
    public shapeSettings = {
        borderColorValuePath: 'borderColor',
        borderWidthValuePath: 'width',
        colorValuePath: 'color'
  };
}


