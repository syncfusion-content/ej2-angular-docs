import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ListViewModule } from '@syncfusion/ej2-angular-lists'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, ViewChild } from '@angular/core';
import { ListViewComponent } from "@syncfusion/ej2-angular-lists";
import { DialogComponent } from "@syncfusion/ej2-angular-popups";
import { CommonModule } from '@angular/common';

@Component({
    imports: [
        ListViewModule,
        DialogModule,
        ButtonModule,
        CommonModule
    ],
    standalone: true,
    selector: 'my-app',
    template: `
    <div id="sample">
      <ejs-listview #list id='templatelist' [dataSource]='data' [fields]='fields' width=350>
        <ng-template #template let-data="">
          <div>
            <span class="templatetext">{{data.Name}}</span>
            <span class="designationstyle">
              <button ejs-button [id]="data.Id" class="e-but" iconCss='e-icons e-add-icon' cssClass='e-small e-round' (click)='onClick($event)'></button>
            </span>
            <span class="advanced-option-list">
              <span *ngFor="let tag of data.tags" class="advanced-option">
                <span class="label">{{tag}}</span>
                <span class="delete" (click)="removeTag(data, tag)">×</span>
              </span>
            </span>
          </div>
        </ng-template>
      </ejs-listview>
      <ejs-dialog id='dialog' #ejDialog width='200px' [animationSettings]='animation' [visible]='false' showCloseIcon='true' [position]='position'>
        <ng-template #content>
          <ejs-listview #List id="list" showHeader=true headerTitle='Favorite' width='200px' [dataSource]='datasource[currentSelectedId]' [fields]='fields' (select)='addTag($event)'></ejs-listview>
        </ng-template>
      </ejs-dialog>
    </div>
  `
})

export class AppComponent {
    @ViewChild('list') listViewInstance?: ListViewComponent;
    @ViewChild('List') listObj?: ListViewComponent;
    @ViewChild('ejDialog') dialog?: DialogComponent;

    public data: any[] = [
        { "Id": "Brooke", "Name": "Brooke", tags: [] },
        { "Id": "Claire", "Name": "Claire", tags: [] },
        { "Id": "Erik", "Name": "Erik", tags: [] },
        { "Id": "Grace", "Name": "Grace", tags: [] },
        { "Id": "Jacob", "Name": "Jacob", tags: [] }
    ];

    public fields: Object = { text: "Name" };
    public position?: Object;
    public animation: Object = { effect: 'None' };
    public currentSelectedId: string = '';

    public brookeTag: Object = [
        { "id": "list11", "Name": "Discover Music" },
        { "id": "list12", "Name": "Sales and Events" },
        { "id": "list13", "Name": "Categories" },
        { "id": "list14", "Name": "MP3 Albums" },
        { "id": "list15", "Name": "More in Music" },
    ];
    public claireTag: Object = [
        { "id": "list21", "Name": "Songs" },
        { "id": "list22", "Name": "Bestselling Albums" },
        { "id": "list23", "Name": "New Releases" },
        { "id": "list24", "Name": "Bestselling Songs" },
    ];
    public erikTag: Object = [
        { "id": "list31", "Name": "Artwork" },
        { "id": "list32", "Name": "Abstract" },
        { "id": "list33", "Name": "Acrylic Mediums" },
        { "id": "list34", "Name": "Creative Acrylic" },
        { "id": "list35", "Name": "Canvas Art" }
    ];
    public graceTag: Object = [
        { "id": "list41", "Name": "Rock" },
        { "id": "list42", "Name": "Gospel" },
        { "id": "list43", "Name": "Latin Music" },
        { "id": "list44", "Name": "Jazz" },
    ];
    public jacobTag: Object = [
        { "id": "list51", "Name": "100 Albums" },
        { "id": "list52", "Name": "Hip-Hop and R&B Sale" },
        { "id": "list53", "Name": "CD Deals" }
    ];

    public datasource: any = {
        "Brooke": this.brookeTag,
        "Claire": this.claireTag,
        "Erik": this.erikTag,
        "Grace": this.graceTag,
        "Jacob": this.jacobTag
    };

    ngAfterViewChecked() {
        setTimeout(() => {
            this.position = {
                X: (document.querySelector('.e-add-icon') as HTMLElement | any).getBoundingClientRect().left + 50,
                Y: (document.querySelector('.e-add-icon') as any).getBoundingClientRect().top - 5
            };
        }, 1000);
    }

    onClick(e: any) {
        this.currentSelectedId = e.currentTarget.id;
        this.renderDialog(this.currentSelectedId);
    }

    renderDialog(id: string | number) {
        if (document.getElementsByClassName('e-popup-open').length != 0) {
            (this.dialog as DialogComponent).hide();
        } else {
            (this.listObj as ListViewComponent).dataSource = this.datasource[id];
            this.listObj?.dataBind();
            (this.dialog as DialogComponent).show();
        }
    }

    addTag(e: any) {
        const selectedItem = this.data.find(item => item.Id === this.currentSelectedId);
        if (selectedItem && !selectedItem.tags.includes(e.text)) {
            selectedItem.tags.push(e.text);
            this.listViewInstance?.refresh();
        }
        this.dialog?.hide();
    }

    removeTag(item: any, tag: string) {
        const index = item.tags.indexOf(tag);
        if (index > -1) {
            item.tags.splice(index, 1);
            this.listViewInstance?.refresh();
        }
    }
}


