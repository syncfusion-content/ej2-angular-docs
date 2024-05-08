import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor'



import { Component } from '@angular/core';

@Component({
imports: [
         InPlaceEditorAllModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
        <div id='container'>
            <span class="content-title"> Enter your name: </span>
            <ejs-inplaceeditor #element id="element" mode="Inline" value="Andrew" enableRtl=true></ejs-inplaceeditor>
        </div>
    `
})

export class AppComponent {
}


