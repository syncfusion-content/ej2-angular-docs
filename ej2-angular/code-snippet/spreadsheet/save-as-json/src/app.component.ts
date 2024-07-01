import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule, SpreadsheetComponent, SerializationOptions } from '@syncfusion/ej2-angular-spreadsheet'
import { createElement } from '@syncfusion/ej2-base';
import { Component } from '@angular/core';

@Component({
  imports: [

    SpreadsheetAllModule
  ],
  standalone: true,
  selector: 'app-container',
  template: `<div class="control-section">
  <div id="Saveasjson">
        <label id="Heading">Save As Json Options:</label> <br>
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
        <button class="e-btn" (click)="saveFile()">Save with JSON Serialization</button>
    </div>
    <ejs-spreadsheet #spreadsheet [openUrl]="openUrl" ></ejs-spreadsheet>
</div>`
})
export class AppComponent {
  constructor() {
      
  }
  @ViewChild('spreadsheet')
  public spreadsheetObj!: SpreadsheetComponent;
  public openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';

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
      let checkboxes: NodeListOf<Element> = document.querySelectorAll('#Saveasjson input[type="checkbox"]:not(#valueOnly)');
      checkboxes.forEach(checkbox => {
          (checkbox as HTMLInputElement).disabled = valueOnlyCheckbox.checked;
          if (valueOnlyCheckbox.checked) {
              (checkbox as HTMLInputElement).checked = false;
          }
      });
  }
  saveFile() {
      let valueOnlyCheckbox: boolean = (document.getElementById("valueOnly") as HTMLInputElement).checked;
      let options: SerializationOptions = valueOnlyCheckbox ? { onlyValues: true } : this.createOptions();
      this.spreadsheetObj.saveAsJson(options).then((response: any) => {
          let formData: FormData = new FormData();
          formData.append(
              'JSONData',
              JSON.stringify(response.jsonObject.Workbook)
          );
          formData.append('fileName', 'Sample');
          formData.append('saveType', 'Xlsx');
          formData.append('pdfLayoutSettings', JSON.stringify({ fitSheetOnOnePage: false, orientation: 'Portrait' })),
              fetch(
                  'https://services.syncfusion.com/angular/production/api/spreadsheet/save',
                  {
                      method: 'POST',
                      body: formData,
                  }
              ).then((response) => {
                  response.blob().then((data) => {
                      let anchor: HTMLElement | any = createElement('a', {
                          attrs: { download: 'Sample.xlsx' },
                      });
                      let url: string = URL.createObjectURL(data);
                      anchor.href = url;
                      document.body.appendChild(anchor);
                      anchor.click();
                      URL.revokeObjectURL(url);
                      document.body.removeChild(anchor);
                  });
              });
      });
  }
}

