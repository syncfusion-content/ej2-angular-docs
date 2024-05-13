import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'
import { FormsModule } from '@angular/forms'

import { Component } from '@angular/core';

@Component({
imports: [
        
        ButtonModule,
        FormsModule
    ],


standalone: true,
    selector: 'app-root',
    styleUrls:['./style.css'],
    template:`<div>   
     <!-- Primary Button - Used to represent a primary action. -->
     <button ejs-button cssClass="e-primary">Button</button>
     </div>`  
})

export class AppComponent { 
}