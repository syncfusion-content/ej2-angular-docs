import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { PdfExportService, ImageExportService, LegendService } from '@syncfusion/ej2-angular-maps'




import { Component, ViewChild } from '@angular/core';
import { MapsComponent } from '@syncfusion/ej2-angular-maps';

@Component({
imports: [
         MapsModule
    ],

providers: [PdfExportService, ImageExportService, LegendService],
standalone: true,
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



