import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService,EditService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { CheckBoxModule} from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        CheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService,EditService]
})
export class AppModule { }