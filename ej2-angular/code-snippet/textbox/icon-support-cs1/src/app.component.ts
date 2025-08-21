import { Component, ViewChild} from '@angular/core';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [TextBoxModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-textbox #textbox placeholder = "Enter Date" (created)="onCreate($event)"></ejs-textbox>`
})

export class AppComponent {
    @ViewChild('textbox')
    public textboxObj!: TextBoxComponent;

    public onCreate(args: any) {
        (this.textboxObj as any).addIcon('append', 'e-icons e-input-popup-date');
    }
}