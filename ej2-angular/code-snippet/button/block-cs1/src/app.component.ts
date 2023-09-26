

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls:['./style.css'],
    template:  `<!-- Block button. -->
                <button ejs-button cssClass="e-block">Block Button</button>

                <!-- Primary block button. -->
                <button ejs-button cssClass="e-block e-primary">Block Button</button>

                <!-- Success block button. -->
                <button ejs-button cssClass="e-block e-success">Block Button</button>`
})

export class AppComponent { }


