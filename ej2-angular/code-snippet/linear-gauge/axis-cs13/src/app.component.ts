

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
            <e-axis [labelStyle]='label1'>
            </e-axis>
            <e-axis opposedPosition=true [labelStyle]='label2'>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    public label1?:Object;
    public label2?:Object;
    ngOnInit(): void {
        this.label1 =  {
            format: '{value}°C'
        };
        this.label2 =  {
            format: '{value}°F'
        };
    }
}


