import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuModule, MenuItemModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [MenuModule],
  template: `
    <div class="e-section-control">
      <!-- To Render Menu. -->
      <ejs-menu [items]='menuItems'></ejs-menu>
    </div>
  `
})
export class AppComponent {
  // Menu items definition
  public menuItems: MenuItemModel[] = [
    {
      text: 'Home',
      htmlAttributes: {
        role: 'menuitem',
        'aria-label': 'Home',
        tabindex: '1'
      }
    },
    {
      text: 'Book Categories',
      items: [
        {
          text: 'Cookbooks',
          htmlAttributes: {
            role: 'menuitem',
            'aria-label': 'Cookbooks',
            tabindex: '1'
          }
        },
        {
          text: 'Children',
          htmlAttributes: {
            role: 'menuitem',
            'aria-label': 'Children',
            tabindex: '1'
          }
        }
      ],
      htmlAttributes: {
        role: 'menuitem',
        'aria-label': 'Book Categories',
        tabindex: '1'
      }
    },
    {
      text: 'Purchase',
      htmlAttributes: {
        role: 'menuitem',
        'aria-label': 'Purchase',
        tabindex: '1'
      }
    },
    {
      text: 'Contact Us',
      htmlAttributes: {
        role: 'menuitem',
        'aria-label': 'Contact Us',
        tabindex: '1'
      }
    },
    {
      separator: true
    },
    {
      text: 'Login',
      id: 'login',
      htmlAttributes: {
        role: 'menuitem',
        'aria-label': 'Login',
        tabindex: '1'
      }
    }
  ];
}