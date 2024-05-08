import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons'



import { Component } from '@angular/core';

@Component({
imports: [
        
        ProgressButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render progress button. -->
               <button ejs-progressbutton  [content]='content' [cssClass]='cssClass' [enableProgress]='true' [duration]='4000' (begin)='begin()' (end)='end()'></button></div>`
})

export class AppComponent {
    public content: string = 'Upload';
    public cssClass: string = 'e-hide-spinner';

    public begin(): void {
        this.content = 'Uploading...';
        this.cssClass = 'e-hide-spinner e-info';
    }
    public end(): void {
        this.content = 'Success';
        this.cssClass = 'e-hide-spinner e-success';
        setTimeout(() => {
            this.content = 'Upload';
            this.cssClass = 'e-hide-spinner';
        }, 500)
    }
}


