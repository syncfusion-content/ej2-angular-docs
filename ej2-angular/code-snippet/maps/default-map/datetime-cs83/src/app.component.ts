


import { Component, ViewChild } from '@angular/core';
import { MapsComponent } from '@syncfusion/ej2-angular-maps';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' #maps [allowPdfExport]=true [allowImageExport]=true [titleSettings] = 'titleSettings'>
    <e-layers>
    <e-layer  [urlTemplate]= 'urlTemplate'></e-layer>
    </e-layers>
    </ejs-maps>  <button  id='export' (click)='export()'>Export</button>`
})

export class AppComponent {
    @ViewChild('maps')
    public mapObj?: MapsComponent;
    public urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
    public titleSettings: object = {
        text: 'OSM'
    };
    public export() {
        this.mapObj?.export('JPEG', 'Maps');
    };
}



