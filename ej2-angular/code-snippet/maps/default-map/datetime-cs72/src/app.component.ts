

import { Component, ViewEncapsulation, ViewChild, OnInit  } from '@angular/core';
import { Maps, Marker, MapsTooltip, Zoom, Point} from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import { cluster } from './marker-location';;
Maps.Inject(Marker, MapsTooltip, Zoom);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [zoomSettings] = 'zoomSettings' [layers] = 'layers'>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public zoomSettings?: object;
    public layers?: object;
    ngOnInit(): void {
        this.zoomSettings = {
            enable: true
        };
        this.layers = [{
            shapeData: world_map,
            shapeSettings: { fill: '#C1DFF5' },
            markerClusterSettings: {
                allowClustering: true,
                allowClusterExpand: true,
                shape: 'Circle',
                height: 40,
                width: 40,
                labelStyle : { color: 'white'},
                offset: new Point(10, 20),
                opacity: 0.9,
                fill: 'green',
                connectorLineSettings: {
                    color: 'orange',
                    opacity: 0.8,
                    width: 2
                }
            },
            markerSettings: [{
                dataSource: cluster,
                visible: true,
                animationDuration: 0,
                shape: 'Balloon',
                height: 20,
                width: 20,
                tooltipSettings: {
                    visible: true,
                    valuePath: 'area',
                }
            }]
        }];
    }
}


