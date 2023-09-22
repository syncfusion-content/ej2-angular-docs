


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" title="Speedometer" [titleStyle]="titleStyle">
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public titleStyle?: Object;
    ngOnInit(): void {
        // Initialize objects.
        this.titleStyle = {
            color: '#27d5ff'
        };
    }
}



