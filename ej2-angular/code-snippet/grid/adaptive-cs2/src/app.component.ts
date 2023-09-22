

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<div class="e-adaptive-demo e-bigger">
                    <div class="e-mobile-layout">
                        <div class="e-mobile-content">
                           <ejs-grid #adaptive id="adaptivebrowser" [dataSource]='data' enableAdaptiveUI='true' [rowRenderingMode]="rowMode"
                    height='100%' allowPaging='true' allowFiltering='true'
                    allowSorting='true' [editSettings]='editSettings'
                    [filterSettings]='filterSettings' [toolbar]='toolbar' (load)='onLoad($event)'>
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

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.filterSettings = { type: 'Excel' };
        this.rowMode = 'Vertical';
        this.menuFilter = {
            type: 'Menu'
        };
        this.checkboxFilter = {
            type: 'CheckBox'
        };
    }

    public onLoad(args: any): void {
        (this.grid as any).adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    }
}


