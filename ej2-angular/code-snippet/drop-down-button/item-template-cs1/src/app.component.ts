import { Component } from '@angular/core';
import { DropDownButtonModule, ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="e-section-control">
      <!-- DropDownButton with custom itemTemplate -->
     <button ejs-dropdownbutton [items]='items' content='DropdownButton' [itemTemplate]='itemTemplate'></button>
      <ng-template #itemTemplate let-data>
        <div>
          <span class="e-menu-icon {{data.iconCss}}"></span>
          <ng-container *ngIf="data.url; else textTemplate">
            <span class="custom-class"><a [href]="data.url" target="_blank" rel="noopener noreferrer">{{data.text}}</a></span>
          </ng-container>
          <ng-template #textTemplate>
            <span class="custom-class">{{data.text}}</span>
          </ng-template>
        </div>
      </ng-template>
    </div>
  `,
  imports: [DropDownButtonModule, CommonModule]
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
}