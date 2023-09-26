

import { Component } from '@angular/core';
import { ProgressEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<button ejs-progressbutton content='Progress Step' [enableProgress]='true' (begin)='begin($event)' cssClass='e-hide-spinner'></button>`
})

export class AppComponent {
    public begin(args: ProgressEventArgs): void {
        args.step = 20;
    }
}


