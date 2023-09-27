

import { Component, OnInit } from '@angular/core';
import { ColorPickerEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    template: `<div id="preview"></div>
                <h4>Choose Color</h4>
                <ejs-input ejs-colorpicker type="color" id="element" mode="Palette" value="#ba68c8" [showButtons]="false" (change)="onChange($event)" [modeSwitcher]="false" [noColor]="true" />`
})

export class AppComponent implements OnInit {
    public preview?: HTMLElement;

    // Triggers while color value changes.
    public onChange(args: ColorPickerEventArgs): void {
        this.preview!.style.backgroundColor = args.currentValue.hex;
        if (args.currentValue.hex) {
            this.preview!.textContent = args.currentValue.hex;
        } else {
            this.preview!.textContent = "No color"
        }
    }

    ngOnInit(): void {
        this.preview = document.getElementById('preview') as HTMLElement;
        this.preview.style.backgroundColor = "#ba68c8";
        this.preview.textContent = "#ba68c8";
    }
}


