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
                <button ejs-progressbutton content='Progress Step' [enableProgress]='true' (begin)='begin($event)' cssClass='e-hide-spinner'></button></div>`
})

export class AppComponent {
    public begin(args: ProgressEventArgs): void {
        args.step = 20;
    }
}


