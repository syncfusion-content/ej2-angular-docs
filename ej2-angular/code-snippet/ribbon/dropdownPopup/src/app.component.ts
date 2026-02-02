import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { Component } from "@angular/core";
import { RibbonDropDownSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from "@syncfusion/ej2-angular-splitbuttons";


@Component({
  imports: [ RibbonModule, ListViewModule ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
  public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions, createPopupOnClick: true };
};