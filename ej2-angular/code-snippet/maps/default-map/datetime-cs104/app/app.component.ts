import { Component, OnInit, ViewChild } from '@angular/core';
import { Maps, Marker, Legend, MapsTooltip, IMarkerDragEventArgs } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Marker, Legend, MapsTooltip);
@Component({
    selector: 'app-container',
    template: `
        <ejs-maps id="rn-container" #maps (markerDragStart)="markerDragStart($event)" (markerDragEnd)="markerDragEnd($event)" [legendSettings]="legendSettings">
        <e-layers>
            <e-layer [shapeSettings]="shapeSettings" [shapeData]="shapeData" [markerSettings]="markerSettings"></e-layer>
        </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    @ViewChild('maps')
    public mapsInstance?: Maps;
    public shapeData?: object;
    public markerSettings?: object;
    public shapeSettings?: object;
    public zoomSettings?: object;
    public markerDragStart = (args: IMarkerDragEventArgs | any) => {
      // When the marker begins to move on the map, the event is triggered.
    };
    public markerDragEnd = (args: IMarkerDragEventArgs | any) => {
      // When the marker on the map stops dragging, the event is triggered.
      (this.mapsInstance as any).layers[args.layerIndex].markerSettings[args.markerIndex].dataSource[args.dataIndex].name = 'Dragged Marker ' + (args.dataIndex + 1);
      (this.mapsInstance as Maps).refresh();
    };
    public legendSettings?: object;

    ngOnInit(): void {
        this.shapeData = world_map;
        this.legendSettings = {
            visible: true,
            type: 'Markers',
            shape: 'Circle',
            shapeWidth: 10,
            shapeHeight: 10,
            fill: '#FF471A',
            shapeBorder: { width: 2, color: '#285255' },
        };
        this.shapeSettings = {
          fill: '#C3E6ED',
        };
        this.zoomSettings = {
          enable: false,
        };
        this.markerSettings = [
        {
            enableDrag: true,
            legendText: 'name',
            dataSource: [
                {
                  latitude: 49.95121990866204,
                  longitude: 18.468749999999998,
                  name: 'MarkerOne',
                },
                {
                  latitude: 59.88893689676585,
                  longitude: -109.3359375,
                  name: 'MarkerTwo',
                },
                {
                  latitude: -6.64607562172573,
                  longitude: -55.54687499999999,
                  name: 'MarkerThree',
                },
                {
                  latitude: 23.644385824912135,
                  longitude: 77.83189239539234,
                  name: 'MarkerFour',
                },
                {
                  latitude: 63.66569332894224,
                  longitude: 98.2225173953924,
                  name: 'MarkerFive',
                },
            ],
            visible: true,
            animationDuration: 0,
            shape: 'Balloon',
            width: 20,
            height: 20,
            border: { width: 2, color: '#285255' },
            tooltipSettings: {
              visible: true,
              valuePath: 'name',
            },
        },
    ];
   }
}


