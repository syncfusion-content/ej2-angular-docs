


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-listbox [dataSource]="data" [fields]="setfield"></ejs-listbox>`
})

export class AppComponent {
public data: { [key: string]: Object }[] = [
    { id: 'game1', sports: 'Badminton' },
    { id: 'game2', sports: 'Cricket'},
    { id: 'game3', sports: 'Football'},
    { id: 'game4', sports: 'Golf'},
    { id: 'game5', sports: 'Tennis'},
    { id: 'game6', sports: 'Basket Ball'},
    { id: 'game7', sports: 'Base Ball'},
    { id: 'game8', sports: 'Hockey'},
    { id: 'game9', sports: 'Volley Ball'}
];

public setfield = {
    text: "sports",
    value: "id"
 }
}


