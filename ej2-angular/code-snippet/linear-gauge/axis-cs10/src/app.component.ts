

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" orientation='Horizontal'>
        <e-axes>
            <e-axis minimum=20 maximum=140>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}


