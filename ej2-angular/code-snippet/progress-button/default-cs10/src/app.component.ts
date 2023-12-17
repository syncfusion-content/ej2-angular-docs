

import { Component } from '@angular/core';
import { ProgressEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <button ejs-progressbutton content='Progress Step' [enableProgress]='true' (begin)='begin($event)' cssClass='e-hide-spinner'></button></div>`
})

export class AppComponent {
    public begin(args: ProgressEventArgs): void {
        args.step = 20;
    }
}


