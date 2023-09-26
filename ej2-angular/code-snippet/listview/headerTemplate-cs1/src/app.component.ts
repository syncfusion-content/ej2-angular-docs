


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id = 'flat-list'>
        <!-- ListView element -->
        <ejs-listview id='element' [dataSource]='data' showHeader='true'>
            <ng-template #headerTemplate let-data="">
                <div class="headerContainer"><span class="fruitHeader">Fruits</span><button ejs-button id="search" iconCss='e-icons e-search-icon' cssClass='e-small e-round' isPrimary='true'></button><button ejs-button id="add" iconCss='e-icons e-add-icon' cssClass='e-small e-round' isPrimary='true'></button><button ejs-button id="sort" iconCss='e-icons e-sort-icon' cssClass='e-small e-round' isPrimary='true'></button></div>
            </ng-template>
        </ejs-listview>
    </div>
        `,
  })

export class AppComponent {

  public data=[
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

}



