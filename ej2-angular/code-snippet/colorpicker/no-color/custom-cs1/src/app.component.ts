

import { Component, ViewChild, OnInit } from '@angular/core';
import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';
import { SplitButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<ul id="target" tabindex="0">
                    <li class="e-item e-palette-item">
                        <ejs-input ejs-colorpicker #palette type="color" value="#f44336" id="element" mode="Palette" [inline]="true" (change)="onChange($event)" (beforeTileRender)="beforeRender($event)" [modeSwitcher]="false" [showButtons]="false" [columns]="column" [presetColors]="customColors" />
                    </li>
                    <li class="e-item" tabindex="-1" (click)="noColorClicked()">
                        <span class="e-menu-icon e-nocolor"></span>
                        No color
                    </li>
                </ul>
                <div>
                    <div id="preview"></div>
                    <h4>Select Color</h4>
                    <ejs-splitbutton #splitbtn iconCss="e-cp-icons e-picker-icon" target="#target"></ejs-splitbutton>
                </div>`
})

export class AppComponent implements OnInit {
    @ViewChild("palette")
    public palette?: ColorPickerComponent;
    @ViewChild("splitbtn")
    public splitBtn?: SplitButtonComponent;

    public customColors: { [key: string]: string[] } = {
        'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
            '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
    };

    public column: number = 4;

    public preview?: HTMLElement;

    public beforeRender(args: any): void {
        args.element.classList.add('e-custom-tile');
    }

    public noColorClicked(): void {
        //sets color picker value property to null
        this.palette?.setProperties({ 'value': "" }, true);
        (document.querySelector('.e-split-btn .e-picker-icon') as HTMLElement).style.borderBottomColor = "transparent";
        this.preview!.textContent = "No color"
        this.preview!.style.backgroundColor = "transparent";
    }

    // Triggers while color value changes.
    public onChange(args: any): void {
        (document.querySelector(".e-split-btn .e-picker-icon") as HTMLElement).style.borderBottomColor = args.currentValue.hex;
        this.preview!.style.backgroundColor = args.currentValue.hex;
        this.preview!.textContent = args.currentValue.hex;
        if (this.splitBtn?.element.getAttribute("aria-expanded")) {
            this.splitBtn.toggle();
            this.splitBtn.element.focus();
        }
    }

    ngOnInit(): void {
        this.preview = document.getElementById('preview') as HTMLElement;
        this.preview.style.backgroundColor = "#f44336";
        this.preview.textContent = "#f44336";
    }
}


