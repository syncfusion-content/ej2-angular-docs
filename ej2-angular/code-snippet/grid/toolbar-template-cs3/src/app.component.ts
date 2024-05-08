import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { deleteImage } from './delete';
import { addImage } from './add';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GridComponent, EditSettingsModel} from '@syncfusion/ej2-angular-grids';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-buttons';

@Component({
imports: [
        
        GridModule,
        ToolbarModule,
        ButtonModule
    ],

providers: [ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='200px' [editSettings]='editSettings'>
                <ng-template #toolbarTemplate let-data>
                    <div class="image">
                        <img [src]="addImageSource" id="addImage" />
                        <button
                        #addButton
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
                        #deleteButton
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

    editAction(args: MouseEvent) {
        if ((args.currentTarget as HTMLElement).id === 'addButton') {
            this.grid.addRecord();
        } else {
            var selectedRecord = this.grid.getSelectedRecords()[0];
            this.grid.deleteRecord(selectedRecord as string);
        }
    }

}



