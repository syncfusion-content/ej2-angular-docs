


import { Component } from '@angular/core';
import { Internationalization } from  '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template:` <div id='container'>
    <div>Fromatted value:<span class='format text'>11/2016</span></div>
    <div>parsed Value:<span class='result text'> </span></div>
    </div> `
})

export class AppComponent {
    ngAfterViewInit() {
        let intl:Internationalization = new Internationalization();
        let val: number | any =  intl.parseDate('11/2016',{skeleton: 'yM'});
        (document.querySelector('.result') as Element).innerHTML = val.toString();
        }
        }



