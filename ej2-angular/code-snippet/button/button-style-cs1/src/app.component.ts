

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template:  `<!-- Primary Button - Used to represent a primary action. -->
                <button ejs-button cssClass="e-primary">Primary</button>

                <!-- Success Button - Used to represent a positive action. -->
                <button ejs-button cssClass="e-success">Success</button>

                <!-- Info Button - Used to represent an informative action -->
                <button ejs-button cssClass="e-info">Info</button>

                <!-- Warning Button - Used to represent an action with caution. -->
                <button ejs-button cssClass="e-warning">Warning</button>

                <!-- Danger Button - Used to represent a negative action. -->
                <button ejs-button cssClass="e-danger">Danger</button>

                <!-- Link Button - Changes the appearance of the Button like a hyperlink. -->
                <button ejs-button cssClass="e-link">Link</button>`
})

export class AppComponent { }


