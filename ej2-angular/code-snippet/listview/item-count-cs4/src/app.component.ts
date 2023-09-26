


import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-listview id='List' [dataSource]='dataSource' cssClass='e-list-template' [fields]='fields'>
      <ng-template #template let-dataSource="">
        <div class="e-list-wrapper e-list-multi-line e-list-avatar">
            <img class="e-avatar e-avatar-circle" src={{dataSource.image}} style="background:#BCBCBC" />
            <span class="e-list-item-header">{{dataSource.Name}}</span>
            <span class="e-list-content">{{dataSource.contact}}</span>
        </div>
      </ng-template>
       <ng-template #groupTemplate let-dataSource="">
        <div>
          <span className="category">{{ dataSource.items[0].category }}</span
          ><span id="count"> {{ dataSource.items.length }} Item(s)</span>
        </div>
      </ng-template>
  </ejs-listview>`
})

export class AppComponent {
    public dataSource: Object = [
        { Name: 'Nancy', contact:'(206) 555-985774', id: '1', image: 'https://ej2.syncfusion.com/demos/src/grid/images/1.png',  category: 'Experience'},
        { Name: 'Janet', contact: '(206) 555-3412', id: '2', image: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', category: 'Fresher' },
        { Name: 'Margaret', contact:'(206) 555-8122', id:'4', image: 'https://ej2.syncfusion.com/demos/src/grid/images/4.png', category: 'Experience' },
        { Name: 'Andrew ', contact:'(206) 555-9482', id: '5', image: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', category: 'Experience'},
        { Name: 'Steven', contact:'(71) 555-4848', id: '6', image: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', category: 'Fresher' },
        { Name: 'Michael', contact:'(71) 555-7773', id: '7', image: 'https://ej2.syncfusion.com/demos/src/grid/images/6.png', category: 'Experience' },
        { Name: 'Robert', contact:'(71) 555-5598', id: '8', image: 'https://ej2.syncfusion.com/demos/src/grid/images/7.png', category: 'Fresher' },
        { Name: 'Laura', contact:'(206) 555-1189', id: '9', image: 'https://ej2.syncfusion.com/demos/src/grid/images/8.png', category: 'Experience' },
    ];

    public fields: Object = { text: 'Name', groupBy: 'category' };
}



