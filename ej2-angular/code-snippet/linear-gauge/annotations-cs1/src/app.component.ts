


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-annotations>
            <e-annotation zIndex='1' content='<div id="first"><h1>Gauge</h1></div>' x=100 y=-70 ></e-annotation>
        </e-annotations>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}



