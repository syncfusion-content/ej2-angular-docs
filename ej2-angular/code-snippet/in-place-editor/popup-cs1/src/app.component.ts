


import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
        <table class="table-section">
            <tr>
                <td> Position: </td>
                <td>
                    <ejs-dropdownlist #dropDown (change)="onChange($event)" id='dropDown' width="auto" [dataSource]='positionData' value='BottomCenter' placeholder="Select a position" popupHeight="150px">
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td  class="edit-heading sample-td"> Enter your name: </td>
                <td  class="sample-td">
                    <ejs-inplaceeditor #element id="element" mode="Popup" value="Andrew" [model]="model" [popupSettings]="popupSettingsModel"></ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
    `
})

export class AppComponent {
  @ViewChild('element') editObj?: InPlaceEditorComponent;
  public model: Object = {  placeholder: 'Enter some text' };
  public popupSettingsModel: object = { title: 'Enter name', model : { position: 'BottomCenter' }};
  public positionData: string[] = ['TopLeft', 'TopCenter',
  'TopRight', 'BottomLeft', 'BottomCenter', 'BottomRight', 'LeftTop', 'LeftCenter', 'LeftBottom', 'RightTop', 'RightCenter', 'RightBottom'];

  public onChange(e: ChangeEventArgs): void {
    (this.editObj as any).popupSettings.model.position = e.value;
    this.editObj?.dataBind();
  }
}



