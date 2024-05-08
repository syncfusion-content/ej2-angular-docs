import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RatingModule } from '@syncfusion/ej2-angular-inputs'
import { enableRipple } from '@syncfusion/ej2-base'

import { Component, ViewChild } from '@angular/core';
import { RatingComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
         FormsModule, RatingModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                    <button id="btn" (click)="visible()">Visible</button>
                    <input ejs-rating #rating id="rating" value="3" visible="true" />
                </div>`
})

export class AppComponent {

  @ViewChild('rating')
  public rating?: RatingComponent;

  public visible() {
    this.rating!.visible = !this.rating?.visible;
  }
}
