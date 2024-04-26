import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'
import { DialogModule } from '@syncfusion/ej2-angular-popups'

import { Component, ViewChild } from '@angular/core';
import { RemovingEventArgs, UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import * as XLSX from 'xlsx';

interface CustomFile {
  type: string;
  rawFile: Blob;
  /* Add other properties if needed */
}

@Component({
imports: [
        
        GridModule,
        UploaderModule ,
        DialogModule
    ],

providers: [EditService, PageService, ToolbarService],
standalone: true,
  selector: 'app-root',
  template: `
    <div class="control-section">
      <div class="col-lg-9">
        <div class="control_wrapper">
          <label style="padding:20px 0px 20px 0px">Browse excel file to load and return grid</label>
          <ejs-uploader [asyncSettings]='path' #defaultupload id='defaultfileupload' (removing)="onRemove($event)" [dropArea]='dropElement' (change)="onSuccess($event)"></ejs-uploader>
        </div>
        <ejs-grid #grid id='grid'>
        </ejs-grid>
        <ejs-dialog #dialog id='dialog' width="350" [visible]='false' header="Alert" content='Invalid JSON' showCloseIcon='true' >
        </ejs-dialog>
      </div>
  </div>
  `,
})
export class AppComponent {
  @ViewChild('defaultupload') public uploadObj?: UploaderComponent;
  @ViewChild('grid') public gridObj?: GridComponent;
  @ViewChild('dialog') public dialog?: DialogComponent;
  public newColumn:any;
  public path: Object = {
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
  };

  public dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;

  parseExcel(file: CustomFile): void {
    if (file && file.type == "xlsx") {
      var reader = new FileReader();
      reader.onload = (e) => {
        var data = (<any>e.target).result;
        var workbook = XLSX.read(data, { type: 'array' });
        workbook.SheetNames.forEach((sheetName: string) => {
          var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          if (Array.isArray(XL_row_object) && XL_row_object.length > 0) {
            (this.gridObj as GridComponent).dataSource = XL_row_object;
          } else {
            (this.dialog as DialogComponent).content = "Invalid JSON";
            this.dialog?.show();
          }
        });
      };

      reader.readAsArrayBuffer(file.rawFile);
    } else {
      (this.dialog as DialogComponent).content = "Please upload only .xlsx format";
      this.dialog?.show();
    }
  }

  public onSuccess(args: { file: CustomFile[] }): void {
    var files = args.file;
    if (files) {
      this.parseExcel(files[0]);
    }
  }

  public onRemove(args: RemovingEventArgs): void {
    (this.gridObj as GridComponent).dataSource = [""];
    (this.gridObj as GridComponent).columns = [];
  }
}