


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<div class="e-section-control">
                <form><ejs-listbox id="listbox" [dataSource]="data" height="290px"></ejs-listbox>
               <button class="e-btn">Submit</button></form></div>`
})

export class AppComponent {
public data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom' },
    { text: 'Bugatti Chiron' },
    { text: 'Bugatti Veyron Super Sport' },
    { text: 'SSC Ultimate Aero' },
    { text: 'Koenigsegg CCR' },
    { text: 'McLaren F1' },
    { text: 'Aston Martin One- 77' },
    { text: 'Jaguar XJ220' },
    { text: 'McLaren P1' },
    { text: 'Ferrari LaFerrari' },
];
}



