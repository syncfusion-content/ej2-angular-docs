


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis startAngle=270 endAngle=90 radius='90%' minimum=0 maximum=100 [lineStyle]='lineStyle' [labelStyle]='labelStyle' [majorTicks]='majorTicks' [minorTicks]='minorTicks' [pointers]='pointers'>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public lineStyle?: Object;
    public labelStyle?: Object;
    public majorTicks?: Object;
    public minorTicks?: Object;
    public pointers?: Object[];
    public pointerLinearGradient: Object = {
        startValue: '0%',
        endValue: '100%',
        colorStop: [
            { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
            { color: '#E63B86', offset: '70%', opacity: 0.9 }]
    };
    ngOnInit(): void {
        // Initialize objects
        this.lineStyle= {
            width: 3, color: '#E63B86'
        };
        this.labelStyle = {
            font: { size: '0px'}
        };
        this.majorTicks = {
            height: 0
        };
        this.minorTicks = {
            height: 0
        };
        this.pointers = [{
            radius: '80%',
            value: 80,
            animation: { enable: true, duration: 1000 },
            pointerWidth: 10,
            linearGradient: this.pointerLinearGradient,
            cap: {
                radius: 8,
                color: 'white',
                border: {
                    color: '#E63B86',
                    width: 1
                }
                },
            needleTail: {
                length: '20%',
                linearGradient: this.pointerLinearGradient
            }
            }, {
            radius: '60%', value: 40,
            animation: { duration: 1000 },
            pointerWidth: 10,
            linearGradient: this.pointerLinearGradient,
            cap: {
                radius: 8, color: 'white',
                border: { color: '#E63B86', width: 1 }
            },
            needleTail: {
                length: '20%',
                linearGradient: this.pointerLinearGradient
            }
        }];
    }
}



