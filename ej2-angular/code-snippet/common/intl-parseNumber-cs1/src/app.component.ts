


import { Component } from '@angular/core';
import { Internationalization } from  '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template:` <div id='container'>
    <div>FormattedValue:<span class='format text'>$01,234,545.650</span></div>
    <div>ParsedOutput:<span class='result text'> </span></div>
    </div>`
})

export class AppComponent {
    ngAfterViewInit() {
        let intl: Internationalization = new Internationalization();
        let val: number = intl.parseNumber('$01,234,545.650', { format: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
        (document.querySelector('.result') as any).innerHTML = val + '';
        }
        }



