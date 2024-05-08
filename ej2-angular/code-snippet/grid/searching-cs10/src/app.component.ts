import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems,SearchEventArgs, KeyboardEventArgs } from '@syncfusion/ej2-angular-grids';
import { Query, Predicate } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        GridModule
    ],

providers: [SearchService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [toolbar]='toolbarOptions' height='272px' (actionBegin)="actionBegin($event)" (keyPressed)="keyPressed($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=80></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;


    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Search'];
    }

    actionBegin(args:SearchEventArgs) {
        if (args.requestType == 'searching') {
            args.cancel = true;
            setTimeout(() => {
              var columns = (this.grid as GridComponent).getColumns();
              var predicate = null;
              for (var i = 0; i < columns.length; i++) {
                var val = (this.grid as GridComponent).valueFormatterService.fromView(
                  args.searchString as string,
                  columns[i].getParser(),
                  columns[i].type
                );
                if (val) {
                  if (predicate == null) {
                    predicate = new Predicate(
                      columns[i].field,
                      'contains',
                      val,
                      true,
                      true
                    );
                  } else {
                    predicate = predicate.or(
                      columns[i].field,
                      'contains',
                      val,
                      true,
                      true
                    );
                  }
                }
              }
              (this.grid as GridComponent).query = new Query().where(predicate as Predicate);
            }, 200);
        }
    }

    keyPressed(args: KeyboardEventArgs) {
        if (
          args.key == 'Enter' &&
          args.target instanceof HTMLElement &&
          args.target.closest('.e-search') &&
          (args.target as HTMLInputElement).value == ''
        ) {
          args.cancel = true;
          (this.grid as GridComponent).query = new Query();
        }
      }
}



