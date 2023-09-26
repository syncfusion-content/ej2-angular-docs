


import { Component, ViewChild, ElementRef } from '@angular/core';
import { closest, enableRipple } from '@syncfusion/ej2-base';
import { DataManager, Query } from "@syncfusion/ej2-data";
enableRipple(true);

@Component({
    selector: 'my-app',
    template: `
          <div id="sample">
        <div class="headerContainer">
            <div class="e-input-group">
                <input id="search" #searchEle class="e-input" type="text" placeholder="Search fruits" (keyup)='onKeyUp($event)'/>
                <span class="e-input-group-icon e-input-search"></span>
            </div>
            <button ejs-button id="sort" class="e-control e-btn e-small e-round e-primary e-icon-btn" (click)='sortItems($event)' title="Sort fruits" data-ripple="true">
                <span class="e-btn-icon e-icons e-sort-icon-ascending"></span>
            </button>
            <button ejs-button id="add" class="e-control e-btn e-small e-round e-primary e-icon-btn" (click)='addItem($event)' title="Add fruit" data-ripple="true">
                <span class="e-btn-icon e-icons e-add-icon"></span>
            </button>
            <ejs-dialog id="dialog" #dialogObj width='300px' [visible]='false' header='Add Fruit' showCloseIcon='true' [buttons]='addButtons'>
            <ng-template #content let-data="">
            <div id="listDialog"><div class="input_name"><label for="name">Fruit Name: </label><input id="name" class="e-input" type="text" placeholder="Enter fruit name"/></div><div><label for="imgurl">Fruit Image: </label><input id="imgurl" class="e-input" type="text" placeholder="Enter image url"/></div></div>
            </ng-template>
            </ejs-dialog>
        </div>
            <ejs-listview id='element' #listview [dataSource]='fruitsdata' sortOrder='Ascending' (actionComplete)='wireEvents()'>
            <ng-template #template let-data="">
            <div class="fruits"><div class="first"><img id="listImage" src={{data.imgUrl}} alt="fruit" /><button ejs-button class="delete e-control e-btn e-small e-round e-delete-btn e-primary e-icon-btn" data-ripple="true"><span class="e-btn-icon e-icons delete-icon"></span></button></div><div class="fruitName">{{data.text}}</div></div>
            </ng-template>
            </ejs-listview>
    </div>
        `,
  })

export class AppComponent {
  @ViewChild('listview') listViewInstance: any;
  @ViewChild('dialogObj')dialogObj: any;
  @ViewChild('searchEle')searchEle: any;
  public  fruitsdata = [
    { text: 'Date', id: '1', imgUrl: './dates.jpg' },
    { text: 'Fig', id: '2', imgUrl: './fig.jpg' },
    { text: 'Apple', id: '3', imgUrl: './apple.png' },
    { text: 'Apricot', id: '4', imgUrl: './apricot.jpg' },
    { text: 'Grape', id: '5', imgUrl: './grape.jpg' },
    { text: 'Strawberry', id: '6', imgUrl: './strawberry.jpg' },
    { text: 'Pineapple', id: '7', imgUrl: './pineapple.jpg' },
    { text: 'Melon', id: '8', imgUrl: './melon.jpg' },
    { text: 'Lemon', id: '9', imgUrl: './lemon.jpg' },
    { text: 'Cherry', id: '10', imgUrl: './cherry.jpg' },
];
public addButtons= [{
        click: this.dlgButtonClick.bind(this), buttonModel: { content: 'Add', isPrimary: true }
    }];
 wireEvents() {
    Array.prototype.forEach.call(document.getElementsByClassName('e-delete-btn'), (ele) => {
        ele.addEventListener('click', this.onDeleteBtnClick.bind(this));
    });
}
addItem(args: any) {
    (document.getElementById("name") as HTMLElement | any).value = "";
    (document.getElementById("imgurl") as HTMLElement | any).value = "";
    this.dialogObj.show();
}
sortItems(args: any) {
    let ele = (document.getElementById("sort") as HTMLElement).firstElementChild;
    let des = (ele as Element).classList.contains('e-sort-icon-descending') ? true : false;
    if (des) {
        (ele as Element).classList.remove('e-sort-icon-descending');
        (ele as Element).classList.add('e-sort-icon-ascending');
        this.listViewInstance.sortOrder = 'Ascending';
    } else {
        (ele as Element).classList.remove('e-sort-icon-ascending');
        (ele as Element).classList.add('e-sort-icon-descending');
        this.listViewInstance.sortOrder = 'Descending'
    }
    this.listViewInstance?.dataBind();
    this.wireEvents();
}
onKeyUp(e: any) {
    let value = this.searchEle.nativeElement.value;
    let data = new DataManager(this.fruitsdata).executeLocal(
        new Query().where("text", "startswith", value, true)
    );
    if (!value) {
        this.listViewInstance.dataSource = this.fruitsdata.slice();
    } else {
        this.listViewInstance.dataSource = data;
        this.listViewInstance?.dataBind();
    }
}
onDeleteBtnClick(e: any) {
    e.stopPropagation();
    let li = closest(e.currentTarget, '.e-list-item');
    let data = this.listViewInstance?.findItem(li);
    this.listViewInstance?.removeItem(data);
    new DataManager(this.fruitsdata).remove('id', { id: data.id });
}
 dlgButtonClick() {
    let name = (document.getElementById("name") as HTMLElement | any).value;
    let url = (document.getElementById("imgurl") as HTMLElement | any).value;
    let id = Math.random() * 10000;
    this.listViewInstance?.addItem([{ text: name, id: id, imgUrl: url }]);
    this.fruitsdata.push({ text: name, id: 'id', imgUrl: url });
    this.listViewInstance?.element.querySelector('[data-uid="'+ id + '"]').getElementsByClassName('e-delete-btn')[0].addEventListener('click', this.onDeleteBtnClick.bind(this));
    this.dialogObj.hide();
}
}


