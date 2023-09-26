


import { Component, ViewChild } from "@angular/core";
import { ListViewComponent } from "@syncfusion/ej2-angular-lists";
import { enableRipple } from "@syncfusion/ej2-base";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";
enableRipple(true);

@Component({
    selector: 'my-app',
    template: `<div id="sample">
            <input #textbox class="e-input" type="text" id="textbox" placeholder="Filter" title="Type in a name" (keyup)=onkeyup($event) />
            <ejs-listview #list id='list' [dataSource]='listData' [fields]='fields' [sortOrder]='Ascending'></ejs-listview>
        </div>`,
        styles: [`
        #list {
  box-shadow: 0 1px 4px #ddd;
  border-bottom: 1px solid #ddd;
}
#sample {
  height: 220px;
  margin: 0 auto;
  display: table;
}
        `]
})

export class AppComponent {
    public listData: Object = [
  { text: "Hennessey Venom", id: "list-01" },
  { text: "Bugatti Chiron", id: "list-02" },
  { text: "Bugatti Veyron Super Sport", id: "list-03" },
  { text: "SSC Ultimate Aero", id: "list-04" },
  { text: "Koenigsegg CCR", id: "list-05" },
  { text: "McLaren F1", id: "list-06" }
];

 public fields: Object = { text: "text", id: "id" };
   @ViewChild('list')
   listObj?: ListViewComponent;
   @ViewChild('textbox')textboxEle: any;
Ascending: any;
    onkeyup(event: any){
      let value = this.textboxEle.nativeElement.value;
      let data = new DataManager(this.listData).executeLocal(new Query().where("text", "startswith", value, true));
    if (!value) {
      (this.listObj as ListViewComponent).dataSource = (this.listData as any).slice();
    } else {
      ((this.listObj as ListViewComponent).dataSource as any) = data;
    }
    this.listObj?.dataBind();
  }
}



