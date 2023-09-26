

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, MenuSelectEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { select } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { dataSource } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" (fileMenuBeforeOpen)="fileMenuBeforeOpen()"
                (fileMenuItemSelect)="fileMenuItemSelect($event)" [openUrl]="openUrl" [saveUrl]="saveUrl" [showFormulaBar]="false" [showSheetTabs]="false" [allowInsert]="false" [allowDelete]="false" [allowMerge]="false">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=180></e-column>
                      <e-column [width]=130></e-column>
                      <e-column [width]=130></e-column>
                      <e-column [width]=180></e-column>
                      <e-column [width]=130></e-column>
                      <e-column [width]=120></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

    data: object[] = dataSource;
    openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
    saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save';

    created() {
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:F1');
        // Hiding the `Insert` from ribbon.
        this.spreadsheetObj!.hideRibbonTabs(['Insert']);
        // Set disabled state to `View` ribbon tab.
        this.spreadsheetObj!.enableRibbonTabs(['View'], false);
        /// Adding the `Help` ribbon tab at the last index.
        // Specify the ribbon tab header text in last optional argument(`insertBefore`) for inserting new tab before any existing tab.
        this.spreadsheetObj!.addRibbonTabs([{ header: { text: 'Help' }, content: [{ text: 'Feedback', tooltipText: 'Feedback',
            click: (args: ClickEventArgs): void => { /* Any click action for this toolbar item will come here. */ } }] }]);
        // Hiding the unwanted toobar items from `Home` by specifying its index.
        this.spreadsheetObj!.hideToolbarItems('Home', [0, 1, 2, 4, 14, 15, 21, 24]);
        // Set diable state to `Underline`, 'Wrap text` toobar items from `Home` by specifying the item id.
        this.spreadsheetObj!.enableToolbarItems(
            'Home', [`${this.spreadsheetObj!.element.id}_underline`, `${this.spreadsheetObj!.element.id}_wrap`], false);
        // Set disable state to `Protect Sheet` toolbar item from `Data` by mentioning its index.
        this.spreadsheetObj!.enableToolbarItems('Data', [0], false);
        // Adding the new `Custom Formulas` toolbar item under `Formulas` tab for adding custom formulas.
        this.spreadsheetObj!.addToolbarItems(
            'Formulas', [{ type: 'Separator' }, {
                text: 'Custom Formulas', tooltipText: 'Custom Formulas',
                // You can set click handler for each new custom toolbar item
                click: (args: ClickEventArgs): void => {
                    // You can add custom formualas here.
                }
            }]);
        // Adding new custom item `Import` after the existing `Open` item. By default, new item will add after the specified item.
        this.spreadsheetObj!.addFileMenuItems([{ text: 'Import', iconCss: 'e-open e-icons' }], 'Open');
        // Adding new custom item `Export As` after the existing `Save As` item.
        // Set `insertAfter` optional argument as `false` for adding new item before the specified item.
        this.spreadsheetObj!.addFileMenuItems(
            [{
                text: 'Export As', iconCss: 'e-save e-icons', items: [{ text: 'XLSX', iconCss: 'e-xlsx e-icons' },
                    { text: 'XLS', iconCss: 'e-xls e-icons' }, { text: 'CSV', iconCss: 'e-csv e-icons' }]
            }],
            'Save As', false);
    }

    fileMenuBeforeOpen (): void {
        // Because the file menu items are created dynamically, you need to perform the hide or show and enable/disable operations
        // under filemenu before open event.
        // Hiding the `Save As` and `Open` item.
        this.spreadsheetObj!.hideFileMenuItems(['Save As', 'Open']);
         // Set disable state to `New` item. You can perform any file menu items customization by specifying the item id,
        // if it has more than one same item text. Set the last argument `isUniqueId` as true for using the item id.
        this.spreadsheetObj!.enableFileMenuItems([`${this.spreadsheetObj!.element.id}_New`], false, true);
    }

    fileMenuItemSelect (args: MenuSelectEventArgs): void {
        // Custom file menu items select handler
        switch (args.item.text) {
            case 'Import': select(`#${this.spreadsheetObj!.element.id}_fileUpload`, this.spreadsheetObj!.element).click();
                break;
            case 'XLSX': this.spreadsheetObj!.save({ saveType: 'Xlsx' });
                break;
            case 'XLS': this.spreadsheetObj!.save({ saveType: 'Xls' });
                break;
            case 'CSV': this.spreadsheetObj!.save({ saveType: 'Csv' });
                break;
      }
    }
}


