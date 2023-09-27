


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-annotations>
            <e-annotation content='<div><h1 style="color:red;">Speed</h1></div>' zIndex="1" x=250 y=80>
            </e-annotation>
            <e-annotation content='<div><h1 style="color:blue;">Meter</h1></div>' zIndex="1" x=240 y=-100>
            </e-annotation>
        </e-annotations>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}



