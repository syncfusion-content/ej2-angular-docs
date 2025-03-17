import { Component } from '@angular/core';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { enableRipple } from '@syncfusion/ej2-base'

import { SpeechToTextModule } from '@syncfusion/ej2-angular-inputs'

@Component({
    imports: [
        SpeechToTextModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render SpeechToText component. -->
    <div class="speechText-container" style="width: 40px; margin: 50px auto;">
        <button ejs-speechtotext></button>
    </div>`
})

export class AppComponent { }