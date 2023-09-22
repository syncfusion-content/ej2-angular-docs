import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, FilterService, PageService, GridAllModule} from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridAllModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
    bootstrap: [AppComponent],
    providers: [FilterService, PageService,CheckBoxSelectionService]
})
export class AppModule { }
