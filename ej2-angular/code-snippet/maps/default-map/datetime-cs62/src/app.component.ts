


import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-maps';
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


