import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data} from './datasource';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    public data?: Object[];
    @ViewChild('batchgrid')
     public grid?: GridComponent;
    public editSettings?: Object;
    public toolbar?: string[];
    public orderidrules?: Object;
    public customeridrules?: Object;
    public freightrules?: Object;
    public editparams?: Object;
    public pageSettings?: Object;
    public positionData: Object[] = [
        { text: 'Top', value: 'Top' },
        { text: 'Bottom', value: 'Bottom' },
    
      ];
    public ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.freightrules =  { required: true };
        this.editparams = { params: { popupHeight: '300px' } };
        this.pageSettings = {pageCount: 5};
    } 
    public changePosition(args: any): void {
       (this as any).grid.editSettings.newRowPosition = args.value;
    }
}
