

import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import {  ChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
    <table class="table-section">
        <tr>
            <td> Disabled: </td>
            <td>
                <ejs-checkbox id="enable" label="Disable" [checked]="false" (change)="onChange($event)"></ejs-checkbox>
            </td>
        </tr>
        <tr>
            <td class="sample-td"> Enter your name: </td>
            <td class="sample-td">
                <ejs-inplaceeditor #element id="element" mode="Inline" value="Andrew" [model]="model"></ejs-inplaceeditor>
            </td>
        </tr>
       </table>
    </div>
    `
})

export class AppComponent {
    @ViewChild('element') editObj?: InPlaceEditorComponent;
    public model: object = { placeholder: 'Enter some text' };
    public onChange(e: ChangeEventArgs): void {
        (this.editObj as InPlaceEditorComponent).disabled = e.checked as boolean;
        this.editObj?.dataBind();
    }
}



