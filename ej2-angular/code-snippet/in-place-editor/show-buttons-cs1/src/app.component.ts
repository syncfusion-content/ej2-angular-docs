


import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
    <table class="table-section">
        <tr>
            <td> ShowButtons: </td>
            <td>
                <ejs-checkbox label="Show" [checked]="true" (change)="onChange($event)"></ejs-checkbox>
            </td>
        </tr>
        <tr>
            <td  class="sample-td"> Enter your name: </td>
            <td  class="sample-td">
                <ejs-inplaceeditor #element id="element" mode="Inline" value="Andrew" [model]="model" [saveButton]="saveButton" [cancelButton]="cancelButton"></ejs-inplaceeditor>
            </td>
        </tr>
    </table>
</div>
    `
})

export class AppComponent {
  @ViewChild('element') editorObj?: InPlaceEditorComponent;
  public model: Object = {  placeholder: 'Enter some text' };
  public saveButton: object = { content: 'Ok', cssClass: 'e-outline'};
  public cancelButton: object = { content: 'Cancel', cssClass: 'e-outline'};

  public onChange(e: ChangeEventArgs): void {
    (this.editorObj as InPlaceEditorComponent).showButtons = e.checked as boolean;
    this.editorObj?.dataBind();
  }
}



