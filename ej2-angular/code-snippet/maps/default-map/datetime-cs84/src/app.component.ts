import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'




import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         MapsModule
    ],
standalone: true,
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



