

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template:   `<!-- Flat Button. -->
                <button ejs-button cssClass="e-flat">Flat</button>

                <!-- Outline Button. -->
                <button ejs-button cssClass="e-outline">Outline</button>

                <!-- Round Button - Icon can be loaded by setting "e-icons e-plus-icon" in "iconCss" property.-->
                <!-- Use "e-icons" class name to load Essential JS 2 built-in icons.-->
                <!-- Use "e-plus-icon" class name to load plus icon that you can refer in "styles.css" -->
                <button ejs-button cssClass="e-round" iconCss="e-icons e-plus-icon" [isPrimary]="true"></button>`
})

export class AppComponent { }


