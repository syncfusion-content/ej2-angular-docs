


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<div class="e-section-control">
                <ejs-listbox [dataSource]="data"></ejs-listbox></div>`
})

export class AppComponent {
public data: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis', 'Basket Ball', 'Base Ball', 'Hockey', 'Volley Ball'];
}



