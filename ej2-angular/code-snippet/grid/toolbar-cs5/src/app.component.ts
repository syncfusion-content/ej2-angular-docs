import { data } from './datasource';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AutoCompleteAllModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, EditSettingsModel, GridComponent, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule, AutoCompleteAllModule],
  providers: [ToolbarService, EditService],
  template: `
    <ejs-grid #grid id="grid" [dataSource]="data" height="270px" [toolbar]="toolbar" [editSettings]="editSettings">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90" isPrimaryKey="true"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="100"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="120"></e-column>
      </e-columns>

      <ng-template #customToolbarTemplate>
        <ejs-autocomplete id="shipCityValue" [dataSource]="dropDownData" placeholder="Search ShipCity" (change)="onChange($event)" >
        </ejs-autocomplete>
      </ng-template>
  </ejs-grid>`
})

export class AppComponent implements OnInit {
  @ViewChild('customToolbarTemplate', { static: true }) public customToolbarTemplate!: TemplateRef<any>;
  @ViewChild('grid') public grid?: GridComponent;
  public data?: object[];
  public toolbar?: (ToolbarItems | object)[];
  public editSettings?: EditSettingsModel;
  public dropDownData: string[] = [
    'Reims',
    'Münster',
    'Rio de Janeiro',
    'Lyon',
    'Charleroi',
    'Bern',
    'Genève',
    'San Cristóbal',
    'Graz',
    'México D.F.',
    'Albuquerque',
    'Köln'
  ];

  ngOnInit(): void {
    this.data = data;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal'};
    this.toolbar = [
      'Add',
      'Edit',
      'Delete',
      {
        template: this.customToolbarTemplate,
        tooltipText: 'Custom component autocomplete',
        align: 'Left',
      },
    ];
  }

  onChange(event: ChangeEventArgs): void {
    const selectedCity = (event.value as string );
    // perform search action for ShipCity column.
    (this.grid as GridComponent).search(selectedCity);
  }
}
