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
                  <input ejs-rating id="rating" value="3" showTooltip="true" [tooltipTemplate]="tooltipTemplate" />

                  <ng-template #tooltipTemplate let-data="">
                    <div [ngSwitch]="data.value">
                      <span *ngSwitchCase="1" >Angry</span>
                      <span *ngSwitchCase="2" >Sad</span>
                      <span *ngSwitchCase="3" >Neutral</span>
                      <span *ngSwitchCase="4" >Good</span>
                      <span *ngSwitchDefault >Happy</span>
                    </div>
                  </ng-template>
                </div>`
})

export class AppComponent { }