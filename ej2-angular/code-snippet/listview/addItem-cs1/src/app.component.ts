

import { Component, ViewChild } from '@angular/core';
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'my-app',
    template: `<ejs-listview #list id='sample-list' [dataSource]='data' [fields]='fields' (actionComplete)='onComplete()'>
    <ng-template  #template let-data="">
    <div class='text-content'> {{data.text}} <span class = 'delete-icon'></span> </div>
    </ng-template>
    </ejs-listview>
    <button ejs-button id="btn" (click)="addItem()">Add Item</button>`,
})

export class AppComponent {
   @ViewChild('list')
   listViewInstance?: ListViewComponent;
    //define the array of string
    public data: Object[] =  [{ text: "Hennessey Venom", id: "1", icon: "delete-icon" },
  { text: "Bugatti Chiron", id: "2", icon: "delete-icon" },
  { text: "Bugatti Veyron Super Sport", id: "3", icon: "delete-icon" },
  { text: "Aston Martin One- 77", id: "4", icon: "delete-icon" },
  { text: "Jaguar XJ220", id: "list-5", icon: "delete-icon" },
  { text: "McLaren P1", id: "6", icon: "delete-icon" }];

public fields: Object = {text: "text", iconCss: "icon" };
deleteItem(args:any) {
  args.stopPropagation();
  let liItem = args.target.parentElement.parentElement;
  this.listViewInstance?.removeItem(liItem);
  this.onComplete();
}
  onComplete() {
  let iconEle = document.getElementsByClassName("delete-icon");
  //Event handler to bind the click event for delete icon
  Array.from(iconEle).forEach((element) => {
    element.addEventListener("click", this.deleteItem.bind(this));
  });
}

addItem(){
  let data = {
    text: "Koenigsegg - " + (Math.random() * 1000).toFixed(0),
    id: (Math.random() * 1000).toFixed(0).toString(),
    icon: "delete-icon"
  };
  this.listViewInstance?.addItem([data]);
}
}



