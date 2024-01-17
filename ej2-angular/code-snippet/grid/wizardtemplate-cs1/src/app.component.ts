import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems, GridComponent, DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';
import { Dialog } from '@syncfusion/ej2-popups';

@Component({
  selector: 'app-root',
  templateUrl: `wizardtemplate.html`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public shipCountryDistinctData?: object;
  public shipCityDistinctData: object[] = [];
  public currentTab = 0;
  @ViewChild('grid') grid?: GridComponent;
  @ViewChild('orderForm') orderForm?: FormGroup;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Add', 'Edit', 'Delete'];
    this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
    this.shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);

  }

  actionComplete(args: DialogEditEventArgs) {
    if ((args.requestType === 'beginEdit') || (args.requestType === 'add')) {
      (args as any).form.ej2_instances[0].rules = {}; // Disable default validation.
      (args.dialog as any).element.classList.add('hide-default-buttons');
      // Set initial Focus
      if (args.requestType === 'beginEdit') {
        (args?.form?.elements.namedItem('CustomerID') as HTMLInputElement).focus();
      }
      this.currentTab = 0;
    }
  }
  saveBtn() {
    if (this.orderForm?.valid) {
      (this.grid as GridComponent).endEdit();
    }
  }

  nextBtn() {
    if (this.orderForm?.valid) {
      this.currentTab++;
      this.removeFocusFromButton()
    }
  }

  previousBtn() {
    if (this.orderForm?.valid) {
      this.currentTab--;
      this.removeFocusFromButton()
    }
  }

  removeFocusFromButton() {
    const nextButton = document.getElementById('btn') as HTMLButtonElement;
    if (nextButton) {
      nextButton.blur();
    }
  }
}
