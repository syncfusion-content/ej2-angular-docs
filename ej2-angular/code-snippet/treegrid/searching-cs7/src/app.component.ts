


import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, SearchSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { SearchEventArgs } from '@syncfusion/ej2-angular-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='270' [treeColumnIndex]='1' [toolbar]='toolbarOptions' [searchSettings]='searchOptions' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)" childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public values?: any;
    public key = '';
    public refresh = false;
    public removeQuery = false;
    public valueAssign = false;
    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    public searchOptions?: SearchSettingsModel;
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.searchOptions = {
            fields: [
                'taskID',
                'taskName',
                'priority'
            ],
            operator: 'contains',
            key: '',
            ignoreCase: true,
        };
        this.toolbarOptions = ['Search'];
    }
    actionBegin(args: SearchEventArgs) {
        if (args.requestType == 'searching') {
            const keys = (args as any).searchString.split(',');
            var flag = true;
            var predicate: any;
            if (keys.length > 1) {
                if ((this.treegrid as TreeGridComponent).grid.searchSettings.key !== '') {
                    this.values = args.searchString;
                    keys.forEach((key: any) => {
                        (this.treegrid as TreeGridComponent).getColumns().forEach((col) => {
                            if (flag) {
                                predicate = new Predicate(col.field, 'contains', key, true);
                                flag = false;
                            }
                            else {
                                var predic = new Predicate(col.field, 'contains', key, true);
                                predicate = predicate.or(predic);
                            }
                        });
                    });
                    (this.treegrid as TreeGridComponent).query = new Query().where(predicate);
                    (this.treegrid as TreeGridComponent).grid.searchSettings.key = '';
                    this.refresh = true;
                    this.valueAssign = true;
                    this.removeQuery = true;
                    (this.treegrid as TreeGridComponent).refresh();
                }
            }
        }
    }
    actionComplete(args: SearchEventArgs) {
        if (args.requestType === 'refresh' && this.valueAssign) {
            (
                document.getElementById(this.treegrid?.grid.element.id + '_searchbar') as any
            ).value = this.values;
            this.valueAssign = false;
        }
        else if (
            (document.getElementById(this.treegrid?.grid.element.id + '_searchbar') as any).value === '' && args.requestType === 'refresh' &&
            this.removeQuery) {
                (this.treegrid as TreeGridComponent).query = new Query();
                this.removeQuery = false;
                (this.treegrid as TreeGridComponent).refresh();
            }
    }
}



