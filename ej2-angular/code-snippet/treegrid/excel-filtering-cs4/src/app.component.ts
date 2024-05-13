

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule,FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { categoryData } from './datasource';
import { FilterSearchBeginEventArgs, } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='273' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
                  <e-columns>
                  <e-column field="ProductID" headerText="ProductID"  width="120" ></e-column>
                  <e-column field="CategoryName"  headerText="Category Name"  width="150" [filter]="columnFilterSettings">
                  <ng-template #filterItemTemplate let-data><span [ngClass]="categoryIcons[data.CategoryName]"></span> {{data.CategoryName}} </ng-template>
                  </e-column>
                  <e-column field="Discontinued"  headerText="Discontinued"  width="100" displayAsCheckBox="true" ></e-column>
                  </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;
    public columnFilterSettings?: Object;
    public filterItemTemplate?: string;
    categoryIcons: { [key: string]: string } = {
      Beverages: 'fas fa-coffee',
      Condiments: 'fas	fa-leaf',
      Confections: 'fas fa-birthday-cake',
      DairyProducts: 'fas fa-ice-cream',
      Grains: 'fas fa-seedling',
      Meat: 'fas fa-drumstick-bite',
      Produce: 'fas fa-carrot',
      Seafood: 'fas fa-fish',
    };
  
    ngOnInit(): void {
        this.data = categoryData;
        this.filterSettings = {type: 'Excel'};
        this.columnFilterSettings = {
          
          filterItemTemplate: this.filterItemTemplate,
        };
    }
   
}


