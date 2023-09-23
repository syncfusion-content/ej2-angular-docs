


import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style='display:block'>
     <e-layers>
    <e-layer [urlTemplate]= 'urlTemplate'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public urlTemplate?: string;
    ngOnInit(): void {
        this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
    }
}



