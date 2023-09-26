

import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
    <table class="table-section">
        <tr>
            <td> Open Animation: </td>
            <td>
                <div id="openDropDown"></div>
                <ejs-dropdownlist #openDropDown (change)="onChange($event)" id='openDropDown' [dataSource]='openAnimateData' value='ZoomIn' placeholder="Select a animate type" popupHeight="150px">
                </ejs-dropdownlist>
            </td>
        </tr>
        <tr>
            <td  class="sample-td"> Enter your name: </td>
            <td  class="sample-td">
                <ejs-inplaceeditor #element id="element" mode="Popup" value="Andrew" [model]="model" [popupSettings]="popupSettings"></ejs-inplaceeditor>
            </td>
        </tr>
    </table>
</div>
    `
})

export class AppComponent {
    @ViewChild('element') editObj?: InPlaceEditorComponent;
    public model: object = { placeholder: 'Enter some text' };
    public popupSettings: object = { model: { animation: { open: {effect: 'ZoomIn', duration: 1000, delay: 0}}}};
    public openAnimateData: string[] = ['None', 'FadeIn', 'FadeZoomIn', 'ZoomIn'];

    public onChange(e: ChangeEventArgs): void {
        (this.editObj as any).popupSettings.model.animation.open.effect = e.value;
        this.editObj?.dataBind();
    }
}



