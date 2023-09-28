

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
            <e-axis [line]='line'>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    public line?:Object;
    ngOnInit(): void {
        this.line = {
            height: 150,
            width: 2,
            color: '#4286f4',
            offset: 2
        };
    }
}


