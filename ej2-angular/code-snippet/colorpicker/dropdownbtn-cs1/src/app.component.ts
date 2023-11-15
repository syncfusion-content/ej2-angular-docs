

import { Component, ViewChild } from '@angular/core';
import { DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ColorPickerEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
            <h4>Choose color</h4>
        <ejs-input ejs-colorpicker type="color" id="element" [inline]="true" (change)="change($event)" />
        <ejs-button ejs-dropdownbutton #dropdownbtn id="dropdownbtn" (open)="onOpen($event)" (beforeClose)="onClose($event)" target=".e-colorpicker-wrapper" iconCss="e-dropdownbtn-preview"></ejs-button></div>`
})

export class AppComponent {
    @ViewChild('dropdownbtn')
    private ddb?: DropDownButtonComponent;

    public onOpen(args: any): void {
        args.element.parentElement.querySelector('.e-cancel').addEventListener('click', this.closePopup.bind(this));
        this.open();
    }

    public onClose(args: any): void {
        args.element.parentElement.querySelector('.e-cancel').removeEventListener('click', this.closePopup.bind(this));
    }

    public closePopup(): void {
        this.ddb?.toggle();
    }

    // Triggers while selecting colors from color picker.
    public change(args: ColorPickerEventArgs): void {
        if (this.ddb?.element && this.ddb.element.children.length > 0) {
            const firstChild = this.ddb.element.children[0] as HTMLElement;
            if (firstChild instanceof HTMLElement) {
              firstChild.style.backgroundColor = args.currentValue.hex;
            }
        }
        this.closePopup();
    }

    public open(): void {
        var zindex = (document.getElementsByClassName('e-color-picker-tooltip')[0] as HTMLElement).style.zIndex;
        var zindexIntValue = parseInt(zindex) + 2;
        var tooltip = (document.getElementsByClassName('e-color-picker-tooltip')[0] as HTMLElement);
        if (tooltip) {
            tooltip.style.zIndex = zindexIntValue.toString();
        }
    }
 }


