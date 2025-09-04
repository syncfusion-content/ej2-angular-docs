import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridAllModule, TreeGridComponent, PageService, ToolbarService, ColumnChooserService } from '@syncfusion/ej2-angular-treegrid';
import { TreeViewModule, TreeView } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid id="TreeGrid" #stackedHeadertreegrid clipMode="EllipsisWithTooltip" [dataSource]='data' childMapping='subtasks' height='350' [treeColumnIndex]='1' [allowPaging]=true [toolbar]="toolbar" [showColumnChooser]="true">
                        <e-columns>
                            <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
                            <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                            <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                            <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                            <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                            <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                            <e-column field='priority' headerText='Priority' width='90'></e-column>
                        </e-columns>
                        
                    <!-- Custom Column Chooser Template using TreeView Component -->
                    <ng-template #columnChooserSettingsTemplate let-data>

                        <div *ngIf="!(data && data.columns && data.columns.length)" class="no-record-text">No Matches Found</div>
                        <div *ngIf="(data && data.columns && data.columns.length)" id="transparent">
                        <ejs-treeview #treeview id="treeview" cssClass="no-border" [fields]="dataProcess(data)" (nodeClicked)="nodeCheck($event)" (keyPress)="nodeCheck($event)" [showCheckBox]="true"></ejs-treeview>
                        </div>
                    </ng-template>
                    
                    <!-- Column Chooser Header Template -->
                    <ng-template #columnChooserSettingsHeaderTemplate>
                        <div>
                        <span id="column-chooser-text">Column Options</span>
                        </div>
                    </ng-template>
                    
                    <!-- Column Chooser Footer Template with Apply/Close Buttons -->
                    <ng-template #columnChooserSettingsFooterTemplate>
                        <button #applyBtn (click)="columnChooserSubmit()" ejs-button>Apply</button>
                        <button #closeBtn (click)="columnChooserClose()" ejs-button>Close</button>
                    </ng-template>            
                </ejs-treegrid>`,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TreeGridAllModule, ButtonModule, TreeViewModule, NgIf],
    providers: [PageService, ToolbarService, ColumnChooserService],
})
export class AppComponent implements OnInit {
    public data: Object[] = [];
    public columnChooserSettings?: Object;

    @ViewChild('stackedHeadertreegrid')
    public treegrid?: TreeGridComponent | any;
    @ViewChild('treeview')
    public treeview?: TreeView | any;
    public toolbar?: string[];
    ngOnInit(): void {
        this.data = sampleData;
        this.toolbar = ['ColumnChooser'];
        this.columnChooserSettings = { enableSearching: true };

    }

    // Apply the column chooser selection
    columnChooserSubmit() {
        const treeGridInstance = (document.getElementById('TreeGrid') as any).ej2_instances[0];
        const checkedElements: any = [];
        const uncheckedElements: any = [];
        var showColumns = treeGridInstance.getVisibleColumns().filter(function (column: any) { return (column.showInColumnChooser === true); });
        showColumns = showColumns.map(function (col: any) { return col.headerText; });
        const treeItems = document.querySelectorAll('.e-list-item');
        treeItems.forEach(item => {
            const itemDetails = this.treeview.getNode(item);
            if (!itemDetails.hasChildren) {
                if (item.getAttribute('aria-checked') === 'true') {
                    checkedElements.push(itemDetails.text);
                } else {
                    uncheckedElements.push(itemDetails.text);
                }
            }
        });
        showColumns = showColumns.filter((col: any) => !uncheckedElements.includes(col));
        checkedElements.forEach((item: any) => {
            if (!showColumns.includes(item)) {
                showColumns.push(item);
            }
        });
        var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
        treeGridInstance.grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
    };

    columnChooserClose() {
        const treeGridInstance = (document.getElementById('TreeGrid') as any).ej2_instances[0];
        treeGridInstance.grid.columnChooserModule.hideDialog();
    };

    // Render TreeView in the column chooser's Content
    dataProcess(args: any) {

        const parentNodes = [
            { id: 1, name: 'Task Info', hasChild: true, expanded: true },
            { id: 2, name: 'Schedule', hasChild: true, expanded: true },
            { id: 3, name: 'Progress', hasChild: true, expanded: true },
        ];
        let treeData = [];
        if (args.columns && args.columns.length) {
            treeData = args.columns.map((column: any) => {
                let parentId: number = 0;
                switch (column.field) {
                    case 'taskID':
                    case 'taskName':
                        parentId = 1;
                        break;
                    case 'startDate':
                    case 'endDate':
                        parentId = 2;
                        break;
                    case 'duration':
                    case 'progress':
                    case 'priority':
                        parentId = 3;
                        break;
                }
                return {
                    id: column.uid,
                    name: column.headerText,
                    pid: parentId,
                    isChecked: column.visible
                };
            });
            const uniquePids: any[] = [];
            treeData.forEach((item: any) => {
                if (!(uniquePids as any).includes(item.pid)) {
                    uniquePids.push(item.pid);
                }
            });
            const filteredParents = parentNodes.filter((parent: any) => (uniquePids as any).includes(parent.id));
            treeData.unshift(...filteredParents);
        } else {
            treeData = [];
        }

        const fields = { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
        return fields;
    };
    
    // Handle checking/unchecking nodes in the TreeView (column chooser)
    nodeCheck(args: any) {
        let checkedNode = [args.node];
        if (args.event.target.classList.contains('e-fullrow') || args.event.key === "Enter") {
            let getNodeDetails = this.treeview.getNode(args.node);
            if (getNodeDetails.isChecked === 'true') {
                this.treeview.uncheckAll(checkedNode);
            } else {
                this.treeview.checkAll(checkedNode);
            }
        }
    }
}