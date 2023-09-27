


import { Component } from '@angular/core';
import { Internationalization } from  '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template:` <div id='container'>
    <div>Value:<span class='format text'>1234545.65</span></div>
    <div>Formatted Value:<span class='result text'> </span></div>
    </div> `
})

export class AppComponent {
    ngAfterViewInit() {
        let intl: Internationalization = new Internationalization();
        let nFormatter: Function = intl.getNumberFormat({ skeleton: 'C3', currency: 'USD',minimumIntegerDigits:8});
        let formattedValue: string = nFormatter(1234545.65);
        (document.querySelector('.result') as Element).innerHTML = formattedValue;
        }
        }



