

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<ejs-filemanager id='default-filemanager' #filemanagerObj [ajaxSettings]='ajaxSettings' [view]='view'>
  </ejs-filemanager>`
})
export class AppComponent {
  public view?: any;
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    getImageUrl: this.hostUrl + 'api/FileManager/GetImage'
  };
}


