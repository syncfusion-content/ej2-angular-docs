

import { Component, ViewChild } from '@angular/core';
import { PivotFieldListComponent, PivotViewComponent, FieldListService, IDataOptions, IDataSet,
    EnginePopulatedEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Browser, setStyleAttribute, prepend } from '@syncfusion/ej2-base';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Button } from '@syncfusion/ej2-buttons';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  styleUrls: ['./app.component.css'],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotfieldlist #pivotfieldlist id='PivotFieldList' [dataSourceSettings]=dataSourceSettings renderMode="Popup" (enginePopulated)='afterPopulate($event)' target='#fieldlisttarget' allowCalculatedField='true' (load)='onLoad()' (dataBound)='ondataBound()'></ejs-pivotfieldlist> <ejs-pivotview #pivotview id='PivotView' height='530' (enginePopulated)='afterEnginePopulate($event)' [gridSettings]='gridSettings'></ejs-pivotview> <div class="col-md-2"><button ej-button id='fieldlistbtn'>Open Field List</button></div><div id='fieldlisttarget'></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;
    public button?: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotViewComponent;

    @ViewChild('pivotfieldlist')
    public fieldlistObj?: PivotFieldListComponent;

    afterPopulate(arge: EnginePopulatedEventArgs): void {
        if (this.fieldlistObj && this.pivotGridObj) {
            this.fieldlistObj.updateView(this.pivotGridObj);
        }
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
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#fieldlistbtn');

        this.button.element.onclick = (): void => {
            (this.fieldlistObj as PivotFieldListComponent).dialogRenderer.fieldListDialog.show();
        };
    }
 }



