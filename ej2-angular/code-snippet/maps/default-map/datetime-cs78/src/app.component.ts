


import { Component, OnInit } from '@angular/core';
import { Maps , Marker, Bubble, MapsTooltip } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Marker, Bubble, MapsTooltip);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' >
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath'
	[shapeSettings]='shapeSettings' [dataSource] = 'dataSource' [tooltipSettings]='tooltipSettings'
	[bubbleSettings]='bubbleSettings' [markerSettings]='markerSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public dataSource?: object[];
    public shapeData?: object;
    public shapePropertyPath?: string;
    public shapeDataPath?: string;
    public shapeSettings?: object;
    public tooltipSettings?: object;
    public bubbleSettings?: object[];
    public markerSettings?: object[];
    ngOnInit(): void {
        this.dataSource = [
			{ "Continent": "North America", 'color': '#71B081',
            data: { "continent": "North America", 'color': '#71B081' }
            },
            { "Continent": "South America", 'color': '#5A9A77',
            data: { "continent": "South America", 'color': '#5A9A77' }
            },
            { "Continent": "Africa", 'color': '#498770',
            data: { "continent": "Africa", 'color': '#498770' }
            },
            { "Continent": "Europe", 'color': '#39776C',
            data: { "continent": "Europe", 'color': '#39776C' }
            },
            { "Continent": "Asia", 'color': '#266665',
            data: { "continent": "Asia", 'color': '#266665' }
            },
            { "Continent": "Australia", 'color': '#124F5E',
            data: { "continent": "Australia", 'color': '#124F5E' }
            }
		]
        this.shapeData = world_map;
        this.shapePropertyPath = 'continent';
        this.shapeDataPath= 'data.continent';
	    this.shapeSettings = {
	       colorValuePath : 'data.color'
	    };
	    this.tooltipSettings = {
	        visible: true,
            valuePath: 'data.continent'
	    };
	    this.bubbleSettings =  [
            {
                visible: true,
                valuePath: 'data.value',
                colorValuePath: 'data.color',
                animationDuration: 0,
                minRadius: 20,
                maxRadius: 90,
                opacity: 0.8,
                dataSource: [
                    { 'name': 'India', 'value': 18.89685398845257, 'population': 391292635,
                    data: { 'color': 'red', 'population': 391292635, 'value': 189685398845257 }
                    }
                ],
                tooltipSettings: {
                    visible: true,
                    valuePath: 'data.population',
                    template:"<div>${data.population}</div>"
                }
            }
        ];
	    this.markerSettings = [
            {
                visible: true,
                dataSource: [
                    { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno',
                    data: { x: 37.6276571, y: -122.4276688, name: 'San Bruno', shape: 'Pentagon',
                    color: 'red', imageUrl: 'images/ballon.png' }
                    },
                    { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel',
                    data: { x: 33.5302186, y: -117.7418381, name: 'Laguna Niguel', color: 'blue',
                    shape: 'Pentagon', imageUrl: 'images/ballon.png' }
                    }
                ],
                shapeValuePath: "data.shape",
                colorValuePath: "data.color",
                height: 20,
                width: 20,
                offset: {
                    y: -10,
                    x: 0
                },
                longitudeValuePath: "data.y",
                latitudeValuePath: "data.x",
                tooltipSettings: {
                    visible: true,
                    valuePath: 'data.name',
                    format: "${data.name}: ${data.x} : ${data.y}"
                },
                animationDuration: 0
            }
        ]
    };
}



