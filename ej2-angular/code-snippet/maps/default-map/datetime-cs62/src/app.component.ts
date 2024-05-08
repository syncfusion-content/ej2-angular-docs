import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MapsTooltipService, ZoomService } from '@syncfusion/ej2-angular-maps'




import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'ar-AR': {
        'maps': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين'
        },
    }
});

@Component({
imports: [
         MapsModule
    ],

providers: [MapsTooltipService, ZoomService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-maps id='container' [locale]="Locale" [zoomSettings]='zoom'>
    <e-layers>
    <e-layer [shapeData]="mapData" [tooltipSettings]='tooltipSettings'></e-layer>
    </e-layers>
    <ejs-maps>`
})

export class AppComponent implements OnInit {
    public mapData: object[] = world_map as any;
	public Locale: string = 'ar-AR';
    public zoom: object = {
        enable: true
    };
    public tooltipSettings: object = {
      enable: true
    };
 ngOnInit(): void {
   }
}


