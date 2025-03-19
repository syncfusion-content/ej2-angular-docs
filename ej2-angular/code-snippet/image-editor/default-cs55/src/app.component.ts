import { ImageEditorModule, ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { Component, ViewChild } from '@angular/core';
import { TreeViewComponent, TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [ImageEditorModule, TreeViewModule],
    standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
              <div id='treeparent'><ejs-treeview #treeView [fields]='field' (nodeClicked)="clicked($event)"></ejs-treeview></div>
                <ejs-imageeditor #imageEditor></ejs-imageeditor>
              </div>
              </div>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    @ViewChild('treeView')
    public treeView?: TreeViewComponent;
    public data = [
        {
            "nodeId": "01", "nodeText": "Videos", "icon": "folder",
            "nodeChild": [
                { "nodeId": "01-01", "nodeText": "Naturals.mp4", "icon": "video" },
                { "nodeId": "01-02", "nodeText": "Wild.mpeg", "icon": "video" }
            ]
        },
        {
            "nodeId": "02", "nodeText": "Documents", "icon": "folder",
            "nodeChild": [
                { "nodeId": "02-01", "nodeText": "Environment Pollution.docx", "icon": "docx" },
                { "nodeId": "02-02", "nodeText": "Global Water, Sanitation, & Hygiene.docx", "icon": "docx" },
                { "nodeId": "02-03", "nodeText": "Global Warming.ppt", "icon": "ppt" },
                { "nodeId": "02-04", "nodeText": "Social Network.pdf", "icon": "pdf" },
                { "nodeId": "02-05", "nodeText": "Youth Empowerment.pdf", "icon": "pdf" }
            ]
        },
        {
            "nodeId": "03", "nodeText": "Pictures", "icon": "folder", "expanded": true,
            "nodeChild": [
                {
                    "nodeId": "03-01", "nodeText": "Camera Roll", "icon": "folder", "expanded": true,
                    "nodeChild": [
                        { "nodeId": "03-01-01", "nodeText": "Flower", "image": "./flower.png" },
                        { "nodeId": "03-01-02", "nodeText": "Bridge", "image": "./bridge.png" }
                    ]
                },
            ]
        }
    ];
    public field: Object = { dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    clicked(args: any): void {
        let nodeId = args.node.getAttribute('data-uid');
        let nodeData: any = this.treeView?.getTreeData(nodeId)[0];
        if (nodeData && nodeData.image) {
            this.imageEditorObj?.open(nodeData.image);
        }
    }
}
