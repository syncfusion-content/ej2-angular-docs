
import { Component, ViewChild } from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  template: `
      <div class="control-section">
      <div class="col-lg-9">
        <div class="control_wrapper">
          <ejs-uploader [asyncSettings]='path' #defaultupload id='defaultfileupload' (removing)="onRemove($event)" [dropArea]='dropElement' (change)="onSuccess($event)"></ejs-uploader>
        </div>
        <ejs-grid #grid id='grid'>
        </ejs-grid>
      </div>
    </div>`
})
export class AppComponent {
  @ViewChild('defaultupload') public uploadObj?: UploaderComponent;
  @ViewChild('grid') public gridObj?: GridComponent;
 
  public path: Object = {
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };

  public dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;

  parseExcel(file: any) {
      var reader = new FileReader();
    reader.onload = (e) => {  
      var data = (<any>e.target).result;
      var workbook = XLSX.read(data, { type: 'array' });  
      workbook.SheetNames.forEach((sheetName: any) => {
        var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        (this.gridObj as GridComponent).dataSource = XL_row_object;
      });
    };

    reader.readAsArrayBuffer(file.rawFile);
  }
  
  public onSuccess(args: any): void {
    var files = args.file;
    if(files)
     this.parseExcel(files[0]);
  
  }
  public onRemove(args: any): void {
    (this.gridObj as GridComponent).dataSource = [];
  
  }
}
