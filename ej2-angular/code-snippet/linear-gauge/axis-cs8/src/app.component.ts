

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
            <e-axis [labelStyle]='label'>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    public label?:Object;
    ngOnInit(): void {
        this.label =  {
            format: '{value}°C'
        };
    }
}


