

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
            <e-axis opposedPosition=true>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}


