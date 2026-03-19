import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { DropDownList, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, FilterSettingsModel, GridModule, IFilter, IFilterCreate, IFilterRead, IFilterWrite, PageService } from '@syncfusion/ej2-angular-grids';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  imports: [ GridModule,DropDownListAllModule],
  providers: [FilterService, PageService],
  standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID'  textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [filter]= 'filter' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;
    public filter?: IFilter;
    public dropInstance?: DropDownList;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
            type: 'Menu'
        };
        this.filter = {
      ui: {
        create: (args: IFilterCreate): void => {
          const flValInput: HTMLElement = createElement('input', {
            className: 'flm-input',
          });
        

          const target = (args.target ?? undefined) as HTMLElement | undefined;
          if (!target) {
            return;
          }
          this.dropInstance = new DropDownList({
            dataSource: new DataManager(data),
            fields: { text: 'CustomerID', value: 'CustomerID' },
            placeholder: 'Select a value',
            popupHeight: '200px',
          });
          (this.dropInstance as DropDownList).appendTo(flValInput);
        },
        write: (args: IFilterWrite): void => {
          (this.dropInstance as DropDownList).value =
            args.filteredValue as string;
        },

        read: (args: IFilterRead): void => {
          const field = args.column?.field ?? '';
          const operator = args.operator ?? 'equal';
          const value = (this.dropInstance?.value ?? '') as string;

          if (!field || !args.fltrObj) return;
          args.fltrObj.filterByColumn(field, operator, value);
        },
      },
    };
    }
}