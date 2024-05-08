import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';

@Component({
imports: [
        
        ChipListModule
    ],


standalone: true,
    selector: 'my-app',
    template: `<ejs-chiplist text="Janet Leverling"></ejs-chiplist>`
})
export class AppComponent {

}



