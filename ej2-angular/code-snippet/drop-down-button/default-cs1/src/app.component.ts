import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    imports: [DropDownButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
        <!-- To render DropDownButton. -->
        <button ejs-dropdownbutton [items]='items' content='Clipboard'></button></div>`
})

export class AppComponent {
    // Initialize action items.
    public items: ItemModel[] = [
        { text: 'Cut' },
        { text: 'Copy' },
        { text: 'Paste' }
    ];
}
