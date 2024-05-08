import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RatingModule } from '@syncfusion/ej2-angular-inputs'
import { enableRipple } from '@syncfusion/ej2-base'

import { Component } from '@angular/core';
 
@Component({
imports: [
         FormsModule, RatingModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id="rating" value="3" showLabel="true" [labelTemplate]="labelTemplate" />
                  
                  <ng-template #labelTemplate let-data="">
                      <span>{{data.value}} out of 5</span>
                  </ng-template>
                </div>`
})

export class AppComponent { }