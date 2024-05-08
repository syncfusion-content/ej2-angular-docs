import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';

@Component({
imports: [
         MaskedTextBoxModule
    ],


standalone: true,
    selector: 'app-root',
    // sets set of regular expression for each input place as mask
    template: `
            <ejs-maskedtextbox name="mask_value" #mask="" mask='[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]' placeholder='IP Address (ex: 212.212.111.222)' floatLabelType= 'Always'></ejs-maskedtextbox>
            `
})
export class AppComponent {
     constructor() {
    }
}



