import { Component, ViewChild, ElementRef } from '@angular/core';
import { ListViewComponent, ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
enableRipple(true);

interface FruitItem {
    text: string;
    id: string;
    imgUrl: string;
}

@Component({
    imports: [
        ListViewModule,
        DialogModule,
        ButtonModule,
        FormsModule,
        CommonModule,
    ],
    standalone: true,
    selector: 'my-app',
    template: `
          <div id="sample">
      <div class="headerContainer">
        <div class="e-input-group">
          <input id="search" #searchEle class="e-input" type="text" placeholder="Search fruits" (keyup)='onKeyUp()' [(ngModel)]="searchText"/>
          <span class="e-input-group-icon e-input-search"></span>
        </div>
        <button ejs-button id="sort" class="e-control e-btn e-small e-round e-primary e-icon-btn" (click)='sortItems()' title="Sort fruits" data-ripple="true">
          <span class="e-btn-icon e-icons" [ngClass]="{'e-sort-icon-ascending': !isDescending, 'e-sort-icon-descending': isDescending}"></span>
        </button>
        <button ejs-button id="add" class="e-control e-btn e-small e-round e-primary e-icon-btn" (click)='addItem()' title="Add fruit" data-ripple="true">
          <span class="e-btn-icon e-icons e-add-icon"></span>
        </button>
        <ejs-dialog id="dialog" #dialogObj width='300px' [visible]='false' header='Add Fruit' showCloseIcon='true' [buttons]='addButtons'>
          <ng-template #content>
            <div id="listDialog">
              <div class="input_name">
                <label for="name">Fruit Name: </label>
                <input id="name" class="e-input" type="text" placeholder="Enter fruit name" [(ngModel)]="newFruitName"/>
              </div>
              <div>
                <label for="imgurl">Fruit Image: </label>
                <input id="imgurl" class="e-input" type="text" placeholder="Enter image url" [(ngModel)]="newFruitImgUrl"/>
              </div>
            </div>
          </ng-template>
        </ejs-dialog>
      </div>
      <ejs-listview id='element' #listview [dataSource]='fruitsdata' [sortOrder]='currentSortOrder'>
        <ng-template #template let-data>
          <div class="fruits">
            <div class="first">
              <img id="listImage" [src]="data.imgUrl" alt="fruit" />
              <button ejs-button class="delete e-control e-btn e-small e-round e-delete-btn e-primary e-icon-btn" (click)="onDeleteBtnClick(data)" data-ripple="true">
                <span class="e-btn-icon e-icons delete-icon"></span>
              </button>
            </div>
            <div class="fruitName">{{data.text}}</div>
          </div>
        </ng-template>
      </ejs-listview>
    </div>
        `,
})

export class AppComponent {
    @ViewChild('listview') listViewInstance!: ListViewComponent | any;
    @ViewChild('dialogObj') dialogObj!: DialogComponent | any;
    @ViewChild('searchEle') searchEle!: ElementRef;

    public fruitsdata: FruitItem[] = [
        {
            text: 'Date',
            id: '1',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/dates.jpg',
        },
        {
            text: 'Fig',
            id: '2',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/fig.jpg',
        },
        {
            text: 'Apple',
            id: '3',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/apple.png',
        },
        {
            text: 'Apricot',
            id: '4',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/apricot.jpg',
        },
        {
            text: 'Grape',
            id: '5',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/grape.jpg',
        },
        {
            text: 'Strawberry',
            id: '6',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/strawberry.jpg',
        },
        {
            text: 'Pineapple',
            id: '7',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/pineapple.jpg',
        },
        {
            text: 'Melon',
            id: '8',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/melon.jpg',
        },
        {
            text: 'Lemon',
            id: '9',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/lemon.jpg',
        },
        {
            text: 'Cherry',
            id: '10',
            imgUrl: 'https://ej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/cherry.jpg',
        },
    ];

    public dataManager: DataManager;

    constructor() {
        this.dataManager = new DataManager(this.fruitsdata);
    }

    public addButtons = [
        {
            click: this.dlgButtonClick.bind(this),
            buttonModel: { content: 'Add', isPrimary: true },
        },
    ];

    public isDescending = false;
    public currentSortOrder = 'Ascending';
    public searchText = '';
    public newFruitName = '';
    public newFruitImgUrl = '';

    addItem() {
        this.newFruitName = '';
        this.newFruitImgUrl = '';
        this.dialogObj.show();
    }

    sortItems() {
        this.isDescending = !this.isDescending;
        this.currentSortOrder = this.isDescending ? 'Descending' : 'Ascending';
        if (this.listViewInstance) {
            this.listViewInstance.sortOrder = this.currentSortOrder;
        }
    }

    onKeyUp() {
        if (this.listViewInstance) {
            if (this.searchText) {
                this.listViewInstance.dataSource = new DataManager(
                    this.fruitsdata
                ).executeLocal(
                    new Query().where('text', 'startswith', this.searchText, true)
                );
            } else {
                this.listViewInstance.dataSource = this.dataManager;
            }
        }
    }

    onDeleteBtnClick(data: FruitItem) {
        if (this.listViewInstance) {
            this.listViewInstance.removeItem(data);
        }
        this.fruitsdata = this.fruitsdata.filter((item) => item.id !== data.id);
        this.dataManager = new DataManager(this.fruitsdata);
    }

    dlgButtonClick() {
        const id = Math.random().toString(36).substr(2, 9);
        const newFruit: FruitItem = {
            text: this.newFruitName,
            id: id,
            imgUrl: this.newFruitImgUrl,
        };
        if (this.listViewInstance) {
            this.listViewInstance.addItem([newFruit]);
        }
        this.fruitsdata.push(newFruit);
        this.dataManager = new DataManager(this.fruitsdata);
        this.dialogObj.hide();
    }
}

