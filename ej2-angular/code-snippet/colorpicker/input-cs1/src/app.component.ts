

import { Component, ViewChild } from '@angular/core';
import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    template: `<h4>Choose color</h4>
               <ejs-input ejs-colorpicker #colorpicker id="element" readonly />`
})

export class AppComponent {
    @ViewChild('colorpicker')
    public colorPicker?: ColorPickerComponent;

    ngOnInit(): void {
        this.colorPicker!.element.type = 'text';
        this.colorPicker!.element.classList.add('e-input');
        setTimeout(() => {
            let proxy: any = this;
            let target: HTMLElement = proxy.colorPicker.element.nextElementSibling;
            target.insertBefore(proxy.colorPicker.element, target.children[1]);
        }, 500);
    }
 }


