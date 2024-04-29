import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { AutoCompleteModule ,ComboBoxModule} from '@syncfusion/ej2-angular-dropdowns';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        FormsModule,
        FormsModule,
        TextBoxModule,ToolbarModule,
        MultiSelectModule,
        AutoCompleteModule,
         DropDownListModule,
         ComboBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService, SortService, PageService]
})
export class AppModule { }
