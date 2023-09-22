


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [tooltip]="tooltip" enablePointerDrag=true>
        <e-axes>
            <e-axis minimum=0 maximum=120 radius="90%" startAngle= 240 endAngle=120 [majorTicks]="majorTicks" [minorTicks]="minorTicks" [lineStyle]="lineStyle" [annotations]='annotaions'>
                <e-pointers>
                    <e-pointer value=70 radius="60%" [cap]="cap"></e-pointer>
                </e-pointers>
                 <e-ranges>
                        <e-range start=0 end=50 radius='102%' startWidth=10 endWidth=10 color='#3A5DC8'></e-range>
                        <e-range start=50 end=120 radius='102%' startWidth=10 endWidth=10 color='#33BCBD'></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public lineStyle?: Object;
    public majorTicks?: Object;
    public minorTicks?: Object;
    public tooltip?: Object;
    public cap?: Object;
    public annotaions : any;
    ngOnInit(): void {
        // Initialize objects
        this.tooltip = {
            type:['Pointer', 'Range', 'Annotation'],
            enable: true,
            enableAnimation: false,
            annotationSettings: { template:'<div>CircularGauge</div>' },
            rangeSettings: { fill:'red' }
        };
        this.lineStyle= {
            width: 0
        };
         this.majorTicks = {
            color: 'white', offset: -5, height: 12
        };
        this.minorTicks = {
            width: 0
        };
        this.annotaions = [{
        content: 'CircularGauge',
        angle: 180, zIndex: '1',
        }];
        this.cap= {
            radius: 10,
            border: {
                color: '#33BCBD',
                width: 5
                }
        };
    }

}



