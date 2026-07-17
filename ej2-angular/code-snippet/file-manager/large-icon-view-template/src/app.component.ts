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
    template: `<ejs-filemanager id='file-manager' cssClass="e-fm-template-sample" [ajaxSettings]='ajaxSettings' height="375px">
    <ng-template #largeIconsTemplate let-data>
        <div class="custom-icon-card">
            <div class="file-header">
                <div class="file-name" [title]="data?.name">{{ data?.name }}</div>
            </div>
            <div class="{{ getFileIconCssClass(data) }}"></div>
            <div class="file-formattedDate">Created on {{ getFormattedDate(data?.dateCreated) }}</div>
        </div>
    </ng-template>
</ejs-filemanager>`
})

export class AppComponent {
    public ajaxSettings?: object;
    public hostUrl: string = 'https://physical-service.syncfusion.com/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
    };
    getFileIconCssClass(item: any): string {
        if (!item?.isFile) return 'e-list-icon e-fe-folder';
        const extensionMap: Record<string, string> = {
            jpg: 'image',
            jpeg: 'image',
            png: 'image',
            gif: 'image',
            mp3: 'music',
            wav: 'music',
            mp4: 'video',
            avi: 'video',
            doc: 'doc',
            docx: 'docx',
            ppt: 'pptx',
            pptx: 'pptx',
            xls: 'xlsx',
            xlsx: 'xlsx',
            txt: 'txt',
            js: 'js',
            css: 'css',
            html: 'html',
            exe: 'exe',
            msi: 'msi',
            php: 'php',
            xml: 'xml',
            zip: 'zip',
            rar: 'rar',
            pdf: 'pdf',
        };
        const ext = (item.name.split('.').pop() || '').toLowerCase();
        const iconType = extensionMap[ext] || 'unknown';
        return `e-list-icon e-fe-${iconType}`;
    }
    getFormattedDate(date: string | number | Date | undefined): string {
        if (!date) return '';
        try {
            return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        } catch { return ''; }
    }
}

