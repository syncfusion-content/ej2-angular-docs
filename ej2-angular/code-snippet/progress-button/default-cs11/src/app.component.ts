import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons'



import { Component } from '@angular/core';
import { ProgressEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        
        ProgressButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <button ejs-progressbutton [content]='content' [enableProgress]='true' [duration]='15000' (begin)='begin($event)' (progress)='progress($event)' (end)='end($event)' cssClass='e-hide-spinner'></button></div>`
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


