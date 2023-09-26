

import { Component } from '@angular/core';
import { ProgressEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<button ejs-progressbutton [content]='content' [enableProgress]='true' [duration]='15000' (begin)='begin($event)' (progress)='progress($event)' (end)='end($event)' cssClass='e-hide-spinner'></button>`
})

export class AppComponent {
    public content: string = 'Progress';

    public begin(args: ProgressEventArgs): void {
        this.content = 'Progress ' + args.percent + '%';
    }

    public progress(args: ProgressEventArgs): void {
        this.content = 'Progress ' + args.percent + '%';
        if (args.percent === 40) {
            args.percent = 90;
        }
    }

    public end(args: ProgressEventArgs): void {
        this.content = 'Progress ' + args.percent + '%';
    }
}


