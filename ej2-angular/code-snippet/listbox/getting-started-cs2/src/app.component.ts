


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-listbox [dataSource]="data"></ejs-listbox>`
})

export class AppComponent {
public data: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis', 'Basket Ball', 'Base Ball', 'Hockey', 'Volley Ball'];
}



