


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-annotations>
            <e-annotation content='<div id="first"><h1>Gauge</h1></div>' zIndex="1" horizontalAlignment="Center" verticalAlignment="Center" ></e-annotation>
        </e-annotations>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}



