

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
            <e-axis minimum=20 maximum=140 [majorTicks]='major' [minorTicks]='minor'>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    public major?:Object;
    public minor?:Object;
    ngOnInit(): void {
        this.major = {
            interval: 20,
            color: "Orange",
            position: "Outside"
        };
        this.minor = {
             interval: 5,
            color: 'red',
            position: "Cross"
        };
    }
}


