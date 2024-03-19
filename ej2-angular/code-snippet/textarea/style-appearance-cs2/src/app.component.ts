

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textarea'>
                <label className="custom-input-label"> Filled TextArea </label>
                <div id='container'>
                    <ejs-textarea id='filled' placeholder="Filled" floatLabelType="Auto" cssClass="e-filled"></ejs-textarea>
                </div>
            
                <label className="custom-input-label"> Outlined TextArea </label>
                <div id='container1'>
                    <ejs-textarea id='outlined' placeholder="Outlined" floatLabelType="Auto" cssClass="e-outline"></ejs-textarea>
                </div>
                </div>
              </div>`
})

export class AppComponent { }


