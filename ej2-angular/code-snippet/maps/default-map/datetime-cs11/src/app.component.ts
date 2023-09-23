

import { Component, OnInit } from '@angular/core';
import { Maps, Bubble } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Bubble);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [bubbleSettings] = 'bubbleSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeDataPath?: object | any;
    public shapePropertyPath?: object | any;
    public bubbleSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeDataPath = 'name';
        this.shapePropertyPath = 'name';
        this.bubbleSettings = [{
            visible: true,
            minRadius: 5,
            valuePath: "femaleRatio",
            colorValuePath: "femaleRatioColor",
            dataSource: [
                {
                    country: "United States", femaleRatio: 50.50442726, maleRatio: 49.49557274, femaleRatioColor: "green", maleRatioColor: "blue"
                },
                {
                    country: "India", femaleRatio: 48.18032713, maleRatio: 51.81967287, femaleRatioColor: "blue", maleRatioColor: "#c2d2d6"
                },
                {
                    country: "Oman", femaleRatio: 34.15597234, maleRatio: 65.84402766, femaleRatioColor: "#09156d", maleRatioColor: "orange"
                },
                {
                    country: "United Arab Emirates", femaleRatio: 27.59638942, maleRatio: 72.40361058, femaleRatioColor: "#09156d", maleRatioColor: "orange"
                }
            ],
            maxRadius: 20,
        },
        {
            visible: true,
            bubbleType: 'Circle',
            opacity: 0.4,
            minRadius: 15,
            valuePath: "maleRatio",
            colorValuePath: "maleRatioColor",
            dataSource: [
                {
                    country: "United States", femaleRatio: 50.50442726, maleRatio: 49.49557274, femaleRatioColor: "green", maleRatioColor: "blue"
                },
                {
                    country: "India", femaleRatio: 48.18032713, maleRatio: 51.81967287, femaleRatioColor: "blue", maleRatioColor: "#c2d2d6"
                },
                {
                    country: "Oman", femaleRatio: 34.15597234, maleRatio: 65.84402766, femaleRatioColor: "#09156d", maleRatioColor: "orange"
                },
                {
                    country: "United Arab Emirates", femaleRatio: 27.59638942, maleRatio: 72.40361058, femaleRatioColor: "#09156d", maleRatioColor: "orange"
                }
            ],
            maxRadius: 25,
        }]
   }
}


