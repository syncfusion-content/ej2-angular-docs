import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'




import { Component } from '@angular/core';
import { Internationalization } from  '@syncfusion/ej2-base';

@Component({
standalone: true,
    selector: 'app-root',
    template:` <div id='container'>
    <div>Value:<span class='format text'>1234545.65</span></div>
    <div>Formatted Value:<span class='result text'> </span></div>
    </div> `
    })

export class AppComponent {
    ngAfterViewInit() {
        let intl: Internationalization = new Internationalization();
        let formattedString: string = intl.formatNumber(12345.65,{ format:'C5' ,
        useGrouping: false,minimumSignificantDigits:1, maximumSignificantDigits:3 });
        (document.querySelector('.result') as Element).innerHTML = formattedString;
        }
        }



