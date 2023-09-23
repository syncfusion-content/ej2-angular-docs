


import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Maps, NavigationLine } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(NavigationLine);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' >
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [navigationLineSettings] = 'navigationLineSettings' ></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public shapeData?: object;
    public navigationLineSettings?: object[];
    ngOnInit(): void {
        this.shapeData = world_map;
        this.navigationLineSettings = [{
            visible: true,
            latitude: [37.6276571, -122.4276688],
            longitude: [-74.0060, -117.7418381],
            color: 'black',
            angle: 90,
            width: 2,
            dashArray: '4'
        }]
    };
}



