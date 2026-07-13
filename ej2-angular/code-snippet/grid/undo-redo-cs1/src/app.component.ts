import { inventoryStoreData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, GridComponent, GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule],
  providers: [EditService, ToolbarService, PageService],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  @ViewChild('normalgrid')
  public grid?: GridComponent;
  public inventoryStoreData?: Object[];
  public editSettings?: Object;
  public toolbar?: string[];
  public idRules?: Object;
  public unitPriceRules?: Object;
  public numericEditParams?: Object;
  public editparams?: Object;

  public ngOnInit(): void {
    this.inventoryStoreData = inventoryStoreData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Batch',
      enableUndoRedo: true
    };
    this.toolbar = ['Add', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
    this.idRules = { required: true, number: true };
    this.unitPriceRules = { required: true, min: 1 };
    this.numericEditParams = { params: { showSpinButton: false } };
    this.editparams = { params: { popupHeight: '300px' } };
  }
}
