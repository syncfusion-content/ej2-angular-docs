import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { TreeViewModule, ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { NodeClickEventArgs, BeforeOpenCloseMenuEventArgs, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';
import { Component, Inject, ViewChild } from '@angular/core';
import { TreeViewComponent, ContextMenuComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [
        FormsModule, TreeViewModule, ContextMenuModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div id='treeparent'>
                 <ejs-treeview  id='tree' #treeview [fields]='field' (nodeClicked)='nodeClicked($event)'></ejs-treeview>
                 </div>
                 <ejs-contextmenu #contextmenu id='contextmenutree' target='#tree' [items]='menuItems' (beforeOpen)='beforeopen($event)' (select)='menuclick($event)'></ejs-contextmenu>`
})

export class AppComponent {

    public hierarchicalData: Object[] = [
        {
            id: '01', name: 'Local Disk (C:)', expanded: true, hasAttribute: { class: 'remove rename' },
            subChild: [
                {
                    id: '01-01', name: 'Program Files',
                    subChild: [
                        { id: '01-01-01', name: 'Windows NT' },
                        { id: '01-01-02', name: 'Windows Mail' },
                        { id: '01-01-03', name: 'Windows Photo Viewer' },
                    ]
                },
                {
                    id: '01-02', name: 'Users', expanded: true,
                    subChild: [
                        { id: '01-02-01', name: 'Smith' },
                        { id: '01-02-02', name: 'Public' },
                        { id: '01-02-03', name: 'Admin' },
                    ]
                },
                {
                    id: '01-03', name: 'Windows',
                    subChild: [
                        { id: '01-03-01', name: 'Boot' },
                        { id: '01-03-02', name: 'FileManager' },
                        { id: '01-03-03', name: 'System32' },
                    ]
                },
            ]
        },
        {
            id: '02', name: 'Local Disk (D:)', hasAttribute: { class: 'remove' },
            subChild: [
                {
                    id: '02-01', name: 'Personals',
                    subChild: [
                        { id: '02-01-01', name: 'My photo.png' },
                        { id: '02-01-02', name: 'Rental document.docx' },
                        { id: '02-01-03', name: 'Pay slip.pdf' },
                    ]
                },
                {
                    id: '02-02', name: 'Projects',
                    subChild: [
                        { id: '02-02-01', name: 'ASP Application' },
                        { id: '02-02-02', name: 'TypeScript Application' },
                        { id: '02-02-03', name: 'React Application' },
                    ]
                },
                {
                    id: '02-03', name: 'Office',
                    subChild: [
                        { id: '02-03-01', name: 'Work details.docx' },
                        { id: '02-03-02', name: 'Weekly report.docx' },
                        { id: '02-03-03', name: 'Wish list.csv' },
                    ]
                },
            ]
        },
        {
            id: '03', name: 'Local Disk (E:)', icon: 'folder', hasAttribute: { class: 'rename' },
            subChild: [
                {
                    id: '03-01', name: 'Pictures',
                    subChild: [
                        { id: '03-01-01', name: 'Wind.jpg' },
                        { id: '03-01-02', name: 'Stone.jpg' },
                        { id: '03-01-03', name: 'Home.jpg' },
                    ]
                },
                {
                    id: '03-02', name: 'Documents',
                    subChild: [
                        { id: '03-02-01', name: 'Environment Pollution.docx' },
                        { id: '03-02-02', name: 'Global Warming.ppt' },
                        { id: '03-02-03', name: 'Social Network.pdf' },
                    ]
                },
                {
                    id: '03-03', name: 'Study Materials',
                    subChild: [
                        { id: '03-03-01', name: 'UI-Guide.pdf' },
                        { id: '03-03-02', name: 'Tutorials.zip' },
                        { id: '03-03-03', name: 'TypeScript.7z' },
                    ]
                },
            ]
        }
    ];
    // Mapping TreeView fields property with data source properties
    public field: Object = { dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild', htmlAttributes: 'hasAttribute' };

    @ViewChild('treeview') treeview!: TreeViewComponent;
    @ViewChild('contextmenu') contextmenu!: ContextMenuComponent;


    nodeClicked(args: NodeClickEventArgs) {
        if (args.event.which === 3) {
            this.treeview.selectedNodes = [args.node.getAttribute('data-uid') as string];
        }
    }
    //Render the context menu with target as Treeview
    public menuItems: MenuItemModel[] = [
        { text: 'Add New Item' },
        { text: 'Rename Item' },
        { text: 'Remove Item' }
    ];

    public index: number = 1;
    menuclick(args: MenuEventArgs) {
        const targetNodeId = this.treeview.selectedNodes[0];
        switch (args.item.text) {
            case 'Add New Item':
                const newNodeId = `tree_${this.index++}`;
                this.treeview.addNodes([{ id: newNodeId, name: 'New Folder' }], targetNodeId);
                this.treeview.beginEdit(newNodeId);
                break;
            case 'Remove Item':
                this.treeview.removeNodes([targetNodeId]);
                break;
            case 'Rename Item':
                this.treeview.beginEdit(targetNodeId);
                break;
        }
    }

    beforeopen(args: BeforeOpenCloseMenuEventArgs) {
        const targetNode = document.querySelector(`[data-uid="${this.treeview.selectedNodes[0]}"]`);
        this.contextmenu.enableItems(['Remove Item'], !targetNode?.classList.contains('remove'));
        this.contextmenu.enableItems(['Rename Item'], !targetNode?.classList.contains('rename'));
    }
}

