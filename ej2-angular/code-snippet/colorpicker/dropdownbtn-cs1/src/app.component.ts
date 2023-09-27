

import { Component, ViewChild } from '@angular/core';
import { DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ColorPickerEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    template: `<h4>Choose color</h4>
        <ejs-input ejs-colorpicker type="color" id="element" [inline]="true" (change)="change($event)" />
        <ejs-button ejs-dropdownbutton #dropdownbtn id="dropdownbtn" (open)="onOpen($event)" (beforeClose)="onClose($event)" target=".e-colorpicker-wrapper" iconCss="e-dropdownbtn-preview"></ejs-button>`
})

export class AppComponent {
    @ViewChild('dropdownbtn')
    private ddb?: DropDownButtonComponent;

    public onOpen(args: any): void {
        args.element.parentElement.querySelector('.e-cancel').addEventListener('click', this.closePopup.bind(this));
    }

    public onClose(args: any): void {
        args.element.parentElement.querySelector('.e-cancel').removeEventListener('click', this.closePopup.bind(this));
    }

    public closePopup(): void {
        this.ddb?.toggle();
    }

    // Triggers while selecting colors from color picker.
    public change(args: ColorPickerEventArgs): void {
        (this.ddb?.element.children[0] as HTMLElement).style.backgroundColor = args.currentValue.hex;
        this.closePopup();
    }
 }


