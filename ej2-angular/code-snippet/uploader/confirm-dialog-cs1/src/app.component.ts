import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'
import { DialogModule } from '@syncfusion/ej2-angular-popups'



import { Component, ViewChild } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
import { UploaderComponent, SelectedEventArgs } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
@Component({
imports:      [  UploaderModule, DialogModule ],


standalone: true,
    selector: 'app-root',
    templateUrl: './default.html',
    styleUrls: ['./index.css']
})

export class AppComponent {
  @ViewChild('defaultupload') uploadObj?: UploaderComponent;
  @ViewChild('dialog') dialog?: DialogComponent;

   public path: Object = {
       saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
       removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
   };
   public removeFile: any = [];
   public content: string = 'Confirm to remove the file?';
   public width: string = '250px';
   public visible: boolean = false;
   public target: string = '#container';
   public buttons: Object = [{'click': this.onClick.bind(this), buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true}},
   {'click': () => {this.dialog?.hide(); }, buttonModel: { content: 'Cancel', cssClass: 'e-flat'} }];
   public onremoving: EmitType<SelectedEventArgs> = (args: any) =>  {
    args.cancel = true;
    this.removeFile.push(args.filesData);
    this.dialog?.show();
   };
   onClick() {
    this.dialog?.hide();
    this.uploadObj?.remove(this.removeFile, true);
    this.removeFile = [];
   }
}


