import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-container',
  template:
    "<div class='control-section'><ejs-spreadsheet #default [openUrl]='openUrl' [saveUrl]='saveUrl'></ejs-spreadsheet><ejs-uploader #defaultupload id='defaultfileupload' [asyncSettings]='path' (success)='onUploadSuccess($event)' [allowedExtensions]='allowExtensions'></ejs-uploader> </div>",
})
export class AppComponent {
  @ViewChild('default')
  public spreadsheetObj: SpreadsheetComponent;
  public openUrl: string =
    'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
  public saveUrl: string =
    'https://services.syncfusion.com/angular/production/api/spreadsheet/save';
  public path: Object = {
    saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
  };
  public allowedExtensions: string = '.xlsx, .xls, .csv';

  onUploadSuccess(args) {
    if (args.operation == 'upload')
      this.spreadsheetObj.open({ file: args.file.rawFile });
  }
}
