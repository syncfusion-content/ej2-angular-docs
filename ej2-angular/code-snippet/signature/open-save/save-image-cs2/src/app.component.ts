

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { Signature, SignatureFileType } from '@syncfusion/ej2-inputs';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div>
            <span>Sign here</span>
            <ejs-splitbutton content="Save" [items]='items' iconCss="e-sign-icons e-save" (select)="onSelect($event)"></ejs-splitbutton>
        </div>
        <div id ="signature-control">
            <canvas ejs-signature #signature id="signature" backgroundColor="rgb(103 58 183)" saveWithBackground="true"></canvas>
        </div>`
})
export class AppComponent {
    @ViewChild('signature')
    public signature?: SignatureComponent;
    public items: ItemModel[] = [
    { text: 'Png'},
    { text: 'Jpeg'},
    { text: 'Svg'}
    ];
    onSelect(args: MenuEventArgs) {
        this.signature?.save(args.item.text as SignatureFileType, 'Signature');
    }
}


