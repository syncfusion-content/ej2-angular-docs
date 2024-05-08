import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'




import { Component } from '@angular/core';
import { Internationalization } from  '@syncfusion/ej2-base';

@Component({

standalone: true,
    selector: 'app-root',
    template:` <div id='container'>
    <div>Fromatted value:<span class='format text'>Friday, November 4, 2016 at 1:03:04 PM GMT+05:30</span></div>
    <div>parsed Value:<span class='result text'> </span></div>
    </div> `
})

export class AppComponent {
    ngAfterViewInit() {
        let intl: Internationalization = new Internationalization();
        let dParser: Function = intl.getDateParser({skeleton: 'full', type: 'dateTime'});
        let val: Date = dParser('Friday, November 4, 2016 at 1:03:04 PM GMT+05:30');
        (document.querySelector('.result') as Element).innerHTML = val.toString();
        }
        }



