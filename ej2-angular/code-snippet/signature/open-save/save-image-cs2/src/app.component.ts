import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { SignatureModule } from '@syncfusion/ej2-angular-inputs'
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component, ViewChild } from '@angular/core';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { Signature, SignatureFileType } from '@syncfusion/ej2-inputs';

enableRipple(true);

@Component({
imports: [
        FormsModule,SplitButtonModule,ButtonModule,SignatureModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
            <div>
            <span>Sign here</span>
            <ejs-splitbutton content="Save" [items]='items' iconCss="e-sign-icons e-save" (select)="onSelect($event)"></ejs-splitbutton>
        </div>
        <div id ="signature-control">
            <canvas ejs-signature #signature id="signature" backgroundColor="rgb(103 58 183)" saveWithBackground="true"></canvas>
        </div>
        <div>`
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


