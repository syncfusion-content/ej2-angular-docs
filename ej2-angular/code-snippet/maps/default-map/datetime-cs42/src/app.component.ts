

import { Component, ViewEncapsulation,ViewChild } from '@angular/core';
import { IShapeSelectedEventArgs, MapsComponent} from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import { africa_continent } from './africa-continent';
export interface ShapeData { continent?: string; }

@Component({
    selector: 'app-container',
    // specifies the template string for the maps component
    template:`<div class="control-section">
    <div align='center'>
    <ejs-maps id='container' #drilldown (shapeSelected)="shapeSelected($event)" style="display:block;">
    <e-layers>
    <e-layer [shapeData]='worldmap' layerType='Geometry' shapePropertyPath='continent' shapeDataPath='continent' [dataSource]='dataSource' [shapeSettings]='shapeSettings' [markerSettings]='markerSettings'></e-layer>
    <e-layer layerType='Geometry' [shapeData]='africa' [shapeSettings]='africa_shapeSettings' [highlightSettings]='highlightSettings'></e-layer>
    </e-layers>
    </ejs-maps>
    </div>
    </div>
    <style>
        .markerTemplate {
            font-size: 12px;
            color: white;
            text-shadow: 0px 1px 1px black;
            font-weight: 500
        }
        .markerTemplate {
            height: 30px;
            width: 30px;
            display: block;
            margin: auto;
        }
    </style>`,
    encapsulation: ViewEncapsulation.None
  })

export class AppComponent {
    public worldmap = world_map;
    public africa = africa_continent;
    @ViewChild('drilldown')
    public maps?: MapsComponent;
    public shapeSelected = (args: IShapeSelectedEventArgs) : void => {
        let shape: string = (args.shapeData as ShapeData).continent as string;
        if (shape === 'Africa') {
            (this.maps as MapsComponent).baseLayerIndex=1;
            this.maps?.refresh();
        }
    };
    public shapeSettings = {
        colorValuePath: 'drillColor'
    };
    public markerSettings=[{
        visible: true,
        template: '<div id="marker3" class="markerTemplate">Africa' +
            '</div>',
        dataSource: [
            { latitude: 10.97274101999902, longitude: 16.390625 }
        ],
        animationDuration: 0
    }];
    public africa_shapeSettings = {
        fill: '#80306A'
    };
    public highlightSettings = {
        enable: true,
        fill: '#80306A'
    };
    dataSource: any;
}


