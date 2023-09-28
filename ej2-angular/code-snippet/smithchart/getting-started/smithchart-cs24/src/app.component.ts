

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-smithchart style='display: block;' id='container' >
    <e-seriesCollection>
        <e-series [marker] ='marker' [dataSource]='seriesdata1' name ='Transmission1' reactance='reactance' resistance='resistance'> </e-series>
    </e-seriesCollection>
    </ejs-smithchart>`
})

export class AppComponent {
    public marker:object = {
         dataLabel: {
                    visible: true,
                    fill: '#99ffcc',
                    opacity: 1,
                    border: {
                        color: '#1aff8c',
                        width: 2,
                    }
                }
    };
    public seriesdata1: object[] = [
               { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
            ];
}


