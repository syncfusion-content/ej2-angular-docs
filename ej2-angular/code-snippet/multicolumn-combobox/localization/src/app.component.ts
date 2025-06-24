import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiColumnComboBoxModule } from '@syncfusion/ej2-angular-multicolumn-combobox'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, HostListener, ViewChild } from '@angular/core';
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-angular-multicolumn-combobox';
import { L10n } from '@syncfusion/ej2-base';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, MultiColumnComboBoxModule, ButtonModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiColumn ComboBox component with change event
    template: `<ejs-multicolumncombobox id='multicolumn' #multicolumn [dataSource]='[]' [placeholder]='waterMark' [locale]='locale'>
                  <e-columns>
                    <e-column field='ContactName' header='Contact Name' width='90'></e-column>
                    <e-column field='CustomerID' header='Customer ID' width='120'></e-column>
                  </e-columns>
              </ejs-multicolumncombobox>`
})
export class AppComponent {
  public waterMark: string = 'Sélectionnez un client';
  //set culture to MultiColumn ComboBox component
  public locale: string = 'fr-BE';
  ngOnInit(): void {
      L10n.load({
          'fr-BE': {
          'multicolumncombobox': {
                  'noRecordsTemplate': "Aucun enregistrement trouvé",
              }
          }
      });
  }
}


