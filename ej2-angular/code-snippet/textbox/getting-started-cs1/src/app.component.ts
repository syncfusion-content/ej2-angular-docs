import { FormsModule } from '@angular/forms';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Component, ViewChild } from '@angular/core';

@Component({
    imports: [TextBoxModule, FormsModule],
    standalone: true,
    selector: 'app-root',
    template: `<div class="wrap">
        <h4> TextBox with icons </h4>
        <ejs-textbox #textbox placeholder = "Enter Date" (created)="onCreate($event)"></ejs-textbox>
        <ejs-textbox #textbox1 placeholder = "Enter Date" (created)="onCreate1($event)"></ejs-textbox>
        <ejs-textbox #textbox2 placeholder = "Enter Date" (created)="onCreate2($event)"></ejs-textbox>

        <h4> Floating label with icons </h4>
        <ejs-textbox #textbox3 placeholder = "Enter Date" floatLabelType="Auto" (created)="onCreate3($event)"></ejs-textbox>
        <ejs-textbox #textbox4 placeholder = "Enter Date" floatLabelType="Auto" (created)="onCreate4($event)"></ejs-textbox>
        <ejs-textbox #textbox5 placeholder = "Enter Date" floatLabelType="Auto" (created)="onCreate5($event)"></ejs-textbox>
    </div>`
})

export class AppComponent {
    @ViewChild('textbox')
    public textboxObj!: TextBoxComponent;
    @ViewChild('textbox1')
    public textboxObj1!: TextBoxComponent;
    @ViewChild('textbox2')
    public textboxObj2!: TextBoxComponent;
    @ViewChild('textbox3')
    public textboxObj3!: TextBoxComponent;
    @ViewChild('textbox4')
    public textboxObj4!: TextBoxComponent;
    @ViewChild('textbox5')
    public textboxObj5!: TextBoxComponent;

    public onCreate(args: any) {
        (this.textboxObj as any).addIcon('append', 'e-icons e-input-popup-date');
    }
    public onCreate1(args: any) {
        (this.textboxObj1 as any).addIcon('prepend', 'e-icons e-input-popup-date');
    }
    public onCreate2(args: any) {
        (this.textboxObj2 as any).addIcon('prepend', 'e-icons e-input-down');
    }
    public onCreate3(args: any) {
        (this.textboxObj3 as any).addIcon('append', 'e-icons e-input-popup-date');
    }
    public onCreate4(args: any) {
        (this.textboxObj4 as any).addIcon('prepend', 'e-icons e-input-popup-date');
    }
    public onCreate5(args: any) {
        (this.textboxObj5 as any).addIcon('prepend', 'e-icons e-input-down');
    }
}
