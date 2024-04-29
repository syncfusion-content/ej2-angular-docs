import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'




import { Component } from '@angular/core';
import { Internationalization } from  '@syncfusion/ej2-base';

@Component({
standalone: true,
    selector: 'app-root',
    template:` <div id='container'>
    <div>DateValue:<span class='format text'>new Date('1/12/2014 10:20:33')</span></div>
    <div>Formatted Value:<span class='result text'> </span></div>
    <div> `
})

export class AppComponent {
    ngAfterViewInit() {
        let intl: Internationalization = new Internationalization();
        let dFormatter: Function = intl.getDateFormat({ skeleton: 'full', type: 'dateTime' });
        let formattedString: string = dFormatter(new Date('1/12/2014 10:20:33'));
        (document.querySelector('.result') as Element).innerHTML = formattedString;
        }
        }



