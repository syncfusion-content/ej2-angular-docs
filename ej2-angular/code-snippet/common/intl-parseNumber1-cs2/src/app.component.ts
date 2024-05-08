import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'




import { Component } from '@angular/core';
import { Internationalization } from  '@syncfusion/ej2-base';

@Component({

standalone: true,
    selector: 'app-root',
    template:` <div id='container'>
    <div>FormattedValue:<span class='format text'>123567.45%</span></div>
    <div>ParsedOutput:<span class='result text'> </span></div>
    </div>`
})

export class AppComponent {
    ngAfterViewInit() {
        let intl: Internationalization = new Internationalization();
        let nParser: Function =  intl.getNumberParser({ format:'P2' , useGrouping: false});
        let val: number = nParser('123567.45%');
        (document.querySelector('.result') as Element).innerHTML = val + '';
        }
        }



