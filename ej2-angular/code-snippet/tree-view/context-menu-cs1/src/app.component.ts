


import { Component, Inject, ViewChild } from '@angular/core';
import { TreeViewComponent, NodeClickEventArgs, BeforeOpenCloseMenuEventArgs, MenuEventArgs, MenuItemModel, ContextMenuComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `<div id='treeparent'>
                 <ejs-treeview  id='tree' #treevalidate [fields]='field' (nodeClicked)='nodeclicked($event)'></ejs-treeview>
                 </div>
                 <ejs-contextmenu #contentmenutree id='contentmenutree' target='#tree' [items]='menuItems' (beforeOpen)='beforeopen($event)' (select)='menuclick($event)'></ejs-contextmenu>`
})
export class AppComponent {

  public hierarchicalData: Object[] = [
        { id: '01', name: 'Local Disk (C:)', expanded: true, hasAttribute:{class:'remove rename'},
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
            id: '02', name: 'Local Disk (D:)', hasAttribute:{class:'remove'},
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
            id: '03', name: 'Local Disk (E:)', icon: 'folder', hasAttribute:{class:'rename'},
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
    public field:Object ={ dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild', htmlAttributes: 'hasAttribute' };

    @ViewChild ('treevalidate') treevalidate?: TreeViewComponent;
    @ViewChild ('contentmenutree') contentmenutree?: ContextMenuComponent;

    public nodeclicked(args: NodeClickEventArgs) {
        if (args.event.which === 3) {
            (this.treevalidate as TreeViewComponent).selectedNodes = [args.node.getAttribute('data-uid') as string];
        }
    }

 //Render the context menu with target as Treeview
public menuItems: MenuItemModel[] = [
    { text: 'Add New Item' },
    { text: 'Rename Item' },
    { text: 'Remove Item' }
];

public index: number = 1;
public menuclick(args: MenuEventArgs) {
    let targetNodeId: string = this.treevalidate?.selectedNodes[0] as string;
    if (args.item.text == "Add New Item") {
    let nodeId: string = "tree_" + this.index;
    let item: { [key: string]: Object } = { id: nodeId, name: "New Folder" };
        this.treevalidate?.addNodes([item], targetNodeId, null as any);
        this.index++;
        this.hierarchicalData.push(item);
        this.treevalidate?.beginEdit(nodeId);
    }
    else if (args.item.text == "Remove Item") {
        this.treevalidate?.removeNodes([targetNodeId]);
    }
    else if (args.item.text == "Rename Item") {
        this.treevalidate?.beginEdit(targetNodeId);
    }
}

public beforeopen(args: BeforeOpenCloseMenuEventArgs) {
    let targetNodeId: string = this.treevalidate?.selectedNodes[0] as string;
    let targetNode: Element = document.querySelector('[data-uid="' + targetNodeId + '"]') as Element;
    if (targetNode.classList.contains('remove')) {
        this.contentmenutree?.enableItems(['Remove Item'], false);
    }
    else {
        this.contentmenutree?.enableItems(['Remove Item'], true);
    }
    if (targetNode.classList.contains('rename')) {
        this.contentmenutree?.enableItems(['Rename Item'], false);
    }
    else {
        this.contentmenutree?.enableItems(['Rename Item'], true);
    }
}
}



