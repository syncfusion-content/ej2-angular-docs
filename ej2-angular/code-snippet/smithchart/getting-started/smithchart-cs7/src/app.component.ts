

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-smithchart style='display: block;' id='container' [title]='title' [legendSettings]='legendSettings' height='350px'>
    <e-seriesCollection>
        <e-series [marker]='marker' [tooltip]='tooltip' [dataSource]='seriesdata1' name='Transmission1' reactance='reactance' resistance='resistance'></e-series>
        <e-series [points]='seriespoints' [tooltip]='tooltip' name='Transmission2'> </e-series>
    </e-seriesCollection>
    </ejs-smithchart>`
})
export class AppComponent {
    public title: object = { text: 'Transmission lines applied for both impedance and admittance' };
    public marker: object = {
        visible: true,
        dataLabel: {
            visible: true
        }
    };
    public tooltip: object = {
        visible: true
    };
    public legendSettings: object = {
        visible: true
    };
    public seriesdata1: object[] = [
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
        { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
        { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
        { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
    ];
    public seriespoints: object[] = [
        { resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
        { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
        { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
        { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
        { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
        { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
        { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }
    ];
}



