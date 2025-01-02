import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component, ViewChild, OnInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    styleUrls:['./style.css'],
    template:`<div class="e-section-control">
              <button #btn ejs-button [isPrimary]="true" (created)="onCreated()">Button</button></div>`
})

export class AppComponent {
  @ViewChild('btn')
  private btn: ButtonComponent| any;
  onCreated() {
    this.btn.element.setAttribute("title", "Primary Button")
  }
}


