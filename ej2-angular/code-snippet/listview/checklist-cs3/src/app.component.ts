


import { Component,ViewChild } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-listview #listview id='sample-list' [dataSource]='data' [showCheckBox]=true [fields]='fields'></ejs-listview>
    <br/>
    <input type="button" id="btn" ejs-button value="Get Selected Items" (click)="onClick($event)" />
     <div #val id="val">
     </div>`
})

export class AppComponent {
    @ViewChild('listview') element:any;
    @ViewChild('val') valEle:any;
    public data: Object = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02', isChecked: true },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03'},
    { text: 'SSC Ultimate Aero', id: 'list-04', isChecked: true  },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07', isChecked: true },
    { text: 'Jaguar XJ220', id: 'list-08' }
];
public fields: Object = { id: 'id', isChecked:'isChecked'};

onClick(event: any){
  let selecteditem =this.element.getSelectedItems();
  this.valEle.nativeElement.innerHTML="";
 for(let i=0; i< selecteditem["data"].length; i++) {
  let listData = document.createElement('p');
  listData.innerHTML = "text : "+ selecteditem["text"][i]+" , "+"id : "+selecteditem["data"][i].id;
  this.valEle.nativeElement.append(listData);
 }
}
}



