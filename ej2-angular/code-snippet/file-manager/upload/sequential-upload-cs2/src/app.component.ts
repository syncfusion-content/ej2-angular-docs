import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { FileManagerComponent, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';

@Component({
  imports: [FileManagerModule],
  providers: [NavigationPaneService, ToolbarService, DetailsViewService],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [uploadSettings]='uploadSettings'>
</ejs-filemanager>`
})

export class AppComponent {
  @ViewChild('fileObj')
  public fileObj?: FileManagerComponent;
  public ajaxSettings?: object;
  public uploadSettings?: object;
  public hostUrl: string = 'https://physical-service.syncfusion.com/';
  public ngOnInit(): void {
    this.ajaxSettings = {
      url: this.hostUrl + 'api/FileManager/FileOperations',
      getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
      uploadUrl: this.hostUrl + 'api/FileManager/Upload',
      downloadUrl: this.hostUrl + 'api/FileManager/Download'
    };
    this.uploadSettings = { sequentialUpload: true };
  }

}


