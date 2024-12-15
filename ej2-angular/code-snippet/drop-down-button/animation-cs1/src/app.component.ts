import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  imports: [DropDownButtonModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="e-section-control">
      <!-- To render DropDownButton with different animations. -->
      <button ejs-dropdownbutton [items]='items' [animationSettings]='{ effect: "SlideDown", duration: 800, easing: "ease" }' content='Slide Down'></button>
      <button ejs-dropdownbutton [items]='items' [animationSettings]='{ effect: "FadeIn", duration: 800, easing: "ease" }' content='Fade In'></button>
      <button ejs-dropdownbutton [items]='items' [animationSettings]='{ effect: "ZoomIn", duration: 800, easing: "ease" }' content='Zoom In'></button>
    </div>
  `
})
export class AppComponent {
  // Initialize action items.
  public items: ItemModel[] = [
    { text: 'Unread' },
    { text: 'Has Attachments' },
    { text: 'Categorized' },
    { separator: true },
    { text: 'Important' },
    { text: 'More Filters' }
  ];
}