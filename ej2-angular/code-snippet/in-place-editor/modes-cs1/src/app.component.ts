


import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent, RenderMode } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
        <table class="table-section">
            <tr>
                <td> Mode: </td>
                <td>
                    <ejs-dropdownlist #dropDown (change)="onChange($event)" id='dropDown' width="auto" [dataSource]='modeData' value='Inline' placeholder="Select Mode">
                    </ejs-dropdownlist>
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
  public model: Object = {  placeholder: 'Enter some text' };
  public modeData: string[] = ['Inline', 'Popup'];

  public onChange(e: ChangeEventArgs): void {
    const mode: RenderMode = e.itemData.value as RenderMode;
    (this.editObj as InPlaceEditorComponent).mode = mode;
    this.editObj?.dataBind();
  }
}



