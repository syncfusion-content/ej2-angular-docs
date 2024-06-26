import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BeforeOpenEventArgs, SerializationOptions, SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { Component } from '@angular/core';


@Component({
  imports: [

    SpreadsheetAllModule, UploaderModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<div class="control-section">
  <div id="Openfromjson">
        <label id="Heading">Open From Json Options:</label> <br>
        <input type="checkbox" id="valueOnly" (change)="toggleCheckboxes()"><label for="valueOnly">Only Values</label>
        <input type="checkbox" id="style"><label for="style">Ignore Style</label>
        <input type="checkbox" id="formula"><label for="formula">Ignore Formula</label>
        <input type="checkbox" id="format"><label for="format">Ignore Format</label>
        <input type="checkbox" id="cf"><label for="cf">Ignore CF</label>
        <input type="checkbox" id="dv"><label for="dv">Ignore Validation</label>
        <input type="checkbox" id="freeze"><label for="freeze">Ignore Freezepane</label>
        <input type="checkbox" id="wrap"><label for="wrap">Ignore Wrap</label>
        <input type="checkbox" id="chart"><label for="chart">Ignore Chart</label>
        <input type="checkbox" id="image"><label for="image">Ignore Image</label>
        <input type="checkbox" id="note"><label for="note">Ignore Note</label>
        <ejs-uploader #defaultupload [asyncSettings]='path' (success)='onUploadSuccess($event)' [allowedExtensions]='allowedExtensions' [buttons]='buttons' [showFileList]='false'></ejs-uploader>
    </div>
    <ejs-spreadsheet #spreadsheet (beforeOpen)="beforeOpen($event)">
    </ejs-spreadsheet>
</div>`
})
export class AppComponent {
  constructor() {
      
  }
  @ViewChild('spreadsheet')
  public spreadsheetObj!: SpreadsheetComponent;
  public path: Object = {
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
  };
  public allowedExtensions: string = '.xlsx, .xls, .csv';
  public buttons: Object = { browse: 'Choose file' };
  onUploadSuccess(args: { operation: string, file: { rawFile: File } }) {
      if (args.operation == 'upload')
          this.spreadsheetObj.open({ file: args.file.rawFile });
  }
  createOptions() {
      const options: SerializationOptions = {};
      options.ignoreStyle = (document.getElementById('style') as HTMLInputElement).checked;
      options.ignoreFormula = (document.getElementById('formula') as HTMLInputElement).checked;
      options.ignoreFormat = (document.getElementById('format') as HTMLInputElement).checked;
      options.ignoreConditionalFormat = (document.getElementById('cf') as HTMLInputElement).checked;
      options.ignoreValidation = (document.getElementById('dv') as HTMLInputElement).checked;
      options.ignoreFreezePane = (document.getElementById('freeze') as HTMLInputElement).checked;
      options.ignoreWrap = (document.getElementById('wrap') as HTMLInputElement).checked;
      options.ignoreChart = (document.getElementById('chart') as HTMLInputElement).checked;
      options.ignoreImage = (document.getElementById('image') as HTMLInputElement).checked;
      options.ignoreNote = (document.getElementById('note') as HTMLInputElement).checked;
      return options;
  }
  toggleCheckboxes() {
      let valueOnlyCheckbox: HTMLInputElement = document.getElementById('valueOnly') as HTMLInputElement;
      let checkboxes: NodeListOf<Element> = document.querySelectorAll('#Openfromjson input[type="checkbox"]:not(#valueOnly)');
      checkboxes.forEach(checkbox => {
          (checkbox as HTMLInputElement).disabled = valueOnlyCheckbox.checked;
          if (valueOnlyCheckbox.checked) {
              (checkbox as HTMLInputElement).checked = false;
          }
      });
  }
  beforeOpen(args: BeforeOpenEventArgs) {
      args.cancel = true;
      let valueOnlyCheckbox: boolean = (document.getElementById("valueOnly") as HTMLInputElement).checked;
      let options: SerializationOptions = valueOnlyCheckbox ? { onlyValues: true } : this.createOptions();
      fetch(
          'https://services.syncfusion.com/angular/production/api/spreadsheet/open',
          args.requestData
      ).then((response) => {
          response.json().then((data) => {
              this.spreadsheetObj.openFromJson({ file: data }, options)
          });
      });
  }
}

