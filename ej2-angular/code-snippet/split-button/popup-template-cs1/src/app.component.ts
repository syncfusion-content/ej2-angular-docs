import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons'



import { Component } from '@angular/core';

@Component({
imports: [
        
        SplitButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <!-- To Render splitbutton. -->
            <div id='dropdowntarget'>
                <div id= "first">
                <div id='black'></div>
                <div id='red'></div>
                <div id='green'></div>
                <div id='gray'></div>
                <div id='blue'></div>
                <div id='violet'></div>
                <div id='brown'></div>
                <div id='darkgoldenrod'></div>
                <div id='aquamarine'></div>
            </div>
        </div>
<ejs-splitbutton iconCss ="e-sb-icons e-color" target="#dropdowntarget"></ejs-splitbutton></div>`
})

export class AppComponent {
}



