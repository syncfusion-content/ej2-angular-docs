import { Component } from '@angular/core';
import { DropDownButtonModule, ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="e-section-control">
      <!-- DropDownButton with custom itemTemplate -->
      <button ejs-dropdownbutton [items]='items' content='DropdownButton' [itemTemplate]='itemTemplate'></button>
    </div>
  `,
  imports: [DropDownButtonModule]
})
export class AppComponent {
  // Initialize DropDownButton items
  public items: ItemModel[] = [
    { text: 'Home', iconCss: 'e-icons e-home' },
    { text: 'Search', iconCss: 'e-icons e-search', url: 'http://www.google.com' },
    { text: 'Yes / No', iconCss: 'e-icons e-check-box' },
    { text: 'Text', iconCss: 'e-icons e-caption' },
    { separator: true },
    { text: 'Syncfusion', iconCss: 'e-icons e-mouse-pointer', url: 'http://www.syncfusion.com' }
  ];

  // Template function to customize each item
  public itemTemplate(data: ItemModel): string {
    if (data.url) {
      return `
        <div>
          <span class="e-menu-icon ${data.iconCss}"></span>
          <span class="custom-class"><a href="${data.url}" target="_blank" rel="noopener noreferrer">${data.text}</a></span>
        </div>`;
    } else {
      return `
        <div>
          <span class="e-menu-icon ${data.iconCss}"></span>
          <span class="custom-class">${data.text}</span>
        </div>`;
    }
  }
}