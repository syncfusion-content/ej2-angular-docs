import { data } from './datasource';
import { frFRLocalization } from './locale.json';
import { Component, OnInit } from '@angular/core';
import { EditService, EditSettingsModel, GridModule, GroupService, PageService, PageSettingsModel, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { L10n } from '@syncfusion/ej2-base';

L10n.load(frFRLocalization);

@Component({
    imports: [ GridModule] ,
    providers: [GroupService, PageService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [locale]='locale' [allowGrouping]='true' [allowPaging]='true'
             [pageSettings]='pageOptions' [editSettings]='editSettings' [toolbar]='toolbar' height='200px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageOptions?: PageSettingsModel;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public locale: any = 'fr-FR';

    ngOnInit(): void {
        this.data = data;
        this.pageOptions = { pageSize: 6 };
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    }
}
