


import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from "@angular/core";
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { createSpinner, showSpinner, setSpinner } from '@syncfusion/ej2-angular-popups';
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'my-app',
    template: `
    <ejs-listview id='element' #list [dataSource]='dataSource' [width]='300' [query]='query' [fields]='fields' [showHeader]='true' [headerTitle]='headertitle' (actionComplete)='onActionComplete($event)' >
    </ejs-listview>
       <div #spinner id="spinner" ></div>
      `,
        styles: [`
        #element {
    display: block;
    max-width: 400px;
    min-height: 200px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}
        `],
        encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('spinner') spinnerEle:any;
    public dataSource= new DataManager({
        url: 'http://js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    })
    public query = new Query().from('Products').select('ProductID,ProductName').take(10);
    public fields: Object = { id: 'ProductID', text: 'ProductName'  };
    public headertitle = 'Product Name';
    AfterViewInit(){
    createSpinner({
        target: this.spinnerEle.nativeElement
    });
    showSpinner(this.spinnerEle.nativeElement);
   }
   onActionComplete(args:any){
    this.spinnerEle.nativeElement.style.display = "none";
   }
}



