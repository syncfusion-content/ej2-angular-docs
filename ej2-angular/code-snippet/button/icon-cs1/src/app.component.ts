

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template:  `<!-- To position the icon to the left of the text on a Button. -->
                <button ejs-button iconCss="e-btn-sb-icon e-prev-icon">Previous</button>

                <!-- To position the icon to the right of the text on a Button. -->
                <button ejs-button iconCss= "e-btn-sb-icon e-stop-icon" iconPosition="Right">Stop</button>`
})

export class AppComponent { }


