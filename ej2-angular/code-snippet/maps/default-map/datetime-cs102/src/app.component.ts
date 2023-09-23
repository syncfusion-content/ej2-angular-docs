
import { Component } from '@angular/core';
import { Maps, MapsTooltip, ITooltipRenderEventArgs, ShapeSettings } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import { default_data } from './data';
Maps.Inject(MapsTooltip);
@Component({
    selector: 'app-container',
    template: `<ejs-maps id='rn-container'>
    <e-layers>
   <e-layer [shapeData] ='shapeData' [shapePropertyPath]='shapePropertyPath' [shapeDataPath]='shapeDataPath' [dataSource]='dataSource' [shapeSettings]='shapeSettings' [tooltipSettings] ='tooltipSettings'></e-layer>
   </e-layers>
   </ejs-maps>`
})
export class AppComponent {
    public tooltipSettings: object ={
        visible: true,
        valuePath: 'continent',
        template: '<div style="width:60px; text-align:center; background-color: white; border: 2px solid black; padding-bottom: 10px;padding-top: 10px;padding-left: 10px;padding-right: 10px;"><span>${continent}</span></div>',
        textStyle: {
            color: 'black'
        }
    }
    public shapePropertyPath: string = "continent";
    public shapeDataPath: string = "continent";
    public dataSource: object = default_data;
    public shapeData: object = world_map;
    public shapeSettings?: ShapeSettings;
}



