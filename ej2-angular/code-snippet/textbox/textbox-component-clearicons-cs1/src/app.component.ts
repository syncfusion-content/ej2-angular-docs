

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
    <h4>Textbox with clear icon</h4>
    <div class='textboxes'>
        <ejs-textbox placeholder="First Name" showClearButton='true' floatLabelType="Never"></ejs-textbox>
    </div>

    <h4>Floating Textbox with clear icon</h4>
    <div class='textboxes'>
        <ejs-textbox placeholder="Last Name" showClearButton='true' floatLabelType="Auto"></ejs-textbox>
    </div>
    </div>`
})

export class AppComponent { }


