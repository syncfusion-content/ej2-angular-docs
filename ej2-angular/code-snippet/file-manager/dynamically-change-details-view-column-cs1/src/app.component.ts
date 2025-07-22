import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FileManagerModule,
  NavigationPaneService,
  ToolbarService,
  DetailsViewService,
} from '@syncfusion/ej2-angular-filemanager';
import { Component } from '@angular/core';

@Component({
  imports: [FileManagerModule],
  providers: [NavigationPaneService, ToolbarService, DetailsViewService],
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [detailsViewSettings]="detailsViewSettings" [view]='view' height="375px">
    </ejs-filemanager>
    <button (click)="updateColumns()">update columns</button>`,
})
export class AppComponent {
  public ajaxSettings?: object;
  public detailsViewSettings: object|undefined;
  public view?: string;
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ngOnInit(): void {
    this.ajaxSettings = {
      url: this.hostUrl + 'api/FileManager/FileOperations',
      getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
      uploadUrl: this.hostUrl + 'api/FileManager/Upload',
      downloadUrl: this.hostUrl + 'api/FileManager/Download',
    };
    // Initial view of File Manager is set to details view
    this.view = 'Details';
    this.detailsViewSettings = {
      columns: [
        {
          field: 'name',
          headerText: 'Name',
          customAttributes: { class: 'e-fe-grid-name' },
        },
        {
          field: '_fm_modified',
          headerText: 'DateModified',
          format: 'MM/dd/yyyy hh:mm a',
        },
        {
          field: 'size',
          headerText: 'Size',
          template: '<span class="e-fe-size">${size}</span>',
          format: 'n2',
        },
      ],
    };
  }

  updateColumns(): void {
    this.detailsViewSettings = {
      columns: [
        {
          field: 'name',
          headerText: 'Name',
          customAttributes: { class: 'e-fe-grid-name' },
        },
        {
          field: '_fm_modified',
          headerText: 'DateModified',
          format: 'MM/dd/yyyy hh:mm a',
        },
        {
          field: 'size',
          headerText: 'Size',
          template: '<span class="e-fe-size">${size}</span>',
          format: 'n2',
        },
        {
          field: 'Custom1',
          headerText: 'Custom1',
          template: '<div class="e-custom1"></div>',
        },
        {
          field: 'Custom2',
          headerText: 'Custom2',
          template: '<div class="e-custom2"></div>',
        },
      ],
    };
  }
}