

import { Component, OnInit, ViewChild } from '@angular/core';
import { AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { DataManager, Query, ODataV4Adaptor, ReturnOption } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';

@Component({
    selector: 'app-container',
    template: `<ejs-accordion #element></ejs-accordion>`
})

export class AppComponent implements OnInit {
  @ViewChild('element') accordionObj?: AccordionComponent;
  public itemsData: any = [];
  public mapping =  { header: 'FirstName', content: 'Notes' };

  public ngOnInit(): void {
    new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor})
    .executeQuery(new Query().range(1, 4)).then((e: ReturnOption) => {
      let result: any = e.result;

      for(let i: number = 0; i < result.length; i++) {
        this.itemsData.push({ header: result[i][this.mapping.header], content: result[i][this.mapping.content] });
      }
      (this.accordionObj as AccordionComponent).items = this.itemsData;
      (this.accordionObj as AccordionComponent).refresh();
    });
  }
}



