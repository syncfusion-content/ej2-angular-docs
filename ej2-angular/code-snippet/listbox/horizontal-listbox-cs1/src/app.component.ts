

import { Component } from '@angular/core';
import { ListBoxComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    // specifies the template string for the ListBox component with dataSource
    template: `<ejs-listbox [dataSource]='data' cssClass='e-horizontal-listbox'></ejs-listbox>`
})
export class AppComponent {
    // defined the array of object
    public data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' }
];
}



