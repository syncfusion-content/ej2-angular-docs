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
                  <input ejs-rating id="rating" [emptyTemplate]="template" enableAnimation="false" enableSingleSelection="true" value="3"/>

                  <ng-template #template let-data="">
                      <div [ngSwitch]="data.index">
                          <span *ngSwitchCase="0" class="angry emoji">😡</span>
                          <span *ngSwitchCase="1" class="disagree emoji">🙁</span>
                          <span *ngSwitchCase="2" class="neutral emoji">😐</span>
                          <span *ngSwitchCase="3" class="agree emoji">🙂</span>
                          <span *ngSwitchDefault class="happy emoji">😀</span>
                      </div>
                  </ng-template>
                </div>`
})

export class AppComponent { }