import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  imports: [
    DropDownButtonModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="e-section-control">
      <!-- To render DropDownButton. -->
      <button ejs-dropdownbutton [items]='items' [popupWidth]="'200px'" content='DropDownButton'></button>
    </div>
  `
})

export class AppComponent {
  // Initialize action items.
  public items: ItemModel[] = [
    {
      text: 'Selection',
      iconCss: 'e-icons e-list-unordered'
    },
    {
      text: 'Yes / No',
      iconCss: 'e-icons e-check-box'
    },
    {
      text: 'Text',
      iconCss: 'e-icons e-caption'
    },
    {
      text: 'None',
      iconCss: 'e-icons e-mouse-pointer'
    }
  ];
}