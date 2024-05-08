import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component } from '@angular/core';
import { ComboBoxComponent, VirtualScroll } from '@syncfusion/ej2-angular-dropdowns';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

ComboBoxComponent.Inject(VirtualScroll);

@Component({
imports: [
        FormsModule,ComboBoxModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the virtual-scroll url path
    templateUrl: 'virtual-scroll.html'
})
export class AppComponent {

    // bind the DataManager instance to dataSource property
    public customerData: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/angular/production/api/Orders',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    // maps the appropriate column to fields property
    public customerField: { [key: string]: string } = { text: 'OrderID', value: 'OrderID' };
    // set the placeholder to AutoComplete input
    public waterMark: string = 'OrderId';
}


