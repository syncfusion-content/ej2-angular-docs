


import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { createSpinner, showSpinner, setSpinner } from '@syncfusion/ej2-angular-popups';

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
        `]
})

export class AppComponent {
    @ViewChild('spinner') spinnerEle:any;
    public dataSource= new DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    });
    public query = new Query().from('Products').select('ProductID,ProductName').take(10);
    public fields: Object = { id: 'ProductID', text: 'ProductName'  };
    public headertitle = 'Product Name';
    ngAfterViewInit(){
    createSpinner({
        target: this.spinnerEle.nativeElement
    });
    showSpinner(this.spinnerEle.nativeElement);
   }
   onActionComplete(args:any){
    this.spinnerEle.nativeElement.style.display = "none";
   }
}



