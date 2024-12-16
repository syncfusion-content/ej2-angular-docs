import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

enableRipple(true);

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="e-section-control">
      <!-- Target element -->
      <div id="target">Right-click / Touch hold to open the ContextMenu</div>

      <!-- To Render ContextMenu. -->
      <ejs-contextmenu 
        id='contextmenu' 
        target='#target' 
        [items]='menuItems' 
        [enableScrolling]='true' 
        (beforeOpen)='beforeOpen($event)'>
      </ejs-contextmenu>
    </div>
  `,
  imports: [BrowserModule, ContextMenuModule]
})
export class AppComponent {
  public menuItems: MenuItemModel[] = [
    {
      text: 'View',
      items: [
        { text: 'Mobile' },
        { text: 'Desktop Smaller' },
        { text: 'Desktop Normal' },
        { text: 'Desktop Bigger Smaller' },
        { text: 'Desktop Bigger Normal' }
      ]
    },
    { text: 'Refresh' },
    { text: 'Paste' },
    { separator: true },
    { text: 'New' },
    { text: 'Personalize' }
  ];

  beforeOpen(args: MenuEventArgs): void {
    if (args.element.parentElement) {
      args.element.parentElement.style.height = '150px';
    }
  }
}