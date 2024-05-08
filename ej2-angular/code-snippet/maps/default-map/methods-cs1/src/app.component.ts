import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MarkerService, ZoomService } from '@syncfusion/ej2-angular-maps'

import {
    Component,
    ViewEncapsulation,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { world_map } from './world-map';
import { MapsComponent } from '@syncfusion/ej2-angular-maps';

@Component({
imports: [
         MapsModule
    ],

providers: [MarkerService, ZoomService],
standalone: true,
    selector: 'app-container',
    template: ` <div class="control-section">
        <button id="button" (click)="getMinMaxValues()">GetMinMaxLatitudeLongitude</button>
    <p id="coordinatesDisplay" #coordinatesDisplay></p>
      <div align='center'>
      <ejs-maps id='container' #maps style="display:block;" [zoomSettings]="zoom" [centerPosition]="centerPosition">
      <e-layers>
      <e-layer [shapeData]='worldMap' [markerSettings]='markerSettings'></e-layer>
      </e-layers>
      </ejs-maps>
      </div>
      </div>`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild('maps')
    public mapObj?: MapsComponent;
    @ViewChild('coordinatesDisplay') coordinatesDisplay!: ElementRef;
    public worldMap = world_map;

    public formatKey(key: string): string {
        if (key === 'minLatitude') {
            return 'Minimum Latitude';
        } else if (key === 'maxLatitude') {
            return 'Maximum Latitude';
        } else if (key === 'minLongitude') {
            return 'Minimum Longitude';
        } else if (key === 'maxLongitude') {
            return 'Maximum Longitude';
        }
        return key;
    }

    public getMinMaxValues() {
        let mapBoundCoordinates: any;
        mapBoundCoordinates = this.mapObj?.getMinMaxLatitudeLongitude();
        if (this.coordinatesDisplay && this.coordinatesDisplay.nativeElement) {
            const displayDiv = this.coordinatesDisplay.nativeElement;
            if (mapBoundCoordinates) {
                displayDiv.innerHTML = '';
                for (const key in mapBoundCoordinates) {
                    if (Object.hasOwnProperty.call(mapBoundCoordinates, key)) {
                        const p = document.createElement('p');
                        const formattedKey = this.formatKey(key);
                        p.textContent = `${formattedKey}: ${mapBoundCoordinates[key]}`;
                        displayDiv.appendChild(p);
                    }
                }
            } else {
                displayDiv.textContent = 'No coordinates available';
            }
        }
    }

    public zoom: Object = {
        enable: true,
        zoomFactor: 7,
    };
    public centerPosition: Object = {
        latitude: 21.815447,
        longitude: 80.1932,
    };
    public markerSettings: Object = [
        {
            visible: true,
            height: 25,
            width: 25,
            shape: 'Circle',
            animationDuration: 1500,
            dataSource: [
                {
                    latitude: 22.572646,
                    longitude: 88.363895,
                },
                {
                    latitude: 25.0700428,
                    longitude: 67.2847875,
                },
            ],
        },
    ];
}  