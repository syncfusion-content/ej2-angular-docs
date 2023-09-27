

import { Component, ViewChild } from '@angular/core';
import { addClass } from '@syncfusion/ej2-base';
import { ColorPickerEventArgs, ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    template: `<h4>Choose color</h4>
               <ejs-input ejs-colorpicker #colorpicker id="element" (change)="onChange($event)" />`
})

export class AppComponent {
    @ViewChild('colorpicker')
    private colorPicker?: ColorPickerComponent;

    public onChange(args: ColorPickerEventArgs): void {
        ((this.colorPicker?.element.nextElementSibling as Element).querySelector('.e-selected-color') as HTMLElement).style.borderBottomColor = args.currentValue.rgba;
    }

    ngOnInit(): void {
        setTimeout(() => {
            addClass([(this.colorPicker!.element as any).nextElementSibling.querySelector('.e-selected-color')], 'e-icons');
        }, 500);
    }
 }


