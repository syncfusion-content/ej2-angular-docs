

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    template: `<div id="signature-control">
           <canvas ejs-signature #signature id="signature"></canvas>
        </div>
        <div id="input">
            <table>
                <tbody>
                    <tr>
                        <td><div>Enter the Text:</div></td>
                        <td><input type="text" id="text" placeholder="Enter the Text"></td>
                    </tr>
                    <tr>
                        <td><div>Font Family:</div></td>
                        <td><ejs-dropdownlist id='font' #font [dataSource]='fontItems' [value]='fontValue' [fields]='fontfields' [popupHeight]='height'></ejs-dropdownlist>
                        </td>
                    </tr>
                    <tr>
                        <td><div>Font Size:</div></td>
                        <td><ejs-dropdownlist id='size' #size [dataSource]='sizeData' [value]='sizeValue' [fields]='sizefields' [popupHeight]='height'></ejs-dropdownlist>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br>
            <button ejs-button cssClass="e-primary" (click)="onDraw()">Draw</button>
        </div>`
})
export class AppComponent {
    @ViewChild('signature')
    public signature?: SignatureComponent;
    @ViewChild('font')
    public font?: DropDownListComponent;
    @ViewChild('size')
    public size?: DropDownListComponent;
    public fontValue: string = 'Arial';
    public sizeValue: number = 20;
    public height: string = '200px';
    public fontItems: Object[] = [
        { value: 'Arial' },
        { value: 'Serif' },
        { value: 'Sans-serif' },
        { value: 'Cursive' },
        { value: 'Fantasy' }
    ];
    public fontfields: Object = { text: 'value', value: 'value' };
    public sizeData: Object[] = [
        { value: '20' },
        { value: '30' },
        { value: '40' },
        { value: '50' }
    ];
    public sizefields: Object = { text: 'value', value: 'value' };
    onDraw(): void {
        let text = (document.getElementById('text') as any).value;
        this.signature!.draw(text, (this.font as any).value, (this.size as any).value);
    }
}


