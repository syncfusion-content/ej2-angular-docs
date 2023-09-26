

import { Component, OnInit, ViewChild } from "@angular/core";
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons";
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { sampleData2, dataSource1, sampleData } from "./datasource";

@Component({
    selector: 'app-container',
    templateUrl: './app.template.html'
})
export class AppComponent implements OnInit {
  public data: Object[] = [];
  public pageSettings: Object = { pageSize: 50 };
  public editSettings: Object = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
  public selectionOptions: Object = { type: 'Multiple' };
  public immutableStart?: number;
  public normalStart?: number;
  @ViewChild("immutable")
  public immutableGrid?: GridComponent;
  @ViewChild("normal")
  public normalGrid?: GridComponent;
  @ViewChild("addtop")
  public addtop?: ButtonComponent;
  @ViewChild("addbottom")
  public addbottom?: ButtonComponent;
  @ViewChild("delete")
  public delete?: ButtonComponent;
  @ViewChild("reverse")
  public reverse?: ButtonComponent;
  @ViewChild("paging")
  public paging?: ButtonComponent;
  public immutableInit: boolean = true;
  public init: boolean = true;

  ngOnInit(): void {
    dataSource1();
    this.data = sampleData2;
  }

  immutableBeforeDataBound(args: any): void {
    this.immutableStart = new Date().getTime();
  }

  immutableDataBound(args: any): void {
    let val: number | string = this.immutableInit ? '' : new Date().getTime() - (this.immutableStart as number);
    (document.getElementById("immutableDelete") as HTMLElement).innerHTML =
      "Immutable rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
    this.immutableStart = 0; this.immutableInit = false;
  }

  normalBeforeDataBound(args: any): void {
    this.normalStart = new Date().getTime();
  }

  normalDataBound(args: any): void {
    let val: number = (this.init ? '' : new Date().getTime() as number - (this.normalStart as number)) as number;
    (document.getElementById("normalDelete") as HTMLElement).innerHTML =
      "Normal rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
    this.normalStart = 0; this.init = false;
  }

  addTopEvent(): void {
    (this.normalGrid as GridComponent).addRecord(sampleData[0], 0);
    (this.immutableGrid as GridComponent).addRecord(sampleData[0], 0);
  }

  addBottomEvent(): void {
    (this.normalGrid as GridComponent).addRecord(sampleData[0], 0,);
    (this.immutableGrid as GridComponent).addRecord(sampleData[0], 0);
  }

  deleteEvent(): void {
    (this.normalGrid as GridComponent).selectRows([0, 2, 4]);
    (this.immutableGrid as GridComponent).selectRows([0, 2, 4]);
    (this.normalGrid as GridComponent).deleteRecord();
    (this.immutableGrid as GridComponent).deleteRecord();
  }

  sortEvent(): void {
    let aData: object[] = ((this.immutableGrid as GridComponent).dataSource as object[]).reverse();
    (this.normalGrid as GridComponent).setProperties({ dataSource: aData });
    (this.immutableGrid as GridComponent).setProperties({ dataSource: aData });
  }

  pageEvent(): void {
    let page: number = ((this.normalGrid as GridComponent).pageSettings.currentPage as number + 1) as number;
    (this.normalGrid as GridComponent).goToPage(page);
    (this.immutableGrid as GridComponent).goToPage(page);
  }
}



