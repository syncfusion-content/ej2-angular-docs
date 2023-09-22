


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [enableRtl]="true" [tooltip]="tooltip" [legendSettings]='legendSettings'>
        <e-axes>
            <e-axis direction='AntiClockWise' startAngle=210 endAngle=150 minimum=0 maximum=120 radius='80%' [majorTicks]="majorTicks" [minorTicks]="minorTicks" [lineStyle]="lineStyle" [labelStyle]="labelStyle">
                <e-pointers>
                    <e-pointer value=65 radius='60%' color='#757575' pointerWidth=8 [cap]="cap" [needleTail]="needleTail">
                    </e-pointer>
                </e-pointers>
                <e-ranges>
                    <e-range start=0 end=40 color='#30B32D'></e-range>
                    <e-range start=40 end=80 color='#FFDD00'></e-range>
                    <e-range start=80 end=120 color='#F03E3E'></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public labelStyle?: Object;
    public tooltip?: Object;
    public legendSettings?: object;
    public lineStyle?: Object;
    public majorTicks?: Object;
    public minorTicks?: Object;
    public cap?: Object;
    public needleTail?: Object;
    ngOnInit(): void {
        // Initialize objects.
        this.cap= {
            radius: 7,
            color: '#757575'
        };
        this.needleTail= {
            length: '18%'
        };
        this.lineStyle = {
            width: 10, 
            color: 'transparent'
        };
        this.majorTicks = {
            height: 10, 
            offset: 5, 
            color: '#9E9E9E'
        };
        this.minorTicks = {
            height: 0
        };
        this.labelStyle= {
            position: 'Inside', useRangeColor: false,
            font: { 
                size: '12px', 
                color: '#424242', 
                fontFamily: 'Roboto', 
                fontStyle: 'Regular' 
            }
        };
        this.tooltip = {
            type:['Pointer', 'Range'],
            format:'Pointer : {value} ',
            enable: true,
            enableAnimation: false
        };
        this.legendSettings= {
            visible: true
        };
    }
}



