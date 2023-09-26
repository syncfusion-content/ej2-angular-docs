

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<ejs-filemanager id='overview' [ajaxSettings]='ajaxSettings' [toolbarSettings]='toolbarSettings'
  [navigationPaneSettings]='navigationPaneSettings'></ejs-filemanager>`
})
export class AppComponent {
  public toolbarSettings?: any;
  public navigationPaneSettings?: any;
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
    uploadUrl: this.hostUrl + 'api/FileManager/Upload',
    downloadUrl: this.hostUrl + 'api/FileManager/Download'
  };
}


