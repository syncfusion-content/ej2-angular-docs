

import { Component, ViewEncapsulation } from '@angular/core';
import { SelectEventArgs } from '@syncfusion/ej2-lists';

@Component({
    selector: 'my-app',
    template: `<ejs-listview id='listview' [dataSource]='dataSource' [template]='wintemplate' headerTitle='Folders' [showHeader]='true' [showIcon]='true' [fields]='fields' (select)='onSelect($event)'></ejs-listview>
    `,
    styles: [`
    #listview {
    display: block;
    max-width: 400px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}


#listview.e-listview .e-list-icon {
    height: 24px;
    width: 30px;
}

.folder, .file  {
    background: url('http://ej2.syncfusion.com/demos/src/listview/images/file_icons.png') no-repeat;
    background-size: 300%;
}

.folder{
    background-position: -5px -461px;
}

.file {
    background-position: -5px -151px;
}

.list {
    color:deeppink !important;
}
`],
encapsulation: ViewEncapsulation.None
})

export class AppComponent {


public dataSource: { [key: string]: Object }[] = [
    {
        id: '01', text: 'Music', icon: 'folder',
        child: [
            { id: '01-01', text: 'Gouttes.mp3', icon: 'file' }
        ]
    },
    {
        id: '02', text: 'Videos', icon: 'folder',
        child: [
            { id: '02-01', text: 'Naturals.mp4', icon: 'file' },
            { id: '02-02', text: 'Wild.mpeg', icon: 'file' },
        ]
    },
    {
        id: '03', text: 'Documents', icon: 'folder',
        child: [
            { id: '03-01', text: 'Environment Pollution.docx', icon: 'file' },
            { id: '03-02', text: 'Global Water, Sanitation, & Hygiene.docx', icon: 'file' },
            { id: '03-03', text: 'Global Warming.ppt', icon: 'file' },
            { id: '03-04', text: 'Social Network.pdf', icon: 'file' },
            { id: '03-05', text: 'Youth Empowerment.pdf', icon: 'file' },
        ]
    },
    {
        id: '04', text: 'Pictures', icon: 'folder',
        child: [
            {
                id: '04-01', text: 'Camera Roll', icon: 'folder',
                child: [
                    { id: '04-01-01', text: 'WIN_20160726_094117.JPG', icon: 'file' },
                    { id: '04-01-02', text: 'WIN_20160726_094118.JPG', icon: 'file' },
                    { id: '04-01-03', text: 'WIN_20160726_094119.JPG', icon: 'file' }
                ]
            },
            {
                id: '04-02', text: 'Wind.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Stone.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Home.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Bridge.png', icon: 'file'
            }
        ]
    },
    {
        id: '05', text: 'Downloads', icon: 'folder',
        child: [
            { id: '05-01', text: 'UI-Guide.pdf', icon: 'file' },
            { id: '05-02', text: 'Tutorials.zip', icon: 'file' },
            { id: '05-03', text: 'Game.exe', icon: 'file' },
            { id: '05-04', text: 'TypeScript.7z', icon: 'file' },
        ]
    },
];

public  fields: Object = { iconCss: 'icon', tooltip: 'text' };
wintemplate: any;

//Select event to add new list item in child page
onSelect(args: SelectEventArgs) {
    //Add new file to the child page of selected list item
    //Add new file to the child page of selected list item
    (this.dataSource[args.index]['child'] as any).push({ id: '01-02', text: 'Newly Added File', icon: 'file', htmlAttributes: { role: 'li', class: 'list' } });
}
}


