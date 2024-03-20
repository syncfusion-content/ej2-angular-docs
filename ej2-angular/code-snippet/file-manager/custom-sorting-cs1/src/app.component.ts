import { Component } from '@angular/core';
import { sortComparer } from '@syncfusion/ej2-angular-filemanager';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='overview' [ajaxSettings]='ajaxSettings' [sortComparer]='sortComparer' [detailsViewSettings]='detailsViewSettings'></ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public sortComparer?: object;
    public detailsViewSettings?: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/NaturalSorting/FileOperations',
            getImageUrl: this.hostUrl + 'api/NaturalSorting/GetImage',
            uploadUrl: this.hostUrl + 'api/NaturalSorting/Upload',
            downloadUrl: this.hostUrl + 'api/NaturalSorting/Download'
        };
        this.sortComparer = sortComparer;
        this.detailsViewSettings = {
            columns: [
                {field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', customAttributes: { class: 'e-fe-grid-name' },template: '${name}', sortComparer : sortComparer},
                {field: 'size', headerText: 'File Size',minWidth: 50, width: '110', template: '${size}'},
                { field: '_fm_modified', headerText: 'Date Modified',minWidth: 50, width: '190'}
            ]
        };
    }
}