import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'



import { Component, OnInit } from '@angular/core';
import { loadCldr,L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as currencyData from './currencyData.json';
import * as numbers from './numbers.json';
import * as currencies from './currencies.json';

loadCldr(numberingSystems, currencyData, numbers, currencies);

@Component({
imports: [
        NumericTextBoxModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the DropDownList component with change event
    // sets `German` culture using the culture value 'de'
    // sets the 'EUR' currency format
    template: `<ejs-numerictextbox locale='de' currency='EUR' format='c2' value='100'></ejs-numerictextbox>`
})
export class AppComponent implements OnInit {
    constructor() {
    }
    ngOnInit(): void {
        // Load `German` culture to override spin buttons tooltip text
        L10n.load({
            'de': {
            'numerictextbox': {
                    incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'
                }
           }
        });
    }
}



