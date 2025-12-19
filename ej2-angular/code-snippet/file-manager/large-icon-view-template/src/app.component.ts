import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager'
import { Component } from '@angular/core';

@Component({
    imports: [FileManagerModule,],
    providers: [NavigationPaneService, ToolbarService, DetailsViewService],
    standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' cssClass="fm_template" [ajaxSettings]='ajaxSettings' height="375px">
    <ng-template #largeIconsTemplate let-data>
        <div style="display: flex; flex-direction: column; gap: 2px;">
            <span><strong>{{ data.name }}</strong></span>
            <span><strong>Type:</strong>{{ data.isFile ? 'File' : 'Folder' }}</span>
            <span><strong>Modified:</strong>{{ getFormattedDate(data?.dateCreated) }}</span>
        </div>
    </ng-template>
</ejs-filemanager>`
})

export class AppComponent {
    public ajaxSettings?: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
    };
    getFormattedDate(date: string | number | Date | undefined): string {
        if (!date) return '';
        try {
            return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        } catch { return ''; }
    }
}

