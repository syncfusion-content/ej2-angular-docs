import { RibbonModule, RibbonGalleryService } from '@syncfusion/ej2-angular-ribbon'

import { Component, ViewChild } from "@angular/core";
import {RibbonGallerySettingsModel, RibbonSplitButtonSettingsModel, RibbonButtonSettingsModel } from "@syncfusion/ej2-angular-ribbon";
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    imports: [ RibbonModule],
    providers: [ RibbonGalleryService ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{

    public pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge Format" }, { text: "Keep Text Only" }];
    public pasteButton: RibbonSplitButtonSettingsModel = { iconCss: 'e-icons e-paste', items: this.pasteOptions, content: 'Paste' };
    public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
    public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
    public formatPainter: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
    public aboveButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-insert-above", content: "Above"};
    public belowButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-insert-below", content: "Below"};
    public leftButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-insert-left", content: "Left"};
    public rightButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-insert-right", content: "Right"};
  
    @ViewChild('galleryTemplate', { static: true }) template!: any
    @ViewChild('ribbon') ribbon!: any
    public gallerySettings: RibbonGallerySettingsModel = {};
  
    ngOnInit(): void {
        this.gallerySettings = {
            template: this.template,
            popupTemplate: this.template,
            itemCount: 7,
            groups: [{
            header: 'Plain Tables',
            items: [
                { cssClass: "plainTables_item_1" },
                { cssClass: "plainTables_item_2" },
                { cssClass: "plainTables_item_3" },
                { cssClass: "plainTables_item_4" },
                { cssClass: "plainTables_item_5" },
                { cssClass: "plainTables_item_6" },
                { cssClass: "plainTables_item_7" }
            ]
            }, {
            header: 'List Tables',
            items: [
                { cssClass: "listTables_item_1" },
                { cssClass: "listTables_item_2" },
                { cssClass: "listTables_item_3" },
                { cssClass: "listTables_item_4" },
                { cssClass: "listTables_item_5" },
                { cssClass: "listTables_item_6" },
                { cssClass: "listTables_item_7" }
            ]
            }]
        }
    }
}
  