import { Component } from '@angular/core';
import { MapsModule, MapsTooltipService } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapsModule],
  providers: [MapsTooltipService],
  template: `
      <ejs-maps id='maps-container'>
          <e-layers>
              <e-layer [shapeData]='shapeData' [tooltipSettings] ='tooltipSettings'> 
              </e-layer>
          </e-layers>
      </ejs-maps>
    `,
})
export class App {
  public shapeData: object = world_map;

  public tooltipSettings = {
    visible: true,
    valuePath: 'name',
  };
}
