import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        TreeGridAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService, SelectionService, RowDDService]
})
export class AppModule { }
