import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';

@Component({
imports: [
        
        SwitchModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <div id='container'>
                <div class="container switch-control">
                    <div>
                        <h3>Customizing Shape</h3>
                    </div>
                <div>
                    <label for="switch1" style="padding: 10px 82px 10px 7px"> Square Switch </label>
                    <ejs-switch id="switch1" cssClass="square" ></ejs-switch>
                </div>
                <div>
                    <label for='switch2' style="padding: 10px 76px 10px 7px"> Bar and handle </label>
                    <ejs-switch id="switch2" cssClass="custom-switch" [checked]= "true" ></ejs-switch>
                </div>
                <div>
                    <label for='switch3' style="padding: 10px 96px 10px 7px"> Handle text </label>
                    <ejs-switch id="switch3" cssClass="handle-text" ></ejs-switch>
                </div>
                </div>
               </div>
               </div>`
})

export class AppComponent { }



