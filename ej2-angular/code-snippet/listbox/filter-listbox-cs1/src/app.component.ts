import { ListBoxComponent , ListBoxAllModule} from '@syncfusion/ej2-angular-dropdowns'
import { Query } from '@syncfusion/ej2-data';
import { Component } from '@angular/core';
import { getInstance } from '@syncfusion/ej2-base';
import { ListBox } from '@syncfusion/ej2-dropdowns';

@Component({
imports: [
        ListBoxAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div class="e-section-control">
                Enter Tex: <input id='filterTextBox' (input)="onFilterChange($event)" placeholder="Enter text to filter">
                <h4>Select your favorite car:</h4>
                <ejs-listbox id="listbox"  [dataSource]="data"></ejs-listbox></div>`
})

export class AppComponent {
    public data: { [key: string]: Object }[] = [
        { "text": "Hennessey Venom", "id": "list-01" },
        { "text": "Bugatti Chiron", "id": "list-02" },
        { "text": "Bugatti Veyron Super Sport", "id": "list-03" },
        { "text": "SSC Ultimate Aero", "id": "list-04" },
        { "text": "Koenigsegg CCR", "id": "list-05" },
        { "text": "McLaren F1", "id": "list-06" },
        { "text": "Aston Martin One- 77", "id": "list-07" },
        { "text": "Jaguar XJ220", "id": "list-08" },
        { "text": "McLaren P1", "id": "list-09" },
        { "text": "Ferrari LaFerrari", "id": "list-10" }
    ];
    onFilterChange(event: Event) {
        const listBox = getInstance((document as any).getElementById("listbox"), ListBox) as ListBox;
        listBox.filter(this.data, new Query().where('text', 'contains', (event.target as HTMLInputElement).value, true));
    }
}



