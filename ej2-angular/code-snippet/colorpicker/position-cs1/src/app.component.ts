

import { Component, ViewChild } from '@angular/core';
import { ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
import { EmitType, formatUnit } from '@syncfusion/ej2-base';
import { ItemModel, MenuEventArgs, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { SplitButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<h4>Select Color</h4>
                <ejs-input ejs-colorpicker #colorpalette type="color" id="colorpalette" cssClass="e-hide-palette" mode="Palette" [inline]="true" [showButtons]="false" [modeSwitcher]="false" (change)="paletteOnChange($event)" />
                <ejs-splitbutton #splitbutton iconCss="e-icons e-font-icon" [items]="items" (beforeClose)="onBeforeClose($event)" (beforeItemRender)="beforeRender($event)" (select)="onSelect($event)"></ejs-splitbutton>
                <ejs-dialog id="modalDialog" #modalDialog cssClass="e-dlg-picker" (open)="modalDlgOpen()" [isModal]="true" [width]="width" [height]="height" [visible]="false" [target]='target' [animationSettings]='animationSettings'
                (overlayClick)="dlgClose()">
                    <ng-template #content>
                        <ejs-input ejs-colorpicker #colorpicker type="color" id="colorpicker" (change)="pickerOnChange($event)" [inline]="true" [modeSwitcher]="false" />
                    </ng-template>
                </ejs-dialog>`
})
export class AppComponent {
    @ViewChild('colorpalette')
    public colorPalette?: ColorPickerComponent;
    @ViewChild('colorpicker')
    public colorPicker?: ColorPickerComponent;
    @ViewChild('modalDialog')
    public modalDialog?: DialogComponent;
    @ViewChild('splitbutton')
    public splitBtn?: SplitButtonComponent;

    public items: ItemModel[] = [
        {
            text: ''
        },
        {
            text: "More Colors...",
            iconCss: "e-switcher"
        }
    ];

    public target: string = ".wrap";
    public width: string = '270px';
    public height: string = '336px';
    public animationSettings: Object = { effect: 'Zoom' };

    public beforeRender(args: MenuEventArgs): void {
        if (args.item.text === "") {
            this.colorPalette!.cssClass = "";
            this.colorPalette?.dataBind();
            this.colorPalette?.refresh();
            args.element.appendChild((this.colorPalette as any).element.parentElement);
        }
    }

    public modalDlgOpen: EmitType<object> = () => {
        this.colorPicker?.refresh();
        ((this.colorPicker as any)?.element.parentElement).querySelector('.e-ctrl-btn .e-cancel').addEventListener('click', this.dlgClose);
    }

    public onBeforeClose(args: BeforeOpenCloseMenuEventArgs): void {
        document.body.appendChild((this.colorPalette as any).element.parentElement);
        this.colorPalette!.cssClass = "e-hide-palette";
        this.colorPalette?.dataBind();
    }

    public dlgClose: any = (args: any) => {
        this.modalDialog?.hide();
    }

    public pickerOnChange(args: ColorPickerEventArgs): void {
        this.paletteOnChange(args);
        this.modalDialog?.hide();
    }

    public paletteOnChange(args: ColorPickerEventArgs): void {
        ((this.splitBtn as SplitButtonComponent).element.querySelector(".e-font-icon") as HTMLElement).style.borderBottomColor = args.currentValue.rgba;
    }

    public onSelect(args: MenuEventArgs): void {
        if (args.item.text === 'More Colors...') {
            this.modalDialog?.show();
        }
    }
}


