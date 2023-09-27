
 

import { Component } from '@angular/core';
import { Internationalization } from  '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template:` <div id='container'>
    <div>DateValue:<span class='format text'>new Date('1/12/2014 10:20:33')</span></div>
    <div>Formatted Value:<span class='result text'> </span></div>
    <div> `
})

export class AppComponent {
    ngAfterViewInit() {
        let intl: Internationalization = new Internationalization();
        let date: Date = new Date();
        let formattedString: string =  intl.formatDate(new Date('1/12/2014 10:20:33'), { skeleton: 'GyMMM' });
        (document.querySelector('.result') as Element).innerHTML = formattedString;
        }
        }



