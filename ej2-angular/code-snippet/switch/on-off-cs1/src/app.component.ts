


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id='container'>
                <div class="container switch-control">
                    <div>
                        <h3>Customizing Color</h3>
                    </div>
                <div>
                    <label for="switch1" style="padding: 10px 85px 10px 7px"> Custom color </label>
                    <ejs-switch id="switch1" cssClass="bar-color" ></ejs-switch>
                </div>
                <div>
                    <label for='switch2' style="padding: 10px 88px 10px 7px"> Handle color </label>
                    <ejs-switch id="switch2" cssClass="handle-color" [checked]= "true" ></ejs-switch>
                </div>
                <div>
                    <label for='switch3' style="padding: 10px 102px 10px 7px"> iOS Switch </label>
                    <ejs-switch id="switch3" cssClass="custom-iOS" [checked]="true" ></ejs-switch>
                </div>
                </div>
               </div>`
})

export class AppComponent { }



