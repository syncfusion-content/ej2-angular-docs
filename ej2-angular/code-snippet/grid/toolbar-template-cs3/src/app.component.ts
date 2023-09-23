


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { deleteImage } from './delete';
import { addImage } from './add';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GridComponent, EditSettingsModel} from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='200px' [editSettings]='editSettings'>
                <ng-template #toolbarTemplate let-data>
                    <div class="image">
                        <img [src]="addImageSource" id="addImage" />
                        <button
                        class="button"
                        id="addButton"
                        ejs-button
                        cssClass="e-outline"
                        (click)="editAction($event)"
                        >
                        Add
                        </button>
                        <img [src]="deleteImageSource" id="deleteImage" />
                        <button
                        class="button"
                        ejs-button
                        id="deleteButton"
                        cssClass="e-outline"
                        (click)="editAction($event)"
                        >
                        Delete
                        </button>
                    </div>
                </ng-template>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid: GridComponent;
    public editSettings?:EditSettingsModel ;
    public deleteImageSource?: SafeResourceUrl | undefined;
    public addImageSource?: SafeResourceUrl | undefined;
    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.data = data;
        this.editSettings={ allowEditing: true, allowAdding: true, allowDeleting: true }
        this.deleteImageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
            `data:image/png;base64, ${deleteImage}`
        );
        this.addImageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
            `data:image/png;base64, ${addImage}`
        );
    }

    editAction(args: any) {
        if ((args as any).currentTarget.id === 'addButton') {
            this.grid.addRecord();
        } else {
            var selectedRecord = this.grid.getSelectedRecords()[0];
            this.grid.deleteRecord(selectedRecord as any);
        }
    }

}



