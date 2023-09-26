

import { Component, ViewChild } from '@angular/core';
import { PivotFieldListComponent, PivotViewComponent, FieldListService, IDataOptions, IDataSet,
    EnginePopulatedEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Browser, setStyleAttribute, prepend } from '@syncfusion/ej2-base';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  styleUrls: ['./app.component.css'],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotfieldlist #pivotfieldlist id='PivotFieldList' [dataSourceSettings]=dataSourceSettings renderMode="Fixed" (enginePopulated)='afterPopulate($event)' allowDeferLayoutUpdate='true' allowCalculatedField='true' (load)='onLoad()' (dataBound)='ondataBound()'></ejs-pivotfieldlist><ejs-pivotview #pivotview id='PivotViewFieldList' allowDeferLayoutUpdate='true' width='99%' height='530' (enginePopulated)='afterEnginePopulate($event)' [gridSettings]='gridSettings'></ejs-pivotview>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotViewComponent;

    @ViewChild('pivotfieldlist')
    public fieldlistObj?: PivotFieldListComponent;

    afterPopulate(arge: EnginePopulatedEventArgs): void {
        if ((this.fieldlistObj as PivotFieldListComponent).isRequiredUpdate) {
            (this.fieldlistObj as PivotFieldListComponent).updateView(this.pivotGridObj as PivotViewComponent );
        }
        this.pivotGridObj?.notify('ui-update', this.pivotGridObj);
        (this.fieldlistObj as PivotFieldListComponent).notify('tree-view-update', this.fieldlistObj as PivotFieldListComponent);
    }
    afterEnginePopulate(args: EnginePopulatedEventArgs): void {
        if (this.fieldlistObj && this.pivotGridObj) {
            this.fieldlistObj.update(this.pivotGridObj);
        }
    }
    onLoad(): void {
        if (Browser.isDevice) {
            (this.fieldlistObj as PivotFieldListComponent).renderMode = 'Popup';
            (this.fieldlistObj as PivotFieldListComponent).target = '.control-section';
            (document.getElementById('PivotFieldList') as HTMLElement).removeAttribute('style');
            setStyleAttribute(document.getElementById('PivotFieldList') as HTMLElement, {
                'height': 0,
                'float': 'left'
            });
        }
    }

    ondataBound(): void {
        if (Browser.isDevice) {
            prepend([document.getElementById('PivotFieldList') as HTMLElement], document.getElementById('PivotView') as HTMLElement);
        }
    }

    ngOnInit(): void {

        this.gridSettings = {
            columnWidth: 140
        } as GridSettings;

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
 }



