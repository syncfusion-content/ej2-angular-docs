import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, EditService, ToolbarService, AggregateService } from '@syncfusion/ej2-angular-grids'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, RowRenderingDirection } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                EditService,
                ToolbarService,
                AggregateService],
standalone: true,
    selector: 'app-root',
    template: `

        <div style="display: flex; padding: 0px 0px 20px 200px">
            <label style="padding: 30px 17px 0 0;"> Select row rendering mode :</label>
            <ejs-dropdownlist #dropdown style="padding: 26px 0 0 0" index="0" width="150" 
            [dataSource]="dropDownData"  (change)="changeAlignment($event)">
            </ejs-dropdownlist>
        </div>
        <div class="e-adaptive-demo e-bigger">
                    <div class="e-mobile-layout">
                        <div class="e-mobile-content">
                           <ejs-grid #adaptive id="adaptivebrowser" [dataSource]='data' enableAdaptiveUI='true' [rowRenderingMode]="rowMode"
                    height='100%' allowPaging='true' allowFiltering='true'
                    allowSorting='true' [editSettings]='editSettings'
                    [filterSettings]='filterSettings' [toolbar]='toolbar' (load)='onLoad()'>
                    <e-columns>
                        <e-column field='SNO' headerText='S NO' width='150' isPrimaryKey='true' [validationRules]='orderidrules'>
                        </e-column>
                        <e-column field='Model' headerText='Model' width='200' editType='dropdownedit'
                            [validationRules]='customeridrules'>
                        </e-column>
                        <e-column field='Developer' headerText='Developer' width='200' [validationRules]='customeridrules' [filter]='menuFilter'></e-column>
                        <e-column field='ReleaseDate' headerText='Released Date' width='200' type='date' format='yMMM' editType='datepickeredit'>
                        <e-column field='AndroidVersion' headerText='Android Version' width='200' [validationRules]='customeridrules' [filter]='checkboxFilter'></e-column>
                        </e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate>
                            <e-columns>
                                <e-column type="Count" field="Model" >
                                    <ng-template #footerTemplate let-data>Total Models: {{data.Count}}</ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-grid>
                        </div>
                    </div>
                    <br />
                    <div class="datalink">Source:
                  <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones"
                    target="_blank">Wikipedia: List of Android smartphones</a>
                    </div>
                </div>`
})

export class AppComponent implements OnInit {
    @ViewChild('adaptive')
    public grid?: GridComponent;
    public data?: object[];
    public editSettings?: Object;
    public toolbar?: string[];
    public orderidrules?: Object;
    public customeridrules?: Object;
    public filterSettings?: Object;
    public menuFilter?: Object;
    public checkboxFilter?: Object;
    public rowMode?: string;
    public dropDownData: Object[] = [
        { text: 'Vertical', value: 'Vertical' },
        { text: 'Horizontal', value: 'Horizontal' },
    ];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.filterSettings = { type: 'Excel' };
        this.menuFilter = {
            type: 'Menu'
        };
        this.checkboxFilter = {
            type: 'CheckBox'
        };
    }

    public changeAlignment(args: ChangeEventArgs): void {
        (this.grid as GridComponent).rowRenderingMode = (args.value as RowRenderingDirection);
    }

    public onLoad(): void {
        (this.grid as GridComponent).adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    }
}


