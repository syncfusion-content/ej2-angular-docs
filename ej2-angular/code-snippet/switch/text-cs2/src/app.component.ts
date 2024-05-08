import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'



import { Component, ViewChild } from '@angular/core';
import { SwitchComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        SwitchModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To Render Switch. -->
               <ejs-switch #switch onLabel="ON" offLabel="OFF" (created)='created()'></ejs-switch>
               </div>`
})

export class AppComponent {
    @ViewChild('switch')
    public switch: SwitchComponent| any;
    public created() {
        this.switch.toggle();
    }
}


