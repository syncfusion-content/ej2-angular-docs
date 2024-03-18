

import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './default.html',
    styleUrls: ['./index.css']
})

export class AppComponent {
    public autoUpload: boolean = false;
    public path: Object = {
        saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    };
    ngAfterViewInit(): void {
        (document.getElementById('browse') as HTMLElement).onclick = (args) => {
            (document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button') as HTMLButtonElement).click();
        };
    }
}


