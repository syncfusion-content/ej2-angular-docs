import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager'
import { Component } from '@angular/core';

@Component({
  imports: [FileManagerModule,],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-filemanager id='default-filemanager' #filemanagerObj [ajaxSettings]='ajaxSettings' height="375px">
  </ejs-filemanager>`
})
export class App {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations'
  };
}

